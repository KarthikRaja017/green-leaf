import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message, notification } from 'antd';
// import token from '@/utils/token';
import { buildAuthorization } from './comman';
import token from './pages/utils/token';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const getRequestHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Accept-Language': 'en-US,en;',
    // Authorization: buildAuthorization(),
    // Upappversionname: G_APP_VERSION_NAME,
    // Upappversionnumber: G_APP_VERSION_NUMBER,
    // Upappversioncode: G_APP_VERSION_CODE,
    // Upappplatformcode: G_APP_PLATFORM_CODE,
    // Upappplatformby: G_APP_PLATFORM_BY,
    // Upappplatformto: G_APP_PLATFORM_TO,
    // Upappsecurescreen: G_APP_IS_SECURE_SCREEN,
  };

  if (buildAuthorization()) {
    headers.Authorization = buildAuthorization();
  }
  return headers;
};
export const errorConfig: RequestConfig = {
  // Error handling： umi@3's error handling scheme。
  errorConfig: {
    // throw error
    errorThrower: (res) => {
      const { success, data, errorCode, errorMessage, showType } =
        res as unknown as ResponseStructure;
      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // throw automatic error
      }
    },
    // error reception and handling
    errorHandler: (error: any, opts: any) => {
      // if (opts?.skipErrorHandler) throw error;
      // if (error.name === 'BizError') {
      //   const errorInfo: ResponseStructure | undefined = error.info;
      //   if (errorInfo) {
      //     const { errorMessage, errorCode } = errorInfo;
      //     switch (errorInfo.showType) {
      //       case ErrorShowType.SILENT:
      //         // do nothing
      //         break;
      //       case ErrorShowType.WARN_MESSAGE:
      //         message.warning(errorMessage);
      //         break;
      //       case ErrorShowType.ERROR_MESSAGE:
      //         message.error(errorMessage);
      //         break;
      //       case ErrorShowType.NOTIFICATION:
      //         notification.open({
      //           description: errorMessage,
      //           message: errorCode,
      //         });
      //         break;
      //       case ErrorShowType.REDIRECT:
      //         // TODO: redirect
      //         break;
      //       default:
      //         message.error(errorMessage);
      //     }
      //   }
      // } else if (error.response) {
      //   message.error(`Response status:${error.response.status}`);
      // } else if (error.request) {
      //   message.error('None response! Please retry.');
      // } else {
      //   message.error('Request error, please retry.');
      // }

      const { response } = error;
      if (!response?.data) return error;

      const { status, data } = response;
      if (status === 401 && data && data.status !== 1) {
        notification[data?.cls || 'error']({
          message: data.msg,
          description: data?.detailedMessage || '',
        });

        const { payload } = data;
        if (payload?.logout) {
          token.removeAll();
          // removeAuthority();
        }

        if (payload?.redirectUrl)
          setTimeout(() => (window.location.href = data.payload.redirectUrl), 1000);
      }

      return error;
      //       notification[data?.class || 'error']({
      //         message: data.message,
      //         description: data?.detailedMessage || '',
      //       });

      //       const { payload } = data;
      //       if (payload?.logout) {
      //         token.removeAll();
      //         // removeAuthority();
      //       }

      //       if (payload?.redirectUrl)
      //         setTimeout(() => (window.location.href = data.payload.redirectUrl), 1000);
    },
  },

  // request interceptor
  requestInterceptors: [
    (config: RequestOptions) => {
      // Intercept request configuration，Perform personalized processing。
      const { pathname, search } = window.location;

      let rurl = pathname;
      if (search) rurl = `${rurl}${search}`;

      // const url = config?.url?.concat('?token = 123');
      return {
        ...config,
        headers: {
          ...getRequestHeaders(),
          ...config.headers,
          'Content-Type': 'application/json',
          rurl,
        },
      };
    },
  ],

  // response interceptor
  responseInterceptors: [
    (response) => {
      // const configUrl = response?.config?.url;

      // const url = '/server/api/vendor/';
      // const currentUserUrl = '/server/api/currentUser';

      // if (configUrl === currentUserUrl) {
      //   if (!configUrl.includes(url)) {
      //     const status = response?.data?.status;
      //     if (status === 0) {
      //       window.location.href = '/user/login';
      //     }
      //   }
      // }

      // const decodedResponse = decodeEncodedData(response?.data);
      // response.data = decodedResponse
      // intercept response data, perform personalized processing
      // const { data } = response as unknown as ResponseStructure;

      // if (data?.success === false) {
      //   message.error('');
      // }
      return response;
    },
  ],
};

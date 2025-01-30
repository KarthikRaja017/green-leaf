import { currentUser as queryCurrentUser } from '@/services/api';
import {
  PageLoading,
  SettingDrawer,
  type Settings as LayoutSettings,
} from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
// import Footer from './components/footer';
import { errorConfig } from './requestErrorConfig';
// import { AvatarDropdown, AvatarName } from './components/rightContent/avatarDropdown';

import { LinkOutlined } from '@ant-design/icons';
// import { Question } from './components/rightContent';
const isDev = process.env.NODE_ENV === 'development';

const loginPath = '/main';
// const loginPath = '/menu';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    const { status, payload } = await queryCurrentUser({
      skipErrorHandler: true,
    });

    if (!status || status !== 1) {
      return undefined;  
    }
    return payload;  
  };

  const ebToken = localStorage.getItem('ebtoken');
  
  if (!ebToken) {
    history.push('/main');
    return {};
  }

  const currentUser = await fetchUserInfo();

  if (!currentUser) {
    history.push('/main');
    return {};
  }

  const settings = { ...defaultSettings, title: 'OAT' };

  return {
    fetchUserInfo,
    currentUser,
    settings,
  };
}


export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  const { location } = history;

  const ebToken = localStorage.getItem('ebtoken'); 
  const accessToken = initialState?.currentUser?.accessToken; 

  if ((!initialState?.currentUser || ebToken !== accessToken) && location.pathname !== loginPath) {
    history.push(loginPath);
  }

  return {
    // actionsRender: () => [<Question key="doc" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    // footerRender: () => <Footer />,
    onPageChange: () => {
      const ebToken = localStorage.getItem('ebtoken');
      const accessToken = initialState?.currentUser?.accessToken;

      if ((!initialState?.currentUser || ebToken !== accessToken) && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 */
export const request = {
  ...errorConfig,
};

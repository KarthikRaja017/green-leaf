import { request } from "@umijs/max";

export async function currentUser(options?: { [key: string]: any }) {
    return request<{
      data: API.CurrentUser;
    }>('/server/api/currentUser', {
      method: 'GET',
    //   ...(options || {}),
    });
  }
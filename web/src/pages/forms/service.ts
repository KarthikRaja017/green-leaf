import { request } from '@umijs/max';

export const createAccount = async (params) => {
  return request('/server/api/create-Account', {
    method: 'POST',
    data: params,
  });
};
export const loginAccount = async (params) => {
  return request('/server/api/login-Account', {
    method: 'POST',
    data: params,
  });
};

import { request } from "@umijs/max";

export async function profileSetup(params: any) {
    return request(`/server/api/profile/setup`, {
      method: 'POST',
      data: params,
    });
  }
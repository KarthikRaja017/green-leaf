import { request } from "@umijs/max";

export async function generateOtp(params: any) {
    return request(`/server/api/request/otp`, {
      method: 'POST',
      data: params,
    });
  }
export async function otpVerification(params: any) {
    return request(`/server/api/verification/otp`, {
      method: 'POST',
      data: params,
    });
  }
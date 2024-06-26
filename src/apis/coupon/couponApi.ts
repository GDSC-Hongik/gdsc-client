import apiClient from '@/apis';
import { CouponResponse } from './couponType';

const couponApi = {
  GET_COUPONS_ME: async (): Promise<CouponResponse[]> => {
    const response = await apiClient.get(`/onboarding/coupons/issued/me`);
    return response.data;
  }
};

export default couponApi;

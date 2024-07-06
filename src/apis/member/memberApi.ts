import apiClient from '@/apis';
import { MemberInfoResponse } from '@/apis/member/memberType';

const memberApi = {
  GET_DASHBOARD: async (): Promise<MemberInfoResponse> => {
    const response = await apiClient.get(`/onboarding/members/me/dashboard`);
    return response.data;
  }
};

export default memberApi;

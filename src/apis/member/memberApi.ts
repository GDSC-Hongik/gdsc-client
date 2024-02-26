import apiClient from '@/apis';
import { MemberInfoResponse } from '@/apis/member/memberType';

const memberApi = {
  GET_MEMBERS_ME: async (): Promise<MemberInfoResponse> => {
    const response = await apiClient.get(`/onboarding/members/me`);
    return response.data;
  }
};

export default memberApi;

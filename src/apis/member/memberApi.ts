import apiClient from '@/apis';
import { MemberInfoResponse } from '@/apis/member/memberType';

const memberApi = {
  GET_DASHBOARD: async (): Promise<MemberInfoResponse> => {
    const response = await apiClient.get(`/onboarding/members/me/dashboard`);
    return response.data;
  },
  JOIN_MEMBERSHIP: async (recruitmentRoundId: number): Promise<void> => {
    const response = await apiClient.post(
      `/membership?recruitmentRoundId=${recruitmentRoundId}`
    );
    return response.data;
  }
};

export default memberApi;

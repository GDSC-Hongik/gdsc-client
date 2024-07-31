import apiClient from '@/apis';
import { Status } from '@/types/status';

const verifyStudentApi = {
  GET_STUDENT_EMAIL_IS_VERIFIED: async (): Promise<{ univStatus: Status }> => {
    const response = await apiClient.get(
      `/onboarding/members/me/univ-verification`
    );
    return response.data;
  },
  SEND_STUDENT_EMAIL: async (univEmail: string) => {
    const response = await apiClient.post(`/onboarding/send-verify-email`, {
      univEmail
    });
    return response.data;
  },
  VERIFY_STUDENT_EMAIL: async (token: string) => {
    const response = await apiClient.patch(`/onboarding/verify-email`, {
      token: token
    });
    return response.data;
  }
};

export default verifyStudentApi;

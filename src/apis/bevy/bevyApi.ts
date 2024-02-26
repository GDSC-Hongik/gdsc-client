import apiClient from '@/apis';

const bevyApi = {
  POST_LINK_BEVY: async () => {
    const response = await apiClient.post(`/onboarding/members/me/link-bevy`);
    return response.data;
  }
};

export default bevyApi;

import apiClient from '@/apis';

import { UserBasicInfo } from '@/types/user';

const createBasicInfoApi = {
  BASIC_INFO: async (
    payload: Omit<UserBasicInfo, 'discordName' | 'nickname' | 'discordUsername'>
  ) => {
    const response = await apiClient.post(
      '/onboarding/members/me/basic-info',
      payload
    );
    return response.data;
  }
};

export default createBasicInfoApi;

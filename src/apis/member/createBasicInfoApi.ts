import apiClient from '@/apis';

import { MemberBasicInfoType } from './memberType';

const createBasicInfoApi = {
  BASIC_INFO: async (payload: MemberBasicInfoType) => {
    const response = await apiClient.post(
      '/onboarding/members/me/basic-info',
      payload
    );
    return response.data;
  }
};

export default createBasicInfoApi;

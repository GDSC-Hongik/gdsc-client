import apiClient from '@/apis';

const memberApi = {
  POST_PAYMENTS_CONFIRM: async (): Promise<any> => {
    const response = await apiClient.get(`/onboarding/members/me`);
    return response.data;
  }
};

export default memberApi;

  //     const response = await fetch(
  //       'https://api.tosspayments.com/v1/payments/confirm',
  //       {
  //         method: 'POST',
  //         headers: {
  //           Authorization: encryptedSecretKey,
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(requestData)
  //       }
  //     );

  //     const json = await response.json();
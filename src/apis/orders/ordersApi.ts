import apiClient from '@/apis';
import { OrderRequest, OrderCompleteRequest } from './ordersType';

const ordersApi = {
  POST_PREV_ORDER: async (order: OrderRequest) => {
    const response = await apiClient.post(`/onboarding/orders`, order);
    // Todo: error 로직 추가하기
    return response.data;
  },
  POST_ORDER: async (order: OrderCompleteRequest) => {
    const response = await apiClient.post(`/onboarding/orders/complete`, order);
    // Todo: error 로직 추가하기
    return response.data;
  }
};

export default ordersApi;

import apiClient from '@/apis';
import { OrderRequest, OrderCompleteRequest } from './ordersType';

const ordersApi = {
  POST_PREV_ORDER: async (order: OrderRequest) => {
    const response = await apiClient.post(`/onboarding/orders`, order);
    return response.data;
  },
  POST_PREV_FREE_ORDER: async (order: OrderRequest) => {
    const response = await apiClient.post(`/onboarding/orders/free`, order);
    return response.data;
  },
  POST_ORDER: async (order: OrderCompleteRequest) => {
    const response = await apiClient.post(`/onboarding/orders/complete`, order);
    return response.data;
  }
};

export default ordersApi;

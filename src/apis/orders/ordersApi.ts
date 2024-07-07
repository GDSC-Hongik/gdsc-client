import apiClient from '@/apis';
import { OrderRequest } from './ordersType';

const ordersApi = {
  POST_ORDER: async (): Promise<OrderRequest> => {
    const response = await apiClient.post(`/onboarding/orders`);
    return response.data;
  }
};

export default ordersApi;

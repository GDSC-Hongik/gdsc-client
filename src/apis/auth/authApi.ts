import apiClient from '..';

const authApi = {
  LOGOUT: async () => {
    const response = await apiClient.get(`/auth/logout`);
    return response.data;
  }
};
export default authApi;

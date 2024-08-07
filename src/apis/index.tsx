import { BASE_URL, DEV_AUTH_TOKEN } from '@/constants/environment';
import axios from 'axios';
import AuthAccessGuard from '@/components/auth/guard/AuthAccessGuard';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      sessionStorage.setItem('isLogin', 'false');
      return <AuthAccessGuard />;
    }
    return Promise.reject(error);
  }
);

export function setAuthHeader() {
  if (DEV_AUTH_TOKEN) {
    apiClient.defaults.headers.common['Authorization'] = DEV_AUTH_TOKEN;
  }
}

setAuthHeader();

export default apiClient;

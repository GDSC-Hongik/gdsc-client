import { BASE_URL, DEV_AUTH_TOKEN } from '@/constants/environment';
import useAuthToken from '@/hooks/auth/useAuthToken';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

apiClient.defaults.headers.common['Authorization'] = DEV_AUTH_TOKEN
  ? `${DEV_AUTH_TOKEN}`
  : `Bearer ${useAuthToken().accessToken}`;

export default apiClient;

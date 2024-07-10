import { BASE_URL } from '@/constants/environment';
import useAuthToken from '@/hooks/auth/useAuthToken';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

apiClient.defaults.headers.common['Authorization'] =
  `Bearer ${useAuthToken().accessToken}`;

export default apiClient;

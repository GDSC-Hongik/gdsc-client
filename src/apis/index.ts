import { BASE_URL } from '@/constants/environment';
import { getCookie } from '@/utils/auth';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

apiClient.defaults.headers.common['Authorization'] =
  `Bearer ${getCookie('accessToken')}`;

export default apiClient;

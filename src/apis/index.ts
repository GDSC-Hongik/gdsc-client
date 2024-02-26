import { BASE_URL } from '@/constants/environment';
import { getToken } from '@/utils/auth';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

apiClient.defaults.headers.common['Authorization'] =
  `Bearer ${getToken('access')}`;

export default apiClient;

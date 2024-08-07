import { BASE_URL, DEV_AUTH_TOKEN } from '@/constants/environment';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export function setAuthHeader() {
  if (DEV_AUTH_TOKEN) {
    apiClient.defaults.headers.common['Authorization'] = DEV_AUTH_TOKEN;
  }
}

setAuthHeader();

export default apiClient;

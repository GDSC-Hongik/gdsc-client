import { BASE_URL, DEV_AUTH_TOKEN } from '@/constants/environment';
import { getCookie } from '@/utils/auth';
import axios from 'axios';
import { CookieKeys } from '@/utils/storage/key';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export function setAuthHeader() {
  const accessToken = getCookie(CookieKeys.AccessToken);

  if (DEV_AUTH_TOKEN) {
    apiClient.defaults.headers.common['Authorization'] = DEV_AUTH_TOKEN;
  } else {
    apiClient.defaults.headers.common['Authorization'] = accessToken
      ? `Bearer ${accessToken}`
      : '';
  }
}

setAuthHeader();

export default apiClient;

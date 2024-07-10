import { BASE_URL } from '@/constants/environment';
import useAuthToken from '@/hooks/auth/useAuthToken';
import axios from 'axios';

const tokenn = `Bearer eyJhbGciOiJIUzM4NCJ9.eyJpc3MiOiJnZHNjLWhvbmdpayIsInN1YiI6IjI5NCIsImlhdCI6MTcwOTAzMzUxNywiZXhwIjoxODA5MDQwNzE3LCJyb2xlIjoiUkVHVUxBUiJ9.63RmsXULrgf2Nh0vU4IsJRyeVB_93yo34-U3hTsMm6eTANik5iiBHXBYd86YyY_v`;
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

apiClient.defaults.headers.common['Authorization'] = `${tokenn}`;

export default apiClient;

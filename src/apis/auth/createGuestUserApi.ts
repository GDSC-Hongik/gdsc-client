import apiClient from '@/apis';
import type { GuestUser } from '@/types/user';

export default async function createGuestUserApi(user: GuestUser) {
  return (await apiClient.post(`/onboarding/members`, user)).data;
}

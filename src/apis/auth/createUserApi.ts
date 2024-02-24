import apiClient from '@/apis';
import type { GuestUser } from '@/types/user';

export default async function createUserApi(user: GuestUser) {
  return (await apiClient.post(`/onboarding/members`, { user })).data;
}

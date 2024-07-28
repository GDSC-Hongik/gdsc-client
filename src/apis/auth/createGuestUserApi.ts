import apiClient from '@/apis';
import type { User } from '@/types/user';

export default async function createGuestUserApi(user: User) {
  return (await apiClient.post(`/onboarding/members`, user)).data; //이거 안쓰는 거 같은데
}

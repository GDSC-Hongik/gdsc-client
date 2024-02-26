import apiClient from '@/apis';
import { Status } from '@/types/status';

export default async function verifyStudentApi(): Promise<{
  univStatus: Status;
}> {
  return (await apiClient.get(`/onboarding/members/me/univ-verification`)).data;
}

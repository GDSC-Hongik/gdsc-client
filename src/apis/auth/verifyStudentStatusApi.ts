import apiClient from '@/apis';
import { Status } from '@/types/status';

export default async function verifyStudentStatusApi(univStatus: Status) {
  return (
    await apiClient.post(`/onboarding/members/me/univ-verification`, {
      univStatus
    })
  ).data;
}

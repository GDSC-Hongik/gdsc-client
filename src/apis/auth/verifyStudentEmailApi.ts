import apiClient from '@/apis';

export default async function verifyStudentEmailApi(univEmail: string) {
  return (
    await apiClient.post(`/onboarding/send-verify-email`, {
      univEmail
    })
  ).data;
}

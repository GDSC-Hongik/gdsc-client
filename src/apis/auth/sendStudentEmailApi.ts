import apiClient from '@/apis';

export default async function sendStudentEmailApi(univEmail: string) {
  return (await apiClient.post(`/onboarding/send-verify-email`, { univEmail }))
    .data;
}

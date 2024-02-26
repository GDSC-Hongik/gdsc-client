import apiClient from '@/apis';

export default async function verifyStudentEmailApi(token: string) {
  return (await apiClient.get(`/onboarding/verify-email?token=${token}`)).data;
}

import apiClient from '@/apis';

//TODO: 객체로 바꾸기
export default async function verifyStudentEmailApi(token: string) {
  return (await apiClient.get(`/onboarding/verify-email?token=${token}`)).data;
}

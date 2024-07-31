import { verifyStudentApi } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export default function useVerifyStudentEmail() {
  const {
    mutate: verifyStudentMail,
    isSuccess,
    isPending
  } = useMutation({
    mutationFn: verifyStudentApi.VERIFY_STUDENT_EMAIL
  });

  return { verifyStudentMail, isSuccess, isPending };
}

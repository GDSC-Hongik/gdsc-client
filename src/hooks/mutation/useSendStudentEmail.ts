import { verifyStudentApi } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export default function useSendStudentEmail() {
  const { mutate: sendStudentEmail, ...rest } = useMutation({
    mutationFn: verifyStudentApi.SEND_STUDENT_EMAIL
  });

  return { sendStudentEmail, ...rest };
}

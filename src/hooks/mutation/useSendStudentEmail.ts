import { sendStudentEmailApi } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export default function useSendStudentEmail() {
  const { mutate: sendStudentEmail, ...rest } = useMutation({
    mutationFn: sendStudentEmailApi
  });

  return { sendStudentEmail, ...rest };
}

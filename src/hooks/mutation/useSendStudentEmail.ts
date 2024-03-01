import { sendStudentEmailApi } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export default function useSendStudentEmail() {
  const { mutate: sendStudentEmail, ...rest } = useMutation({
    mutationFn: sendStudentEmailApi,

    onError: (error: any) => {
      toast(error.response?.data?.errorMessage);
    }
  });

  return { sendStudentEmail, ...rest };
}

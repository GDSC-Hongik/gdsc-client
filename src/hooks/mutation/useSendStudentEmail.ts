import { sendStudentEmailApi } from '@/apis/auth';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function useSendStudentEmail() {
  const navigation = useNavigate();
  const { mutate: sendStudentEmail, ...rest } = useMutation({
    mutationFn: sendStudentEmailApi,
    onSuccess: () => {
      navigation(
        RoutePath.AuthenticationProcess2_UpdatedStudentVerification,
        {}
      );
    },
    onError: (error: AxiosError) => {
      toast(error?.message);
    }
  });

  return { sendStudentEmail, ...rest };
}

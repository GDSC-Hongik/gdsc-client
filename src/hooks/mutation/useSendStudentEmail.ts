import { sendStudentEmailApi } from '@/apis/auth';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useSendStudentEmail() {
  const navigation = useNavigate();
  const { mutate: sendStudentEmail, ...rest } = useMutation({
    mutationFn: sendStudentEmailApi,
    onSuccess: () => {
      navigation(
        RoutePath.AuthenticationProcess2_UpdatedStudentVerification,
        {}
      );
    }
  });

  return { sendStudentEmail, ...rest };
}

import { verifyStudentStatusApi } from '@/apis/auth';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useVerifyStudent() {
  const navigation = useNavigate();

  const { mutate: verifyStudent, ...rest } = useMutation({
    mutationFn: verifyStudentStatusApi,
    onSuccess: () => {
      navigation(RoutePath.AuthenticationProcess3_Signup, { replace: true });
    }
  });

  return { verifyStudent, ...rest };
}

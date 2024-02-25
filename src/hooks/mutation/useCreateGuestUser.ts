import { createGuestUserApi } from '@/apis/auth';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateGuestUser() {
  const navigation = useNavigate();

  const { mutate: createGuestUser, ...rest } = useMutation({
    mutationFn: createGuestUserApi,
    onSuccess: () => {
      navigation(RoutePath.MyPage, { replace: true });
    }
  });

  return { createGuestUser, ...rest };
}

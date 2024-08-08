import { useMutation } from '@tanstack/react-query';
import authApi from '@/apis/auth/authApi';
import { useNavigate } from 'react-router-dom';
import RoutePath from '@/routes/routePath';
import { toast } from 'react-toastify';

export default function useLogout() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authApi.LOGOUT,
    onSuccess: () => {
      sessionStorage.clear();
      navigate(RoutePath.Home);
      location.reload();
    },
    onError: () => {
      toast.error('로그아웃에 실패했어요.');
    }
  });

  return mutation;
}

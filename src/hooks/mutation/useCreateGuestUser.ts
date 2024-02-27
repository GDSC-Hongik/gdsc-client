import { createGuestUserApi } from '@/apis/auth';
import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function useCreateGuestUser() {
  const navigation = useNavigate();
  const { updateLandingStatue } = useLandingStatus();
  const { mutate: createGuestUser, ...rest } = useMutation({
    mutationFn: createGuestUserApi,
    onSuccess: () => {
      updateLandingStatue(LandingStatus.MyPage);
      navigation(RoutePath.MyPage, { replace: true });
    },
    onError: (error: AxiosError) => {
      toast(error?.message);
    }
  });

  return { createGuestUser, ...rest };
}

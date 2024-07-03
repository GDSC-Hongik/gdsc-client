import { createGuestUserApi } from '@/apis/auth';
import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateGuestUser() {
  const navigation = useNavigate();
  const { updateLandingStatue } = useLandingStatus();
  const { mutate: createGuestUser, ...rest } = useMutation({
    mutationFn: createGuestUserApi,
    onSuccess: () => {
      updateLandingStatue(LandingStatus.Dashboard);
      navigation(RoutePath.Dashboard, { replace: true });
    }
  });

  return { createGuestUser, ...rest };
}

import useAuthToken from '@/hooks/auth/useAuthToken';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { getAuthRedirectPath } from '@/utils/auth';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const AuthServerRedirectNavigate = () => {
  const [searchParams] = useSearchParams();
  const { landingStatus: originLandingStatus, updateLandingStatue } =
    useLandingStatus();
  const { setToken } = useAuthToken();
  const landingStatus = searchParams.get('landing-status');
  const accessToken = searchParams.get('access');
  const refreshToken = searchParams.get('refresh');

  useEffect(() => {
    if (originLandingStatus !== landingStatus) {
      updateLandingStatue(landingStatus);
    }
    setToken({ type: 'access', value: accessToken });
    setToken({ type: 'refresh', value: refreshToken });
    window.location.href = getAuthRedirectPath(landingStatus);
  }, [originLandingStatus, landingStatus]);

  return <></>;
};

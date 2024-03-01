import useAuthToken from '@/hooks/auth/useAuthToken';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { getAuthRedirectPath } from '@/utils/auth';
import { CookieKeys } from '@/utils/storage/key';
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

    setToken({ type: CookieKeys.AccessToken, value: accessToken });
    setToken({ type: CookieKeys.RefreshToken, value: refreshToken });

    window.location.href = getAuthRedirectPath(landingStatus);
  }, [originLandingStatus, accessToken, refreshToken, landingStatus]);

  return null;
};

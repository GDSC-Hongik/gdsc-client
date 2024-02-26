import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { getAuthRedirectPath } from '@/utils/auth';
import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

export const AuthServerRedirectNavigate = () => {
  const [searchParams] = useSearchParams();
  const { landingStatus: originLandingStatus, updateLandingStatue } =
    useLandingStatus();
  const landingStatus = searchParams.get('landing-status');

  useEffect(() => {
    if (originLandingStatus !== landingStatus) {
      updateLandingStatue(landingStatus);
    }
  }, [originLandingStatus, landingStatus]);

  return <Navigate to={getAuthRedirectPath(landingStatus)} replace={true} />;
};

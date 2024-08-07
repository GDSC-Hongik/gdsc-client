import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { Outlet } from 'react-router-dom';

export default function OnboardingNotOpenedAccessGuard() {
  const { landingStatus } = useLandingStatus();

  if (landingStatus !== LandingStatus.OnboardingNotOpened) {
    return <></>;
    // return <Navigate to={getAuthRedirectPath(landingStatus)} />;
  }

  return <Outlet />;
}

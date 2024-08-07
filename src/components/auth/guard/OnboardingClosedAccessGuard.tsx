import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { Outlet } from 'react-router-dom';

export default function OnboardingClosedAccessGuard() {
  const { landingStatus } = useLandingStatus();

  if (landingStatus !== LandingStatus.OnboardingClosed) {
    return {};
    // return <Navigate to={getAuthRedirectPath(landingStatus)} />;
  }

  return <Outlet />;
}

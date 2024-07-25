import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { getAuthRedirectPath } from '@/utils/auth';
import { Navigate, Outlet } from 'react-router-dom';

export default function OnboardingClosedAccessGuard() {
  const { landingStatus } = useLandingStatus();

  if (landingStatus !== LandingStatus.OnboardingClosed) {
    return <Navigate to={getAuthRedirectPath(landingStatus)} />;
  }

  return <Outlet />;
}

import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { Outlet } from 'react-router-dom';

export default function MypageAccessGuard() {
  const { landingStatus } = useLandingStatus();

  if (landingStatus !== LandingStatus.Dashboard) {
    return {};
    // return <Navigate to={getAuthRedirectPath(landingStatus)} />;
  }

  return <Outlet />;
}

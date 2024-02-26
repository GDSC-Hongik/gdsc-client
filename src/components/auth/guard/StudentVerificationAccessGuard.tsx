import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { Navigate, Outlet } from 'react-router-dom';

export default function StudentVerificationAccessGuard() {
  const { landingStatus } = useLandingStatus();

  if (landingStatus !== LandingStatus.StudentAuthentication) {
    return <Navigate to={RoutePath.Index} />;
  }

  return <Outlet />;
}

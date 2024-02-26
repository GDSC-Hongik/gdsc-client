import LandingStatus from '@/constants/landingStatus';
import { Navigate, Outlet } from 'react-router-dom';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';

export default function SignupAccessGuard() {
  const { landingStatus } = useLandingStatus();

  if (landingStatus !== LandingStatus.Signup) {
    return <Navigate to={RoutePath.Index} />;
  }

  return <Outlet />;
}

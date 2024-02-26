import LandingStatus from '@/constants/landingStatus';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { Navigate, Outlet } from 'react-router-dom';

export default function MypageAccessGuard() {
  const { landingStatus } = useLandingStatus();

  // if (landingStatus !== LandingStatus.MyPage) {
  //   return <Navigate to={RoutePath.Index} />;
  // }

  return <Outlet />;
}

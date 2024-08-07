import { Outlet } from 'react-router-dom';

export default function OnboardingClosedAccessGuard() {
  return <></>;
  // return <Navigate to={getAuthRedirectPath(landingStatus)} />;

  return <Outlet />;
}

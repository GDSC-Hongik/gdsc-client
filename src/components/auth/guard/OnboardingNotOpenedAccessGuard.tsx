import { Outlet } from 'react-router-dom';

export default function OnboardingNotOpenedAccessGuard() {
  return <></>;
  // return <Navigate to={getAuthRedirectPath(landingStatus)} />;

  return <Outlet />;
}

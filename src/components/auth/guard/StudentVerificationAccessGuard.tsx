import { Outlet } from 'react-router-dom';

export default function StudentVerificationAccessGuard() {
  // const { landingStatus } = useLandingStatus();

  // if (landingStatus !== LandingStatus.StudentAuthentication) {
  //   return <Navigate to={getAuthRedirectPath(landingStatus)} />;
  // }

  return <Outlet />;
}

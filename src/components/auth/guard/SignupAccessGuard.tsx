import { Outlet } from 'react-router-dom';

//deprecated: 추후 삭제 필요한 파일임
export default function SignupAccessGuard() {
  //TODO: 추후 보안 정책에 따라 수정 필요
  // if (landingStatus !== LandingStatus.Signup) {
  //   return <Navigate to={getAuthRedirectPath(landingStatus)} />;
  // }

  return <Outlet />;
}

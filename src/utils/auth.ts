import LandingStatus from '@/constants/landingStatus';
import RoutePath from '@/routes/routePath';

/**
 * 깃허브 로그인 성공 시 header에서 추출한 landing status 통해 이동할 페이지 반환
 */
export function getLandingRoutePath(landingStatus: LandingStatus) {
  switch (landingStatus) {
    case LandingStatus.TO_STUDENT_AUTHENTICATION:
      return RoutePath.AuthenticationProcess2_StudentVerification;
    case LandingStatus.TO_REGISTRATION:
      return RoutePath.AuthenticationProcess3_Signup;
    case LandingStatus.TO_DASHBOARD:
      return RoutePath.MyPage;
    default:
      return RoutePath.Home;
  }
}

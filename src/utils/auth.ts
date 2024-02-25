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

/**
 * 사용자의 인증 상태를 확인
 * @returns {boolean} 사용자의 인증 상태 (true: 인증됨, false: 인증되지 않음)
 */
export function checkAuthentication(): boolean {
  const accessToken: string | null = getCookie('accessToken');
  const refreshToken: string | null = getCookie('refreshToken');

  return Boolean(accessToken) && Boolean(refreshToken);
}

/**
 * 쿠키 이름을 기반으로 쿠키 값을 가져옴
 * @param {string} name 가져올 쿠키의 이름
 * @returns {string|null} 쿠키 값 (존재하지 않을 경우 null 반환)
 */
function getCookie(name: string): string | null {
  const cookieString: string = document.cookie;
  const cookies: string[] = cookieString.split(';');

  for (const cookie of cookies) {
    const [cookieName, value] = cookie.trim().split('=');
    if (cookieName === name) {
      return value;
    }
  }

  return null;
}

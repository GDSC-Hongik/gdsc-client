import LandingStatus from '@/constants/landingStatus';
import useAuthToken from '@/hooks/auth/useAuthToken';
import RoutePath from '@/routes/routePath';

/**
 * 깃허브 로그인 성공 시 header에서 추출한 landing status 통해 이동할 페이지 반환
 */
export function getAuthRedirectPath(landingStatus: string | null | undefined) {
  switch (landingStatus) {
    case LandingStatus.StudentAuthentication:
      return RoutePath.AuthenticationProcess2_StudentVerification;
    case LandingStatus.Signup:
      return RoutePath.AuthenticationProcess3_Signup;
    case LandingStatus.MyPage:
      return RoutePath.MyPage;
    default:
      return RoutePath.AuthenticationProcess1_GithubSignin;
  }
}

/**
 * 쿠키 이름을 기반으로 쿠키 값을 가져옴
 * @param {string} name 가져올 쿠키의 이름
 * @returns {string} 쿠키 값 (존재하지 않을 경우 빈 스트링('') 반환)
 */
export function getCookie(name: string): string {
  const cookieString: string = document.cookie;
  const cookies: string[] = cookieString.split(';');

  for (const cookie of cookies) {
    const [cookieName, value] = cookie.trim().split('=');
    if (cookieName === name) {
      return value;
    }
  }

  return '';
}

export function setCookie({
  key,
  value,
  days = 1
}: {
  key: string;
  value: string;
  days?: number;
}) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue =
    encodeURIComponent(key) +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expirationDate.toUTCString() +
    '; path=/';
  document.cookie = cookieValue;
}

export function deleteCookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function logout() {
  useAuthToken().clearToken();
  sessionStorage.clear();
  location.reload();
}

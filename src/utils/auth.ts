import useAuthToken from '@/hooks/auth/useAuthToken';
import { CookieKeys } from './storage/key';

/**
 * 쿠키 이름을 기반으로 쿠키 값을 가져옴
 * @param {string} name 가져올 쿠키의 이름
 * @returns {string} 쿠키 값 (존재하지 않을 경우 빈 스트링('') 반환)
 */
export function getCookie(name: string): string {
  const cookieString: string = document.cookie;
  console.log('쿠키스트링', cookieString);
  const cookies: string[] = cookieString.split(';');

  for (const cookie of cookies) {
    const [cookieName, value] = cookie.trim().split('=');
    if (cookieName === name) {
      return value;
    }
  }

  return '';
}

export const isAuthenticated = () => {
  const isLogin = sessionStorage.getItem('isLogin');

  if (isLogin === 'true') return true;
  else return false;
};

export function deleteCookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//TODO: 서버에서 로그아웃 로직 생성할 예정
export function logout() {
  sessionStorage.clear();
}

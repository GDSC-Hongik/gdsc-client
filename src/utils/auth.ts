import useAuthToken from '@/hooks/auth/useAuthToken';

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
  days = 1,
  encoding = true
}: {
  key: string;
  value: string;
  days?: number;
  encoding?: boolean;
}) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const encodedKey = encodeURIComponent(key);
  const processedValue = encoding ? encodeURIComponent(value) : value;

  const isBaseUriCookie = key === 'oauth-base-uri';
  const domain = window.location.origin.includes('localhost')
    ? 'localhost'
    : '.gdschongik.com';
  const baseUriCookieValue = '; samesite=none; secure; domain=' + domain;

  const cookieValue =
    encodedKey +
    '=' +
    processedValue +
    '; expires=' +
    expirationDate.toUTCString() +
    '; path=/' +
    (isBaseUriCookie ? baseUriCookieValue : '');

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

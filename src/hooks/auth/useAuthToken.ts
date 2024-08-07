import { deleteCookie, getCookie } from '@/utils/auth';
import { CookieKeys } from '@/utils/storage/key';

export default function useAuthToken() {
  return {
    accessToken: getCookie(CookieKeys.AccessToken),
    refreshToken: getCookie(CookieKeys.RefreshToken),
    clearToken: () => {
      deleteCookie(CookieKeys.AccessToken);
      deleteCookie(CookieKeys.RefreshToken);
    }
  };
}

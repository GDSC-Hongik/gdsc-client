import { deleteCookie, getCookie, setCookie } from '@/utils/auth';
import { CookieKeys } from '@/utils/storage/key';

export default function useAuthToken() {
  return {
    accessToken: getCookie(CookieKeys.AccessToken),
    refreshToken: getCookie(CookieKeys.RefreshToken),
    setToken: ({ type, value }: { type: CookieKeys; value: string | null }) => {
      if (value) {
        setCookie({ key: type, value });
      }
    },
    clearToken: () => {
      deleteCookie(CookieKeys.AccessToken);
      deleteCookie(CookieKeys.RefreshToken);
    }
  };
}

import { deleteCookie, getCookie, setCookie } from '@/utils/auth';
import { CookieKeys } from '@/utils/storage/key';

export default function useAuthToken() {
  return {
    accessToken: getCookie(CookieKeys.AccessToken),
    refreshToken: getCookie(CookieKeys.RefreshToken),
    setToken: ({
      type,
      value
    }: {
      type: 'access' | 'refresh';
      value: string | null;
    }) => {
      if (value && value.length > 0) {
        setCookie({
          key:
            type === 'access'
              ? CookieKeys.AccessToken
              : CookieKeys.RefreshToken,
          value
        });
      }
    },
    clearToken: () => {
      deleteCookie(CookieKeys.AccessToken);
      deleteCookie(CookieKeys.RefreshToken);
    }
  };
}

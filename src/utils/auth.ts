export const isAuthenticated = () => {
  const isLogin = sessionStorage.getItem('isLogin');

  if (isLogin === 'true') return true;
  else return false;
};
//TODO: 서버에서 로그아웃 로직 생성할 예정
export function logout() {
  sessionStorage.clear();
}

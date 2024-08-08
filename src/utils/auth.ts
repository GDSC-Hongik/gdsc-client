export const isAuthenticated = () => {
  const isLogin = sessionStorage.getItem('isLogin');

  if (isLogin === 'true') return true;
  else return false;
};

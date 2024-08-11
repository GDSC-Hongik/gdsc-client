export const isAuthenticated = () => {
  const isLogin = sessionStorage.getItem('isLogin');

  return isLogin === 'true';
};

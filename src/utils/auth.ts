export const isAuthenticated = () => {
  const isLogin = localStorage.getItem('isLogin');

  return isLogin === 'true';
};

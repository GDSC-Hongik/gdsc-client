import RoutePath from '@/routes/routePath';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthServerRedirectNavigate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isLogin', 'true');
    navigate(RoutePath.Dashboard);
  }, [navigate]);

  return null;
};

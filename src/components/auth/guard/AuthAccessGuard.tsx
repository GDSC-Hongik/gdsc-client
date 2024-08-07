import RoutePath from '@/routes/routePath';
import { isAuthenticated } from '@/utils/auth';
import { toast } from 'react-toastify';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AuthAccessGuard() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      toast.error('로그인이 필요한 서비스예요.');
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate(RoutePath.Home);
    }
  }, [redirect, navigate]);

  return isAuthenticated() ? <Outlet /> : null;
}

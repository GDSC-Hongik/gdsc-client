import RoutePath from '@/routes/routePath';
import { isAuthenticated } from '@/utils/auth';
import { toast } from 'react-toastify';
import { Outlet, Navigate } from 'react-router-dom';

export default function AuthAccessGuard() {
  if (isAuthenticated()) return <Outlet />;
  else {
    toast.error('로그인이 필요한 서비스예요.');
    return <Navigate to={RoutePath.Home} />;
  }
}

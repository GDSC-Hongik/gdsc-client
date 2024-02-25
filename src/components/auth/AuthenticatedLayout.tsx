import RoutePath from '@/routes/routePath';
import { checkAuthentication } from '@/utils/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthenticatedLayout = () => {
  if (!checkAuthentication()) {
    return <Navigate to={RoutePath.Index} />;
  }

  return <Outlet />;
};

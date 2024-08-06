import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';
export const AuthServerRedirectNavigate = () => {
  const navigate = useNavigate();
  navigate(RoutePath.Dashboard);

  return null;
};

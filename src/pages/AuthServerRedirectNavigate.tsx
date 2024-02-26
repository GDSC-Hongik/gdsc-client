import { getAuthRedirectPath } from '@/utils/auth';
import { Navigate, useSearchParams } from 'react-router-dom';

export const AuthServerRedirectNavigate = () => {
  const [searchParams] = useSearchParams();
  const landingStatus = searchParams.get('landing-status');
  return <Navigate to={getAuthRedirectPath(landingStatus)} replace={true} />;
};

import { getAuthRedirectPath } from '@/utils/auth';
import { Navigate, useParams } from 'react-router-dom';

export const AuthServerRedirectNavigate = () => {
  const { ['landing-status']: landingStatus } = useParams();

  return <Navigate to={getAuthRedirectPath(landingStatus)} />;
};

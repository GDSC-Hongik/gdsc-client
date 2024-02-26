import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthAccessGuard() {
  const { clearLandingStatus } = useLandingStatus();

  useEffect(() => {
    clearLandingStatus();
  }, []);

  return <Outlet />;
}

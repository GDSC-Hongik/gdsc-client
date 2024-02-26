import { verifyStudentEmailApi } from '@/apis/auth';
import LandingStatus from '@/constants/landingStatus';
import QueryKeys from '@/constants/queryKey';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useVerifyStudent(token: string | null) {
  const navigation = useNavigate();
  const { updateLandingStatue } = useLandingStatus();

  const { isSuccess, ...rest } = useQuery({
    queryKey: [QueryKeys.StudentVerification],
    queryFn: () => {
      if (!token) {
        return Promise.reject('empty token');
      }

      return verifyStudentEmailApi(token);
    }
  });

  useEffect(() => {
    if (isSuccess) {
      updateLandingStatue(LandingStatus.Signup);
      navigation(RoutePath.AuthenticationProcess3_Signup, { replace: true });
    }
  }, [isSuccess]);

  return { isSuccess, ...rest };
}

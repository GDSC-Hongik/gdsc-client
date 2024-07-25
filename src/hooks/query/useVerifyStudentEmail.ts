import { verifyStudentApi } from '@/apis/auth';
import QueryKeys from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

export default function useVerifyStudentEmail(token: string | null) {
  const query = useQuery({
    queryKey: [QueryKeys.StudentEmailVerification],
    queryFn: () => {
      if (!token) {
        return Promise.reject('empty token');
      }

      return verifyStudentApi.VERIFY_STUDENT_EMAIL(token);
    }
  });

  return query;
}

import { verifyStudentApi } from '@/apis/auth';
import QueryKeys from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useVerifyStudent() {
  const {
    data: result,
    error,
    ...rest
  } = useSuspenseQuery({
    queryKey: [QueryKeys.StudentVerification],
    queryFn: verifyStudentApi.GET_STUDENT_EMAIL_IS_VERIFIED
  });

  return { result, ...rest, error };
}

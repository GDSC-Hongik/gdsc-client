import { verifyStudentApi } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';

export default function useSendStudentEmail() {
  const navigation = useNavigate();
  const { mutate: sendStudentEmail, ...rest } = useMutation({
    mutationFn: verifyStudentApi.SEND_STUDENT_EMAIL,
    onSuccess: () => {
      toast('메일 전송이 완료되었습니다.');
      navigation(RoutePath.Dashboard);
    }
  });

  return { sendStudentEmail, ...rest };
}

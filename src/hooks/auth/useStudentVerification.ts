import { verifyStudentApi } from '@/apis/auth';
import { useSendStudentEmail } from '@/hooks/mutation';
import useUnivEmail from '@/hooks/zustand/useUnivEmail';
import RoutePath from '@/routes/routePath';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function useStudentVerification() {
  const navigation = useNavigate();
  const { univEmail, updateUnivEmail } = useUnivEmail();

  const {
    control,
    formState: { isValid },
    handleSubmit
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      univEmail: univEmail ?? ''
    }
  });

  const { sendStudentEmail, ...rest } = useSendStudentEmail();

  const onSubmit = async ({ univEmail }: FieldValues) => {
    updateUnivEmail(univEmail);
    sendStudentEmail(univEmail);
    toast('메일 전송이 완료되었습니다.');
  };

  const onVerifyStudent = async () => {
    try {
      const result = await verifyStudentApi.GET_STUDENT_EMAIL_IS_VERIFIED();

      if (result.univStatus === 'VERIFIED') {
        //이미 학교 이메일 인증을 마칠 경우 대시보드로 라우트
        navigation(RoutePath.MyPage);
      } else {
        // 인증 실패 또는 다른 상태 처리
        // 여기에서 사용자에게 메시지를 표시하거나 다른 조치를 취할 수 있습니다.
      }
    } catch (error: any) {
      toast.error(error as string);
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    onVerifyStudent,
    control,
    isValid,
    ...rest
  };
}

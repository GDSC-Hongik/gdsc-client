import { verifyStudentApi } from '@/apis/auth';
import LandingStatus from '@/constants/landingStatus';
import { useSendStudentEmail } from '@/hooks/mutation';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
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

  const { updateLandingStatue } = useLandingStatus();
  const { sendStudentEmail, ...rest } = useSendStudentEmail();

  const onSubmit = async ({ univEmail }: FieldValues) => {
    updateUnivEmail(univEmail);
    sendStudentEmail(univEmail);
    toast('메일 전송이 완료되었습니다.');
  };

  const onVerifyStudent = async () => {
    try {
      const result = await verifyStudentApi();

      if (result.univStatus === 'VERIFIED') {
        updateLandingStatue(LandingStatus.Signup);
        navigation(RoutePath.AuthenticationProcess3_Signup);
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

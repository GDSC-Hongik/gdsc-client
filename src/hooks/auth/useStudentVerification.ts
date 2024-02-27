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
  const { univEmail, updateUnivEmail } = useUnivEmail();

  const { control, handleSubmit } = useForm({
    defaultValues: { univEmail: univEmail ?? '' },
    mode: 'onChange'
  });
  const navigation = useNavigate();
  const { updateLandingStatue } = useLandingStatus();
  const { sendStudentEmail, ...rest } = useSendStudentEmail();

  const onSubmit = async ({ univEmail }: FieldValues) => {
    updateUnivEmail(univEmail);
    sendStudentEmail(univEmail);
    onVerifyStudent();
  };

  const onVerifyStudent = async () => {
    alert('클릭 1');
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
      // 에러 처리
      // 예를 들어, 사용자에게 알림을 표시하거나, 로깅을 수행할 수 있습니다.
      alert(error as string);
      // 에러 상황에 대한 사용자 피드백이나 다른 액션을 추가할 수 있습니다.
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    onVerifyStudent,
    control,
    ...rest
  };
}

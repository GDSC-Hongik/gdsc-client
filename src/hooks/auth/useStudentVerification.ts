import { verifyStudentApi } from '@/apis/auth';
import LandingStatus from '@/constants/landingStatus';
import { useSendStudentEmail } from '@/hooks/mutation';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import useUnivEmail from '@/hooks/zustand/useUnivEmail';
import RoutePath from '@/routes/routePath';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
  };

  const onVerifyStudent = async () => {
    const result = await verifyStudentApi();

    if (result.univStatus === 'VERIFIED') {
      updateLandingStatue(LandingStatus.Signup);
      navigation(RoutePath.AuthenticationProcess3_Signup);
    } else {
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    onVerifyStudent,
    control,
    ...rest
  };
}

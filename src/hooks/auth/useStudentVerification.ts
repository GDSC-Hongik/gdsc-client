import LandingStatus from '@/constants/landingStatus';
import { useSendStudentEmail } from '@/hooks/mutation';
import { useVerifyStudent } from '@/hooks/query';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function useStudentVerification() {
  const { control, handleSubmit } = useForm({
    defaultValues: { univEmail: '' },
    mode: 'onChange'
  });
  const navigation = useNavigate();
  const { updateLandingStatue } = useLandingStatus();
  const { sendStudentEmail, ...rest } = useSendStudentEmail();
  const {
    data: { univStatus },
    isLoading: isLoadingVerifyStudent,
    isRefetching: isRefetchingVerifyStudent
  } = useVerifyStudent();

  const onSubmit = async ({ univEmail }: FieldValues) => {
    sendStudentEmail(univEmail);
  };

  const onVerifyStudent = () => {
    console.log('onVerifyStudent', univStatus);
    if (univStatus === 'VERIFIED') {
      updateLandingStatue(LandingStatus.Signup);
      navigation(RoutePath.AuthenticationProcess3_Signup);
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    univStudentStatus: univStatus,
    onVerifyStudent,
    isLoadingVerifyStudent: isRefetchingVerifyStudent || isLoadingVerifyStudent,
    control,
    ...rest
  };
}

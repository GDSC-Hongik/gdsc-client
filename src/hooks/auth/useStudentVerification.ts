import { verifyStudentApi } from '@/apis/auth';
import { useSendStudentEmail } from '@/hooks/mutation';
import useUnivEmail from '@/hooks/zustand/useUnivEmail';
import RoutePath from '@/routes/routePath';
import { useForm, FieldValues } from 'react-hook-form';
import { Route, useNavigate } from 'react-router-dom';
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
    navigation(RoutePath.Dashboard);
  };

  const onVerifyStudent = async () => {
    try {
      const result = await verifyStudentApi.GET_STUDENT_EMAIL_IS_VERIFIED();
      return result.univStatus;
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

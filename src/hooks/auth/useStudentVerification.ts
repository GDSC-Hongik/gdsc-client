import { useSendStudentEmail } from '@/hooks/mutation';
import useUnivEmail from '@/hooks/zustand/useUnivEmail';
import { useForm, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useVerifyStudent } from '../query';

export default function useStudentVerification() {
  const { univEmail, updateUnivEmail } = useUnivEmail();
  const { result, isError, error, isPending: loading } = useVerifyStudent();

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
    event?.preventDefault();
    updateUnivEmail(univEmail);
    sendStudentEmail(univEmail);
  };

  const onVerifyStudent = () => {
    if (isError) {
      toast.error(error?.message);
    } else {
      return result.univStatus;
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    onVerifyStudent,
    control,
    loading,
    isValid,
    ...rest
  };
}

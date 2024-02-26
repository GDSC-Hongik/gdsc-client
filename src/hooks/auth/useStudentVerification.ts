import { useSendStudentEmail } from '@/hooks/mutation';
import { useForm, FieldValues } from 'react-hook-form';

export default function useStudentVerification() {
  const { control, handleSubmit } = useForm({
    defaultValues: { univEmail: '' },
    mode: 'onChange'
  });

  const { sendStudentEmail, isPending } = useSendStudentEmail();

  const onSubmit = async ({ univEmail }: FieldValues) => {
    sendStudentEmail(univEmail);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    isPending,
    control
  };
}

import { useVerifyStudent } from '@/hooks/mutation';
import { useForm, FieldValues } from 'react-hook-form';

export default function useStudentVerification() {
  const { control, handleSubmit } = useForm({
    defaultValues: { univEmail: '' },
    mode: 'onChange'
  });

  const { verifyStudent, isPending } = useVerifyStudent();

  const onSubmit = async ({ univEmail }: FieldValues) => {
    verifyStudent(univEmail);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    isPending,
    control
  };
}

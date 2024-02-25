import { useCreateGuestUser } from '@/hooks/mutation';
import { removeHyphens } from '@/utils/phone';
import { useMemo, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

export default function useSignUp() {
  const [isChecked, setIsChecked] = useState<{
    terms: boolean;
    personalPrivacy: boolean;
  }>({ terms: false, personalPrivacy: false });

  const { control, handleSubmit } = useForm();
  const { createGuestUser, isPending } = useCreateGuestUser();

  const onSubmit = async ({
    name,
    studentId,
    phone,
    department,
    email
  }: FieldValues) => {
    createGuestUser({
      name,
      studentId,
      phone: removeHyphens(phone),
      department,
      email
    });
  };

  const disabledSubmitButton = useMemo(() => {
    if (isChecked.terms && isChecked.personalPrivacy) {
      return isPending;
    }

    return true;
  }, [isChecked.terms, isChecked.personalPrivacy, isPending]);

  return {
    isChecked,
    setIsChecked,
    onSubmit: handleSubmit(onSubmit),
    disabledSubmitButton,
    control
  };
}

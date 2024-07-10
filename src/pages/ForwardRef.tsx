import {
  forwardRef,
  InputHTMLAttributes,
  ForwardedRef,
  Ref,
  TextareaHTMLAttributes
} from 'react';
import TextField from 'wowds-ui/TextField';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  errorText?: string;
  isError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, placeholder, label = '', errorText, isError = false, ...props },
    ref
  ) => {
    return (
      <TextField
        label={label}
        helperText={errorText}
        error={isError}
        {...props}
        // ref={ref as Ref<TextareaHTMLAttributes>}
        //   error={isValid}
        // helperText={errors.name?.message}
        value={value}
        placeholder={placeholder}
      />
    );
  }
);

Input.displayName = 'Input';

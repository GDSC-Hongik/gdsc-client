import { useState } from 'react';
import styled from '@emotion/styled';
import { Control, Controller } from 'react-hook-form';
import DropDown from 'wowds-ui/DropDown';
import DropDownOption from 'wowds-ui/DropDownOption';
import { space } from 'wowds-tokens';
import TextField from 'wowds-ui/TextField';

type DepartmentSelectProps = {
  control:
    | Control<{
        name: string;
        studentId: string;
        phone: string;
        department: string;
        email: string;
        emailDomain: string;
        terms: boolean;
        personalPrivacy: boolean;
      }>
    | undefined;
};

const EmailInputField = ({ control }: DepartmentSelectProps) => {
  const [customEmail, setCustomEmail] = useState(false);
  return (
    <EmailFieldWrapper>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: '* 정보를 입력해주세요.'
          }
        }}
        render={({ field, fieldState }) => (
          <TextFieldWrapper>
            <TextField
              style={{ minWidth: '100%' }}
              label="이메일"
              error={fieldState.invalid}
              ref={field.ref}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder="내용을 입력하세요"
              helperText={fieldState.error ? fieldState.error?.message : ''}
            />
          </TextFieldWrapper>
        )}
      />
      <Controller
        name="emailDomain"
        control={control}
        defaultValue=""
        rules={{
          required: {
            value: true,
            message: '* 도메인을 입력해주세요.'
          },
          pattern: {
            value: /^@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: '* 이메일 도메인 형식을 지켜주세요.'
          }
        }}
        render={({ field, fieldState }) => (
          <TextFieldWrapper>
            {customEmail ? (
              <TextFieldWrapper>
                <TextField
                  style={{ minWidth: '100%' }}
                  label="도메인"
                  error={fieldState.invalid}
                  ref={field.ref}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="내용을 입력하세요"
                  helperText={fieldState.error ? fieldState.error?.message : ''}
                />
              </TextFieldWrapper>
            ) : (
              <DropDown
                placeholder="선택하세요"
                {...field}
                onChange={({ selectedValue }) => {
                  if (selectedValue === 'custom') {
                    setCustomEmail(true);
                  } else {
                    field.onChange(selectedValue);
                  }
                }}
                style={{ marginTop: '22px', flex: 1, width: '100%' }}>
                <DropDownOption
                  key="gmail"
                  text="@gmail.com"
                  value="@gmail.com"
                />
                <DropDownOption
                  key="naver"
                  text="@naver.com"
                  value="@naver.com"
                />
                <DropDownOption
                  key="hongik"
                  text="@g.hongik.ac.kr"
                  value="@g.hongik.ac.kr"
                />
                <DropDownOption key="daum" text="@daum.net" value="@daum.net" />
                <DropDownOption
                  key="custom"
                  text="직접 입력하기"
                  value="custom"
                />
              </DropDown>
            )}
          </TextFieldWrapper>
        )}
      />
    </EmailFieldWrapper>
  );
};

export default EmailInputField;

const TextFieldWrapper = styled.div`
  flex: 1;
  height: 84.8px;
`;

const EmailFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: ${space.sm};
  align-items: center;
  justify-content: space-between;
`;

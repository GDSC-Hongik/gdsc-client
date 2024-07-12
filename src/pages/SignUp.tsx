import DepartmentSelect from '@/components/auth/DepartmentSelect';
import {
  useForm,
  FieldValues,
  Controller,
  useFormState
} from 'react-hook-form';
import type { color as colorType } from 'wowds-tokens';
// import { Button } from '@/components/common/Button';
import GlobalSize from '@/constants/globalSize';
import { color, color as wowColor, space } from 'wowds-tokens';
import { css } from '@emotion/react';
// import { Checkbox } from '@/components/common/Checkbox';
import { media } from '@/styles';
import { Space, Flex, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import { Input } from '@/components/common/Input';
import Checkbox from 'wowds-ui/Checkbox';
import TextField from 'wowds-ui/TextField';
import DropDownOption from 'wowds-ui/DropDownOption';
import DropDown from 'wowds-ui/DropDown';
import { LoadingForm } from '@/components/common/LoadingForm';
import { useSignUp } from '@/hooks/auth';
import RoutePath from '@/routes/routePath';

import { formatPhoneNumberInProgress } from '@/utils/phone';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

type colorKey = keyof typeof colorType;

/** 가입 신청서 페이지 */
export const SignUp = () => {
  const { isChecked, setIsChecked, disabledSubmitButton } = useSignUp();

  const {
    control,
    watch,

    formState: { error, isValid },
    handleSubmit
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      studentId: '',
      phone: '',
      department: '',
      email: '',
      terms: false,
      personalPrivacy: false
    }
  });

  const onSubmit = (data) => {};

  // console.log(watch('phone'));
  console.log(watch(['phone', 'name', 'studentId']));

  // console.log(errors);

  return (
    <Container>
      <Text typo="h1">기본 회원 정보 입력하기</Text>
      <Space height={24} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            minLength: {
              value: 2,
              message: '* 두 글자 이상 입력해주세요.'
            }
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="이름"
              error={fieldState.invalid}
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              helperText={fieldState.error?.message}
              placeholder="내용을 입력하세요"
            />
          )}
        />
        <Controller
          name="studentId"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /[AaBbCc][0-9]{6}/ }}
          render={({ field }) => (
            <TextField
              label="학번"
              {...field}
              placeholder="내용을 입력하세요"
              helperText="* C000000 형식으로 입력해주세요."
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: /[0-9]{3}-[0-9]{4}-[0-9]{4}/,
            maxLength: 13
          }}
          render={({ field }) => (
            <TextField
              label="전화번호"
              {...field}
              placeholder="내용을 입력하세요"
              // error={field.value}
              value={formatPhoneNumberInProgress(field.value)}
              helperText="* 01000000000 형식으로 입력해주세요."
            />
          )}
        />
        <Suspense fallback={<LoadingForm label="학과" />}>
          <DepartmentSelect control={control} />
        </Suspense>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextFieldWrapper>
              <TextField
                label="이메일 주소"
                {...field}
                placeholder="내용을 입력하세요"
                helperText="* 추후 학회 활동에 대한 내용을 전달하는 데 사용될 예정입니다."
              />
              <DropDown placeholder="선택하세요">
                <DropDownOption text="gmail.com" value="gmail.com" />
                <DropDownOption text="naver.com" value="naver.com" />
                <DropDownOption text="g.hongik.ac.kr" value="g.hongik.ac.kr" />
                <DropDownOption text="daum.net" value="daum.net" />
              </DropDown>
            </TextFieldWrapper>
          )}
        />
        <Flex
          direction="column"
          gap="lg"
          justify="center"
          align="center"
          css={css`
            margin-top: 10px;
          `}>
          <CheckboxContainer>
            <Checkbox
              // name="community"
              checked={isChecked.terms}
              onClick={() =>
                setIsChecked((prev) => ({ ...prev, terms: !prev.terms }))
              }
              label={
                <Text
                  typo="body1"
                  color={isChecked.terms ? 'textBlack' : 'sub'}>
                  <GuideLink
                    to={RoutePath.CommunityGuideLink}
                    target="_blank"
                    color={isChecked.terms ? 'textBlack' : 'sub'}>
                    커뮤니티 가이드라인
                  </GuideLink>{' '}
                  및{' '}
                  <GuideLink
                    to={RoutePath.TermsLink}
                    target="_blank"
                    color={isChecked.terms ? 'textBlack' : 'sub'}>
                    GDSC 회칙
                  </GuideLink>
                  에 동의합니다.
                </Text>
              }
            />

            <Checkbox
              // name="privacy"
              checked={isChecked.personalPrivacy}
              onClick={() =>
                setIsChecked((prev) => ({
                  ...prev,
                  personalPrivacy: !prev.personalPrivacy
                }))
              }
              label={
                <Text
                  typo="body1"
                  color={isChecked.personalPrivacy ? 'black' : 'sub'}>
                  <GuideLink
                    to={RoutePath.PersonalPrivacyLink}
                    target="_blank"
                    color={isChecked.personalPrivacy ? 'textBlack' : 'sub'}>
                    개인정보 수집
                  </GuideLink>
                  에 동의합니다.
                </Text>
              }
            />
          </CheckboxContainer>
          <Button disabled={disabledSubmitButton}>가입 신청하기</Button>
        </Flex>
      </form>
    </Container>
  );
};

const Container = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
  background-color: ${color.mono50};
  width: ${GlobalSize.width};
  padding: 40px 16px;
  ${media.mobile} {
    width: 100vw;
  }
`;

const CheckboxContainer = styled(Flex)`
  flex-direction: column;
  gap: ${space.xs};
  align-items: flex-start;
`;

const GuideLink = styled(Link)<{ color?: colorKey }>`
  color: ${({ color = 'black' }) => wowColor[color]};
  text-decoration: underline;
  &:active {
    color: ${wowColor.sub};
  }
  &:hover {
    color: ${wowColor.sub};
  }
  &:visited {
    color: ${({ color = 'black' }) => wowColor[color]};
  }
`;

const TextFieldWrapper = styled.div`
  display: flex;
  gap: ${space.sm};
  align-items: center;
`;

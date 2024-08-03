import DepartmentSelect from '@/components/auth/DepartmentSelect';
import { useForm, Controller } from 'react-hook-form';
import type { color as colorType } from 'wowds-tokens';
import GlobalSize from '@/constants/globalSize';
import { color, color as wowColor, space } from 'wowds-tokens';
import { css } from '@emotion/react';
import { media } from '@/styles';
import { Space, Flex, Text } from '@/components/common/Wrapper';
import useCreateUserBasicInfo from '@/hooks/mutation/useCreateUserBasicInfo';
import Button from 'wowds-ui/Button';
import Checkbox from 'wowds-ui/Checkbox';
import TextField from 'wowds-ui/TextField';
import DropDownOption from 'wowds-ui/DropDownOption';
import DropDown from 'wowds-ui/DropDown';
import { LoadingForm } from '@/components/common/LoadingForm';
import RoutePath from '@/routes/routePath';

import { formatPhoneNumberInProgress } from '@/utils/phone';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

export type FormStateType = {
  name: string;
  studentId: string;
  phone: string;
  department: string;
  email: string;
  emailDomain: string;
  terms: boolean;
  personalPrivacy: boolean;
};

type colorKey = keyof typeof colorType;

/** 가입 신청서 페이지 */
export const SignUp = () => {
  const { createBasicInfo } = useCreateUserBasicInfo();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    register
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      studentId: '',
      phone: '',
      department: '',
      email: '',
      emailDomain: '',
      terms: false,
      personalPrivacy: false
    }
  });

  const onSubmit = async (data: FormStateType) => {
    const { name, email, department, phone, studentId, emailDomain } = data;
    createBasicInfo({
      name,
      studentId,
      phone,
      department,
      email: `${email}${emailDomain}`
    });
  };

  return (
    <Container>
      <Text typo="h1">기본 회원 정보 입력하기</Text>
      <Space height={24} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%'
        }}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: '* 정보를 입력해주세요.'
            },
            minLength: {
              value: 2,
              message: '* 두 글자 이상 입력해주세요.'
            }
          }}
          render={({ field, fieldState }) => (
            <InputFormWrapper>
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
            </InputFormWrapper>
          )}
        />
        <Controller
          name="studentId"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: '* 정보를 입력해주세요.'
            },
            pattern: {
              value: /^[A-C]{1}[0-9]{6}$/,
              message: '* C000000 형식으로 입력해주세요.'
            }
          }}
          render={({ field, fieldState }) => {
            return (
              <InputFormWrapper>
                <TextField
                  label="학번"
                  error={fieldState.invalid}
                  ref={field.ref}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  helperText={fieldState.error?.message}
                  placeholder="내용을 입력하세요"
                />
              </InputFormWrapper>
            );
          }}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: '* 정보를 입력해주세요.'
            },
            pattern: {
              value: /^010[0-9]{8}$/,
              message: '* 01000000000 형식으로 입력해주세요.'
            },
            maxLength: {
              value: 13,
              message: '* 13자 이하로 입력해주세요.'
            }
          }}
          render={({ field, fieldState }) => (
            <InputFormWrapper>
              <TextField
                label="전화번호"
                error={fieldState.invalid}
                ref={field.ref}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={formatPhoneNumberInProgress(field.value)}
                helperText={fieldState.error?.message}
                placeholder="내용을 입력하세요"
              />
            </InputFormWrapper>
          )}
        />
        <Suspense fallback={<LoadingForm label="학과" />}>
          <DepartmentSelect control={control} />
        </Suspense>
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
                  label="이메일 주소"
                  error={fieldState.invalid}
                  ref={field.ref}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={formatPhoneNumberInProgress(field.value)}
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
                message: '* 도메인을 선택해주세요.'
              }
            }}
            render={({ field }) => (
              <TextFieldWrapper>
                <DropDown
                  placeholder="선택하세요"
                  {...field}
                  onChange={({ selectedValue }) => {
                    field.onChange(selectedValue);
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
                  <DropDownOption
                    key="daum"
                    text="@daum.net"
                    value="@daum.net"
                  />
                </DropDown>
              </TextFieldWrapper>
            )}
          />
        </EmailFieldWrapper>
        <Flex
          direction="column"
          gap="lg"
          justify="center"
          align="center"
          css={css`
            margin-top: 16px;
            @media (max-height: 750px) {
              bottom: 0rem;
            }
            position: absolute;
            bottom: 1.75rem;
            width: 100%;
            padding: 0px 0.75rem;
            left: 0;
          `}>
          <CheckboxContainer>
            <Controller
              control={control}
              defaultValue={false}
              rules={{
                value: true,
                required: true
              }}
              {...register('terms')}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onClick={() => field.onChange(!field.value)}
                  label={
                    <Text
                      typo="body1"
                      color={field.value ? 'textBlack' : 'sub'}>
                      <GuideLink
                        to={RoutePath.CommunityGuideLink}
                        target="_blank"
                        color={field.value ? 'textBlack' : 'sub'}>
                        커뮤니티 가이드라인
                      </GuideLink>{' '}
                      및{' '}
                      <GuideLink
                        to={RoutePath.TermsLink}
                        target="_blank"
                        color={field.value ? 'textBlack' : 'sub'}>
                        GDSC 회칙
                      </GuideLink>
                      에 동의합니다.
                    </Text>
                  }
                />
              )}
            />
            <Controller
              control={control}
              defaultValue={false}
              rules={{
                value: true,
                required: true
              }}
              {...register('personalPrivacy')}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onClick={() => field.onChange(!field.value)}
                  label={
                    <Text typo="body1" color={field.value ? 'black' : 'sub'}>
                      <GuideLink
                        to={RoutePath.PersonalPrivacyLink}
                        target="_blank"
                        color={field.value ? 'textBlack' : 'sub'}>
                        개인정보 수집
                      </GuideLink>
                      에 동의합니다.
                    </Text>
                  }
                />
              )}
            />
          </CheckboxContainer>
          <Button
            type="submit"
            role="button"
            disabled={!isValid}
            style={{ maxWidth: '100%' }}>
            가입 신청하기
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

const Container = styled(Flex)`
  position: relative;
  flex-direction: column;
  @media (max-height: 765px) {
    min-height: 105vh;
  }
  min-height: calc(100vh - 54px);
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

const InputFormWrapper = styled.div`
  height: 84.8px;
  width: 100%;
`;

const TextFieldWrapper = styled.div`
  flex: 1;
  height: 84.8px;
  width: 50%;
`;

const EmailFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: ${space.sm};
  align-items: center;
  justify-content: space-between;
`;

import DepartmentSelect from '@/components/auth/DepartmentSelect';
import { Button } from '@/components/common/Button';
import { Checkbox } from '@/components/common/Checkbox';
import { Input } from '@/components/common/Input';
import { LoadingForm } from '@/components/common/LoadingForm';
import { Flex, Text } from '@/components/common/Wrapper';
import { useSignUp } from '@/hooks/auth';
import RoutePath from '@/routes/routePath';
import { KeyOfPalette, theme } from '@/styles';
import { formatPhoneNumberInProgress } from '@/utils/phone';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

/** 가입 신청서 페이지 */
export const SignUp = () => {
  const { isChecked, setIsChecked, onSubmit, control, disabledSubmitButton } =
    useSignUp();

  return (
    <Container>
      <Text typo={'heading3'}>가입 신청서 작성하기</Text>
      <form onSubmit={onSubmit}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="김홍익"
              label="이름"
              type="name"
              required
            />
          )}
        />
        <Controller
          name="studentId"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="C000000"
              label="학번"
              required
              pattern="[AaBbCc][0-9]{6}"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              value={formatPhoneNumberInProgress(field.value)}
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              maxLength={13}
              placeholder="010-1234-5678"
              label="전화번호"
              type="tel"
              required
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
            <Input
              {...field}
              placeholder="이메일 주소"
              label="이메일"
              type="email"
              required
            />
          )}
        />
        <CheckboxContainer>
          <Checkbox
            name="community"
            checked={isChecked.terms}
            onClick={() =>
              setIsChecked((prev) => ({ ...prev, terms: !prev.terms }))
            }
            label={
              <Text typo="label1" color={isChecked.terms ? 'black' : 'gray3'}>
                <GuideLink
                  to={RoutePath.CommunityGuideLink}
                  target="_blank"
                  color={isChecked.terms ? 'black' : 'gray3'}>
                  커뮤니티 가이드라인
                </GuideLink>{' '}
                및{' '}
                <GuideLink
                  to={RoutePath.TermsLink}
                  target="_blank"
                  color={isChecked.terms ? 'black' : 'gray3'}>
                  GDSC 회칙
                </GuideLink>
                에 동의합니다.
              </Text>
            }
          />
          <Checkbox
            name="privacy"
            checked={isChecked.personalPrivacy}
            onClick={() =>
              setIsChecked((prev) => ({
                ...prev,
                personalPrivacy: !prev.personalPrivacy
              }))
            }
            label={
              <Text
                typo="body2"
                color={isChecked.personalPrivacy ? 'black' : 'gray3'}>
                <GuideLink
                  to={RoutePath.PersonalPrivacyLink}
                  target="_blank"
                  color={isChecked.personalPrivacy ? 'black' : 'gray3'}>
                  개인정보 수집
                </GuideLink>
                에 동의합니다.
              </Text>
            }
          />
        </CheckboxContainer>
        <Button width={'342px'} disabled={disabledSubmitButton}>
          가입 신청하기
        </Button>
      </form>
    </Container>
  );
};

const Container = styled(Flex)`
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  gap: 24px;
  padding: 40px 16px;
`;

const CheckboxContainer = styled(Flex)`
  flex-direction: column;
  gap: 12px;
  margin: 16px 0 40px 0;
`;

const GuideLink = styled(Link)<{ color?: KeyOfPalette }>`
  color: ${({ color = 'black' }) => theme.palette[color]};
  text-decoration: underline;
  &:active {
    color: ${theme.palette.gray4};
  }
  &:hover {
    color: ${theme.palette.gray4};
  }
  &:visited {
    color: ${({ color = 'black' }) => theme.palette[color]};
  }
`;

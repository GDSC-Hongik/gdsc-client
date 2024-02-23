import { Button } from '@/components/common/Button';
import { Checkbox } from '@/components/common/Checkbox';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Flex, Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { KeyOfPalette, theme } from '@/styles';
import { removeHyphens, formatPhoneNumberInProgress } from '@/utils/phone';
import styled from '@emotion/styled';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

/** 가입 신청서 페이지 */
export const SignUp = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const { name, studentId, phone, department, email } = data;
    console.log(name, studentId, removeHyphens(phone), department, email);
  };

  return (
    <Container>
      <Text typo={'heading3'}>가입 신청서 작성하기</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Input {...field} placeholder="C000000" label="학번" required />
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
        <Controller
          name="department"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              label="선택하기"
              required
              items={[
                { id: 1, value: '컴퓨터공학과' },
                { id: 2, value: '수학과' }
              ]}
              displayField="value"
            />
          )}
        />
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
            checked={false}
            onClick={() => console.log()}
            label={
              <Text typo="label1">
                <GuideLink to={RoutePath.Terms}>
                  커뮤니티 가이드라인 및 GDSC 회칙
                </GuideLink>
                에 동의합니다.
              </Text>
            }
          />
          <Checkbox
            name="privacy"
            checked={true}
            onClick={() => console.log()}
            label={
              <Text typo="body2" color="gray4">
                <GuideLink to={RoutePath.Terms} color="gray4">
                  개인정보 수집
                </GuideLink>
                에 동의합니다.
              </Text>
            }
          />
        </CheckboxContainer>
        <Button width={'342px'}>가입 신청하기</Button>
      </form>
    </Container>
  );
};

const Container = styled(Flex)`
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  gap: 24px;
  padding: 60px 16px;
`;

const CheckboxContainer = styled(Flex)`
  flex-direction: column;
  gap: 12px;
  margin: 16px 0 40px 0;
`;

const GuideLink = styled(Link)<{ color?: KeyOfPalette }>`
  color: ${({ color = 'black' }) => theme.palette[color]};
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

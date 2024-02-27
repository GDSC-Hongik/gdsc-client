import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Flex, Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useStudentVerification } from '@/hooks/auth';
import { Controller } from 'react-hook-form';

/** 재학생 인증 페이지 */
export const StudentVerification = () => {
  const { onSubmit, control, isPending, onVerifyStudent } =
    useStudentVerification();

  return (
    <Container>
      <Box>
        <TextContainer>
          <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
            재학생 인증하기
          </Text>
          <Text>가입 신청서를 작성하려면 재학생 인증이 필요해요.</Text>
          <Text>본인의 홍익대학교 Gmail(g.hongik.ac.kr)로 </Text>
          <Text>재학생 인증을 수행해주세요.</Text>
        </TextContainer>
        <form onSubmit={onSubmit}>
          <Controller
            name="univEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="아이디@g.hongik.ac.kr"
                label="학교 이메일"
                type="email"
                required
              />
            )}
          />
          <ButtonContainer>
            <Button disabled={isPending} width={'342px'}>
              인증 메일 발송하기
            </Button>
          </ButtonContainer>
        </form>
        <StudentGuideLink
          to={RoutePath.StudentEmailLinkGuideLink}
          target="_blank">
          학교 이메일이 무엇인가요?
        </StudentGuideLink>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 40px 16px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.white};
  align-items: center;
  gap: 24px;
  padding: 80px 24px;
  border: 1px solid ${theme.palette.gray2};
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled(Flex)`
  gap: 8px;
`;

const StudentGuideLink = styled(Link)`
  color: ${theme.palette.black};
  text-decoration: underline;
  font-weight: 600;
  &:active {
    color: ${theme.palette.gray4};
  }
  &:hover {
    color: ${theme.palette.gray4};
  }
  &:visited {
    color: ${theme.palette.black};
  }
`;

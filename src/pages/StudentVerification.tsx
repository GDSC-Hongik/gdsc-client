import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useStudentVerification } from '@/hooks/auth';
import { Controller } from 'react-hook-form';

/** 재학생 인증 페이지 */
export const StudentVerification = () => {
  const { onSubmit, control, isPending } = useStudentVerification();

  return (
    <Container>
      <Box>
        <TextContainer>
          <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
            재학생 인증하기
          </Text>
          <Text>정보 입력 전, 재학생 인증 과정이 필요해요.</Text>
          <Text>본인의 학교 이메일을 통해 재학생 인증을</Text>
          <Text>마무리해주세요!</Text>
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
          <Button width={'342px'} disabled={isPending}>
            재학생 인증하기
          </Button>
        </form>
        <StudentGuideLink to={RoutePath.StudentEmailLinkGuideLink}>
          학교 이메일이 무엇인가요?
        </StudentGuideLink>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 16px;
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

const StudentGuideLink = styled(Link)`
  color: ${theme.palette.black};
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

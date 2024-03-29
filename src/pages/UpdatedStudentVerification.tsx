import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Flex, Text } from '@/components/common/Wrapper';
import { useStudentVerification } from '@/hooks/auth';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function UpdatedStudentVerification() {
  const { onSubmit, control, onVerifyStudent } = useStudentVerification();

  return (
    <Container>
      <Box>
        <TextContainer>
          <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
            재학생 인증하기
          </Text>
          <Text>전송된 이메일에서 재학생 인증을 완료했다면</Text>
          <Text>인증 완료 버튼을 눌러주세요.</Text>
        </TextContainer>
        <form onSubmit={onSubmit}>
          <Controller
            name="univEmail"
            control={control}
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
            <Button type="button" width="146px" onClick={onVerifyStudent}>
              인증 완료
            </Button>
            <Button type="submit" width={'146px'}>
              메일 재전송
            </Button>
          </ButtonContainer>
        </form>
        <Text color="red100">
          * 인증이 완료되지 않았어요! <br />
          {'    '}메일함을 확인해주세요.
        </Text>
        <StudentGuideLink
          to={RoutePath.StudentEmailLinkGuideLink}
          target="_blank">
          학교 이메일이 무엇인가요?
        </StudentGuideLink>
      </Box>
    </Container>
  );
}

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

  ${theme.typo.label1};
`;

import { useVerifyStudent } from '@/hooks/query';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

export const StudentVerificationServerRedirectNavigate = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const { error, isPending } = useVerifyStudent(token);

  console.log(token, isPending, error);

  return (
    <Container>
      {(() => {
        if (!token) {
          return '이메일 인증 토큰이 유효하지 않습니다.';
        }

        if (error) {
          return '이메일 인증 토큰이 존재하지 않습니다.';
        }

        if (isPending) {
          return <PulseLoader loading={isPending} />;
        }

        return '잘못된 접근입니다.';
      })()}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 16px;
`;

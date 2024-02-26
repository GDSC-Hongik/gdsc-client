import { Flex, Text } from '@/components/common/Wrapper';
import { useVerifyStudent } from '@/hooks/query';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { getAuthRedirectPath } from '@/utils/auth';
import { Button } from '@/components/common/Button';

export const StudentVerificationServerRedirectNavigate = () => {
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();
  const token = searchParams.get('token');
  const { error, isPending } = useVerifyStudent(token);

  const { landingStatus } = useLandingStatus();

  const message = (() => {
    if (!token) {
      return '이메일 인증 토큰이 존재하지 않습니다.';
    }

    if (error) {
      return '이메일 인증 토큰이 유효하지 않습니다.';
    }

    return '잘못된 접근입니다.';
  })();

  return (
    <Container>
      {(() => {
        if (isPending) {
          return <PulseLoader loading={isPending} />;
        }

        return (
          <InfoContainer>
            <Text color="red100">{message}</Text>
            <Button
              onClick={() => navigation(getAuthRedirectPath(landingStatus))}>
              다시 로그인하기
            </Button>
          </InfoContainer>
        );
      })()}
    </Container>
  );
};

const Container = styled(Flex)`
  width: 100%;
  padding: 100px 16px;
`;

const InfoContainer = styled(Flex)`
  flex-direction: column;
  gap: 24px;
`;

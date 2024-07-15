import { Text, Flex } from '@/components/common/Wrapper';
import { useVerifyStudentEmail } from '@/hooks/query';
import { color } from 'wowds-tokens';
import Button from 'wowds-ui/Button';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import RoutePath from '@/routes/routePath';

export const StudentVerificationServerRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const { isSuccess, isPending } = useVerifyStudentEmail(token);

  //TODO: 추후 로딩 스피너 추가 필요
  return (
    <Wrapper direction="column">
      {isPending ? (
        <PulseLoader loading={isPending} />
      ) : (
        <Container direction="column">
          <Text typo="h1" style={{ marginBottom: '20px', marginTop: '40px' }}>
            {isSuccess ? '재학생 인증 성공' : '재학생 인증 실패'}
          </Text>
          <TextContainer>
            {isSuccess ? (
              <Text typo="body1">홍익대학교 재학생 인증에 성공했어요.</Text>
            ) : (
              <Text typo="body1">
                유효하지 않거나 만료된 인증코드예요. 원래 페이지로 돌아가서 메일
                재전송 버튼을 눌러주세요.
              </Text>
            )}
          </TextContainer>
          <ButtonContainer>
            <Button
              type="submit"
              role="button"
              onClick={() => {
                navigate(RoutePath.Dashboard);
              }}>
              대시보드로 바로가기
            </Button>
          </ButtonContainer>
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  min-height: calc(100vh - 54px);
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;
  direction: column;
  justify-content: flex-start;
  gap: '40px';
  align-items: flex-start;
  background-color: ${color.mono50};

  ${media.mobile} {
    width: 100vw;
  }
`;

const Container = styled(Flex)`
  position: relative;
  justify-content: flex-start;
  width: 100%;
  min-height: calc(100vh - 54px);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.75rem;
  padding: 0px 0.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

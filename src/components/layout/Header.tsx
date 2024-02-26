import { Logo } from '@/assets/LogoIcon';
import { Flex, Text } from '@/components/common/Wrapper';
import { JoinButton } from '@/components/layout/JoinButton';
import GlobalSize from '@/constants/globalSize';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { media, theme } from '@/styles';
import { getAuthRedirectPath } from '@/utils/auth';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigation = useNavigate();
  const { landingStatus } = useLandingStatus();

  const displayJoinButton = landingStatus !== 'TO_DASHBOARD';

  const handleClick = () => {
    navigation(getAuthRedirectPath(landingStatus));
  };

  return (
    <Container>
      <HeaderContainter>
        <LogoContainer onClick={() => navigation(RoutePath.Home)}>
          <Logo />
          <Text style={{ fontSize: '20px', fontWeight: 700 }}>GDSC</Text>
        </LogoContainer>
        {displayJoinButton && (
          <JoinButton onClick={handleClick}>로그인/가입하기</JoinButton>
        )}
      </HeaderContainter>
    </Container>
  );
}

const Container = styled(Flex)`
  width: 100%;
  height: ${GlobalSize.header};
  gap: 16px;
  background-color: ${theme.palette.white};
  border-bottom: 1px solid ${theme.palette.gray2};
  position: fixed;
  top: 0;
`;

const HeaderContainter = styled(Flex)`
  width: ${GlobalSize.width};
  padding: 0 16px;

  ${media.mobile} {
    width: 100vw;
  }
`;
const LogoContainer = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

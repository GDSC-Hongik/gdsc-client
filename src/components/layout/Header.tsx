import { HeaderLogo } from '@/assets/HeaderLogo';
import { Logo } from '@/assets/LogoIcon';
import { Flex } from '@/components/common/Wrapper';
import { JoinButton } from '@/components/layout/JoinButton';
import GlobalSize from '@/constants/globalSize';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { media, theme } from '@/styles';
import { getAuthRedirectPath } from '@/utils/auth';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const { landingStatus } = useLandingStatus();

  const handleClick = () => {
    navigation(getAuthRedirectPath(landingStatus));
  };

  return (
    <Container>
      <HeaderContainter>
        <LogoContainer onClick={() => navigation(RoutePath.Home)}>
          <Flex direction="row" align="center" justify="flex-start" gap={6}>
            <Logo />
            <HeaderLogo />
          </Flex>
        </LogoContainer>

        {landingStatus === 'TO_DASHBOARD' && (
          <JoinButton onClick={handleClick}>내 정보</JoinButton>
        )}
        {pathname === '/' && landingStatus !== 'TO_DASHBOARD' && (
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
  z-index: 99;
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

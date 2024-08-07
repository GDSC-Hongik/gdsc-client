import { HeaderLogo } from '@/assets/HeaderLogo';
import { Logo } from '@/assets/LogoIcon';
import { Flex } from '@/components/common/Wrapper';
import { JoinButton } from '@/components/layout/JoinButton';
import GlobalSize from '@/constants/globalSize';
import RoutePath from '@/routes/routePath';
import { color } from 'wowds-tokens';
import { media } from '@/styles';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

//TODO: 백엔드 로그인 로직 수정 이후 반영 필요
export default function Header() {
  const navigation = useNavigate();

  const handleClick = () => {
    if (isAuthenticated()) navigation(RoutePath.Dashboard);
    else {
      navigation(RoutePath.GithubSignin);
    }
  };

  return (
    <Container>
      <HeaderContainter>
        <LogoContainer onClick={() => navigation(RoutePath.Home)}>
          <Flex direction="row" align="center" justify="flex-start" gap="xs">
            <Logo />
            <HeaderLogo />
          </Flex>
        </LogoContainer>
        {isAuthenticated() ? (
          <JoinButton onClick={handleClick}>내 정보</JoinButton>
        ) : (
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
  background-color: ${color.white};
  border-bottom: 1px solid ${color.mono400};
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

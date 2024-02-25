import { Logo } from '@/assets/LogoIcon';
import { Flex, Text } from '@/components/common/Wrapper';
import { JoinButton } from '@/components/layout/JoinButton';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthRoutePaths: string[] = [
  RoutePath.AuthenticationProcess1_GithubSignin,
  RoutePath.AuthenticationProcess2_StudentVerification,
  RoutePath.AuthenticationProcess3_Signup
];

export default function Header() {
  const navigation = useNavigate();

  const { pathname } = useLocation();
  const displayJoinButton = !AuthRoutePaths.includes(pathname);

  const handleClick = () =>
    navigation(RoutePath.AuthenticationProcess1_GithubSignin);

  return (
    <Container>
      <HeaderContainter>
        <LogoContainer>
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

  gap: 16px;
  background-color: ${theme.palette.white};
  border-bottom: 1px solid ${theme.palette.gray2};
`;

const HeaderContainter = styled(Flex)`
  width: 390px;
  padding: 0 16px;
`;
const LogoContainer = styled(Flex)`
  justify-content: flex-start;
  height: 54px;
  gap: 6px;
`;

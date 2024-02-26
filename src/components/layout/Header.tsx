import { Logo } from '@/assets/LogoIcon';
import { Flex, Text } from '@/components/common/Wrapper';
import { JoinButton } from '@/components/layout/JoinButton';
import GlobalSize from '@/constants/globalSize';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { media, theme } from '@/styles';
import { getAuthRedirectPath } from '@/utils/auth';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigation = useNavigate();
  const { landingStatus } = useLandingStatus();

  const handleClick = () => {
    navigation(getAuthRedirectPath(landingStatus));
  };

  return (
    <Container>
      <HeaderContainter>
        <LogoContainer onClick={() => navigation(RoutePath.Home)}>
          <Logo />
          <Flex direction="column" align="flex-start" justify="center" gap={2}>
            <Text
              css={css`
                font-family: 'Sofia Pro';
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
                text-align: center;
              `}>
              GDSC
            </Text>
            <Text
              css={css`
                font-family: 'Sofia Pro';
                font-size: 14px;
                font-weight: 500;
                line-height: 14px;
                text-align: center;
              `}
              color="blue100">
              Hongik.Univ
            </Text>
          </Flex>
        </LogoContainer>
        <JoinButton onClick={handleClick}>
          {landingStatus === 'TO_DASHBOARD' ? '내 정보' : '로그인/가입하기'}
        </JoinButton>
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

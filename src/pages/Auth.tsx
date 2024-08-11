import { GitHubButton } from '@/components/auth/GitHubButton';
import { Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { color, space } from 'wowds-tokens';
import { media } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import GlobalSize from '@/constants/globalSize';
import { Link } from 'react-router-dom';

/** 깃허브 로그인 및 가입하기 */
export const Auth = () => {
  const handleClick = () => {
    // GitHub 로그인 페이지로 직접 리다이렉트
    setTimeout(function () {
      document.location.href = RoutePath.AuthGithubLoginRedirect;
    }, 250);
  };

  return (
    <Container>
      <div>
        <Text
          typo="h1"
          style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
          로그인 및 가입하기
        </Text>
        <TextContainer>
          <Text typo="body1">
            GDSC Hongik에서는 더 나은 커뮤니티 운영과 안전한 회원 정보 관리를
            위해 Github 소셜 로그인을 사용하고 있어요. Github 계정이 없다면,
            새로 가입해야 해요.
          </Text>
        </TextContainer>
      </div>
      <ButtonContainer>
        <GitHubButton onClick={handleClick}>
          GitHub 로그인/회원가입
        </GitHubButton>
        <GithubGuideLink to={RoutePath.GitHubGuideLink} target="_blank">
          <Text
            typo="label2"
            color="textBlack"
            css={css`
              text-decoration: underline;
              padding: ${space.sm};
              ${space.lg}
            `}>
            GitHub 계정을 어떻게 만드나요?
          </Text>
        </GithubGuideLink>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 49px 16px 16px;
  background-color: ${color.mono50};
  margin: 0px -16px;
  min-height: calc(100vh - 54px);
  width: ${GlobalSize.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${media.mobile} {
    width: 100vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.75rem;
  padding: 0px 0.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space.xs};
`;

const GithubGuideLink = styled(Link)`
  color: ${color.textBlack};
  font-weight: 600;
  &:active {
    color: ${color.sub};
  }
  &:hover {
    color: ${color.sub};
  }
  &:visited {
    color: ${color.black};
  }
`;

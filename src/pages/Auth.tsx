import { GitHubButton } from '@/components/auth/GitHubButton';
import { Text } from '@/components/common/Wrapper';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import { setCookie } from '@/utils/auth';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/** 깃허브 로그인 및 가입하기 */
export const Auth = () => {
  const { clearLandingStatus } = useLandingStatus();

  useEffect(() => {
    clearLandingStatus();
    // 로그인을 위한 oauth-base-uri 쿠키 값 세팅
    console.log(window.location.origin);
    setCookie({
      key: 'oauth-base-uri',
      value: window.location.origin,
      encoding: false
    });
  }, []);

  const handleClick = () => {
    // GitHub 로그인 페이지로 직접 리다이렉트
    setTimeout(function () {
      document.location.href = RoutePath.AuthGithubLoginRedirect;
    }, 250);
  };

  return (
    <Container>
      <Box>
        <TextContainer>
          <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
            로그인 및 가입하기
          </Text>
          <Text>GDSC Hongik에서는 더 나은 커뮤니티 운영과</Text>
          <Text>안전한 회원 정보 관리를 위해</Text>
          <Text>Github 소셜 로그인을 사용하고 있어요.</Text>
          <Text>계정이 없다면, 새로 가입해야 해요.</Text>
        </TextContainer>
        <GitHubButton onClick={handleClick}>
          GitHub 로그인/회원가입
        </GitHubButton>
        <GithubGuideLink to={RoutePath.GitHubGuideLink} target="_blank">
          <Text
            typo="label1"
            color="black"
            css={css`
              text-decoration: underline;
            `}>
            GitHub 가이드라인
          </Text>
        </GithubGuideLink>
      </Box>
    </Container>
  );
};

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

const GithubGuideLink = styled(Link)`
  color: ${theme.palette.black};
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
`;

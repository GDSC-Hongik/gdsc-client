import { GitHubButton } from '@/components/common/GitHubButton';
import { Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/** 깃허브 로그인 및 가입하기 */
export const Auth = () => {
  const handleClick = () => {
    console.log('hi');
  };
  return (
    <Container>
      <LoginContainer>
        <TextContainer>
          <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
            로그인 및 가입하기
          </Text>
          <Text>깃허브 계정의 경우, 추후 과제 제출이나 </Text>
          <Text>개발 관련 프로그램 참여 시 사용되므로</Text>
          <Text>해당 활동이 가능한 계정으로 가입해주세요.</Text>
        </TextContainer>
        <GitHubButton onClick={handleClick}>
          GitHub 로그인/회원가입
        </GitHubButton>
        <GithubGuideLineLink to={RoutePath.GitHubGuideLink}>
          GitHub 가이드라인
        </GithubGuideLineLink>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 60px 16px;
  align-items: flex-start;
`;

const LoginContainer = styled.div`
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

const GithubGuideLineLink = styled(Link)`
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

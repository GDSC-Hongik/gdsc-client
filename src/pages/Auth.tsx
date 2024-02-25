import githubLoginApi from '@/apis/auth/githubLoginApi';
import { GitHubButton } from '@/components/GitHubButton';
import { Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import { getLandingRoutePath } from '@/utils/auth';
import styled from '@emotion/styled';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

/** 깃허브 로그인 및 가입하기 */
export const Auth = () => {
  const navigation = useNavigate();

  const handleClick = async () => {
    try {
      const result = await githubLoginApi();

      const landingStatus = result.headers['Landing-Status'];
      const landingRoutePath = getLandingRoutePath(landingStatus);
      navigation(landingRoutePath, { replace: true });
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };

  return (
    <Container>
      <Box>
        <TextContainer>
          <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
            로그인 및 가입하기
          </Text>
          <Text>깃허브 계정의 경우, 추후 과제 제출이나</Text>
          <Text>개발 관련 프로그램 참여 시 사용되므로</Text>
          <Text>해당 활동이 가능한 계정으로 가입해주세요.</Text>
        </TextContainer>
        <GitHubButton onClick={handleClick}>
          GitHub 로그인/회원가입
        </GitHubButton>
        <GithubGuideLink to={RoutePath.GitHubGuideLink}>
          GitHub 가이드라인
        </GithubGuideLink>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 16px;
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

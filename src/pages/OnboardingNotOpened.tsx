import { Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function OnboardingNotOpened() {
  return (
    <Container>
      <Box>
        <TextContainer>
          <AlignCenteredText typo="h3">
            아직 2차 지원 기간이 시작되지 않았어요
          </AlignCenteredText>
          <AlignCenteredText>
            현재는 준비 기간으로, 운영진들이 1차 지원자 분들의 가입 신청을
            꼼꼼하게 검토 중이에요.
          </AlignCenteredText>
          <AlignCenteredText>
            3월 4일에 모집이 다시 시작되면 인스타그램과 에브리타임을 통해 관련
            소식을 전해드릴게요.
          </AlignCenteredText>
          <AlignCenteredText>
            저희 소식을 더 빠르게 알고 싶으시다면{' '}
            <InstagramLink to={RoutePath.InstagramLink} target="_blank">
              @gdsc.hongik
            </InstagramLink>
            을 팔로우 해주세요.
          </AlignCenteredText>
          <AlignCenteredText> 기다려 주셔서 감사합니다!</AlignCenteredText>
        </TextContainer>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 40px 40px;
`;

const AlignCenteredText = styled(Text)`
  text-align: center;
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
  gap: 20px;
`;

const InstagramLink = styled(Link)`
  color: ${theme.palette.black};
  font-weight: 600;
  text-decoration: underline;
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

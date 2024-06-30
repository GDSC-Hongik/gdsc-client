import { Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { color, typography } from 'wowds-tokens';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function OnboardingClosed() {
  return (
    <Container>
      <Box>
        <TextContainer>
          <AlignCenteredText typo="h3">
            학회원 모집이 마감되었어요
          </AlignCenteredText>
          <AlignCenteredText>
            지금은 가입 신청을 받고 있지 않아요.
          </AlignCenteredText>
          <AlignCenteredText>
            이번 지원 기간동안 여러분이 보내주신 많은 관심에 진심으로
            감사드려요.
          </AlignCenteredText>
          <AlignCenteredText>
            2학기 모집 소식을 받고 싶으시다면{' '}
            <InstagramLink to={RoutePath.InstagramLink} target="_blank">
              @gdsc.hongik
            </InstagramLink>
            을 팔로우 해주세요.
          </AlignCenteredText>
          <AlignCenteredText>
            다음 학기에 더 멋진 모습으로 만나요!
          </AlignCenteredText>
        </TextContainer>
        <BackButton>이전 화면으로</BackButton>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const AlignCenteredText = styled(Text)`
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  align-items: center;
  gap: 24px;
  padding: 80px 24px;
  border: 1px solid ${color.mono400};
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const InstagramLink = styled(Link)`
  color: ${color.textBlack};
  font-weight: 600;
  text-decoration: underline;
  &:active {
    color: ${color.sub};
  }
  &:hover {
    color: ${color.sub};
  }
  &:visited {
    color: ${color.textBlack};
  }
`;

const BackButton = styled.button`
  height: 44px;
  width: calc(100% - 42px);
  border-radius: 100px;

  color: ${color.white};
  background-color: ${color.primary};
  ${typography.h2};

  flex-shrink: 0;
`;

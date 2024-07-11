import BottomSheet from '@/components/common/BottomSheet';
import { Text, Flex } from '@/components/common/Wrapper';
import { space, color } from 'wowds-tokens';
import Box from 'wowds-ui/Box';
import Button from 'wowds-ui/Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import RoutePath from '@/routes/routePath';

const JoinRegularMemberBottomSheet = () => {
  return (
    <BottomSheet>
      <BottomSheetContent>
        <Flex direction="column" gap="lg" align="flex-start">
          <Text typo="h1">2024년도 2학기 1차 정회원 지원</Text>
          <Text typo="body1">
            정회원이 되면 아래 혜택을 모두 누릴 수 있어요.
          </Text>
          <Box
            text={
              <Flex gap="sm" direction="column" align="flex-start">
                <div>
                  <Text typo="label1">
                    각종 학술 프로그램 및 온/오프라인 이벤트
                  </Text>
                  <Text typo="body2" color="sub">
                    다양한 학우들과 교류할 수 있는 기회예요.
                  </Text>
                </div>
                <div>
                  <Text typo="label1">
                    학회원들과 소통할 수 있는 디스코드 채널
                  </Text>
                  <Text typo="body2" color="sub">
                    유익한 정보를 얻고, 다양한 소모임에 참가해보세요.
                  </Text>
                </div>
                <div>
                  <Text typo="label1">
                    해커톤, 컨퍼런스 등 Google 관련 이벤트 참여
                  </Text>
                  <Text typo="body2" color="sub">
                    빠르게 소식을 전달받고, 먼저 기회를 얻을 수 있어요.
                  </Text>
                </div>
              </Flex>
            }
          />
        </Flex>
        <Text>회비는 2만원이고, 쿠폰이 있을 경우 할인받을 수 있어요.</Text>
        <Text>
          자세한 내용은
          <TextLink to={RoutePath.GDSCHongikLink} target="_blank">
            GDSC Hongik 페이지
          </TextLink>
          를 참고해주세요.
        </Text>
        <Box
          status="success"
          style={{ textAlign: 'center' }}
          text={<Text typo="label1">지원 기간: 8월 26일 ~ 8월 30일</Text>}
        />
        <Button
          onClick={() => {
            console.log('지원하러 가기');
          }}>
          지원하러 가기
        </Button>
      </BottomSheetContent>
    </BottomSheet>
  );
};
export default JoinRegularMemberBottomSheet;

const BottomSheetContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${space.xl};
  align-items: center;
`;

const TextLink = styled(Link)`
  color: ${color.textBlack};
  text-decoration: underline;
`;

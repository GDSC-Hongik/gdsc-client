import { Flex, Space, Text } from '@/components/common/Wrapper';
import { color, space } from 'wowds-tokens';
import { media } from '@/styles';
import styled from '@emotion/styled';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';
import RoutePath from '@/routes/routePath';
import Button from 'wowds-ui/Button';
import TextButton from 'wowds-ui/TextButton';

export const JoinDiscord = () => {
  const navigate = useNavigate();

  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" align="flex-start">
        <Text typo="h1">{`지금 바로
디스코드를 연동하세요.`}</Text>
        <Space height={space.lg} />
        <Text typo="body1">
          현재 GDSC Hongik은 디스코드를 메인 커뮤니케이션 플랫폼으로 사용하고
          있어요. 따라서 반드시 연동 절차를 완료해야만 정상적인 활동이 가능해요.
        </Text>
      </Flex>
      <Flex direction="column">
        <Button
          onClick={() => {
            navigate(RoutePath.DiscordConnect);
          }}>
          연동하기
        </Button>
        <Space height={space.xs} />
        <TextButton
          text="가입은 처음이신가요?"
          onClick={() => {
            navigate(RoutePath.DiscordGuide);
          }}
        />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  min-height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;
  padding-top: 40px;
  padding-bottom: 28px;
  background-color: ${color.backgroundAlternative};

  ${media.mobile} {
    width: 100vw;
  }
`;

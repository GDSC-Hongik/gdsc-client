import { Flex, Space, Text } from '@/components/common/Wrapper';
import { color, space } from 'wowds-tokens';
import { media } from '@/styles';
import styled from '@emotion/styled';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';
import RoutePath from '@/routes/routePath';
import { Button } from '@/components/common/Button';

export const JoinDiscord = () => {
  const navigate = useNavigate();
  // const { register, watch, formState, getValues } = useForm({
  //   defaultValues: {
  //     discordHandle: '',
  //     discordNickname: '',
  //     code: ''
  //   },
  //   mode: 'onChange'
  // });

  // const postDiscordLinkMutation = useMutation({
  //   mutationFn: discordApi.POST_DISCORD,
  //   onSuccess: () => {
  //     toast('디스코드 연동이 완료되었습니다.');
  //     navigate(RoutePath.MyPage);
  //   }
  // });

  // const handleLinkButtonClick = () => {
  //   const data = {
  //     discordUsername: getValues('discordHandle'),
  //     nickname: getValues('discordNickname'),
  //     code: Number(getValues('code'))
  //   } as DiscordLinkRequest;

  //   postDiscordLinkMutation.mutate({ ...data });
  // };

  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" align="flex-start">
        <Space height={40} />
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
        <Button>가입은 처음이신가요? </Button>
        <Space height={28} />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  min-height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;

  background-color: ${color.backgroundAlternative};

  ${media.mobile} {
    width: 100vw;
  }
`;

import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';

export const CompleteDiscordConnect = () => {
  //   const { register, watch, formState, getValues } = useForm({
  //     defaultValues: {
  //       discordHandle: '',
  //       discordNickname: '',
  //       code: ''
  //     },
  //     mode: 'onChange'
  //   });

  //   const postDiscordLinkMutation = useMutation({
  //     mutationFn: discordApi.POST_DISCORD,
  //     onSuccess: () => {
  //       toast('디스코드 연동이 완료되었습니다.');
  //       navigate(RoutePath.MyPage);
  //     }
  //   });

  //   const handleLinkButtonClick = () => {
  //     const data = {
  //       discordUsername: getValues('discordHandle'),
  //       nickname: getValues('discordNickname'),
  //       code: Number(getValues('code'))
  //     } as DiscordLinkRequest;

  //     postDiscordLinkMutation.mutate({ ...data });
  //   };

  return (
    <>
      <Flex direction="column" align="flex-start">
        <Text typo="h1">디스코드 연동이 완료되었어요!</Text>
        <Space height="lg" />
        <Text typo="body1">
          회비 납부, Bevy 가입 등 모든 절차가 완료되면 자동으로 승인될
          예정이에요!
        </Text>
      </Flex>
      <Button>완료하기</Button>
    </>
  );
};

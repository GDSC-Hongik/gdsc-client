import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import TextButton from 'wowds-ui/TextButton';
import { color } from 'wowds-tokens';
import { css } from '@emotion/react';

export const JoinServer = ({ onNext }: { onNext: () => void }) => {
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
        <Text typo="h1">서버에 합류하세요.</Text>
        <Space height="lg" />
        <Text typo="body1">
          아래 버튼을 통해 GDSC Hongik 디스코드 서버로 이동해서 가입하세요.
          서버에 가입 후 #명령어 채널에서 본인의 디스코드 계정을 연동할 수
          있어요.
          <br />
          <br />
          서버 합류 후, 다시 돌아와서 연동 절차를 마무리해주세요.
        </Text>
      </Flex>
      <Flex direction="column" gap="xs">
        <TextButton
          text=" GDSC Hongik 공식 디스코드 서버↗︎"
          style={{ color: color.discord }}
        />

        <Button
          onClick={() => {
            onNext();
          }}>
          합류가 확인되면 넘어갈 수 있어요.
        </Button>

        <Text
          typo="body2"
          color="sub"
          css={css`
            text-align: center;
          `}>
          합류가 확인되지 않을 경우 <br />
          채널톡을 통해 코어멤버에게 문의해주세요!
        </Text>
      </Flex>
    </>
  );
};

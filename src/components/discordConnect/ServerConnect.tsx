import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import TextButton from 'wowds-ui/TextButton';
import { color } from 'wowds-tokens';
import DiscordImage from '/discord/discord-server-connect.png';
import TextField from 'wowds-ui/TextField';

export const ServerConnect = ({ onNext }: { onNext: () => void }) => {
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
      <Flex direction="column" align="flex-start" gap="lg">
        <Text typo="h1">서버와 연동하세요.</Text>
        <div>
          <Text typo="label1" color="discord">
            /인증코드
          </Text>
          <Space height="sm" />
          <Text typo="body1">
            명령어 채널에서 /인증코드 명령어를 통해 고유한 인증번호를 받을 수
            있어요. 인증코드를 아래에 입력함으로써 연동할 수 있어요.
          </Text>
        </div>
        <Flex direction="column" align="center">
          <img
            src={DiscordImage}
            alt="discord-server-connect"
            width={325}
            height={157}
          />
          <Space height="lg" />
          <Space height="lg" />
          <TextButton
            text="번호 발급받기↗︎"
            style={{ color: color.discord }}
          />
        </Flex>
        <TextField
          label="인증번호"
          placeholder="내용을 입력해주세요"
          style={{
            backgroundColor: 'white',
            borderStyle: 'solid'
          }}
        />
      </Flex>
      <Flex direction="column">
        <Button
          onClick={() => {
            onNext();
          }}>
          다음으로
        </Button>
      </Flex>
    </>
  );
};

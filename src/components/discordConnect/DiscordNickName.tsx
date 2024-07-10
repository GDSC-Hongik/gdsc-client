import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import DiscordImage from '/discord/discord-nickname.png';
import TextField from 'wowds-ui/TextField';

export const DiscordNickName = ({ onNext }: { onNext: () => void }) => {
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
        <div>
          <Text typo="h1">별명을 설정하세요.</Text>
          <Space height="sm" />
          <Text typo="body1">
            GDSC Hongik 디스코드 서버에서 사용할 별명을 설정해주세요.
          </Text>
        </div>
        <img
          src={DiscordImage}
          alt="discord-nickname"
          width={325}
          height={157}
        />
        <Text typo="body1">
          가입이 완료되면 가입 신청서에 제출하신 별명으로 자동으로 수정될
          거예요. 추후 별명을 수정하고 싶다면 채널톡으로 코어멤버에게 연락
          주세요.
        </Text>
      </Flex>
      <Space height="lg" />
      <TextField
        helperText={
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
            <li>최소 2자, 최대 6자의 한글만 작성 가능</li>
            <li>GDSC Hongik 가이드라인에 어긋나지 않게 작성</li>
          </ul>
        }
        label="디스코드 별명"
        placeholder="내용을 입력해주세요"
        style={{
          backgroundColor: 'white',
          borderStyle: 'solid'
        }}
      />
      <Space height={146} />
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

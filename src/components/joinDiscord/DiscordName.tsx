import { Flex, Space, Text } from '@/components/common/Wrapper';
import { Button } from '@/components/common/Button';
import DiscordExample from '@assets/discord-example.png';
import { space } from 'wowds-tokens';
import TextField from 'wowds-ui/TextField';

export const DiscordName = ({ onNext }: { onNext: () => void }) => {
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
        <Space height={25} />
        <Text typo="h1">{`사용자명을 알려주세요.`}</Text>
        <Space height={space.sm} />
        <Text typo="body1">
          GDSC Hongik 디스코드 서버에서는 사용자명을 통해 멤버를 구분해요.
        </Text>
        <Space height={space.lg} />
        <img
          src={DiscordExample}
          alt="discord-example-name"
          width={325}
          height={157}
        />
        <Space height={space.lg} />
        <Text typo="body1">
          본인의 디스코드 사용자명을 아래 규정과 맞게 설정한 후 입력해주세요.
        </Text>
        <Space height={space.lg} />
      </Flex>
      <Space height={space.lg} />
      <TextField
        helperText={
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
            <li>최소 2자, 최대 32자까지만 작성 가능</li>
            <li>대문자가 아닌 소문자로만 작성 가능</li>
            <li>밑줄(_)과 마침표(.)가 아닌 특수 문자 사용 불가능</li>
            <li>
              연속적인 밑줄(a__b)과 마침표(a..b)로 이루어진 경우 사용 불가능
            </li>
            <li>discord, nitro, nelly와 같은 디스코드 공식 이름 사용 불가능</li>
          </ul>
        }
        label="디스코드 사용자명"
        placeholder="내용을 입력해주세요"
        style={{
          backgroundColor: 'white',
          fontFamily: 'SUIT, Apple SD Gothic Neo'
        }}
      />
      <Space height={75} />
      <Flex direction="column">
        <Button
          onClick={() => {
            onNext();
            console.log(1);
          }}>
          다음으로
        </Button>
        <Space height={space.xs} />
        <Button>디스코드 계정이 없으신가요?</Button>
        <Space height={28} />
      </Flex>
    </>
  );
};

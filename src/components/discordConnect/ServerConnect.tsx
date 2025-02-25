import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import TextButton from 'wowds-ui/TextButton';
import { color } from 'wowds-tokens';
import DiscordImage from '/discord/discord-server-connect.png';
import TextField from 'wowds-ui/TextField';
import { useController, useFormContext } from 'react-hook-form';
import { DiscordLinkRequest } from '@/apis/discord/discordType';
import { DiscordFormValues } from '@/types/discord';
import { useEffect, useState } from 'react';
import { usePostDiscordLink } from '@/hooks/mutation/usePostDiscordLink';
import Divider from 'wowds-ui/Divider';
import RoutePath from '@/routes/routePath';

export const ServerConnect = ({ onNext }: { onNext: () => void }) => {
  const { getValues, control } = useFormContext<DiscordFormValues>();
  const [error, setError] = useState(false);
  const { postDiscordLink, isSuccess, isError } = usePostDiscordLink();

  useEffect(() => {
    if (isSuccess) {
      onNext();
    } else if (isError) {
      setError(true);
    }
  }, [isSuccess, isError, onNext]);

  const handleLinkButtonClick = () => {
    const data = {
      discordUsername: getValues('discordUsername'),
      nickname: getValues('discordNickname'),
      code: Number(getValues('code'))
    } as DiscordLinkRequest;

    postDiscordLink({ ...data });
  };

  const { field } = useController({
    name: 'code',
    control,
    rules: {
      required: true
    }
  });

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
          <Divider />
          <Space height="lg" />
          <TextButton
            text="번호 발급받기↗︎"
            style={{ color: color.discord }}
            asProp="a"
            href={RoutePath.DiscordCodeLink}
            target="_blank"
          />
        </Flex>
        <TextField
          {...field}
          label="인증번호"
          placeholder="내용을 입력해주세요"
          style={{
            width: '100%'
          }}
          error={error}
          {...(error && {
            helperText: (
              <li>번호가 올바르지 않아요. 다시 발급받아 진행해주세요.</li>
            )
          })}
        />
      </Flex>
      <Space height={200} />
      <Flex direction="column">
        <Button
          onClick={() => {
            handleLinkButtonClick();
          }}
          style={{ maxWidth: '100%' }}>
          다음으로
        </Button>
      </Flex>
    </>
  );
};

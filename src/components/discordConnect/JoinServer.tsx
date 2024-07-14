import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import TextButton from 'wowds-ui/TextButton';
import { color } from 'wowds-tokens';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import discordApi from '@/apis/discord/discordApi';
import { useFormContext } from 'react-hook-form';

export const JoinServer = ({ onNext }: { onNext: () => void }) => {
  const { getValues } = useFormContext();
  const { data } = useQuery({
    queryKey: ['discordJoin'],
    queryFn: () => discordApi.GET_DISCORD_JOIN(getValues('discordUsername'))
  });

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
          }}
          disabled={data?.isJoined}>
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
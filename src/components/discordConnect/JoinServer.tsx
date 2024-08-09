import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import TextButton from 'wowds-ui/TextButton';
import { color } from 'wowds-tokens';
import { css } from '@emotion/react';
import { useFormContext } from 'react-hook-form';
import useGetDiscordJoined from '@/hooks/query/useGetDiscordJoined';
import { DiscordFormValues } from '@/types/discord';
import RoutePath from '@/routes/routePath';
import { useState, useEffect } from 'react';

const FETCH_INTERVAL = 5000;

export const JoinServer = ({ onNext }: { onNext: () => void }) => {
  const { getValues } = useFormContext<DiscordFormValues>();
  const [isEnabled, setIsEnabled] = useState(false);

  //NOTE: 처음 렌더링 되었을 때에 바로 fetch 하지 않고 5초 기다린 후에 fetch 합니다.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnabled(true);
    }, FETCH_INTERVAL);

    return () => clearTimeout(timer);
  }, []);

  const { data } = useGetDiscordJoined(getValues('discordUsername'), isEnabled);

  //NOTE : 합류여부가 true 일 경우에는 더 이상 fetch 하지 않습니다.
  useEffect(() => {
    if (data?.isJoined) {
      setIsEnabled(false);
    }
  }, [data]);

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
          onClick={() => window.open(RoutePath.GDSCHongikDiscord, '_blank')}
        />

        <Button
          onClick={() => {
            onNext();
          }}
          disabled={!data?.isJoined}
          style={{ maxWidth: '100%' }}>
          {!isEnabled
            ? '잠시만 기다려주세요.'
            : data?.isJoined
              ? '합류가 확인되었어요.'
              : '합류가 확인되지 않았어요.'}
        </Button>

        <Text
          typo="body2"
          color="sub"
          css={css`
            text-align: center;
          `}>
          합류가 확인되지 않을 경우 <br />
          카카오톡 채널을 통해 코어멤버에게 문의해주세요!
        </Text>
      </Flex>
    </>
  );
};

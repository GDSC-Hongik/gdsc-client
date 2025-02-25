import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import { color } from 'wowds-tokens';
import { Discord as DiscordIcon } from '@/assets/Discord';

export const DiscordDescription = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
      <Flex direction="column" align="flex-start">
        <DiscordIcon />
        <Space height="sm" />
        <Text typo="h1">
          디스코드가 무엇이고, <br />왜 쓰나요?
        </Text>
        <Space height="lg" />
        <Text typo="body1">
          디스코드는 음성, 화상 채팅이 가능한 메신저예요. <br />
          GDGoC Hongik에서는
          <span style={{ color: color.discord }}> 멤버들 간의 소통,공지</span>를
          위해 디스코드를 사용하고 있어요. 모든 공지는 디스코드에서 안내하고
          있으므로, 디스코드를 가입하고 GDGoC Hongik 서버에 합류해야만 멤버로
          활동할 수 있어요.
        </Text>
      </Flex>
      <Button
        onClick={() => {
          onNext();
        }}
        style={{ maxWidth: '100%' }}>
        다음으로
      </Button>
    </>
  );
};

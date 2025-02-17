import { Flex, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import DiscordImage from '/discord/discord-guide-account.png';
import { useNavigate } from 'react-router-dom';
import RoutePath from '@/routes/routePath';

export const AccountDescription = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex direction="column" align="flex-start" gap="lg">
        <Text typo="h1">계정은 어떻게 만드나요?</Text>
        <img
          src={DiscordImage}
          alt="discord-guide-account"
          width={218}
          height={281}
          style={{ margin: '0 auto' }}
        />
        <Text typo="body1">
          디스코드 계정을 만들기 위해서는 위와 같은 정보를 입력해야 해요. 계정을
          생성하고 다음 연동 절차를 진행해주세요!
        </Text>
      </Flex>
      <Flex gap="sm">
        <Button
          asProp="a"
          href={RoutePath.DiscordRegisterLink}
          target="_blank"
          variant="outline">
          계정 생성하기
        </Button>
        <Button
          onClick={() => {
            navigate(RoutePath.DiscordConnect);
          }}>
          연동하기
        </Button>
      </Flex>
    </>
  );
};

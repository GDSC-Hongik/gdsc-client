import { Flex, Space, Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';
import Button from 'wowds-ui/Button';

export const CompleteDiscordConnect = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex direction="column" align="flex-start">
        <Text typo="h1">디스코드 연동이 완료되었어요!</Text>
        <Space height="lg" />
        <Text typo="body1">
          재학생 인증 및 회비 납부과 완료되면
          <br />
          커뮤니티 멤버로 디스코드에서 활동할 수 있어요.
        </Text>
      </Flex>
      <Button
        onClick={() => {
          navigate(RoutePath.Dashboard);
        }}
        style={{ maxWidth: '100%' }}>
        완료하기
      </Button>
    </>
  );
};

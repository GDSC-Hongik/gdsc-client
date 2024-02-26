import { Flex, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import styled from '@emotion/styled';

export const ApproveBox = () => {
  return (
    <Wrapper gap={12}>
      <Flex direction="column" align="flex-start" gap={12}>
        <Text typo="label1" color="black">
          가입 신청이 승인되었어요.
        </Text>
        <Text typo="body2" color="gray4">
          <strong>/가입하기</strong> 명령어를 통해 GDSC Hongik 디스코드의 모든
          채널을 둘러보실 수 있어요.
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  padding: 24px 11px 20px 24px;
  box-sizing: border-box;

  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: 1px solid ${theme.palette.blue100};
`;

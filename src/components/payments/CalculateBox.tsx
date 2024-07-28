import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';
import styled from '@emotion/styled';
import { color } from 'wowds-tokens';
import { useProduct } from '@/hooks/zustand/useProduct';

export const CalculateBox = () => {
  const { strAmount, strDiscount, strTotalAmount } = useProduct();
  return (
    <Box
      status="success"
      text={
        <Flex direction="column" gap="sm" style={{ width: '100%' }}>
          <Flex justify="space-between">
            <Text typo="label2" color="black">
              총 회비
            </Text>
            <Text typo="body1" color="black">
              {strAmount}원
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text typo="label2" color="black">
              총 할인금액
            </Text>
            <Text typo="body1" color="black">
              {strDiscount}원
            </Text>
          </Flex>
          <Divider />
          <Flex justify="space-between">
            <Text typo="body1" color="black">
              총 결제금액
            </Text>
            <Text typo="h2" color="black">
              {strTotalAmount}원
            </Text>
          </Flex>
        </Flex>
      }
    />
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: ${color.lightDisabled};
`;

import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';
import { useProductBase } from '@/hooks/zustand/useProduct';

export const PaymentItemBox = () => {
  const { name, strAmount } = useProductBase();
  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        결제 항목
      </Text>
      <Box text={name} subText={`금액 ${strAmount}원`} status="success" />
    </Flex>
  );
};

import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';

interface PaymentItemBoxProp {
  name: string;
  amount: string;
}

export const PaymentItemBox = ({ name, amount }: PaymentItemBoxProp) => {
  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        결제 항목
      </Text>
      <Box text={name} subText={`금액 ${amount}원`} status="success" />
    </Flex>
  );
};

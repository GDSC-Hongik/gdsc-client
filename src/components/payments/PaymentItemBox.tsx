import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';
import { useProductBase } from '@/hooks/zustand/useProduct';
import memberApi from '@/apis/member/memberApi';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../common/LoadingSpinner';
import { useEffect } from 'react';

export const PaymentItemBox = () => {
  const { name, strAmount, setName, setAmount } = useProductBase();
  const { data: member, isLoading } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  useEffect(() => {
    if (member) {
      setName(member.currentRecruitmentRound.feeName);
      setAmount(member.currentRecruitmentRound.fee);
    }
  }, [member, setAmount, setName]);

  return (
    <>
      {isLoading || !member ? (
        <LoadingSpinner />
      ) : (
        <Flex
          justify="flex-start"
          direction="column"
          align="flex-start"
          gap="sm">
          <Text typo="h2" color="black">
            결제 항목
          </Text>
          <Box text={name} subText={`금액 ${strAmount}원`} status="success" />
        </Flex>
      )}
    </>
  );
};

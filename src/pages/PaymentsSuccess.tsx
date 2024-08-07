import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Flex, Text, Space } from '@/components/common/Wrapper';
import { media } from '@/styles';
import styled from '@emotion/styled';

import Button from 'wowds-ui/Button';

import GlobalSize from '@/constants/globalSize';
import RoutePath from '@/routes/routePath';
import { color } from 'wowds-tokens';
import usePostOrder from '@/hooks/mutation/usePostOrder';

export function PaymentsSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { postOrder } = usePostOrder();

  const confirm = async () => {
    const requestData = {
      orderId: searchParams.get('orderId'),
      amount: searchParams.get('amount'),
      paymentType: searchParams.get('paymentType'),
      paymentKey: searchParams.get('paymentKey')
    };

    if (!requestData.orderId || !requestData.amount || !requestData.paymentKey)
      throw new Error('Invalid payment information');

    postOrder({
      paymentKey: requestData.paymentKey,
      orderNanoId: requestData.orderId,
      amount: +requestData.amount
    });
  };

  useEffect(() => {
    const executeConfirm = async () => {
      try {
        await confirm();
      } catch (error) {
        navigate(RoutePath.PaymentsFail);
      }
    };
    executeConfirm();
  }, [searchParams]);

  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" gap="lg">
        <Heading typo="h1" color="black">
          회비 결제 완료
        </Heading>
        <Flex direction="column" align="start">
          <Text>이번 학기 회비 결제를 완료했어요.</Text>
          <Text>이제 GDSC 정회원으로 이번 학기에 활동하실 수 있어요!</Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Button onClick={() => navigate(RoutePath.Dashboard)}>완료하기</Button>
        <Space height={28} />
      </Flex>
    </Wrapper>
  );
}

const Heading = styled(Text)`
  padding-top: 40px;
`;

const Wrapper = styled(Flex)`
  box-sizing: border-box;

  height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  padding: 0px 16px;

  background-color: ${color.backgroundAlternative};

  ${media.mobile} {
    width: 100vw;
  }
`;

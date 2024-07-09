import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Flex, Text } from '@/components/common/Wrapper';
import { media } from '@/styles';
import styled from '@emotion/styled';

import Button from 'wowds-ui/Button';

import GlobalSize from '@/constants/globalSize';
import RoutePath from '@/routes/routePath';
import { color } from 'wowds-tokens';
import ordersApi from '@/apis/orders/ordersApi';
import { useProduct } from '@/hooks/zustand/useProduct';

export function PaymentsSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const [responseData, setResponseData] = useState(null);
  const { amount, discount, totalAmount } = useProduct();

  useEffect(() => {
    async function confirm() {
      const requestData = {
        orderId: searchParams.get('orderId'),
        amount: searchParams.get('amount'),
        paymentType: searchParams.get('paymentType'),
        paymentKey: searchParams.get('paymentKey')
      };

      // Todo: requestData 검증
      const json = ordersApi.POST_ORDER({
        orderNanoId: requestData.orderId || 'hi',
        membershipId: 1,
        issuedCouponId: 1,
        totalAmount: amount,
        discountAmount: discount,
        finalPaymentAmount: requestData.amount ? +requestData.amount : 0
      });
      return json;
    }

    confirm()
      .then((data) => {
        setResponseData(data);
      })
      .catch(() => {
        navigate(RoutePath.PaymentsFail);
      });
  }, [searchParams]);

  return (
    <Wrapper direction="column" gap="lg" justify="start">
      <Flex direction="column" justify="space-between">
        <Heading typo="h1" color="black">
          회비 결제 완료
        </Heading>
        <Flex direction="column" align="start">
          <Text>이번 학기 회비 결제를 완료했어요.</Text>
          <Text>이제 GDSC 정회원으로 이번 학기에 활동하실 수 있어요!</Text>
        </Flex>
      </Flex>
      <Button onClick={() => navigate(RoutePath.MyPage)}>완료하기</Button>
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

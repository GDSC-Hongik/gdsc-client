import { useEffect, useRef, useState } from 'react';
import {
  PaymentWidgetInstance,
  loadPaymentWidget
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';

import { useQuery } from '@tanstack/react-query';
import RoutePath from '@/routes/routePath';

import { media, theme } from '@/styles';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import GlobalSize from '@/constants/globalSize';
import styled from '@emotion/styled';
import memberApi from '@/apis/member/memberApi';
import { CLIENT_KEY } from '@/constants/environment';
import { Button } from '@/components/common/Button';

const selector = '#payment-widget';
const customerKey = nanoid();

export function PaymentsCheckout() {
  const { data: paymentWidget } = usePaymentWidget(CLIENT_KEY, customerKey);
  const { data: user } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_MEMBERS_ME
  });

  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);
  const [price, setPrice] = useState(20_000);
  const [paymentMethodsWidgetReady, isPaymentMethodsWidgetReady] =
    useState(false);

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      selector,
      { value: price },
      { variantKey: 'DEFAULT' }
    );

    paymentWidget.renderAgreement('#agreement', { variantKey: 'AGREEMENT' });

    paymentMethodsWidget.on('ready', () => {
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
      isPaymentMethodsWidgetReady(true);
    });
  }, [paymentWidget]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;
    if (paymentMethodsWidget == null) {
      return;
    }
    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  const handleClickOpenPaymentWidget = async () => {
    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: '2024년 1학기 정회원 회비',
        customerName: user?.name,
        customerEmail: user?.email,
        customerMobilePhone: user?.phone,
        successUrl: `${window.location.origin}${RoutePath.MyPage}`,
        failUrl: `${window.location.origin}${RoutePath.PaymentsFail}`
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper direction="column" justify="space-around">
      <Contents className="box_section">
        <div id="payment-widget" />
        <div id="agreement" />
      </Contents>
      <Button
        disabled={!paymentMethodsWidgetReady}
        onClick={handleClickOpenPaymentWidget}>
        결제하기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  box-sizing: border-box;

  height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  padding: 0px 16px;

  background-color: ${theme.palette.gray1};

  ${media.mobile} {
    width: 100vw;
  }
`;

const Contents = styled.div`
  width: 100%;
`;

function usePaymentWidget(clientKey: string, customerKey: string) {
  return useQuery({
    queryKey: ['payment-widget', clientKey, customerKey],
    queryFn: () => {
      return loadPaymentWidget(clientKey, customerKey);
    }
  });
}

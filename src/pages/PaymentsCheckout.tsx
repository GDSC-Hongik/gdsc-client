import { useEffect, useRef, useState } from 'react';
import {
  PaymentWidgetInstance,
  loadPaymentWidget
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';

import { useQuery } from '@tanstack/react-query';
import RoutePath from '@/routes/routePath';

import { Flex, Space, Text } from '@/components/common/Wrapper';
import styled from '@emotion/styled';
import memberApi from '@/apis/member/memberApi';
import { CLIENT_KEY } from '@/constants/environment';

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
    <Flex>
      <div className="box_section">
        <div id="payment-widget" />
        <div id="agreement" />

        <Button
          style={{ marginTop: '30px' }}
          disabled={!paymentMethodsWidgetReady}
          onClick={handleClickOpenPaymentWidget}>
          결제하기
        </Button>
      </div>
    </Flex>
  );
}

const Button = styled.button`
  color: #f9fafb;
  background-color: #3182f6;
  margin: 30px 15px 0px 15px;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 0 solid transparent;
  user-select: none;
  transition:
    background 0.2s ease,
    color 0.1s ease;
  text-decoration: none;
  border-radius: 7px;
  padding: 11px 16px;
  width: 250px;
`;

function usePaymentWidget(clientKey: string, customerKey: string) {
  return useQuery({
    queryKey: ['payment-widget', clientKey, customerKey],
    queryFn: () => {
      return loadPaymentWidget(clientKey, customerKey);
    }
  });
}

import { useEffect, useRef, useState } from 'react';
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
  ANONYMOUS
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';

import { useQuery } from '@tanstack/react-query';
import RoutePath from '@/routes/routePath';

import { Flex, Space, Text } from '@/components/common/Wrapper';
import styled from '@emotion/styled';

const selector = '#payment-widget';

// TODO: clientKey는 개발자센터의 결제위젯 연동 키 > 클라이언트 키로 바꾸세요.
// TODO: customerKey는 구매자와 1:1 관계로 무작위한 고유값을 생성하세요.
// @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = nanoid();

export function PaymentsCheckout() {
  const { data: paymentWidget } = usePaymentWidget(clientKey, customerKey);
  // const paymentWidget = usePaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);
  const [price, setPrice] = useState(20000);
  const [paymentMethodsWidgetReady, isPaymentMethodsWidgetReady] =
    useState(false);

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    // ------  결제 UI 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      selector,
      { value: price },
      { variantKey: 'DEFAULT' }
    );

    // ------  이용약관 UI 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
    paymentWidget.renderAgreement('#agreement', { variantKey: 'AGREEMENT' });

    //  ------  결제 UI 렌더링 완료 이벤트 ------
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

    // ------ 금액 업데이트 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  const handleClickOpenPaymentWidget = async () => {
    // TODO: 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
    // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
    try {
      // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
      // @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: '토스 티셔츠 외 2건',
        customerName: '김토스',
        customerEmail: 'customer123@gmail.com',
        customerMobilePhone: '01012341234',
        successUrl: RoutePath.PaymentsSuccess,
        failUrl: RoutePath.PaymentsFail
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
      // ------  결제위젯 초기화 ------
      // @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
      return loadPaymentWidget(clientKey, customerKey);
    }
  });
}

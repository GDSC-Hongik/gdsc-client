import { useEffect, useState } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { nanoid } from 'nanoid';

import { useQuery } from '@tanstack/react-query';
import RoutePath from '@/routes/routePath';

import { media } from '@/styles';
import { Flex, Space } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';

import GlobalSize from '@/constants/globalSize';
import styled from '@emotion/styled';
import { CLIENT_KEY } from '@/constants/environment';
import { color } from 'wowds-tokens';
import meApi from '@/apis/me/meApi';
import useProduct from '@/hooks/zustand/useProduct';

const clientKey = CLIENT_KEY;
const customerKey = nanoid();

export function PaymentsCheckout() {
  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: meApi.GET_BASIC_INFO
  });

  const { totalAmount } = useProduct();

  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);

        const widgets = tossPayments.widgets({
          customerKey
        });

        setWidgets(widgets);
      } catch (error) {
        console.error('Error fetching payment widget:', error);
      }
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      await widgets.setAmount({ currency: 'KRW', value: totalAmount });
      await widgets.renderPaymentMethods({
        selector: '#payment-method',
        variantKey: 'DEFAULT'
      });

      await widgets.renderAgreement({
        selector: '#agreement',
        variantKey: 'AGREEMENT'
      });

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  const handleClickOpenPaymentWidget = async () => {
    try {
      await widgets.requestPayment({
        orderId: nanoid(),
        orderName: '2024년 1학기 정회원 회비',
        customerName: user?.name || '햄',
        customerEmail: user?.email || 'ham@test.com',
        customerMobilePhone: user?.phone || '01000000000',
        successUrl: `${window.location.origin}${RoutePath.PaymentsSuccess}`,
        failUrl: `${window.location.origin}${RoutePath.PaymentsFail}`
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper direction="column" justify="space-between">
      <Contents className="box_section">
        <div id="payment-method" />
        <div id="agreement" />
      </Contents>
      <Flex direction="column">
        <Button disabled={!ready} onClick={handleClickOpenPaymentWidget}>
          결제하기
        </Button>
        <Space height={28} />
      </Flex>
    </Wrapper>
  );
}

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

const Contents = styled.div`
  width: 100%;
`;

import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Flex, Text } from '@/components/common/Wrapper';
import { media } from '@/styles';
import styled from '@emotion/styled';

import Button from 'wowds-ui/Button';

import GlobalSize from '@/constants/globalSize';
import RoutePath from '@/routes/routePath';
import { color } from 'wowds-tokens';

export function PaymentsSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function confirm() {
      const requestData = {
        orderId: searchParams.get('orderId'),
        amount: searchParams.get('amount'),
        paymentKey: searchParams.get('paymentKey')
      };

      const response = await fetch('/api/confirm/widget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      const json = await response.json();

      if (!response.ok) {
        throw { message: json.message, code: json.code };
      }

      return json;
    }

    confirm()
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        navigate(`/fail?code=${error.code}&message=${error.message}`);
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

          <div className="box_section" style={{ width: '600px' }}>
            <h2>결제를 완료했어요</h2>
            <div className="p-grid typography--p" style={{ marginTop: '50px' }}>
              <div className="p-grid-col text--left">
                <b>결제금액</b>
              </div>
              <div className="p-grid-col text--right" id="amount">
                {`${Number(searchParams.get('amount')).toLocaleString()}원`}
              </div>
            </div>
            <div className="p-grid typography--p" style={{ marginTop: '10px' }}>
              <div className="p-grid-col text--left">
                <b>주문번호</b>
              </div>
              <div className="p-grid-col text--right" id="orderId">
                {`${searchParams.get('orderId')}`}
              </div>
            </div>
            <div className="p-grid typography--p" style={{ marginTop: '10px' }}>
              <div className="p-grid-col text--left">
                <b>paymentKey</b>
              </div>
              <div
                className="p-grid-col text--right"
                id="paymentKey"
                style={{ whiteSpace: 'initial', width: '250px' }}>
                {`${searchParams.get('paymentKey')}`}
              </div>
            </div>
            <div className="p-grid-col">
              <Link to="https://docs.tosspayments.com/guides/payment-widget/integration">
                <button className="button p-grid-col5">연동 문서</button>
              </Link>
              <Link to="https://discord.gg/A4fRFXQhRu">
                <button
                  className="button p-grid-col5"
                  style={{ backgroundColor: '#e8f3ff', color: '#1b64da' }}>
                  실시간 문의
                </button>
              </Link>
            </div>
          </div>
          <div
            className="box_section"
            style={{ width: '600px', textAlign: 'left' }}>
            <b>Response Data :</b>
            <div id="response" style={{ whiteSpace: 'initial' }}>
              {responseData && (
                <pre>{JSON.stringify(responseData, null, 4)}</pre>
              )}
            </div>
          </div>
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

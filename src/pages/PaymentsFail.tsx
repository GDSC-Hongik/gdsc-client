import styled from '@emotion/styled';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';

import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import { color } from 'wowds-tokens';

export function PaymentsFail() {
  const navigate = useNavigate();

  const handleClickBackToPayments = () => {
    navigate(RoutePath.PaymentsCheckout);
  };

  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" gap="lg">
        <Heading typo="h1" color="black">
          회비 결제 실패
        </Heading>
        <Flex direction="column" align="start">
          <Text>회비 결제에 실패했어요.</Text>
          <Text>결제 화면으로 다시 돌아가서 진행해주세요.</Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Button onClick={handleClickBackToPayments}>돌아가기</Button>
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

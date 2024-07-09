import { Flex, Space, Text } from '@/components/common/Wrapper';
import { media } from '@/styles';
import Box from 'wowds-ui/Box';
import Button from 'wowds-ui/Button';
import styled from '@emotion/styled';
import { color } from 'wowds-tokens';

import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';

import RoutePath from '@/routes/routePath';
import useProduct from '@/hooks/zustand/useProduct';
import CouponDropDown from '@/components/payments/CouponDropDown';

export const Payments = () => {
  const navigate = useNavigate();

  const handleClickRoute = () => {
    navigate(RoutePath.PaymentsCheckout);
  };

  const { name, strDiscount, strAmount, strTotalAmount } = useProduct();

  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" justify="space-between" gap="xl">
        <Heading typo="h1" color="black">
          회비 납부
        </Heading>
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
        <Flex
          justify="flex-start"
          direction="column"
          align="flex-start"
          gap="sm">
          <Text typo="h2" color="black">
            할인 쿠폰
          </Text>
          <CouponDropDown />
        </Flex>
      </Flex>
      <Flex direction="column" gap="lg">
        <Box
          status="success"
          text={
            <Flex direction="column" gap="sm">
              <Flex justify="space-between">
                <Text typo="label2" color="black">
                  총 회비
                </Text>
                <Text typo="body1" color="black">
                  {strAmount}원
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text typo="label2" color="black">
                  총 할인금액
                </Text>
                <Text typo="body1" color="black">
                  {strDiscount}원
                </Text>
              </Flex>
              <Divider />
              <Flex justify="space-between">
                <Text typo="body1" color="black">
                  총 결제금액
                </Text>
                <Text typo="h2" color="black">
                  {strTotalAmount}원
                </Text>
              </Flex>
            </Flex>
          }
        />
        <Button onClick={handleClickRoute}>결제하기</Button>
        <Space height={28} />
      </Flex>
    </Wrapper>
  );
};

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

const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: ${color.lightDisabled};
`;

import { Flex, Space, Text } from '@/components/common/Wrapper';
import { media } from '@/styles';

import Button from 'wowds-ui/Button';
import styled from '@emotion/styled';
import { color } from 'wowds-tokens';

import GlobalSize from '@/constants/globalSize';
import { CouponDropDown } from '@/components/payments/CouponDropDown';
import { CalculateBox } from '@/components/payments/CalculateBox';
import { PaymentItemBox } from '@/components/payments/PaymentItemBox';

export const Payments = ({ onNext }: { onNext: () => void }) => {
  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" justify="space-between" gap="xl">
        <Heading typo="h1" color="black">
          회비 납부
        </Heading>
        <PaymentItemBox />
        <CouponDropDown />
      </Flex>
      <Flex direction="column">
        <CalculateBox />
        <Space height={20} />
        <Button onClick={onNext}>결제하기</Button>
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

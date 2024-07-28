import { RightArrow } from '@/assets/RightArrow';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { color } from 'wowds-tokens';
import RoutePath from '@/routes/routePath';
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

export type PaymentStatusType = 'PENDING' | 'VERIFIED';

interface PaymentStatusProps {
  paymentStatus: PaymentStatusType;
  depositorName: string;
}

export const PaymentStatus = ({
  paymentStatus,
  depositorName
}: PaymentStatusProps) => {
  const navigate = useNavigate();

  const handleClickRoute = (e: MouseEvent<HTMLDivElement>) => {
    if (paymentStatus !== 'PENDING') {
      return;
    }
    navigate(RoutePath.Payments);
  };

  return (
    <Flex direction="column" gap="sm" onClick={handleClickRoute}>
      <Wrapper paymentStatus={paymentStatus}>
        <Flex direction="column" justify="flex-start" align="flex-start">
          <Text typo="label1" color="black">
            {paymentStatus === 'PENDING'
              ? '이번 학기 회비를 납부해주세요.'
              : '회비 납부가 정상적으로 완료되었어요.'}
          </Text>
          <Space height={12} />
          <Text typo="body1" color="sub">
            이제 카드•페이 등 여러 결제수단을 지원해요.
          </Text>
        </Flex>
        {paymentStatus === 'PENDING' && <RightArrow />}
      </Wrapper>
    </Flex>
  );
};

const Wrapper = styled(Flex)<{
  paymentStatus: PaymentStatusType;
}>`
  padding: 24px 24px 20px 24px;
  box-sizing: border-box;

  background-color: ${color.white};
  border-radius: 8px;
  border: ${({ paymentStatus }) =>
    paymentStatus === 'PENDING'
      ? `1px solid ${color.error}`
      : `1px solid ${color.primary}`};

  cursor: ${({ paymentStatus }) =>
    paymentStatus === 'PENDING' ? 'pointer' : 'default'};
`;

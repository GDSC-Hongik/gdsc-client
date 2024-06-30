import { PaymentInfo } from '@/assets/PaymentInfo';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { color } from 'wowds-tokens';
import styled from '@emotion/styled';
import { useState } from 'react';

export type PaymentStatusType = 'PENDING' | 'VERIFIED';

interface PaymentStatusProps {
  paymentStatus: PaymentStatusType;
  depositorName: string;
}

export const PaymentStatus = ({
  paymentStatus,
  depositorName
}: PaymentStatusProps) => {
  const [paymentInfo, setPaymentInfo] = useState(false);

  return (
    <Flex direction="column" gap="sm">
      <Wrapper paymentStatus={paymentStatus}>
        <Flex direction="column" justify="flex-start" align="flex-start">
          <Text typo="label1" color="black">
            {paymentStatus === 'PENDING'
              ? '아직 회비 납부가 확인되지 않았어요.'
              : '회비 납부가 정상적으로 완료되었어요.'}
          </Text>
          <Space height={12} />
          <Text typo="body1" color="sub">
            토스뱅크 1000-8784-8797 김유진
          </Text>
          <Flex gap="sm" justify="flex-start">
            <Text typo="body1" color="sub">
              납입금액
            </Text>
            <Text typo="body1" color="black">
              20,000원
            </Text>
          </Flex>
          <Flex gap="sm" justify="flex-start">
            <Text typo="body1" color="sub">
              입금자명
            </Text>
            <Text typo="body1" color="black">
              {depositorName}
            </Text>
          </Flex>
        </Flex>
        {paymentStatus === 'PENDING' && (
          <PaymentInfo onClick={() => setPaymentInfo(!paymentInfo)} />
        )}
      </Wrapper>
      {paymentInfo && (
        <InformationWrapper
          direction="column"
          align="flex-start"
          gap="sm"
          padding="lg">
          <Text typo="label2" color="black">
            Q. 입금 이후에도 계속 확인되지 않았다고 표시돼요.
          </Text>
          <Text typo="body3" color="sub">
            A. 납입 여부의 경우 운영진이 직접 체크하고 있기 때문에, 변경사항이
            바로 반영되지 않을 수도 있어요.
            <br />
            <br />
            입금일 기준 1영업일 이내로 납입 상태가 변경되지 않는다면, 납입
            여부나 입금자명(이름 + 전화번호 마지막 4자리)을 올바르게 작성했는지
            확인해주세요.
            <br />
            <br />
            문제가 있다면 GDSC 채널톡으로 문의 부탁드려요.
          </Text>
        </InformationWrapper>
      )}
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
`;

const InformationWrapper = styled(Flex)`
  background-color: ${color.white};
  border-radius: 8px;
  border: 1px solid ${color.mono400};
`;

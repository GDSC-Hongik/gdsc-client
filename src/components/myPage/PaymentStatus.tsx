import { PaymentInfo } from '@/assets/PaymentInfo';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
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
    <Flex direction="column" gap={12}>
      <Wrapper paymentStatus={paymentStatus}>
        <Flex direction="column" justify="flex-start" align="flex-start">
          <Text typo="label1" color="black">
            {paymentStatus === 'PENDING'
              ? '아직 회비 납입 승인이 시작되지 않았어요.'
              : '회비 납부가 정상적으로 완료되었어요.'}
          </Text>
          <Space height={12} />
          <Text typo="body1" color="gray4">
            토스뱅크 1000-8784-8797 김유진
          </Text>
          <Flex gap={6} justify="flex-start">
            <Text typo="body1" color="gray4">
              납입금액
            </Text>
            <Text typo="body1" color="black">
              20,000원
            </Text>
          </Flex>
          <Flex gap={6} justify="flex-start">
            <Text typo="body1" color="gray4">
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
          gap={12}
          padding="20px 14px 20px 20px">
          <Text typo="label2" color="black">
            Q. 입금 이후에도 계속 확인되지 않았다고 표시돼요.
          </Text>
          <Text typo="body3" color="gray4">
            A. 납입 여부의 경우 모집 기간 중 지정된 날부터 운영진이 일괄적으로
            승인할 예정이에요.
            <br />
            <br />
            아직 납입 승인을 진행하고 있지 않아요. 승인 프로세스가 시작될 경우
            디스코드 채널을 통해 공지하도록 할게요.
            <br />
            <br />
            조금만 기다려주세요!
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

  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: ${({ paymentStatus }) =>
    paymentStatus === 'PENDING'
      ? `1px solid ${theme.palette.red100}`
      : `1px solid ${theme.palette.blue100}`};
`;

const InformationWrapper = styled(Flex)`
  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: 1px solid ${theme.palette.gray2};
`;

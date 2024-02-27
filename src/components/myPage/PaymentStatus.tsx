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
              ? '아직 회비 납부가 확인되지 않았어요'
              : '회비 납부가 정상적으로 완료되었어요.'}
          </Text>
          <Space height={12} />
          <Text typo="body1" color="gray4">
            토스뱅크 1000-8784-8797 김유진
          </Text>
          <Flex gap={8} justify="flex-start">
            <Text typo="body1" color="gray4">
              납입금액
            </Text>
            <Text typo="body1" color="black">
              20,000원
            </Text>
          </Flex>
          <Flex gap={8} justify="flex-start">
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
            A. 납부 여부의 경우 운영진이 직접 체크하고 있기 때문에, 변경사항이
            바로 반영되지 않을 수도 있어요.
            <br />
            <br />
            입금 후에도 납부 상태가 계속해서 변경되지 않는다면, 입금자명을 (이름
            + 전화번호 마지막 4자리)로 올바르게 작성했는지 확인해주세요.
            <br />
            <br />
            잘못된 부분이 있다면 GDSC 채널톡으로 문의 부탁드려요.
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

import { Applied } from '@/assets/progressBar/Applied';
import { Granted } from '@/assets/progressBar/Granted';
import { Pending } from '@/assets/progressBar/Pending';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import styled from '@emotion/styled';

export type ProgressBarType = 'APPLIED' | 'PENDING' | 'GRANTED';

export const ProgressBar = ({
  currentStatus
}: {
  currentStatus: ProgressBarType;
}) => {
  return (
    <>
      <Wrapper direction="column">
        {currentStatus === 'APPLIED' && <Applied />}
        {currentStatus === 'PENDING' && <Pending />}
        {currentStatus === 'GRANTED' && <Granted />}
      </Wrapper>
      <Space height={8} />
      <TextWrapper justify="space-between">
        <Text typo="label2" color={'black'}>
          가입 신청
        </Text>
        <Text
          typo="label2"
          color={currentStatus !== 'APPLIED' ? 'textBlack' : 'sub'}>
          승인 대기
        </Text>
        <Text
          typo="label2"
          color={currentStatus === 'GRANTED' ? 'textBlack' : 'sub'}>
          가입 승인
        </Text>
      </TextWrapper>
    </>
  );
};

const Wrapper = styled(Flex)`
  padding: 0px 60px;
  box-sizing: border-box;
`;

const TextWrapper = styled(Flex)`
  padding: 0px 42px;
  box-sizing: border-box;
`;

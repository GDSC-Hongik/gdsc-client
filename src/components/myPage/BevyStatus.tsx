import { RightArrow } from '@/assets/RightArrow';
import { Flex, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import styled from '@emotion/styled';

export type BevyStatusType = 'PENDING' | 'VERIFIED';

export const BevyStatus = ({ bevyStatus }: { bevyStatus: BevyStatusType }) => {
  return (
    <Wrapper bevyStatus={bevyStatus} gap={12}>
      <Flex direction="column" align="flex-start" gap={12}>
        <Text typo="label1" color="black">
          {bevyStatus === 'PENDING'
            ? 'GDSC Bevy 가입이 마무리되지 않았어요.'
            : 'GDSC Bevy 가입이 완료되었어요.'}
        </Text>
        <Text typo="body2" color="gray4">
          {bevyStatus === 'PENDING'
            ? '전체 GDSC 이벤트를 확인할 수 있는 플랫폼이에요. 지금 가입해볼까요? '
            : '전 세계 GDSC에서 어떤 이벤트가 진행되고 있는지 직접 확인해보실 수 있어요.'}
        </Text>
      </Flex>
      {/* TODO 디스코드 연동 페이지로 라우팅 */}
      {bevyStatus === 'PENDING' && <RightArrow onClick={() => {}} />}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)<{
  bevyStatus: BevyStatusType;
}>`
  padding: 24px 24px 20px 24px;
  box-sizing: border-box;

  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: ${({ bevyStatus }) =>
    bevyStatus === 'PENDING'
      ? `1px solid ${theme.palette.red100}`
      : `1px solid ${theme.palette.blue100}`};
`;

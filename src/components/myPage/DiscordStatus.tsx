import { Discord } from '@/assets/Discord';
import { RightArrow } from '@/assets/RightArrow';
import { Flex, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

export type DiscordStatusType = 'PENDING' | 'VERIFIED';

export const DiscordStatus = ({
  discordStatus,
  onClick,
  onVerifiedClick
}: {
  discordStatus: DiscordStatusType;
  onClick: MouseEventHandler<HTMLDivElement>;
  onVerifiedClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Wrapper
      discordStatus={discordStatus}
      gap="sm"
      onClick={discordStatus === 'PENDING' ? onClick : onVerifiedClick}>
      <Discord />
      <Flex direction="column" align="flex-start" gap="sm">
        <Text typo="label1" color="discord">
          GDSC Hongik Discord
        </Text>
        <Text typo="body2" color="sub">
          {discordStatus === 'PENDING'
            ? '디스코드 연동이 필요해요.'
            : '디스코드 연동이 완료되었어요.'}
        </Text>
      </Flex>
      {/* TODO 디스코드 연동 페이지로 라우팅 */}
      {discordStatus === 'PENDING' && <RightArrow onClick={() => {}} />}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)<{
  discordStatus: DiscordStatusType;
}>`
  padding: 24px 24px 20px 24px;
  box-sizing: border-box;

  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: ${({ discordStatus }) =>
    discordStatus === 'PENDING'
      ? `1px solid ${theme.palette.red100}`
      : `1px solid ${theme.palette.blue100}`};

  cursor: pointer;

  svg {
    overflow: visible;
  }
`;

import React from 'react';
import { FunnelProps, StepProps } from '@hooks/common/useFunnel';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import styled from '@emotion/styled';
import { Flex } from '../common/Wrapper';
import { DiscordName } from './DiscordName';
import { color } from 'wowds-tokens';
import { DiscordNickName } from './DiscordNickName';

export interface DiscordConnectionProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const DiscordConnection = ({
  steps,
  nextClickHandler,
  Funnel,
  Step
}: DiscordConnectionProps) => {
  return (
    <Wrapper direction="column" justify="space-between">
      <Funnel>
        <Step name="이름 설정">
          <DiscordName onNext={() => nextClickHandler(steps[1])} />
        </Step>

        <Step name="별명 설정">
          <DiscordNickName onNext={() => nextClickHandler(steps[2])} />
        </Step>
      </Funnel>
    </Wrapper>
  );
};

export default DiscordConnection;

const Wrapper = styled(Flex)`
  min-height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;

  background-color: ${color.backgroundAlternative};

  ${media.mobile} {
    width: 100vw;
  }
`;

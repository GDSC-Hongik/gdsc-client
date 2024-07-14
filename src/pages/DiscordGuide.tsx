import { useFunnel } from '@/hooks/common/useFunnel';
import styled from '@emotion/styled';
import { Flex } from '@/components/common/Wrapper';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import { color } from 'wowds-tokens';
import { DiscordDescription } from '@/components/discordGuide/DiscordDescription';
import { AccountDescription } from '@/components/discordGuide/AccountDescription';
import { NameDescription } from '@/components/discordGuide/NameDescription';
import useCustomBack from '@/hooks/common/useCutomBack';

const steps = ['디스코드 설명', '이름 설명', '계정 생성 설명'];

export const DiscordGuide = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);

  const nextClickHandler = (step: string) => {
    setStep(step);
  };

  const handleBack = () => {
    const currentStepIndex = steps.indexOf(currentStep);
    if (currentStepIndex === 0) return;
    setStep(steps[currentStepIndex - 1]);
  };

  useCustomBack(handleBack);

  return (
    <>
      <Wrapper direction="column" justify="space-between">
        <Funnel>
          <Step name="디스코드 설명">
            <DiscordDescription onNext={() => nextClickHandler(steps[1])} />
          </Step>

          <Step name="이름 설명">
            <NameDescription onNext={() => nextClickHandler(steps[2])} />
          </Step>
          <Step name="계정 생성 설명">
            <AccountDescription />
          </Step>
        </Funnel>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Flex)`
  min-height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;

  padding-top: 40px;
  padding-bottom: 28px;
  background-color: ${color.backgroundAlternative};

  ${media.mobile} {
    width: 100vw;
  }
`;

import { useFunnel } from '@/hooks/common/useFunnel';
import styled from '@emotion/styled';
import { DiscordName } from '@/components/discordConnect/DiscordName';
import { DiscordNickName } from '@/components/discordConnect/DiscordNickName';
import { JoinServer } from '@/components/discordConnect/JoinServer';
import { Flex } from '@/components/common/Wrapper';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import { color } from 'wowds-tokens';
import { ServerConnect } from '@/components/discordConnect/ServerConnect';
import { CompleteDiscordConnect } from '@/components/discordConnect/CompleteDiscordConnect';
import { useForm, FormProvider } from 'react-hook-form';
import { DiscordFormValues } from '@/types/discord';
import useCustomBack from '@/hooks/common/useCutomBack';

const steps = ['이름 설정', '별명 설정', '서버 합류', '서버 연동', '연동 완료'];

export const DiscordConnect = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);

  const methods = useForm<DiscordFormValues>({
    defaultValues: {
      discordUsername: '',
      discordNickname: '',
      code: ''
    }
  });
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
        <FormProvider {...methods}>
          <Funnel>
            <Step name="이름 설정">
              <DiscordName onNext={() => nextClickHandler(steps[1])} />
            </Step>

            <Step name="별명 설정">
              <DiscordNickName onNext={() => nextClickHandler(steps[2])} />
            </Step>
            <Step name="서버 합류">
              <JoinServer onNext={() => nextClickHandler(steps[3])} />
            </Step>
            <Step name="서버 연동">
              <ServerConnect onNext={() => nextClickHandler(steps[4])} />
            </Step>
            <Step name="연동 완료">
              <CompleteDiscordConnect />
            </Step>
          </Funnel>
        </FormProvider>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Flex)`
  min-height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;

  background-color: ${color.backgroundAlternative};
  padding-top: 40px;
  padding-bottom: 28px;
  ${media.mobile} {
    width: 100vw;
  }
`;

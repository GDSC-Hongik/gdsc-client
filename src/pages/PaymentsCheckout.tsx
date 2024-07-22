import { useFunnel } from '@/hooks/common/useFunnel';
import { Payments } from '@/components/payments/Payments';
import { PaymentsWidget } from '@/components/payments/PaymentsWidget';
import useCustomBack from '@/hooks/common/useCutomBack';

const steps = ['회비 납부', '결제 위젯'];

export const PaymentsCheckout = () => {
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
    <Funnel>
      <Step name={steps[0]}>
        <Payments onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name={steps[1]}>
        <PaymentsWidget />
      </Step>
    </Funnel>
  );
};

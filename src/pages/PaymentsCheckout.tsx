import { nanoid } from 'nanoid';
import { useQuery } from '@tanstack/react-query';

import memberApi from '@/apis/member/memberApi';
import { useFunnel } from '@/hooks/common/useFunnel';
import { Payments } from '@/components/payments/Payments';
import { PaymentsWidget } from '@/components/payments/PaymentsWidget';
import useCustomBack from '@/hooks/common/useCutomBack';
import { useProduct } from '@/hooks/zustand/useProduct';
import usePostFreeOrder from '@/hooks/mutation/usePostFreeOrder';

const steps = ['회비 납부', '결제 위젯'];

export const PaymentsCheckout = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);
  const { amount, discount, totalAmount, issuedCouponId } = useProduct();
  const { postFreeOrder } = usePostFreeOrder(totalAmount);
  const { data: dashboard } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  const nextClickHandler = (step: string) => {
    if (!totalAmount && dashboard) {
      const id = nanoid();
      postFreeOrder({
        orderNanoId: id,
        membershipId: dashboard.currentMembership.membershipId,
        issuedCouponId: issuedCouponId,
        totalAmount: amount,
        discountAmount: discount,
        finalPaymentAmount: totalAmount
      });
      return;
    }
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

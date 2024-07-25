import Stepper from 'wowds-ui/Stepper';
import { User, UserRoleType } from '@/types/user';
import styled from '@emotion/styled';

const MemberStatusStepper = ({ member }: { member: User }) => {
  const { role } = member;

  const convertRoleToStep = (role: UserRoleType) => {
    switch (role) {
      case 'GUEST':
        return 1;
      case 'ASSOCIATE':
        return 2;
      default:
        return 3;
    }
  };
  return (
    <StepperContainer>
      <Stepper
        maxStep={3}
        step={convertRoleToStep(role)}
        labels={[
          { value: 1, label: '게스트' },
          { value: 2, label: '준회원' },
          { value: 3, label: '정회원' }
        ]}
      />
    </StepperContainer>
  );
};

export default MemberStatusStepper;

const StepperContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 2.875rem;
`;

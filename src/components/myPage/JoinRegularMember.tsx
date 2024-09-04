import { Text, Flex } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { Status } from '@/types/status';
import { User } from '@/types/user';
import { useNavigate } from 'react-router-dom';
import Box from 'wowds-ui/Box';

const JoinRegularMember = ({
  paymentStatus,
  member
}: {
  paymentStatus?: Status;
  member: User;
}) => {
  const navigate = useNavigate();

  const handleClickRoute = () => {
    if (paymentStatus !== 'UNSATISFIED') {
      return;
    }
    navigate(RoutePath.PaymentsCheckout);
  };
  return (
    <Flex
      gap="sm"
      justify="flex-start"
      direction="column"
      align="flex-start"
      onClick={handleClickRoute}>
      <Text typo="h2" color="textBlack">
        정회원 가입 조건
      </Text>
      {paymentStatus ? (
        <Box
          text={
            paymentStatus === 'UNSATISFIED'
              ? '이번 학기 회비를 납부해주세요.'
              : '이번 학기 회비를 납부했어요.'
          }
          variant={paymentStatus === 'UNSATISFIED' ? 'arrow' : 'text'}
          status={paymentStatus === 'UNSATISFIED' ? 'error' : 'success'}
          subText={
            paymentStatus === 'UNSATISFIED'
              ? '카드·계좌이체 등 여러 결제수단을 지원해요.'
              : undefined
          }
        />
      ) : (
        member.role === 'REGULAR' && (
          <Box
            text="이번 학기 회비를 납부했어요."
            variant="text"
            status="success"
          />
        )
      )}
    </Flex>
  );
};

export default JoinRegularMember;

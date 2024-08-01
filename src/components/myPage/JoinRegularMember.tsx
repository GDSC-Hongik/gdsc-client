import { Text, Flex } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';
import Box from 'wowds-ui/Box';

const JoinRegularMember = ({
  paymentStatus
}: {
  paymentStatus: 'PENDING' | 'SATISFIED';
}) => {
  const navigate = useNavigate();

  const handleClickRoute = () => {
    if (paymentStatus !== 'PENDING') {
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
      <Box
        text={
          paymentStatus === 'PENDING'
            ? '이번 학기 회비를 납부해주세요.'
            : '이번 학기 회비를 납부했어요.'
        }
        variant={paymentStatus === 'PENDING' ? 'arrow' : 'text'}
        status={paymentStatus === 'PENDING' ? 'error' : 'success'}
        subText={
          paymentStatus === 'PENDING'
            ? '이제 카드·페이 등 여러 결제수단을 지원해요.'
            : undefined
        }
      />
    </Flex>
  );
};

export default JoinRegularMember;

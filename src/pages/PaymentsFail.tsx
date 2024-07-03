import styled from '@emotion/styled';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { Button } from '@/components/common/Button';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';
import GlobalSize from '@/constants/globalSize';
import { theme, media } from '@/styles';

export function PaymentsFail() {
  const navigate = useNavigate();

  return (
    <Wrapper direction="column"  justify='space-between'>
      <Flex  direction="column"gap={20} >
        <Heading typo="heading3" color="black">
          회비 결제 실패
        </Heading>
        <Flex direction="column" align='start' >
          <Text>
            회비 결제에 실패했어요.
          </Text>
          <Text>
            결제 화면으로 다시 돌아가서 진행해주세요.
          </Text>
        </Flex>
      </Flex>
      <Button onClick={()=>navigate(RoutePath.PaymentsCheckout)}>돌아가기</Button>
      <Space height={20}/>
    </Wrapper>
  );
}

const Heading = styled(Text)`
  padding-top: 40px;
`;

const Wrapper = styled(Flex)`
  box-sizing: border-box;

  height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  padding: 0px 16px;

  background-color: ${theme.palette.gray1};

  ${media.mobile} {
    width: 100vw;
  }
`;

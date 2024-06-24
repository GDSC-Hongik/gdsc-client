import { Flex, Space, Text } from '@/components/common/Wrapper';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';

import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import RoutePath from '@/routes/routePath';

export const Payments = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_MEMBERS_ME
  });

  const handleClickRoute = () => {
    navigate(RoutePath.PaymentsCheckout);
  };

  return (
    <Wrapper direction="column" justify="space-between">
      <Flex direction="column" gap={40}>
        <Heading typo="heading3" color="black">
          회비 납부
        </Heading>
        <Flex justify="flex-start" direction="column" align="flex-start">
          <Text typo="heading4" color="black">
            결제 항목
          </Text>
          <Space height={19} />
          <Box>
            <Flex direction="column" align="flex-start" gap={4}>
              <Text typo="label1" color="black">
                2024년 1학기 정회원 회비
              </Text>
              <Space height={4} />
              <Flex justify="flex-start" gap={4}>
                <Text typo="body1" color="gray4">
                  금액
                </Text>
                <Text typo="body1" color="black">
                  20,000원
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" gap={20}>
        <Box>
          <Flex direction="column" gap={12}>
            <Flex justify="space-between">
              <Text typo="label2" color="black">
                총 회비
              </Text>
              <Text typo="body1" color="black">
                20,000원
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text typo="label2" color="black">
                총 할인금액
              </Text>
              <Text typo="body1" color="black">
                0원
              </Text>
            </Flex>
            <Divider />
            <Flex justify="space-between">
              <Text typo="body1" color="black">
                총 결제금액
              </Text>
              <Text typo="heading4" color="black">
                15,000원
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Button onClick={handleClickRoute}>결제하기</Button>
        <Space height={38} />
      </Flex>
    </Wrapper>
  );
};

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

const Box = styled(Flex)`
  padding: 24px 24px 20px 24px;
  box-sizing: border-box;

  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: 1px solid ${theme.palette.blue100};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: ${theme.palette.gray2};
`;

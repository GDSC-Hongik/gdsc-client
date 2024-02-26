import { Flex, Space, Text } from '@/components/common/Wrapper';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ProgressBar } from '@/components/myPage/ProgressBar';
import { PaymentStatus } from '@/components/myPage/PaymentStatus';
import { DiscordStatus } from '@/components/myPage/DiscordStatus';
import { BevyStatus } from '@/components/myPage/BevyStatus';
import { Privacy } from '@/components/myPage/Privacy';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/auth/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';

// TODO
// 2. 각 버튼 onClick 이벤트 핸들러 등록
export const MyPage = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_MEMBERS_ME
  });

  return (
    <Wrapper direction="column" justify="flex-start">
      <Space height={40} />
      <Text typo="heading3" color="black">
        {data?.name} 님
      </Text>
      <Space height={12} />
      <Text
        onClick={() => {}}
        typo="label2"
        color="gray4"
        css={css`
          text-decoration: underline;
          cursor: pointer;
        `}>
        로그아웃
      </Text>
      <Space height={24} />
      <Flex justify="flex-start" direction="column" align="flex-start">
        <Text typo="heading4" color="black">
          신청 상태
        </Text>
        <Space height={19} />
        <ProgressBar currentStatus={data?.registrationStatus!} />
        <Space height={48} />
        <Text typo="heading4" color="black">
          가입 조건
        </Text>
        <Space height={15} />
        <PaymentStatus
          paymentStatus={data?.paymentStatus!}
          depositorName="김홍익"
        />
        <Space height={12} />
        <DiscordStatus
          discordStatus={data?.discordStatus!}
          onClick={() => navigate('/discord')}
        />
        <Space height={12} />
        <BevyStatus
          bevyStatus={data?.bevyStatus!}
          onClick={() => navigate('/bevy')}
        />
        <Space height={48} />
        <Text typo="heading4" color="black">
          가입 정보
        </Text>
        <Space height={12} />
        <Text typo="body1" color="gray4">
          이미 제출한 기존 정보를 수정해야 할 경우,
          <br />
          GDSC 채널톡으로 문의 주세요.
        </Text>
        <Space height={15} />
        <Privacy
          studentId={data?.studentId!}
          department={data?.department!}
          phone={data?.phone!}
          email={data?.email!}
        />
      </Flex>
      <Space height={104} />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  min-height: 100vh;
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;

  background-color: ${theme.palette.gray1};

  ${media.mobile} {
    width: 100vw;
  }
`;

import { Flex, Space, Text } from '@/components/common/Wrapper';

import { typography, color } from 'wowds-tokens';
import BaiscUserInfo from '@/components/myPage/BasicUserInfo';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CurrentUserInfo from '@/components/myPage/BasicUserInfo';
import { ProgressBar } from '@/components/myPage/ProgressBar';
import { PaymentStatus } from '@/components/myPage/PaymentStatus';
import { color } from 'wowds-tokens';
import { DiscordStatus } from '@/components/myPage/DiscordStatus';
import { BevyStatus } from '@/components/myPage/BevyStatus';
import { Privacy } from '@/components/myPage/Privacy';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';
import { ApproveBox } from '@/components/myPage/ApproveBox';
import { logout } from '@/utils/auth';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { countTextInObject } from '@/utils/mypage/countTextInObject';
import RoutePath from '@/routes/routePath';

export const MyPage = () => {
  const { clearLandingStatus } = useLandingStatus();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  //TODO: 추후 로딩 스피너 삽입할 것
  if (!data) {
    return <div> 로딩중 ...</div>;
  }

  const { member } = data;
  console.log(data);
  return (
    <Wrapper direction="column" justify="flex-start" gap={40}>
      <Space height={20} />
      <BaiscUserInfo member={member} />

      <Flex justify="flex-start" direction="column" align="flex-start">
        <p style={typography.h2} color="black">
          현재 회원 상태
        </p>
        <Space height={19} />
        {/* <ProgressBar currentStatus={data?.!} /> */}
        <Space height={24} />
        {/* <ApproveBox
          count={countTextInObject(data, 'VERIFIED')}
          registrationStatus={data?.registrationStatus!}
        /> */}
        <Space height={48} />
        <Text typo="label1" color="black">
          가입 조건
        </Text>
        <Space height={15} />
        {/* <PaymentStatus
          paymentStatus={data?.currentMembership.regularRequirement.paymentSatisfied!}
          // depositorName={data?.depositorName!}
        /> */}
        <Space height={12} />
        {/* <DiscordStatus
          discordStatus={data?.discordStatus!}
          onClick={() => navigate(RoutePath.Discord)}
          onVerifiedClick={() => window.open('https://discord.gg/dSV6vSEuGU')}
        /> */}
        <Space height={12} />
        {/* <BevyStatus
          bevyStatus={data?.bevyStatus!}
          onClick={() => navigate(RoutePath.Bevy)}
        /> */}
        <Space height={48} />
        {data ? (
          <>
            <Text typo="label1" color="black">
              내 정보
            </Text>
            <Space height={12} />
            <Text typo="body1" color="sub">
              이미 제출한 기존 정보를 수정해야 할 경우,
              <br />
              GDSC 채널톡으로 문의 주세요.
            </Text>
            <Space height={15} />
            {/* <Privacy user={data} /> */}
          </>
        ) : null}
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

  background-color: ${color.mono150};

  ${media.mobile} {
    width: 100vw;
  }
`;

const Container = styled(Flex)``;

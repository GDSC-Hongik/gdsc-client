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
import memberApi from '@/apis/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';
import { ApproveBox } from '@/components/myPage/ApproveBox';
import { logout } from '@/utils/auth';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { countTextInObject } from '@/utils/mypage/countTextInObject';
import RoutePath from '@/routes/routePath';

export const MyPage = () => {
  const navigate = useNavigate();
  const { clearLandingStatus } = useLandingStatus();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  const handleLogoutClick = () => {
    clearLandingStatus();
    logout();

    navigate('/');
  };

  return (
    <Wrapper direction="column" justify="flex-start">
      <Space height={40} />
      <Text typo="heading3" color="black">
        {data?.basicInfo.name} 님
      </Text>
      <Space height={12} />
      <Text
        onClick={handleLogoutClick}
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
        {/* <ProgressBar currentStatus={data?.!} /> */}
        <Space height={24} />
        {/* <ApproveBox
          count={countTextInObject(data, 'VERIFIED')}
          registrationStatus={data?.registrationStatus!}
        /> */}
        <Space height={48} />
        <Text typo="heading4" color="black">
          가입 조건
        </Text>
        <Space height={15} />
        <PaymentStatus
          paymentStatus={data?.currentMembership.regularRequirement.paymentSatisfied!}
          // depositorName={data?.depositorName!}
        />
        <Space height={12} />
        <DiscordStatus
          discordStatus={data?.discordStatus!}
          onClick={() => navigate(RoutePath.Discord)}
          onVerifiedClick={() => window.open('https://discord.gg/dSV6vSEuGU')}
        />
        <Space height={12} />
        <BevyStatus
          bevyStatus={data?.bevyStatus!}
          onClick={() => navigate(RoutePath.Bevy)}
        />
        <Space height={48} />
        {data ? (
          <>
            <Text typo="heading4" color="black">
              내 정보
            </Text>
            <Space height={12} />
            <Text typo="body1" color="gray4">
              이미 제출한 기존 정보를 수정해야 할 경우,
              <br />
              GDSC 채널톡으로 문의 주세요.
            </Text>
            <Space height={15} />
            <Privacy user={data} />
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

  background-color: ${theme.palette.gray1};

  ${media.mobile} {
    width: 100vw;
  }
`;

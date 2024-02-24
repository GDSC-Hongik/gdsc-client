import { Flex, Space, Text } from '@/components/common/Wrapper';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ProgressBar } from '@/components/myPage/ProgressBar';
import { PaymentStatus } from '@/components/myPage/PaymentStatus';
import { DiscordStatus } from '@/components/myPage/DiscordStatus';
import { BevyStatus } from '@/components/myPage/BevyStatus';
import { Privacy } from '@/components/myPage/Privacy';

// TODO
// 1. 헤더 넣기
// 2. 유저 정보 하드코딩 된 부분 수정
// 3. 각 버튼 onClick 이벤트 핸들러 등록
export const MyPage = () => {
  return (
    <Wrapper direction="column" justify="flex-start">
      {/* Header */}
      <Space height={67} />
      <Space height={35} />
      <Text typo="heading3" color="black">
        강나연 님
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
        <ProgressBar currentStatus="PENDING" />
        <Space height={48} />
        <Text typo="heading4" color="black">
          가입 조건
        </Text>
        <Space height={15} />
        <PaymentStatus paymentStatus="PENDING" depositorName="김홍익" />
        <Space height={12} />
        <PaymentStatus paymentStatus="VERIFIED" depositorName="김홍익" />
        <Space height={12} />
        <DiscordStatus discordStatus="PENDING" />
        <Space height={12} />
        <DiscordStatus discordStatus="VERIFIED" />
        <Space height={12} />
        <BevyStatus bevyStatus="VERIFIED" />
        <Space height={12} />
        <BevyStatus bevyStatus="PENDING" />
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
          studentId="C011001"
          department="컴퓨터공학과"
          phone="01075546670"
          email="nay35n@gmail.com"
        />
      </Flex>
      <Space height={104} />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  min-height: 100vh;
  width: 390px;
  margin: 0px -16px;
  padding: 0px 16px;

  background-color: ${theme.palette.gray1};

  ${media.mobile} {
    width: 100vw;
  }
`;

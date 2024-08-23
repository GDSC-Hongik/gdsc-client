import { OnboardingArrow } from '@/assets/OnboardingArrow';
import {
  JoinText,
  OnboardingLogo1,
  OnboardingLogo2
} from '@/assets/Onboarding';
import { isAuthenticated } from '@/utils/auth';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { InformationBox } from '@/components/onboarding/InformationBox';
import { color, typography } from 'wowds-tokens';
import { media } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import RoutePath from './routes/routePath';

const IMG_SRC = [
  '/onboarding/1.png',
  '/onboarding/2.png',
  '/onboarding/3.png',
  '/onboarding/4.png',
  '/onboarding/5.png',
  '/onboarding/6.png',
  '/onboarding/7.png',
  '/onboarding/logo.png'
];

function App() {
  const navigate = useNavigate();

  return (
    <Wrapper direction="column">
      <BlueSection
        direction="column"
        justify="center"
        align="flex-start"
        css={css`
          padding: 8px 0px 30px 16px;
          position: relative;
        `}>
        <OnboardingLogo1 />
        <Flex
          direction="column"
          justify="flex-end"
          css={css`
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%, 0%);
          `}>
          <OnboardingArrow />
        </Flex>
      </BlueSection>
      <Space height={40} />
      <Introduction direction="column">
        <Text typo="h1" color="primary">
          GDSC?
        </Text>
        <Space height={8} />
        <Text
          typo="body1"
          color="black"
          css={css`
            text-align: center;
            word-break: keep-all;
          `}>
          GDSC는 Google Developers에서 제공하는 프로그램을 통해 운영되는 대학교
          기반의 개발자 커뮤니티 그룹이에요.
          <br />
          개발자로서 성장하는 데 관심이 있는 학부생이라면 누구나 참여할 수
          있어요.
          <br />
          GDSC의 목표는 전 세계의 대학생 개발자들이 구글 관련 기술 혹은
          프로그래밍 실력을 높이고 지역 사회와 협력하여 실제 문제를 해결하도록
          성장하는 것이에요.
        </Text>
      </Introduction>
      <Space height={80} />
      <Text typo="h1" color="textBlack">
        GDSC Hongik
      </Text>
      <Space height={24} />
      <Img src={IMG_SRC[0]} height={200} />
      <Space height={16} />
      <Flex gap="md">
        <Img src={IMG_SRC[1]} width={'auto'} height={120} />
        <Img src={IMG_SRC[2]} width={'auto'} height={120} />
      </Flex>
      <Space height={16} />
      <Img src={IMG_SRC[3]} height={200} />
      <Space height={24} />
      <Text
        typo="body1"
        color="black"
        css={css`
          text-align: center;
          word-break: keep-all;
        `}>
        GDSC Hongik Open Community는 학생 개발자를 위한 홍익대학교의 개발
        커뮤니티예요.
        <br />
        “더 나은 환경을, 더 나은 학우에게” 제공하는 것을 목표로, 초심자들이
        개발에 관심을 가지고 입문할 수 있도록 기초 학술 프로그램을 운영하며,
        다양한 이벤트와 컨텐츠를 통해 학회원들과 소통할 수 있는 네트워킹
        플랫폼을 제공하고 있어요.
      </Text>
      <Space height={80} />
      <Text typo="h1" color="black">
        지금 바로 함께해요
      </Text>
      <Space height={24} />
      <Text
        typo="body1"
        color="black"
        css={css`
          text-align: center;
          word-break: keep-all;
        `}>
        이번 학기 GDSC Hongik은 변화와 발전에 초점을 두어, 현재에 안주하지 않고
        변화를 통해 구성원이 함께 발전시켜나갈 수 있는 커뮤니티를 운영하려 해요.
      </Text>
      <Space height={24} />
      <Flex direction="column" gap="md">
        <Img src={IMG_SRC[4]} width={'auto'} height={184} />
        <Img src={IMG_SRC[5]} width={'auto'} height={184} />
        <Img src={IMG_SRC[6]} width={'auto'} height={184} />
      </Flex>
      <Space height={24} />
      <Text
        typo="body1"
        color="black"
        css={css`
          text-align: center;
          word-break: keep-all;
        `}>
        초심자들을 위한 기초 학술 프로그램부터, 다양한 이벤트와 컨텐츠를 통해
        학회원들과 소통할 수 있는 네트워킹 플랫폼을 제공할 예정이에요.
      </Text>
      <Space height={48} />
      <Flex direction="column" gap="sm">
        <InformationBox
          title="모집 기간"
          description="8월 26일(월) ~ 8월 30일(금)"
        />
        <InformationBox
          title="지원 자격"
          description="학과, 전공, 학년 무관 홍익대학교 학생이라면"
          description2="누구나 활동할 수 있어요."
        />
        <InformationBox
          title="지원 시 유의사항"
          description="GDSC 커뮤니티 가이드라인 및 오픈 커뮤니티 가이드라인을 준수해야 해요."
        />
      </Flex>
      <Space height={48} />
      <BlueSection direction="column" justify="space-between">
        <Space height={60} />
        <JoinText />
        <OnboardingLogo2 />
        <Space height={25} />
        <ApplyButton
          onClick={() => {
            if (isAuthenticated()) navigate(RoutePath.Dashboard);
            else navigate(RoutePath.GithubSignin);
          }}>
          가입하기
        </ApplyButton>
        <Space height={40} />
      </BlueSection>
      <Space height={48} />
      <Text typo="h1" color="black">
        자주 묻는 질문
      </Text>
      <Space height={24} />
      <Flex direction="column" gap="sm">
        <InformationBox
          title="Q. 서류, 면접 전형이 있나요?"
          description="A. 아니요. 본 서비스를 통해 가입하면 홍익대학교 학생 누구나 바로 커뮤니티에서 활동할 수 있어요."
        />
        <InformationBox
          title="Q. 저는 코딩을 하나도 모르는 새내기인데, 따라갈 수 있나요?"
          description="A. 당연하죠!"
          description2="기초 스터디는 개발에 처음 입문하는 사람들을 위해서 만들어진 커리큘럼으로 강의가 진행돼요. 학습자 분들이 차근차근 따라올 수 있게끔 주차별 미션과 담당 멘토를 통해 도와드릴 예정이니, 부담갖지 않으셔도 돼요!
          스터디에 참여하지 못하더라도, 사람들과 네트워킹하며 친분을 쌓아가는 것도 언제든지 환영입니다!"
        />
        <InformationBox
          title="Q. 다른 동아리, 학회와 병행 가능한가요?"
          description="A. 가능해요!"
          description2="GDSC Hongik은 Open Community 체제로 운영되기에 모든 활동에 자율적으로 참여하실 수 있어요. 어딘가에 너무 오랫동안, 깊게 소속되지 않고, 가볍게 개발을 배우며 다른 사람들과 교류하고 싶은 분들에게 좋은 곳이에요."
        />
        <InformationBox
          title="Q. GDSC Hongik에 대해 궁금한 것이 있어요!"
          description="A. 이번 학기부터는 채널톡이 아닌, GDSC Hongik 카카오톡 채널을 통해 문의할 수 있어요!"
          description2="카카오톡 채널을 추가하면 더욱 간편하게 이용할 수 있고, 추후 안내 사항을 빠르게 전달 받을 수 있어요."
        />
      </Flex>
      <Space height={59} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(Flex)`
  text-align: center;
  box-sizing: border-box;

  width: ${GlobalSize.width};
  background-color: #f8f8f8;
  padding: 0px 16px;

  ${media.mobile} {
    width: 100vw;
  }
`;

const BlueSection = styled(Flex)`
  height: calc(100vh - ${GlobalSize.header});
  width: ${GlobalSize.width};
  background-color: ${color.primary};

  box-sizing: border-box;

  ${media.mobile} {
    width: 100vw;
  }
`;

const Introduction = styled(Flex)`
  width: 100%;
  border-radius: 8px;

  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  padding: 43px 19px 34px 19px;
`;

const Img = styled.img`
  width: 100%;

  border-radius: 8px;
  object-fit: cover;
`;

const ApplyButton = styled.button`
  height: 44px;
  width: calc(100% - 32px);
  border-radius: 100px;

  background-color: ${color.white};
  color: ${color.primary};
  ${typography.h2};

  flex-shrink: 0;

  :disabled {
    background-color: ${color.mono400};
    color: ${color.mono100};
  }
`;

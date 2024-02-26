import { OnboardingArrow } from '@/assets/OnboardingArrow';
import { OnboardingLogo1, OnboardingLogo2 } from '@/assets/Onboarding';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { InformationBox } from '@/components/onboarding/InformationBox';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import GlobalSize from '@/constants/globalSize';
import { useNavigate } from 'react-router-dom';
import { checkAuthentication } from '@/utils/auth';

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
          `}>
          <OnboardingArrow />
        </Flex>
      </BlueSection>
      <Space height={40} />
      <Introduction direction="column">
        <Text typo="heading3" color="blue100">
          GDSC?
        </Text>
        <Space height={8} />
        <Text typo="body1" color="black">
          GDSC는 Google Developers에서
          <br />
          제공하는 프로그램을 통해 운영되는 <br />
          대학교 기반의 개발자 커뮤니티 그룹입니다. <br />
          개발자로서 성장하는 데 관심이 있는 학부생이라면 <br />
          누구나 참여할 수 있습니다. <br />
          GDSC의 목표는 전 세계의 대학생 개발자들이 <br />
          구글 관련 기술 혹은 프로그래밍 실력을 높이고 <br />
          지역 사회와 협력하여 실제 문제를 해결하도록 <br />
          성장하는 것입니다.
        </Text>
      </Introduction>
      <Space height={80} />
      <Text typo="heading3" color="black">
        GDSC Hongik
      </Text>
      <Space height={24} />
      <Img src={IMG_SRC[0]} height={200} />
      <Space height={16} />
      <Flex gap={16}>
        <Img src={IMG_SRC[1]} width={'auto'} height={120} />
        <Img src={IMG_SRC[2]} width={'auto'} height={120} />
      </Flex>
      <Space height={16} />
      <Img src={IMG_SRC[3]} height={200} />
      <Space height={24} />
      <Text typo="body1" color="black">
        GDSC Hongik Open Community는 학생
        <br />
        개발자를 위한 홍익대학교의 개발 커뮤니티입니다.
        <br /> 초심자들이 개발에 관심을 가지고 입문할 수 있도록
        <br />
        기초 학술 프로그램을 운영하며, 다양한 이벤트와 <br />
        컨텐츠를 통해 학회원들과 소통할 수 있는 네트워킹 <br />
        플랫폼을 제공하고 있습니다.
      </Text>
      <Space height={80} />
      <Text typo="heading3" color="black">
        지금 바로 함께해요
      </Text>
      <Space height={24} />
      <Text typo="body1" color="black">
        GDSC의 목표는 전 세계의 대학생 개발자들이 <br />
        구글 관련 기술 혹은 프로그래밍 실력을 높이고 <br />
        지역 사회와 협력하여 실제 문제를 해결하도록 <br />
        성장하는 것입니다.
      </Text>
      <Space height={24} />
      <Flex direction="column" gap={16}>
        <Img src={IMG_SRC[4]} width={'auto'} height={184} />
        <Img src={IMG_SRC[5]} width={'auto'} height={184} />
        <Img src={IMG_SRC[6]} width={'auto'} height={184} />
      </Flex>
      <Space height={24} />
      <Text typo="body1" color="black">
        GDSC의 이러한 비전에 맞추어, GDSC Hongik은
        <br />
        초심자들이 개발에 관심을 가지고 입문할 수 있도록
        <br />
        기초 학술 프로그램을 운영하며, 다양한 이벤트와
        <br />
        콘텐츠를 통해 학회원들과 소통할 수 있는 네트워킹
        <br />
        플랫폼을 제공하고 있습니다.
      </Text>
      <Space height={48} />
      <Flex direction="column" gap={12}>
        <InformationBox
          title="모집 기간"
          description="1차 지원 기간: 2월 27일 ~ 3월 1일"
          description2="2차 지원 기간: 3월 4일 ~ 3월 8일"
        />
        <InformationBox
          title="지원 자격"
          description="학과, 전공, 학년 무관 홍익대학교 학생이라면"
          description2="누구나 활동할 수 있습니다."
        />
        <InformationBox
          title="지원 시 유의사항"
          description="GDSC 커뮤니티 가이드라인 및 오픈 커뮤니티 가이드라인을 준수해야 합니다. 또한, 학기 당 2만원의 회비가 있습니다."
        />
      </Flex>
      <Space height={48} />
      <BlueSection direction="column" justify="space-between">
        <Space height={60} />
        <Text typo="heading1" color="white">
          Join Us NOW!
        </Text>
        <OnboardingLogo2 />
        <Space height={25} />
        <ApplyButton
          onClick={() =>
            checkAuthentication() ? navigate('/mypage') : navigate('/auth')
          }>
          지원하기
        </ApplyButton>
        <Space height={40} />
      </BlueSection>
      <Space height={48} />
      <Text typo="heading3" color="black">
        자주 묻는 질문
      </Text>
      <Space height={24} />
      <Flex direction="column" gap={12}>
        <InformationBox
          title="Q. 서류, 면접 전형이 있나요?"
          description="A. 아니요! 가입 절차만 지켜주시면 홍익대학교 학생 누구나 가입이 가능합니다!"
        />
        <InformationBox
          title="Q. 다른 동아리, 학회와 병행 가능한가요?"
          description="A. 가능합니다! GDSC Hongik은 커뮤니티라는 이름에 걸맞게 모든 활동에 자율적으로 참여할 수 있습니다. 어딘가에 너무 오랫동안, 깊게 소속되지 않고, 가볍게 개발을 배우며 다른 사람들과 교류하고 싶은 분들에게 좋은 곳이에요."
        />
        <InformationBox
          title="Q. 저는 코딩을 하나도 모르는 새내기인데, 따라갈 수 있나요?"
          description="A. 당연하죠! 기초 스터디는 개발에 처음 입문하는 사람들과 이번에 코딩을 처음 접하는 새내기들을 위해서 만들어진 커리큘럼으로 강의가 진행돼요."
        />
      </Flex>
      <Space height={59} />
      <img src={IMG_SRC[7]} width={236} height={80} />
      <Space height={26} />
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
  background-color: ${theme.palette.blue100};

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

  background-color: ${theme.palette.white};
  color: ${theme.palette.blue100};
  ${theme.typo.heading4};

  flex-shrink: 0;
`;

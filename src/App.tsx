import { OnboardingArrow } from '@/assets/OnboardingArrow';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { InformationBox } from '@/components/onboarding/InformationBox';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';

function App() {
  return (
    <Wrapper direction="column">
      {/* TODO Header */}
      <Space height={54} />
      <BlueSection direction="column" justify="space-between">
        <Flex direction="column">
          <Text typo="heading2" color="white">
            Google Developer
            <br />
            Student Clubs
          </Text>
          <Space height={20} />
          <Text typo="heading5" color="white">
            Hongik University
          </Text>
        </Flex>
        <OnboardingArrow />
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
      <Img />
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
        <InformationBox title="모집 기간" description="언제부터~언제까지" />
        <InformationBox
          title="지원 자격"
          description="학과, 전공, 학년 무관 홍익대학교 학생이라면 
누구나 활동할 수 있습니다."
        />
        <InformationBox
          title="지원 시 유의사항"
          description="GDSC 커뮤니티 가이드라인 및 오픈 커뮤니티 
        가이드라인을 준수해야 합니다. 또한, 학기 당 
        2만원의 회비가 있습니다."
        />
      </Flex>
      <Space height={48} />
      <BlueSection direction="column" justify="space-between">
        <Text typo="heading2" color="white">
          Google Developer
          <br />
          Student Clubs
        </Text>
        <ApplyButton>지원하기</ApplyButton>
      </BlueSection>
      <Space height={48} />
      <Text typo="heading3" color="black">
        자주 묻는 질문
      </Text>
      <Space height={24} />
      <Flex direction="column" gap={12}>
        <InformationBox title="질문" description="답변" />
        <InformationBox title="질문" description="답변" />
        <InformationBox title="질문" description="답변" />
        <InformationBox title="질문" description="답변" />
      </Flex>
      <Space height={92} />
      <Space height={39} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled(Flex)`
  text-align: center;
  box-sizing: border-box;

  width: 390px;
  background-color: #f8f8f8;
  padding: 0px 16px;

  ${media.mobile} {
    width: 100vw;
  }
`;

const BlueSection = styled(Flex)`
  height: calc(100vh - 54px);
  width: 390px;
  background-color: ${theme.palette.blue100};

  padding: 229px 0px 30px 0px;
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
  height: 353px;

  background-color: #d9d9d9;

  border-radius: 8px;
`;

const ApplyButton = styled.button`
  height: 44px;
  width: calc(100% - 32px);
  border-radius: 100px;

  background-color: ${theme.palette.white};
  color: ${theme.palette.blue100};
  ${theme.typo.heading4};
`;

import bevyApi from '@/apis/bevy/bevyApi';
import { Circle } from '@/assets/Circle';
import { Button } from '@/components/common/Button';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { StepInformation } from '@/components/joinDiscord/StepInformation';
import { color } from 'wowds-tokens';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoutePath from '@/routes/routePath';

export const Bevy = () => {
  const navigate = useNavigate();

  const postBevyLinkMutation = useMutation({
    mutationFn: bevyApi.POST_LINK_BEVY,
    onSuccess: () => {
      toast('bevy 연동이 완료되었습니다.');
      navigate(RoutePath.Dashboard);
    }
  });

  const handleLinkButtonClick = () => {
    postBevyLinkMutation.mutate();
  };

  return (
    <Wrapper direction="column" justify="flex-start">
      <Space height={40} />
      <Text typo="h3" color="black">
        GDSC Bevy 가입하기
      </Text>
      <Space height={48} />
      <Flex justify="flex-start" align="flex-start" gap="xs">
        <div>
          <Space height={4} />
          <Circle />
        </div>
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="GDSC Bevy에 가입해주세요."
            description="아래 링크를 통해 가입하신 뒤, 맨 하단의 ‘가입 완료하기’ 버튼을 눌러주세요."
          />
          <Space height={8} />
          <Text
            typo="label1"
            color="blue100"
            css={css`
              cursor: pointer;
              text-decoration: underline;
            `}>
            <a
              href="https://gdsc.community.dev/hongik-university/"
              target="_blank"
              rel="noreferrer">
              가입하러 가기&#8599;
            </a>
          </Text>
        </Flex>
      </Flex>
      <Space height={48} />
      <InformationWrapper direction="column" align="flex-start" gap="sm">
        <Text typo="body3" color="black">
          Q. GDSC Bevy에 어떻게 가입하나요?
        </Text>
        <Text typo="body1" color="sub">
          위 페이지에서 구글 로그인 후 ‘Join Us’ 버튼을 누르면 돼요. 자세한
          내용은 아래 가이드라인을 참고해주세요.
        </Text>
        <Text
          typo="label1"
          color="sub"
          css={css`
            cursor: pointer;
            text-decoration: underline;
          `}>
          <a href="https://www.gdschongik.com/guide/gdsc-bevy">
            가이드라인 보기&#8599;
          </a>
        </Text>
      </InformationWrapper>
      <Space height={48} />
      <Button onClick={handleLinkButtonClick}>가입 완료하기</Button>
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

const InformationWrapper = styled(Flex)`
  padding: 24px;
  background-color: ${color.white};
  border-radius: 8px;
  border: 1px solid ${color.mono400};
`;

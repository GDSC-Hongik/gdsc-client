import bevyApi from '@/apis/bevy/bevyApi';
import { Circle } from '@/assets/Circle';
import { Button } from '@/components/common/Button';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { StepInformation } from '@/components/joinDiscord/StepInformation';
import GlobalSize from '@/constants/globalSize';
import { media, theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Bevy = () => {
  const navigate = useNavigate();

  const postBevyLinkMutation = useMutation({
    mutationFn: bevyApi.POST_LINK_BEVY,
    onSuccess: () => {
      toast('bevy 연동이 완료되었습니다.');
      navigate('/mypage');
    },
    onError: (error: any) => {
      toast(error);
    }
  });

  const handleLinkButtonClick = () => {
    postBevyLinkMutation.mutate();
  };

  return (
    <Wrapper direction="column" justify="flex-start">
      <Space height={40} />
      <Text typo="heading3" color="black">
        GDSC Bevy 가입하기
      </Text>
      <Space height={48} />
      <Flex justify="flex-start" align="flex-start" gap={8}>
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
            <a href="https://gdsc.community.dev/hongik-university/">
              가입하러 가기↗︎
            </a>
          </Text>
        </Flex>
      </Flex>
      <Space height={48} />
      <InformationWrapper direction="column" align="flex-start" gap={12}>
        <Text typo="heading5" color="black">
          Q. GDSC Bevy가 뭔가요?
        </Text>
        <Text typo="body1" color="gray4">
          궁금한 점이 있으시다면 하단 가이드라인을 참고해주세요.
        </Text>
        <Text
          typo="label1"
          color="gray4"
          css={css`
            cursor: pointer;
            text-decoration: underline;
          `}>
          <a href="https://www.gdschongik.com/guide/gdsc-bevy">
            가이드라인 보기↗︎
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

  background-color: ${theme.palette.gray1};

  ${media.mobile} {
    width: 100vw;
  }
`;

const InformationWrapper = styled(Flex)`
  padding: 24px;
  background-color: ${theme.palette.white};
  border-radius: 8px;
`;

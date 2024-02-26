import { Step1 } from '@/assets/Step1';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { StepInformation } from '@/components/joinDiscord/StepInformation';
import { StepSection } from '@/components/joinDiscord/StepSection';
import { media, theme } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Step2 } from '@/assets/Step2';
import { Input } from '@/components/common/Input';
import { useForm } from 'react-hook-form';
import { Step3 } from '@/assets/Step3';
import { Step4 } from '@/assets/Step4';
import { Button } from '@/components/common/Button';
import GlobalSize from '@/constants/globalSize';
import { useMutation } from '@tanstack/react-query';
import discordApi from '@/apis/discord/discordApi';
import { DiscordLinkRequest } from '@/apis/discord/discordType';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const JoinDiscord = () => {
  const navigate = useNavigate();
  const { register, watch, formState, getValues } = useForm({
    defaultValues: {
      discordHandle: '',
      discordNickname: '',
      code: ''
    },
    mode: 'onChange'
  });

  const postDiscordLinkMutation = useMutation({
    mutationFn: discordApi.POST_DISCORD,
    onSuccess: () => {
      toast.done('디스코드 연동이 완료되었습니다.');
      navigate('/mypage');
    }
  });

  const handleLinkButtonClick = () => {
    const data = {
      discordUsername: getValues('discordHandle'),
      nickname: getValues('discordNickname'),
      code: Number(getValues('code'))
    } as DiscordLinkRequest;

    postDiscordLinkMutation.mutate({ ...data });
  };

  return (
    <Wrapper direction="column" justify="flex-start">
      <Space height={40} />
      <Text typo="heading3" color="black">
        디스코드 가입 및 연동하기
      </Text>
      <Space height={48} />
      <Flex justify="flex-start" align="flex-start" gap={8}>
        <StepSection icon={<Step1 />} height={120} />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="본인 디스코드 계정으로 서버에 가입해주세요."
            description="가입 후에는 (3)의 디스코드 커뮤니티 닉네임으로
서버 프로필을 변경해주세요!"
          />
          <Space height={34} />
          <Text
            typo="label1"
            color="discord"
            onClick={() => {}}
            css={css`
              cursor: pointer;
              text-decoration: underline;
            `}>
            <a href="https://discord.gg/XVr4fMzKSt">
              디스코드 가입하러 가기↗︎
            </a>
          </Text>
        </Flex>
      </Flex>
      <Space height={8} />
      <Flex justify="flex-start" align="flex-start" gap={8}>
        <StepSection icon={<Step2 />} height={208} />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="디스코드 사용자명을 적어주세요."
            description="디스코드 사용자명에 대한 설명은 아래 가이드라인을 
            참고해주세요!"
          />
          <Space height={8} />
          <Text
            typo="label1"
            color="gray4"
            onClick={() => {}}
            css={css`
              cursor: pointer;
              text-decoration: underline;
            `}>
            <a href="https://www.gdschongik.com/guide/discord">
              가이드라인 보기↗︎
            </a>
          </Text>
          <Space height={24} />
          <Input
            label="디스코드 사용자명(핸들명)"
            value={watch('discordHandle')}
            {...register('discordHandle', { required: true })}
            isError={false}
            placeholder="eugene028"
          />
        </Flex>
      </Flex>
      <Space height={8} />
      <Flex justify="flex-start" align="flex-start" gap={8}>
        <StepSection icon={<Step3 />} height={211} />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="원하는 디스코드 커뮤니티 닉네임을 적어주세요."
            description="커뮤니티 내에서 사용하는 별명으로, 한 번 설정 시
            변경하기 어려우니 신중히 작성해주세요!"
          />
          <Space height={24} />
          <Input
            label="디스코드 커뮤니티 닉네임"
            value={watch('discordNickname')}
            {...register('discordNickname', { required: true })}
            isError={false}
            placeholder="율리"
          />
          <Text
            typo="label3"
            color="blue100"
            css={css`
              margin-top: -16px;
            `}>
            *한글, 6자까지로 제한됩니다.
          </Text>
        </Flex>
      </Flex>
      <Space height={4} />
      <Flex justify="flex-start" align="flex-start" gap={8}>
        <Step4 />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="디스코드에서 받은 인증번호를 입력해주세요."
            description="‘명령어’ 채널에서 /인증코드 명령어로 받은 
            네 자리 인증번호를 입력해주세요."
          />
          <Space height={24} />
          <Input
            label="인증번호"
            value={watch('code')}
            {...register('code', { required: true })}
            isError={false}
            placeholder="1234"
          />
          <Text
            typo="label3"
            color="blue100"
            css={css`
              margin-top: -16px;
            `}>
            *만료 시간 5:00
          </Text>
        </Flex>
      </Flex>
      <Space height={24} />
      <Button disabled={!formState.isValid} onClick={handleLinkButtonClick}>
        인증하기
      </Button>
      <Space height={26} />
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

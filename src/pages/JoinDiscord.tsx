import { Step1 } from '@/assets/Step1';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { StepInformation } from '@/components/joinDiscord/StepInformation';
import { StepSection } from '@/components/joinDiscord/StepSection';
import { color } from 'wowds-tokens';
import { media } from '@/styles';
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
import RoutePath from '@/routes/routePath';

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
      toast('디스코드 연동이 완료되었습니다.');
      navigate(RoutePath.MyPage);
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
      <Text typo="h3" color="black">
        디스코드 연동하기
      </Text>
      <Space height={48} />
      <Flex justify="flex-start" align="flex-start" gap="xs">
        <StepSection icon={<Step1 />} height={120} />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="GDSC 디스코드 서버에 입장해주세요."
            description={
              <>
                아직 디스코드 계정이 없는 분이라면,
                <br />
                가입 후 서버에 입장해주세요.
              </>
            }
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
            <a href="https://discord.gg/dSV6vSEuGU">
              디스코드 서버 입장하기&#8599;
            </a>
          </Text>
        </Flex>
      </Flex>
      <Space height={16} />
      <Flex justify="flex-start" align="flex-start" gap="xs">
        <StepSection icon={<Step2 />} height={208} />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="디스코드 사용자명을 적어주세요."
            description="디스코드 사용자명에 대한 설명은 아래 가이드라인을 참고해주세요!"
          />
          <Space height={20} />
          <Text
            typo="label1"
            color="sub"
            onClick={() => {}}
            css={css`
              cursor: pointer;
              text-decoration: underline;
            `}>
            <a href="https://www.gdschongik.com/guide/discord">
              가이드라인 보기&#8599;
            </a>
          </Text>
          <Space height={24} />
          <Input
            label="디스코드 사용자명(핸들명)"
            value={watch('discordHandle')}
            {...register('discordHandle', { required: true })}
            isError={false}
            placeholder="ex) eugene028"
          />
        </Flex>
      </Flex>
      <Space height={16} />
      <Flex justify="flex-start" align="flex-start" gap="xs">
        <StepSection icon={<Step3 />} height={211} />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="원하는 디스코드 커뮤니티 닉네임을 적어주세요."
            description="커뮤니티 내에서 사용하는 별명으로, 한 번 설정 시 변경하기 어려우니 신중히 작성해주세요!"
          />
          <Space height={24} />
          <Input
            label="디스코드 커뮤니티 닉네임"
            value={watch('discordNickname')}
            {...register('discordNickname', { required: true })}
            isError={false}
            placeholder="ex) 율리"
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
      <Space height={16} />
      <Flex justify="flex-start" align="flex-start" gap="xs">
        <Step4 />
        <Flex direction="column" align="flex-start" justify="flex-start">
          <StepInformation
            title="디스코드에서 받은 인증번호를 입력해주세요."
            description="‘명령어’ 채널에서 /인증코드 명령어로 받은 네 자리 인증번호를 입력해주세요."
          />
          <Space height={24} />
          <Input
            label="인증번호"
            value={watch('code')}
            {...register('code', { required: true })}
            isError={false}
            placeholder="ex) 1234"
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

  background-color: ${color.mono150};

  ${media.mobile} {
    width: 100vw;
  }
`;

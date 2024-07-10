import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import DiscordImage from '/discord/discord-nickname.png';
import TextField from 'wowds-ui/TextField';
import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Control, useController, useFormContext } from 'react-hook-form';
import { DiscordFormValues, UserNameErrorType } from '@/types/discord';
import { Image } from '../common/Image';

export const DiscordNickName = ({ onNext }: { onNext: () => void }) => {
  const { watch, getValues, control } = useFormContext<DiscordFormValues>();
  const [error, setError] = useState<UserNameErrorType | ''>('');
  const [count, setCount] = useState(1);

  const validateUsername = (username: string) => {
    const lengthValid = username.length >= 2 && username.length <= 6;
    const koreanValid = /^[가-힣]+$/.test(username);

    if (lengthValid && koreanValid) {
      return true;
    }
    return false;
  };

  const { mutate: checkDuplicate } = useMutation({
    mutationFn: () => discordApi.GET_DISCORD_NICKNAME(watch('discordNickname')),
    onSuccess: (data) => {
      if (data.isDuplicate) {
        setError('Duplicate');
      } else {
        setError('Available');
        onNext();
      }
    }
  });

  const handleNextClick = () => {
    const username = getValues('discordNickname');
    const validationError = validateUsername(username);
    if (validationError) {
      setError('Valid');
      checkDuplicate();
    } else {
      setError('Invalid');
    }
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Flex direction="column" align="flex-start" gap="lg">
        <div>
          <Text typo="h1">별명을 설정하세요.</Text>
          <Space height="sm" />
          <Text typo="body1">
            GDSC Hongik 디스코드 서버에서 사용할 별명을 설정해주세요.
          </Text>
        </div>
        <Image
          src={DiscordImage}
          alt="discord-nickname"
          width={325}
          height={157}
        />
        <Text typo="body1">
          가입이 완료되면 가입 신청서에 제출하신 별명으로 자동으로 수정될
          거예요. 추후 별명을 수정하고 싶다면 채널톡으로 코어멤버에게 연락
          주세요.
        </Text>
      </Flex>
      <Space height="lg" />
      <NameField control={control} error={error} key={count} />
      <Space height={146} />
      <Flex direction="column">
        <Button
          onClick={() => {
            handleNextClick();
          }}>
          다음으로
        </Button>
      </Flex>
    </>
  );
};

const NameField = ({
  control,
  error
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  error: UserNameErrorType | '';
}) => {
  const { field } = useController({
    name: 'discordNickname',
    control,
    rules: {
      required: true
    }
  });

  return (
    <TextField
      {...field}
      helperText={
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {(error === 'Invalid' || error === 'Duplicate') && (
            <>
              <li>
                {error === 'Invalid'
                  ? '하단 규정에 맞춰 작성해주세요'
                  : '이미 가입된 별명이에요. 이전에 가입한 적이 있으신 경우, 다른 별명으로 변경해주세요.'}
              </li>
              <br />
            </>
          )}
          <li>최소 2자, 최대 6자의 한글만 작성 가능</li>
          <li>GDSC Hongik 가이드라인에 어긋나지 않게 작성</li>
        </ul>
      }
      label="디스코드 별명"
      placeholder="내용을 입력해주세요"
      style={{
        backgroundColor: 'white',
        borderStyle: 'solid'
      }}
      error={error === 'Invalid' || error === 'Duplicate'}
    />
  );
};

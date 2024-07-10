import { Flex, Space, Text } from '@/components/common/Wrapper';
import Button from 'wowds-ui/Button';
import DiscordImage from '/discord/discord-name.png';
import TextField from 'wowds-ui/TextField';
import TextButton from 'wowds-ui/TextButton';
import RoutePath from '@/routes/routePath';
import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';
import { useFormContext, useController, Control } from 'react-hook-form';
import React, { useState } from 'react';
import { Image } from '../common/Image';
import { DiscordFormValues } from '@/types/discord';

type UserNameErrorType = 'Valid' | 'Invalid' | 'Duplicate' | 'Available';

export const DiscordName = ({ onNext }: { onNext: () => void }) => {
  const { watch, getValues, control } = useFormContext<DiscordFormValues>();
  const [error, setServerError] = useState<UserNameErrorType | ''>('');
  const [count, setCount] = useState(1);

  const validateUsername = (username: string) => {
    const lengthValid = username.length >= 2 && username.length <= 32;
    const lowercaseValid = /^[a-z0-9_.]+$/.test(username);
    const specialCharValid = !/[^a-z0-9_.]/.test(username);
    const noSequentialSpecialChar = !/(__|\.\.)/.test(username);
    const noOfficialNames = !/discord|nitro|nelly/.test(username);

    if (
      lengthValid &&
      lowercaseValid &&
      specialCharValid &&
      noSequentialSpecialChar &&
      noOfficialNames
    ) {
      return true;
    }
    return false;
  };

  const { mutate: checkDuplicate } = useMutation({
    mutationFn: () => discordApi.GET_DISCORD_NAME(watch('discordUsername')),
    onSuccess: (data) => {
      if (data.isDuplicate) {
        setServerError('Duplicate');
      } else {
        setServerError('Available');
        onNext();
      }
    }
  });

  const handleNextClick = () => {
    const username = getValues('discordUsername');
    const validationError = validateUsername(username);
    if (validationError) {
      setServerError('Valid');
      checkDuplicate();
    } else {
      setServerError('Invalid');
    }
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Flex direction="column" align="flex-start" gap="lg">
        <TextSection />
      </Flex>
      <Space height="lg" />
      <NameField control={control} error={error} key={count} />
      <Space height={75} />
      <Flex direction="column">
        <Button
          onClick={() => {
            handleNextClick();
          }}>
          다음으로
        </Button>
        <Space height="xs" />
        <TextButton
          text="디스코드 계정이 없으신가요?"
          as="a"
          target="_blank"
          href={RoutePath.DiscordRegisterLink}
        />
      </Flex>
    </>
  );
};

const TextSection = React.memo(() => {
  return (
    <>
      <div>
        <Text typo="h1">사용자명을 알려주세요.</Text>
        <Space height="sm" />
        <Text typo="body1">
          GDSC Hongik 디스코드 서버에서는 사용자명을 통해 멤버를 구분해요.
        </Text>
      </div>
      <Image
        src={DiscordImage}
        alt="discord-name"
        width={325}
        height={157}
        align="center"
      />
      <Text typo="body1">
        본인의 디스코드 사용자명을 아래 규정과 맞게 설정한 후 입력해주세요.
      </Text>
    </>
  );
});

const NameField = ({
  control,
  error
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  error: UserNameErrorType | '';
}) => {
  const { field } = useController({
    name: 'discordUsername',
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
                  : '이미 가입된 사용자명이에요. 이전에 가입한 적이 있으신 경우, 채널톡으로 문의해주세요.'}
              </li>
              <br />
            </>
          )}
          <li>최소 2자, 최대 32자까지만 작성 가능</li>
          <li>대문자가 아닌 소문자로만 작성 가능</li>
          <li>밑줄(_)과 마침표(.)가 아닌 특수 문자 사용 불가능</li>
          <li>
            연속적인 밑줄(a__b)과 마침표(a..b)로 이루어진 경우 사용 불가능
          </li>
          <li>discord, nitro, nelly와 같은 디스코드 공식 이름 사용 불가능</li>
        </ul>
      }
      label="디스코드 사용자명"
      placeholder="내용을 입력해주세요"
      style={{
        backgroundColor: 'white',
        borderStyle: 'solid'
      }}
      error={error === 'Invalid' || error === 'Duplicate'}
    />
  );
};

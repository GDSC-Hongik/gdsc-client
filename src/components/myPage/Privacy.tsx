import { Flex, Text } from '@/components/common/Wrapper';
import { color } from 'wowds-tokens';
import { User } from '@/types/user';
import styled from '@emotion/styled';
interface PrivacyProps {
  user: User;
}

export const Privacy = ({ user }: PrivacyProps) => {
  const { studentId, department, phone, email, discordUsername, nickname } =
    user;

  return (
    <Wrapper direction="column" align="flex-start" gap="sm">
      <Flex justify="flex-start" gap="xs">
        <Text typo="label2" color="sub">
          학번
        </Text>
        <Text typo="body3" color="black">
          {studentId}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap="xs">
        <Text typo="label2" color="sub">
          학과
        </Text>
        <Text typo="body3" color="black">
          {department}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap="xs">
        <Text typo="label2" color="sub">
          전화번호
        </Text>
        <Text typo="body3" color="black">
          {phone}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap="xs">
        <Text typo="label2" color="sub">
          이메일
        </Text>
        <Text typo="body3" color="black">
          {email}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap="xs">
        <Text typo="label2" color="sub">
          디스코드 사용자명
        </Text>
        <Text typo="body3" color="black">
          {discordUsername ?? '-'}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap="xs">
        <Text typo="label2" color="sub">
          디스코드 닉네임
        </Text>
        <Text typo="body3" color="black">
          {nickname ?? '-'}
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  padding: 24px 24px 20px 24px;
  box-sizing: border-box;

  background-color: ${color.white};
  border-radius: 8px;
  border: 1px solid ${color.sub};
`;

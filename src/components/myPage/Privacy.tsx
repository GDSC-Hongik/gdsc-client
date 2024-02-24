import { Flex, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import styled from '@emotion/styled';
interface PrivacyProps {
  studentId: string;
  department: string;
  phone: string;
  email: string;
}

export const Privacy = ({
  studentId,
  department,
  phone,
  email
}: PrivacyProps) => {
  return (
    <Wrapper direction="column" align="flex-start" gap={12}>
      <Flex justify="flex-start" gap={8}>
        <Text typo="label2" color="gray4">
          학번
        </Text>
        <Text typo="body3" color="black">
          {studentId}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap={8}>
        <Text typo="label2" color="gray4">
          학과
        </Text>
        <Text typo="body3" color="black">
          {department}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap={8}>
        <Text typo="label2" color="gray4">
          전화번호
        </Text>
        <Text typo="body3" color="black">
          {phone}
        </Text>
      </Flex>
      <Flex justify="flex-start" gap={8}>
        <Text typo="label2" color="gray4">
          이메일
        </Text>
        <Text typo="body3" color="black">
          {email}
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  padding: 24px 24px 20px 24px;
  box-sizing: border-box;

  background-color: ${theme.palette.white};
  border-radius: 8px;
  border: 1px solid ${theme.palette.gray3};
`;

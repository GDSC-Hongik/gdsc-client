import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';
import { UserBasicInfo } from '@/types/user';

export const Privacy = ({ basicInfo }: { basicInfo: UserBasicInfo }) => {
  const { studentId, department, phone, email, discordUsername, nickname } =
    basicInfo;

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        기본 회원 정보
      </Text>
      {studentId && (
        <Text color="sub" typo="body1">
          이미 제출된 정보를 수정해야 할 경우, GDGoC Hongik 카카오톡 채널로 문의
          주세요.
        </Text>
      )}
      <Box
        text={
          <Flex direction="column" align="flex-start" gap="sm">
            <Flex justify="flex-start" gap="xs">
              <Text typo="label2" color="sub">
                학번
              </Text>
              <Text typo="body2" color="textBlack">
                {studentId ?? '-'}
              </Text>
            </Flex>
            <Flex justify="flex-start" gap="xs">
              <Text typo="label2" color="sub">
                학과
              </Text>
              <Text typo="body2" color="textBlack">
                {department ?? '-'}
              </Text>
            </Flex>
            <Flex justify="flex-start" gap="xs">
              <Text typo="label2" color="sub">
                전화번호
              </Text>
              <Text typo="body2" color="textBlack">
                {phone ?? '-'}
              </Text>
            </Flex>
            <Flex justify="flex-start" gap="xs">
              <Text typo="label2" color="sub">
                이메일
              </Text>
              <Text typo="body2" color="textBlack">
                {email ?? '-'}
              </Text>
            </Flex>
            <Flex justify="flex-start" gap="xs">
              <Text typo="label2" color="sub">
                디스코드 사용자명
              </Text>
              <Text typo="body2" color="textBlack">
                {discordUsername ?? '-'}
              </Text>
            </Flex>
            <Flex justify="flex-start" gap="xs">
              <Text typo="body2" color="sub">
                디스코드 닉네임
              </Text>
              <Text typo="body2" color="textBlack">
                {nickname ?? '-'}
              </Text>
            </Flex>
          </Flex>
        }
      />
    </Flex>
  );
};

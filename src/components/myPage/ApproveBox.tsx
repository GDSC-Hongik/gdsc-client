import { Flex, Text } from '@/components/common/Wrapper';
import { color } from 'wowds-tokens';
import styled from '@emotion/styled';

type TextKey = 'APPLIED' | 'PENDING' | 'GRANTED';

const text: Record<
  TextKey,
  {
    title: string;
    description: string;
  }
> = {
  APPLIED: {
    title: '가입 조건을 아직 충족시키지 못했어요.',
    description:
      '아래 가입 조건을 모두 완료하시면, 운영진이 검토 후 가입 신청을 승인해 드릴 예정이에요.'
  },
  PENDING: {
    title: '제출해주신 가입 신청서를 검토하고 있어요.',
    description:
      '마지막으로 가입 조건에 문제가 없는지 운영진이 꼼꼼히 확인 중이에요. 조금만 기다려주세요!'
  },
  GRANTED: {
    title: '가입 신청이 승인되었어요.',
    description:
      '/가입하기 명령어를 통해 GDSC Hongik 디스코드의 모든 채널을 둘러보실 수 있어요.'
  }
};

export const ApproveBox = ({
  registrationStatus = 'APPLIED',
  count
}: {
  registrationStatus: 'APPLIED' | 'PENDING' | 'GRANTED';
  count: number;
}) => {
  const command = '/가입하기';
  return (
    <Wrapper gap="sm">
      <Flex direction="column" align="flex-start" gap="sm">
        <Text typo="label1" color="black">
          {text[registrationStatus]?.title}
          {registrationStatus === 'APPLIED' && `(${count}/3)`}
        </Text>
        <Text typo="body1" color="mono700">
          {text[registrationStatus].description
            .split(command)
            .reduce<React.ReactNode[]>((prev, current, index) => {
              if (index) prev.push(<strong key={index}>{command}</strong>);
              prev.push(current);
              return prev;
            }, [])}
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  padding: 24px 11px 20px 24px;
  box-sizing: border-box;

  background-color: ${color.white};
  border-radius: 8px;
  border: 1px solid ${color.primary};
`;

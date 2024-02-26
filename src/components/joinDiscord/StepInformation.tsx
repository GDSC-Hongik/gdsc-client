import { Flex, Text } from '@/components/common/Wrapper';

interface StepInformationProps {
  title: string;
  description: string;
}

export const StepInformation = ({
  title,
  description
}: StepInformationProps) => {
  const command = '/인증코드';

  const parts = description
    .split(command)
    .reduce<React.ReactNode[]>((prev, current, index) => {
      if (index) prev.push(<strong key={index}>{command}</strong>);
      prev.push(current);
      return prev;
    }, []);

  return (
    <Flex direction="column" align="flex-start" justify="flex-start" gap={8}>
      <Text typo="heading4" color="black">
        {title}
      </Text>
      <Text typo="body1" color="gray4">
        {parts}
      </Text>
    </Flex>
  );
};

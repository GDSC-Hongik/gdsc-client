import { Flex, Text } from '@/components/common/Wrapper';

interface StepInformationProps {
  title: string;
  description: string;
}

export const StepInformation = ({
  title,
  description
}: StepInformationProps) => {
  return (
    <Flex direction="column" align="flex-start" gap={8}>
      <Text typo="heading4" color="black">
        {title}
      </Text>
      <Text typo="body1" color="gray4">
        {description}
      </Text>
    </Flex>
  );
};

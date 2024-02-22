import { Flex, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import styled from '@emotion/styled';

export const InformationBox = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <Wrapper direction="column" gap={4} align="flex-start">
      <Text typo="heading5" color="black">
        {title}
      </Text>
      <Text typo="body1" color="black">
        {description}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  box-sizing: border-box;
  padding: 20px 24px;
  background-color: ${theme.palette.white};

  border-radius: 8px;
  border: 1px solid #d9d9d9;

  text-align: start;
`;

import { Flex, Text } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InformationBox = ({
  title,
  description,
  description2
}: {
  title: string;
  description: string;
  description2?: string;
}) => {
  return (
    <Wrapper direction="column" gap={4} align="flex-start">
      <Text
        typo="heading5"
        color="black"
        css={css`
          word-break: keep-all;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
        {title}
      </Text>
      <Text
        typo="body1"
        color="black"
        css={css`
          word-break: keep-all;
        `}>
        {description}
      </Text>
      <Text
        typo="body1"
        color="black"
        css={css`
          word-break: keep-all;
        `}>
        {description2}
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

import { Flex, Space, Text } from '@/components/common/Wrapper';
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
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      <Text
        typo="heading5"
        color="black"
        css={css`
          word-break: keep-all;
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
        {title}
      </Text>
      <Space height={8} />
      <Text
        typo="body1"
        color="black"
        css={css`
          word-break: keep-all;
          line-height: 160%;
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
  height: fit-content;
`;

import { Flex, Space } from '@/components/common/Wrapper';
import { theme } from '@/styles';
import { css } from '@emotion/react';
import { ReactNode } from 'react';
export const StepSection = ({
  icon,
  height
}: {
  icon: ReactNode;
  height: number;
}) => {
  return (
    <Flex
      direction="column"
      gap={4}
      css={css`
        width: 18px;
      `}>
      <Space height={0} />
      {icon}
      <Space
        height={height}
        css={css`
          width: 1.6px;
          background-color: ${theme.palette.black};
        `}
      />
    </Flex>
  );
};

import styled from '@emotion/styled';
import { Flex } from './Wrapper';
import { PropsWithChildren } from 'react';
import { theme } from '@/styles';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex style={{ backgroundColor: theme.palette.gray1 }}>
      {/* Todo: header */}
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
};
export default Layout;

const Wrapper = styled(Flex)`
  width: 390px;
  align-items: flex-start;
  min-height: 100vh;
  overflow: auto;
`;

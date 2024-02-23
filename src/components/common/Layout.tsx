import styled from '@emotion/styled';
import { Flex } from './Wrapper';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex>
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

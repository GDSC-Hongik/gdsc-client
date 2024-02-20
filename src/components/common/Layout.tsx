import styled from '@emotion/styled';
import { Flex } from './Wrapper';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex style={{ margin: -8 }}>
      {/* Todo: header */}
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
};
export default Layout;

const Wrapper = styled(Flex)`
  width: 375px;
  align-items: flex-start;
  min-height: 100vh;
`;

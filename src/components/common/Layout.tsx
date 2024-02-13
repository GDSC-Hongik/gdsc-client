import styled from '@emotion/styled';
import { Flex } from './Wrapper';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      {/* Header */}
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
};
export default Layout;

const Wrapper = styled(Flex)`
  width: 988px;
`;

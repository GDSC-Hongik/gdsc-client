import styled from '@emotion/styled';
import { Flex } from '../common/Wrapper';
import { PropsWithChildren } from 'react';
import { theme } from '@/styles';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
export default Layout;

const Container = styled(Flex)`
  background-color: ${theme.palette.gray1};
  overflow: hidden;
`;
const Wrapper = styled(Flex)`
  width: 390px;
  align-items: flex-start;
  min-height: 100vh;
`;

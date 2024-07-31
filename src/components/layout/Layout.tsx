import styled from '@emotion/styled';
import { Flex } from '../common/Wrapper';
import { media } from '@/styles';
import { color } from 'wowds-tokens';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { Outlet } from 'react-router-dom';
import GlobalSize from '@/constants/globalSize';
import ApiErrorBoundary from '@/components/ApiErrorBoundary';

const Layout = () => {
  return (
    <ApiErrorBoundary>
      <Container>
        <Header />
        <Wrapper>
          <Outlet />
          <Footer />
        </Wrapper>
      </Container>
    </ApiErrorBoundary>
  );
};
export default Layout;

const Container = styled(Flex)`
  background-color: ${color.mono150};
  overflow: hidden;
  flex-direction: column;
`;

const Wrapper = styled(Flex)`
  width: ${GlobalSize.width};
  margin-top: ${GlobalSize.header};
  min-height: calc(100vh - ${GlobalSize.header});
  align-items: flex-start;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.mobile} {
    width: 100vw;
  }
`;

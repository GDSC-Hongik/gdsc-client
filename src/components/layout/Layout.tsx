import styled from '@emotion/styled';
import { Flex } from '../common/Wrapper';
import { media, theme } from '@/styles';
import Header from '@/components/layout/Header';
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
        </Wrapper>
      </Container>
    </ApiErrorBoundary>
  );
};
export default Layout;

const Container = styled(Flex)`
  background-color: ${theme.palette.gray1};
  overflow: hidden;
  flex-direction: column;
`;

const Wrapper = styled(Flex)`
  width: ${GlobalSize.width};
  margin-top: ${GlobalSize.header};
  min-height: calc(100vh - ${GlobalSize.header});
  align-items: flex-start;
  overflow: hidden;

  ${media.mobile} {
    width: 100vw;
  }
`;

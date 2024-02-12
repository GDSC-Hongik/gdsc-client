import styled from '@emotion/styled';
import { Flex } from './Wrapper';

const Layout = ({ children }) => {
  return <Flex>
    {/* Header */}
    <Wrapper>{children}</Wrapper>
    </Flex>;
};
export default Layout;

const Wrapper = styled(Flex)`
    width: 988px;
`

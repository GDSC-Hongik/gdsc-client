import RainbowSpinner from 'wowds-ui/RainbowSpinner';
import { media } from '@/styles';
import GlobalSize from '@/constants/globalSize';
import { Flex } from './Wrapper';
import { color } from 'wowds-tokens';
import styled from '@emotion/styled';

const LoadingSpinner = () => {
  return (
    <Wrapper justify="center" align="center">
      <RainbowSpinner width={60} height={60} />
    </Wrapper>
  );
};

export default LoadingSpinner;

const Wrapper = styled(Flex)`
  min-height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999;
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;
  gap: 40px;
  background-color: ${color.blackOpacity40};
  ${media.mobile} {
    width: 100vw;
  }
`;

import useClickOutside from '@/hooks/useClickOutSide';
import { SetStateAction, useRef } from 'react';
import styled from '@emotion/styled';
import { Flex, Text } from '../common/Wrapper';
import { space, color } from 'wowds-tokens';
import { css } from '@emotion/react';

interface CouponInfoBoxProps {
  setOpenInfo: (value: SetStateAction<boolean>) => void;
  expectRef: React.RefObject<HTMLElement>;
}

function CouponInfoBox({ setOpenInfo, expectRef }: CouponInfoBoxProps) {
  const infoBoxRef = useRef<HTMLDivElement>(null);
  useClickOutside(infoBoxRef, () => setOpenInfo(false), expectRef);

  return (
    <Wrapper
      direction="column"
      gap="sm"
      align="flex-start"
      ref={infoBoxRef}
      css={css`
        position: absolute;
        top: 30px;
      `}>
      <Text typo="body1" color="textWhite">
        회비 할인 쿠폰은 다음과 같은 경로로 발급받을 수 있어요.
      </Text>
      <Text typo="body1" color="textWhite">
        <li>지난 학기 정규 스터디 수료</li>
        <li>GDGoC Hongik 코어 멤버</li>
        <br />
        본인이 해당사항이 있음에도 쿠폰이 없는 경우 카카오톡 채널로
        문의해주세요.
      </Text>
    </Wrapper>
  );
}

export default CouponInfoBox;

const Wrapper = styled(Flex)`
  position: absolute;
  background-color: ${color.blackOpacity60};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px ${color.shadowMedium};
  backdrop-filter: blur(15px);
  padding: ${space.xl};
  height: fit-content;
  z-index: 99;
`;

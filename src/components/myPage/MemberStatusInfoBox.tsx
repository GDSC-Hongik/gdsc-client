import { Flex, Text } from '../common/Wrapper';
import { space, color } from 'wowds-tokens';
import { forwardRef, useRef } from 'react';
import styled from '@emotion/styled';
import useClickOutside from '@/hooks/useClickOutSide';
import { css } from '@emotion/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MemberStatusInfoBox = forwardRef(
  ({
    setOpenInfo,
    exceptRef
  }: {
    setOpenInfo: (value: React.SetStateAction<boolean>) => void;
    exceptRef: React.RefObject<HTMLElement>;
  }) => {
    const infoBoxRef = useRef<HTMLDivElement>(null);
    useClickOutside(infoBoxRef, () => setOpenInfo(false), exceptRef);
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
        <Text typo="h3" color="textWhite">
          Q. 준회원, 정회원이 무엇이고, 어떤 차이인가요?
        </Text>
        <Text typo="body1" color="textWhite">
          <strong>준회원</strong>은 가입 후 디스코드 연동, 재학생 인증을 완료한 회원이에요. 정회원 활동 기간이 끝나면, 다시 준회원으로
          변경돼요.
        </Text>
        <Text typo="body1" color="textWhite">
          <strong>정회원</strong>은 정회원 모집 신청을 통해 회비 납부까지 완료한
          회원이에요. 이번 학기 열리는 각종 학술 프로그램과 이벤트에 참여할 수
          있어요.
        </Text>
        <Text typo="body1" color="textWhite">
          회원 상태에 대한 자세한 정보는{' '}
          <u
            onClick={() => {
              window.open('https://gdschongik.com/guide/member-status');
            }}
            style={{ cursor: 'pointer' }}>
            <strong>가이드라인</strong>
          </u>
          을 참고해주세요.
        </Text>
      </Wrapper>
    );
  }
);

MemberStatusInfoBox.displayName = 'MemberStatusInfoBox';
export default MemberStatusInfoBox;

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

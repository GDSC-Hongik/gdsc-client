import Button from 'wowds-ui/Button';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import { DownArrow } from 'wowds-icons';
import { space, color } from 'wowds-tokens';
import { useState } from 'react';
import Box from 'wowds-ui/Box';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import usePostBevyLink from '@/hooks/mutation/usePostBevyLink';

export const Bevy = () => {
  const { postBevyLink } = usePostBevyLink();
  const [accordionState, setAccordionState] = useState({
    bevyInfo: false,
    bevyDetail: false
  });

  const handleLinkButtonClick = () => {
    postBevyLink();
  };

  return (
    <Wrapper direction="column" justify="flex-start">
      <Space height={40} />
      <Text typo="h1" color="textBlack">
        GDSC Bevy 가입하기
      </Text>
      <Space height={20} />
      <TextField>
        <Text color="textBlack">
          아래 링크를 통해 GDSC Bevy에 가입해주세요!
        </Text>
        <Text color="textBlack">
          자세한 가입 절차 및 설명은{' '}
          <u
            onClick={() => {
              window.open('https://www.gdschongik.com/guide/gdsc-bevy');
            }}
            style={{ cursor: 'pointer' }}>
            가이드라인
          </u>
          을 참고해주세요.
        </Text>
      </TextField>
      <Space height={40} />
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        gap="lg"
        style={{ position: 'relative' }}>
        <Box
          text={
            <AccordionContainer>
              <Text
                css={css`
                  font-weight: 700;
                `}>
                Q. GDSC Bevy가 무엇인가요?
              </Text>
              <div
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '24px'
                }}>
                <DownArrow
                  width={20}
                  height={20}
                  stroke="sub"
                  onClick={() => {
                    setAccordionState({
                      ...accordionState,
                      bevyInfo: !accordionState.bevyInfo
                    });
                  }}
                />
              </div>
              {accordionState.bevyInfo && (
                <Text color="sub">
                  GDSC Hongik의 회원 및 다양한 행사를 관리할 수 있는{' '}
                  <strong>커뮤니티 이벤트 관리 플랫폼</strong>
                  이에요.
                  <br />
                  <br />전 세계 GDSC 커뮤니티가 이벤트를 만들고, 공유할 수 있는
                  플랫폼이기에 다른 GDSC의 활동을 둘러보고 참여할 수도 있어요.
                </Text>
              )}
            </AccordionContainer>
          }
        />
        <Box
          text={
            <AccordionContainer>
              <Text
                css={css`
                  font-weight: 700;
                `}>
                Q. GDSC Bevy에 어떤 정보가 올라오나요?
              </Text>
              <div
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '24px'
                }}>
                <DownArrow
                  width={20}
                  height={20}
                  stroke="sub"
                  onClick={() => {
                    setAccordionState({
                      ...accordionState,
                      bevyDetail: !accordionState.bevyDetail
                    });
                  }}
                />
              </div>
              {accordionState.bevyDetail && (
                <Text color="sub">
                  <strong>1. GDSC Hongik 커뮤니티 내부 이벤트</strong> (파트별
                  오프라인 밋업, 데브렐 행사 등)
                  <br />
                  <strong>2. 현직 구글러가 진행하는 개발 세미나</strong>
                  <br />
                  <br />
                  1번의 경우, 커뮤니티 내에서 진행하는 행사에 참여하고
                  싶으시다면 Bevy에서 <strong>RSVP</strong>를 발급받아야 해요.
                  참여 등록 과정을 거쳐야 커뮤니티 행사 참여 기록이 남게 돼요!
                  <br />
                  <br />
                  2번의 경우, 코어 멤버가 디스코드 <strong>
                    #개발-정보
                  </strong>{' '}
                  채널에 업로드해드릴 예정이에요.
                </Text>
              )}
            </AccordionContainer>
          }
        />
        <Space height={8} />
      </Flex>
      <Space height={120} />
      <ButtonContainer>
        <Text
          typo="label1"
          color="primary"
          css={css`
            cursor: pointer;
            text-decoration: underline;
            padding: 12px 20px;
          `}>
          <a
            href="https://gdsc.community.dev/hongik-university/"
            target="_blank"
            rel="noreferrer">
            가입하러 가기&#8599;
          </a>
        </Text>
        <Button style={{ maxWidth: '100%' }} onClick={handleLinkButtonClick}>
          가입 완료하기
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;
  min-height: calc(100vh - 54px);
  background-color: ${color.mono50};
  position: relative;
  ${media.mobile} {
    width: 100vw;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.75rem;
  padding: 0px 0.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space.xs};
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
`;

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${space.sm};
`;

import { Flex, Space, Text } from '@/components/common/Wrapper';
import { space, color } from 'wowds-tokens';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import JoinRegularMember from '@/components/myPage/JoinRegularMember';
import MemberStatusInfoBox from '@/components/myPage/MemberStatusInfoBox';
import AssociateRequirementCheck from '@/components/myPage/AssociateRequirementCheck';
import MemberStatusStepper from '@/components/myPage/MemberStatusStepper';
import BasicUserInfo from '@/components/myPage/BasicUserInfo';
import { media } from '@/styles';
import { useContext, useRef, useState } from 'react';
import { Help } from 'wowds-icons';
import { Privacy } from '@/components/myPage/Privacy';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import JoinRegularMemberBottomSheet from './bottomsheet/JoinRegularMemberBottomSheet';
import { ApproveBox } from '@/components/myPage/ApproveBox';
import { BottomSheetContext } from '@/context/BottomSheetContext';

export const Dashboard = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const helpButtonRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext(BottomSheetContext);
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  //TODO: 추후 로딩 스피너 삽입할 것
  if (!data) {
    return <div> 로딩중 ...</div>;
  }

  const { member, currentRecruitmentRound, currentMembership } = data;

  return (
    <>
      <Wrapper
        direction="column"
        justify="flex-start"
        style={{ gap: '40px' }}
        css={css`
          gap: '40px';
        `}>
        <Space height={20} />
        <BasicUserInfo member={member} />
        <Flex justify="flex-start" direction="column" align="flex-start">
          <Container>
            <Text typo="h2" color="textBlack">
              현재 회원 상태
            </Text>
            <div
              ref={helpButtonRef}
              onClick={() => {
                setOpenInfo(!openInfo);
              }}>
              <Help width={24} height={24} fill="sub" stroke="sub" />
            </div>
            {openInfo && (
              <MemberStatusInfoBox
                setOpenInfo={setOpenInfo}
                exceptRef={helpButtonRef}
              />
            )}
          </Container>
          <Space height={40} />
          <MemberStatusStepper member={member} />
          <Space height={20} />
          <ApproveBox
            role={member.role}
            currentRecruitment={currentRecruitmentRound}
          />
        </Flex>
        {currentMembership && (
          <JoinRegularMember
            paymentStatus={currentMembership.regularRequirement.paymentStatus}
          />
        )}
        <AssociateRequirementCheck
          associateRequirement={member.associateRequirement}
        />
        <Privacy basicInfo={member.basicInfo} />
        <Space height={104} />
      </Wrapper>
      {isOpen && (
        <JoinRegularMemberBottomSheet
          currentRecruitment={currentRecruitmentRound}
        />
      )}
    </>
  );
};

const Wrapper = styled(Flex)`
  min-height: 100vh;
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;

  background-color: ${color.mono50};

  ${media.mobile} {
    width: 100vw;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: ${space.xxs};
  justify-content: 'flex-start';
  align-items: 'center';
`;

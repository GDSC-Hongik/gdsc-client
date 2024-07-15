import { Flex, Space } from '@/components/common/Wrapper';
import { color } from 'wowds-tokens';
import { css } from '@emotion/react';
import { useState, useContext} from 'react';
import { BottomSheetContext } from "@/context/BottomSheetContext"
import JoinRegularMember from '@/components/myPage/JoinRegularMember';
import AssociateRequirementCheck from '@/components/myPage/AssociateRequirementCheck';
import BasicUserInfo from '@/components/myPage/BasicUserInfo';
import { media } from '@/styles';
import styled from '@emotion/styled';
import { Privacy } from '@/components/myPage/Privacy';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import JoinStatus from '@/components/myPage/JoinStatus';

export const Dashboard = () => {
    const [openInfo, setOpenInfo] = useState(false)
    const { isOpen } = useContext(BottomSheetContext)
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
    <Wrapper
      direction="column"
      justify="flex-start"
      style={{ gap: '40px' }}
      css={css`
        gap: '40px';
      `}>
      <Space height={20} />
      <Flex justify="flex-start" direction="column" align="flex-start">
      <BasicUserInfo member={member} />
      <JoinStatus
        role={member.role}
        currentRecruitmentRound={currentRecruitmentRound}
      />
    <Space height={40}/>
    <MemberStatusStepper member={member}/>
    <Space height={20}/>
    <ApproveBox
        role={member.role}
        currentRecruitment = {currentRecruitmentRound}/>
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

import MemberStatusStepper from '@/components/myPage/MemberStatusStepper';
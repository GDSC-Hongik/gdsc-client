import { Flex, Space } from '@/components/common/Wrapper';
import { color } from 'wowds-tokens';
import JoinRegularMemberBottomSheet from '../components/bottomsheet/JoinRegularMemberBottomSheet';
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
import useBottomSheet from '@/hooks/common/useBottomSheet';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export const Dashboard = () => {
  const { isOpen } = useBottomSheet();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  if (!data) {
    return (
      <Wrapper direction="column" justify="flex-start">
        <LoadingSpinner />
      </Wrapper>
    );
  }

  const { member, currentRecruitmentRound, currentMembership } = data;

  console.log(data);

  return (
    <div style={{ height: '100%' }}>
      <Wrapper direction="column" justify="flex-start">
        <Space height={20} />
        <Flex justify="flex-start" direction="column" align="flex-start">
          <BasicUserInfo member={member} />
          <JoinStatus
            role={member.role}
            currentRecruitmentRound={currentRecruitmentRound}
            currentMembership={currentMembership}
            member={member}
          />
        </Flex>
        {(currentMembership || member.role === 'REGULAR') && (
          <JoinRegularMember
            member={member}
            paymentStatus={currentMembership?.regularRequirement.paymentStatus}
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
    </div>
  );
};

const Wrapper = styled(Flex)`
  min-height: 100vh;
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 0px 16px;
  gap: 40px;
  background-color: ${color.mono50};

  ${media.mobile} {
    width: 100vw;
  }
`;

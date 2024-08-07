import { space } from 'wowds-tokens';
import { useState, useRef } from 'react';
import { Help } from 'wowds-icons';
import styled from '@emotion/styled';
import MemberStatusInfoBox from '@/components/myPage/MemberStatusInfoBox';
import { ApproveBox } from './ApproveBox';
import { Text, Flex, Space } from '../common/Wrapper';
import { CurrentRecruitmentType } from '@/apis/member/memberType';
import MemberStatusStepper from './MemberStatusStepper';
import { User, UserRoleType } from '@/types/user';

const JoinStatus = ({
  role,
  currentRecruitmentRound,
  member
}: {
  role: UserRoleType;
  currentRecruitmentRound: CurrentRecruitmentType;
  member: User;
}) => {
  const [openInfo, setOpenInfo] = useState(false);
  const helpButtonRef = useRef<HTMLDivElement>(null);
  return (
    <Flex justify="flex-start" direction="column" align="flex-start">
      <Space height={40} />
      <Container>
        <Text typo="h2" color="textBlack">
          현재 회원 상태
        </Text>
        <div
          ref={helpButtonRef}
          onClick={() => {
            setOpenInfo(!openInfo);
          }}>
          <Help
            width={24}
            height={24}
            fill="sub"
            stroke="sub"
            style={{ cursor: 'pointer' }}
          />
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
      <ApproveBox role={role} currentRecruitment={currentRecruitmentRound} />
    </Flex>
  );
};

export default JoinStatus;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: ${space.xxs};
  justify-content: 'flex-start';
  align-items: 'center';
`;

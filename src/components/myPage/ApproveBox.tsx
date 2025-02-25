import Box, { BoxProps } from 'wowds-ui/Box';
import styled from '@emotion/styled';
import {
  CurrentMembershipType,
  CurrentRecruitmentType
} from '@/apis/member/memberType';
import {
  convertRecruitmentPeriod,
  convertRecruitmentName
} from '@/utils/mypage/recruitmentNameFormat';
import useBottomSheet from '@/hooks/common/useBottomSheet';
import { UserRoleType } from '@/types/user';

type BoxVariantType = 'arrow' | 'checkbox' | 'text' | 'warn';

export const ApproveBox = ({
  role,
  currentRecruitment,
  currentMembership
}: {
  role: UserRoleType;
  currentRecruitment: CurrentRecruitmentType;
  currentMembership?: CurrentMembershipType;
}) => {
  const { handleBottomSheet } = useBottomSheet();

  if (role === 'REGULAR') {
    return (
      <Box
        variant="arrow"
        text="정회원 가입 완료"
        subText="GDGoC Hongik의 스터디 서비스인 WOW CLASS를 이용할 수 있어요."
        status="success"
        onClick={() => {
          window.location.href = 'https://study.gdschongik.com/';
        }}
      />
    );
  }

  if (!currentRecruitment) {
    return (
      <Box
        variant="warn"
        text="지금은 지원 기간이 아니에요."
        subText="모집 기간에 다시 확인해주세요!"
        status="error"
      />
    );
  }

  const boxContent: Record<
    Exclude<UserRoleType, 'REGULAR'>,
    BoxProps<BoxVariantType>
  > = {
    GUEST: {
      text: `${convertRecruitmentName(currentRecruitment.name, currentRecruitment.roundTypeValue)}`,
      subText: '하단의 준회원 가입 조건을 완료해주세요.',
      variant: 'text',
      status: 'error',
      disabled: true
    },
    ASSOCIATE: {
      text: `${convertRecruitmentName(currentRecruitment.name, currentRecruitment.roundTypeValue)}`,
      subText: currentMembership
        ? '정회원 가입 조건을 완료해주세요'
        : `${convertRecruitmentPeriod(currentRecruitment.period)}`,
      variant: currentMembership ? 'text' : 'arrow',
      status: 'error'
    }
  };

  return (
    <BoxWrapper
      onClick={() => {
        if (role === 'ASSOCIATE' && !currentMembership) handleBottomSheet();
        else return;
      }}>
      <Box {...boxContent[role]} />
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

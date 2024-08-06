import Box from 'wowds-ui/Box';
import styled from '@emotion/styled';
import { CurrentRecruitmentType } from '@/apis/member/memberType';
import {
  convertRecruitmentPeriod,
  convertRecruitmentName
} from '@/utils/mypage/recruitmentNameFormat';
import useBottomSheet from '@/hooks/common/useBottomSheet';

type MemberRole = 'GUEST' | 'ASSOCIATE' | 'REGULAR';
type BoxVariantType = 'arrow' | 'checkbox' | 'text' | 'warn';
type BoxStatusType = 'default' | 'success' | 'error';

export const ApproveBox = ({
  role,
  currentRecruitment
}: {
  role: MemberRole;
  currentRecruitment: CurrentRecruitmentType;
}) => {
  const { handleBottomSheet } = useBottomSheet();
  const boxContent: Record<
    MemberRole,
    {
      title: string;
      description?: string;
      boxVariant: BoxVariantType;
      status: BoxStatusType;
    }
  > = {
    GUEST: {
      title: `${convertRecruitmentName(currentRecruitment.name)}`,
      description: '하단의 준회원 가입 조건을 완료해주세요.',
      boxVariant: 'warn',
      status: 'error'
    },
    ASSOCIATE: {
      title: `${convertRecruitmentName(currentRecruitment.name)}`,
      description: `${convertRecruitmentPeriod(currentRecruitment.period)}`,
      boxVariant: 'arrow',
      status: 'error'
    },
    REGULAR: {
      title: '모든 가입 절차를 완료했어요.',
      boxVariant: 'text',
      status: 'success'
    }
  };
  return (
    <>
      {currentRecruitment.period.open ? (
        <BoxWrapper
          onClick={() => {
            if (role === 'ASSOCIATE') handleBottomSheet();
            else {
              return;
            }
          }}>
          <Box
            variant={boxContent[role].boxVariant}
            text={boxContent[role].title}
            subText={boxContent[role].description}
            status={boxContent[role].status}
          />
        </BoxWrapper>
      ) : (
        <Box
          variant="warn"
          text="학회원 모집이 마감되었어요"
          subText="2학기 모집 소식을 받고 싶으시다면 @gdsc.hongik 을 팔로우 해주세요."
          status="error"
        />
      )}
    </>
  );
};

const BoxWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

import Box from 'wowds-ui/Box';
import styled from '@emotion/styled';
import { CurrentRecruitmentType } from '@/apis/member/memberType';
import {
  convertRecruitmentPeriod,
  convertRecruitmentName
} from '@/utils/mypage/recruitmentNameFormat';
import useBottomSheet from '@/hooks/common/useBottomSheet';
import { UserRoleType } from '@/types/user';

type BoxVariantType = 'arrow' | 'checkbox' | 'text' | 'warn';
type BoxStatusType = 'default' | 'success' | 'error';

export const ApproveBox = ({
  role,
  currentRecruitment
}: {
  role: UserRoleType;
  currentRecruitment: CurrentRecruitmentType;
}) => {
  const { handleBottomSheet } = useBottomSheet();
  const boxContent: Record<
    UserRoleType,
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
      {currentRecruitment ? (
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
          text="지금은 모집 기간이 아니에요."
          subText="모집 기간에 다시 확인해주세요!"
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

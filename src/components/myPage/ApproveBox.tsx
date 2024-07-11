import Box from 'wowds-ui/Box';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { CurrentRecruitmentType } from '@/apis/member/memberType';
import { formatDate } from '@/utils/mypage/formatDate';
import RoutePath from '@/routes/routePath';

type MemberRole = 'GUEST' | 'ASSOCIATE' | 'REGULAR' | 'ADMIN';
type BoxVariantType = 'arrow' | 'checkbox' | 'text' | 'warn';
type BoxStatusType = 'default' | 'success' | 'error';

const convertRecruitmentName = (name: string) => {
  const [period, round] = name.split(' ');
  const [year, semester] = period.split('-');
  return `${year}년 ${semester}학기 ${round} 정회원 지원하기`;
};

const convertRecruitmentPeriod = (period: {
  startDate: string;
  endDate: string;
}) => {
  const startDate = formatDate(period.startDate);
  const endDate = formatDate(period.endDate);
  return `지원 기간 : ${startDate} ~ ${endDate}`;
};

export const ApproveBox = ({
  role,
  currentRecruitment
}: {
  role: MemberRole;
  currentRecruitment: CurrentRecruitmentType;
}) => {
  const navigate = useNavigate();
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
    },
    //TODO: 어드민 가입 상태 논의하기
    ADMIN: {
      title: '모든 가입 절차를 완료했어요.',
      boxVariant: 'text',
      status: 'success'
    }
  };
  return (
    <BoxWrapper
      onClick={() => {
        navigate(RoutePath.JoinRegularMember);
      }}>
      <Box
        variant={boxContent[role].boxVariant}
        text={boxContent[role].title}
        subText={boxContent[role].description}
        status={boxContent[role].status}
        //TODO: BottomSheet 보여주는 부분 ~
      />
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

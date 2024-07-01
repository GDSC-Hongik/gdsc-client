import { Flex, Space, Text } from '@/components/common/Wrapper';
import AssociateRequirementCheck from '@/components/myPage/AssociateRequirementCheck';
import BasicUserInfo from '@/components/myPage/BasicUserInfo';
import { media } from '@/styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from 'wowds-tokens';
import { Privacy } from '@/components/myPage/Privacy';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import GlobalSize from '@/constants/globalSize';
import { ApproveBox } from '@/components/myPage/ApproveBox';

export const MyPage = () => {
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  //TODO: 추후 로딩 스피너 삽입할 것
  if (!data) {
    return <div> 로딩중 ...</div>;
  }

  const { member, currentRecruitment } = data;

  return (
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
        <Text typo="h2" color="textBlack">
          현재 회원 상태
        </Text>
        <Space height={20} />
        프로그래스바 자리
        <Space height={24} />
        <ApproveBox
          role={member.role}
          currentRecruitment={currentRecruitment}
        />
      </Flex>
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

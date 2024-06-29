import { Flex, Text } from '@/components/common/Wrapper';
import { css } from '@emotion/react';
import { User } from '@/types/user';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { logout } from '@/utils/auth';
import { typography } from 'wowds-tokens';

import { useNavigate } from 'react-router-dom';

const BaiscUserInfo = ({ member }: { member: User }) => {
  const navigate = useNavigate();
  const { clearLandingStatus } = useLandingStatus();

  const handleLogoutClick = () => {
    clearLandingStatus();
    logout();

    navigate('/');
  };

  return (
    <Flex gap={12} direction="column">
      <Text typo="heading1" color="black">
        {member.basicInfo.name} 님
      </Text>
      <Text
        onClick={handleLogoutClick}
        typo="label2"
        color="gray4"
        css={css`
          text-decoration: underline;
          cursor: pointer;
        `}>
        로그아웃
      </Text>
    </Flex>
  );
};

export default BaiscUserInfo;

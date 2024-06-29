import { Flex } from '@/components/common/Wrapper';
import { User } from '@/types/user';
import useLandingStatus from '@/hooks/zustand/useLandingStatus';
import { logout } from '@/utils/auth';
import { typography, color } from 'wowds-tokens';

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
      <p style={typography.h1} color={color.textBlack}>
        {member.basicInfo.name} 님
      </p>
      <div
        onClick={handleLogoutClick}
        style={{
          textDecoration: 'underline',
          cursor: 'pointer',
          ...typography.label1,
          color: color.sub
        }}>
        로그아웃
      </div>
    </Flex>
  );
};

export default BaiscUserInfo;

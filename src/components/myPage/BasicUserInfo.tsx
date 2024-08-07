import { Flex, Text } from '@/components/common/Wrapper';
import { User } from '@/types/user';
import { logout } from '@/utils/auth';
import { typography, color } from 'wowds-tokens';

import { useNavigate } from 'react-router-dom';

const BasicUserInfo = ({ member }: { member: User }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate('/');
    location.reload();
  };

  return (
    <Flex gap="sm" direction="column">
      {member.basicInfo.name ? (
        <p style={typography.h1} color={color.textBlack}>
          {member.basicInfo.name} 님
        </p>
      ) : (
        <Text typo="h1" color="darkDisabled">
          정보를 입력해주세요
        </Text>
      )}

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

export default BasicUserInfo;

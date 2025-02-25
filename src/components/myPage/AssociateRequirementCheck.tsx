import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';
import { UnivEmailStatus } from '@/types/status';
import { Discord } from '@/assets/Discord';
import { AssociateRequirement } from '@/types/user';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';

const AssociateRequirementCheck = ({
  associateRequirement
}: {
  associateRequirement: AssociateRequirement;
}) => {
  const { infoStatus, discordStatus, univStatus } = associateRequirement;
  const navigate = useNavigate();

  const univStatusContent = (univStatus: UnivEmailStatus) => {
    if (univStatus === 'UNSATISFIED')
      return (
        <Flex
          direction="column"
          gap="xs"
          justify="flex-start"
          align="flex-start">
          <Text typo="h3" color="textBlack">
            재학생 이메일 인증이 필요해요.
          </Text>
          <Text typo="body1" color="sub">
            홍익대학교 재학생인지 알려주세요.
            <br />
            학교 Gmail을 통해 인증할 수 있어요.
          </Text>
        </Flex>
      );
    if (univStatus === 'IN_PROGRESS')
      return (
        <Flex
          direction="column"
          gap="xs"
          justify="flex-start"
          align="flex-start">
          <Text typo="h3" color="textBlack">
            재학생 이메일 인증이 진행 중이에요.
          </Text>
          <Text typo="body1" color="sub">
            메일함을 확인해주세요.
          </Text>
        </Flex>
      );
    return '홍익대학교 재학생 인증을 완료했어요.';
  };

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        준회원 가입 조건
      </Text>
      <Box
        text={
          infoStatus === 'UNSATISFIED'
            ? '기본 회원 정보를 입력해주세요.'
            : '기본 회원 정보를 모두 입력했어요.'
        }
        onClick={() => {
          if (infoStatus === 'UNSATISFIED') navigate(RoutePath.Signup);
        }}
        status={infoStatus === 'UNSATISFIED' ? 'error' : 'success'}
        variant={infoStatus === 'UNSATISFIED' ? 'arrow' : 'text'}
      />
      <Box
        text={'GDGoC Hongik Discord'}
        textColor="discord"
        subText={
          discordStatus === 'UNSATISFIED'
            ? '디스코드 연동이 필요해요.'
            : '디스코드 연동을 완료했어요.'
        }
        leftElement={<Discord />}
        variant={discordStatus === 'UNSATISFIED' ? 'arrow' : 'text'}
        status={discordStatus === 'UNSATISFIED' ? 'error' : 'success'}
        onClick={() => {
          if (discordStatus === 'UNSATISFIED') {
            navigate(RoutePath.Discord);
          } else {
            window.open('https://discord.gg/dSV6vSEuGU');
          }
        }}
      />
      <Box
        onClick={() => {
          navigate(RoutePath.StudentVerification);
        }}
        text={univStatusContent(univStatus)}
        status={univStatus === 'SATISFIED' ? 'success' : 'error'}
        variant={univStatus === 'SATISFIED' ? 'text' : 'arrow'}
      />
    </Flex>
  );
};

export default AssociateRequirementCheck;

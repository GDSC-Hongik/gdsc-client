import { Flex, Text } from '@/components/common/Wrapper';
import Box from 'wowds-ui/Box';
import { Discord } from '@/assets/Discord';
import { AssociateRequirement } from '@/types/user';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';

const AssociateRequirementCheck = ({
  associateRequirement
}: {
  associateRequirement: AssociateRequirement;
}) => {
  const { infoStatus, discordStatus, bevyStatus, univStatus } =
    associateRequirement;
  const navigate = useNavigate();

  return (
    <Flex justify="flex-start" direction="column" align="flex-start" gap="sm">
      <Text typo="h2" color="black">
        준회원 가입 조건
      </Text>
      <Box
        text={
          infoStatus === 'PENDING'
            ? '기본 회원 정보를 입력해주세요.'
            : '기본 회원 정보를 모두 입력했어요.'
        }
        onClick={() => {
          if (infoStatus === 'PENDING')
            navigate(RoutePath.AuthenticationProcess3_Signup);
        }}
        status={infoStatus === 'PENDING' ? 'error' : 'success'}
        variant={infoStatus === 'PENDING' ? 'arrow' : 'text'}
      />
      <Box
        text={'GDSC Hongik Discord'}
        textColor="discord"
        subText={
          discordStatus === 'PENDING'
            ? '디스코드 연동이 필요해요.'
            : '디스코드 연동을 완료했어요.'
        }
        leftElement={<Discord />}
        variant={discordStatus === 'PENDING' ? 'arrow' : 'text'}
        status={discordStatus === 'PENDING' ? 'error' : 'success'}
        onClick={() => {
          if (discordStatus === 'PENDING') {
            navigate(RoutePath.Discord);
          } else {
            window.open('https://discord.gg/dSV6vSEuGU');
          }
        }}
      />
      <Box
        onClick={() => {
          navigate(RoutePath.AuthenticationProcess2_StudentVerification);
        }}
        text={
          univStatus === 'PENDING' ? (
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
          ) : (
            '홍익대학교 재학생 인증을 완료했어요.'
          )
        }
        status={univStatus === 'PENDING' ? 'error' : 'success'}
        variant={univStatus === 'PENDING' ? 'arrow' : 'text'}
      />
      <Box
        text={
          bevyStatus === 'PENDING' ? (
            <Flex
              direction="column"
              gap="xs"
              justify="flex-start"
              align="flex-start">
              <Text typo="h3" color="textBlack">
                GDSC Bevy 가입이 마무리되지 않았어요.
              </Text>
              <Text typo="body1" color="sub">
                전체 GDSC 이벤트를 확인할 수 있는
                <br />
                플랫폼이에요. 지금 가입해볼까요?
              </Text>
            </Flex>
          ) : (
            <Flex
              direction="column"
              gap="xs"
              justify="flex-start"
              align="flex-start">
              <Text typo="h3" color="textBlack">
                GDSC Bevy 가입을 완료했어요.
              </Text>
              <Text typo="body1" color="sub">
                이제 전체 GDSC 이벤트에 대한 정보를
                <br />
                확인하고 참여할 수 있어요.
              </Text>
            </Flex>
          )
        }
        variant="arrow"
        status={bevyStatus === 'PENDING' ? 'error' : 'success'}
        onClick={() => {
          if (bevyStatus === 'PENDING') {
            navigate(RoutePath.Bevy);
          } else {
            window.open(
              'https://gdsc.community.dev/hongik-university-seoul-south-korea/'
            );
          }
        }}
      />
    </Flex>
  );
};

export default AssociateRequirementCheck;

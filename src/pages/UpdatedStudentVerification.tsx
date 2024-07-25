import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Flex, Text } from '@/components/common/Wrapper';
import { useStudentVerification } from '@/hooks/auth';
import RoutePath from '@/routes/routePath';
import { color, typography } from 'wowds-tokens';
import styled from '@emotion/styled';
import GlobalSize from '@/constants/globalSize';
import { media } from '@/styles';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function UpdatedStudentVerification() {
  const { onSubmit, control, onVerifyStudent } = useStudentVerification();

  return (
    <Wrapper direction="column" justify="flex-start" gap="lg">
      <TextContainer>
        <Text typo="h1" style={{ marginBottom: '12px' }}>
          재학생 인증하기
        </Text>
        <div>
          <Text>
            재학생 인증 과정이 필요해요. 본인의 학교 이메일을 통해 재학생 인증을
            마무리해주세요!
          </Text>
        </div>
      </TextContainer>
      <form onSubmit={onSubmit}>
        <Controller
          name="univEmail"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="아이디@g.hongik.ac.kr"
              label="학교 이메일"
              type="email"
              required
            />
          )}
        />
        <ButtonContainer>
          <Button type="button" width="146px" onClick={onVerifyStudent}>
            인증 완료
          </Button>
          <Button type="submit" width={'146px'}>
            메일 재전송
          </Button>
        </ButtonContainer>
      </form>
      <Text color="red100">
        * 인증이 완료되지 않았어요! <br />
        {'    '}메일함을 확인해주세요.
      </Text>
      <StudentGuideLink
        to={RoutePath.StudentEmailLinkGuideLink}
        target="_blank">
        학교 이메일이 무엇인가요?
      </StudentGuideLink>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  position: relative;
  min-height: calc(100vh - 54px);
  width: ${GlobalSize.width};
  margin: 0px -16px;
  padding: 40px 16px 0px;
  background-color: ${color.mono50};
  ${media.mobile} {
    width: 100vw;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ButtonContainer = styled(Flex)`
  gap: 8px;
`;

const StudentGuideLink = styled(Link)`
  color: ${color.textBlack};
  text-decoration: underline;
  font-weight: 600;
  &:active {
    color: ${color.sub};
  }
  &:hover {
    color: ${color.sub};
  }
  &:visited {
    color: ${color.textBlack};
  }

  ${typography.label1};
`;

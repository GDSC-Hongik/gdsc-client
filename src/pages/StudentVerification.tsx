import TextField from 'wowds-ui/TextField';
import Button from 'wowds-ui/Button';
import { Flex, Space, Text } from '@/components/common/Wrapper';
import RoutePath from '@/routes/routePath';
import { color, space, typography } from 'wowds-tokens';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useStudentVerification } from '@/hooks/auth';
import { Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { media } from '@/styles';
import GlobalSize from '@/constants/globalSize';
import LoadingSpinner from '@/components/common/LoadingSpinner';

/** 재학생 인증 페이지 */
export const StudentVerification = () => {
  const navigate = useNavigate();
  //TODO: 추후 pending 상태 백엔드 API 수정하면 반영해둘것.
  const [, setPending] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { onSubmit, control, isValid, onVerifyStudent, isPending } =
    useStudentVerification();

  const IsStudentVerified = async () => {
    const univStatus = await onVerifyStudent();
    if (univStatus === 'UNSATISFIED') {
      setPending(true);
    } else {
      navigate(RoutePath.Dashboard);
    }
  };

  useEffect(() => {
    IsStudentVerified();
  }, []);

  const handleSubmit = async () => {
    if (isClicked) return;
    setIsClicked(true);
    onSubmit();
  };

  return (
    <Wrapper direction="column" justify="flex-start" gap="lg">
      {isPending && <LoadingSpinner />}
      <TextContainer>
        <Text typo="h1" style={{ marginBottom: '12px' }}>
          재학생 인증하기
        </Text>
        <div>
          <Text>준회원으로 활동하기 위해서 재학생 인증 과정이 필요해요.</Text>
          <Text>학교 이메일을 통해 재학생 인증을 마무리해주세요!</Text>
        </div>
      </TextContainer>
      <form onSubmit={handleSubmit}>
        <Controller
          name="univEmail"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: '* 이메일을 입력해주세요.'
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]/,
              message: '* 이메일 형식을 지켜주세요.'
            }
          }}
          render={({ field, fieldState }) => (
            <EmailContainer>
              <TextFieldWrapper>
                <TextField
                  style={{ minWidth: '100%' }}
                  ref={field.ref}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  error={fieldState.invalid}
                  placeholder="이메일 작성"
                  label="학교 이메일"
                  helperText={fieldState.error?.message}
                />
              </TextFieldWrapper>
              <Text
                typo="body1"
                style={{
                  height: '84.8px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                @g.hongik.ac.kr
              </Text>
            </EmailContainer>
          )}
        />

        <Space height="xs" />
        <Text typo="body3" color="sub">
          * 메일 전송이 최대 30분 가량 늦어질 수 있어요.
          <br />* 메일 전송이 되지 않을 경우 카카오톡 채널을 통해 코어 멤버에게
          문의해 주세요.
          <br />* 인증메일이 스팸메일함에 전송될 수 있으니 확인해주세요.
        </Text>
        <ButtonContainer>
          <Button
            disabled={!isValid}
            style={{
              maxWidth: '100%',
              backgroundColor: isValid ? color.primary : color.darkDisabled,
              color: 'white'
            }}>
            인증메일 받기
          </Button>
          <StudentGuideLink
            color={color.sub}
            to={RoutePath.StudentEmailLinkGuideLink}
            target="_blank">
            학교 이메일이 무엇인가요?
          </StudentGuideLink>
        </ButtonContainer>
      </form>
    </Wrapper>
  );
};

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

const StudentGuideLink = styled(Link)`
  color: ${color.sub};
  text-decoration: underline;
  font-weight: 600;
  padding: ${space.sm};
  &:active {
    color: ${color.sub};
  }
  &:hover {
    color: ${color.sub};
  }
  &:visited {
    color: ${color.sub};
  }
  ${typography.label2};
`;

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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.75rem;
  padding: 0px 0.75rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space.xs};
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 260px;
  align-items: center;
  gap: ${space.xs};
`;

const TextFieldWrapper = styled.div`
  flex: 1;
  height: 84.8px;
`;

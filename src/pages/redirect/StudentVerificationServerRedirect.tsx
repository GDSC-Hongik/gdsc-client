import { Text } from '@/components/common/Wrapper';
import { useVerifyStudent } from '@/hooks/query';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

export const StudentVerificationServerRedirect = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const { isSuccess, isPending } = useVerifyStudent(token);

  return (
    <Container>
      <Box>
        {isPending ? (
          <PulseLoader loading={isPending} />
        ) : (
          <TextContainer>
            <Text typo={'heading3'} style={{ marginBottom: '12px' }}>
              {isSuccess ? '재학생 인증 완료' : '인증에 실패했어요'}
            </Text>
            {isSuccess ? (
              <>
                <Text>원래 페이지로 돌아가</Text>
                <Text>인증하기 버튼을 눌러주세요.</Text>
              </>
            ) : (
              <>
                <Text>유효하지 않거나 만료된 인증코드예요.</Text>
                <Text>원래 페이지로 돌아가서</Text>
                <Text>메일 재전송 버튼을 눌러주세요.</Text>
              </>
            )}
          </TextContainer>
        )}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 40px 16px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.white};
  align-items: center;
  gap: 24px;
  padding: 80px 24px;
  border: 1px solid ${theme.palette.gray2};
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

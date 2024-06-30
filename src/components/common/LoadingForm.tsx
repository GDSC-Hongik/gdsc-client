import styled from '@emotion/styled';
import { color, typography } from 'wowds-tokens';
import { Flex, Text } from '@/components/common/Wrapper';

interface InputProps {
  label?: string;
}

/**
 * @param {string} label?: 제목
 */
export const LoadingForm = ({ label }: InputProps) => {
  return (
    <Container>
      <Flex direction="column" align="flex-start" gap="sm">
        <Text typo="label2" color="sub">
          {label}
        </Text>
        <InputContainer>
          <StyledInput
            value={''}
            disabled
            readOnly
            placeholder={'불러오는 중...'}
          />
        </InputContainer>
      </Flex>
      <StyledHelperTextBox />
    </Container>
  );
};

const Container = styled(Flex)`
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
`;

const InputContainer = styled.div<{
  value?: string | number | readonly string[] | undefined;
  isError?: boolean;
}>`
  position: relative;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${color.black};
    //글자색
  }
`;
const StyledInput = styled.input<{
  value: string;
  isError?: boolean;
}>`
  width: 100%;
  height: 38px;
  padding: 0px 12px 0px 12px;

  box-sizing: border-box;

  background: ${color.white};
  border-radius: 4px;

  ${typography.body2};
  color: ${color.textBlack};

  & + div {
    color: ${color.textBlack};
  }

  & + div {
    color: ${({ isError }) => (isError ? color.error : 'transparent')};
  }
  border: ${({ isError, value }) =>
    isError
      ? `1px solid ${color.error}`
      : value
        ? `1px solid ${color.sub}`
        : `1px solid ${color.mono400}`};

  :focus {
    border: ${({ isError }) =>
      isError ? `1px solid ${color.error}` : `1px solid ${color.sub}`};

    outline: none;
  }

  ::placeholder {
    color: ${color.mono400};
    font-weight: 400;
  }
`;

const StyledHelperTextBox = styled(Flex)`
  color: ${color.error};
  justify-content: start;
  height: 24px;
`;

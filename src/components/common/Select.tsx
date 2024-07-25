import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { color, typography } from 'wowds-tokens';
import { Flex, Text } from '@/components/common/Wrapper';
import { SelectBoxArrow } from '@/assets/SelectBoxArrorw';

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  value: string;
  items: { [key: string]: any }[];
  idField: string;
  displayField: string;

  label?: string;
  placeholder?: string;
  errorText?: string;
  isError?: boolean;
}

/**
 * @default {HTMLInputElement}
 *
 * @param {string} value: input value
 * @param {string} label?: 제목
 * @param {string} placeholder?: placeholder
 * @param {string} errorText?: 에러 메시지
 * @param {boolean} isError?: 에러 여부
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      value,
      items,
      idField,
      displayField,
      label,
      errorText,
      placeholder = '선택하기',
      isError = false,
      ...props
    },
    ref
  ) => {
    return (
      <Container>
        <Flex direction="column" align="flex-start" gap="xs">
          <Text typo="label2" color={value ? 'textBlack' : 'sub'}>
            {label}
          </Text>
          <InputContainer isError={isError}>
            <StyledSelect
              value={value}
              {...props}
              ref={ref as ForwardedRef<HTMLSelectElement>}>
              <option value="" disabled>
                {placeholder}
              </option>
              {items.map((item) => (
                <option key={item[idField]} value={item[idField]}>
                  {item[displayField]}
                </option>
              ))}
            </StyledSelect>
            <SelectBoxArrow />
          </InputContainer>
        </Flex>
        <StyledHelperTextBox>
          {errorText && (
            <Text typo="label3" color="red100">
              {errorText}
            </Text>
          )}
        </StyledHelperTextBox>
      </Container>
    );
  }
);

const Container = styled(Flex)`
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
`;

const InputContainer = styled(Flex)<{
  value?: string | number | readonly string[] | undefined;
  isError?: boolean;
}>`
  position: relative;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${color.textBlack};
    //글자색
  }

  svg {
    position: absolute;
    right: 12px;
  }
`;

const StyledSelect = styled.select<{
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
  color: ${color.black};

  & + div {
    color: ${color.black};
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

  option {
    font-size: 12px;
  }

  option[value=''][disabled] {
    display: none;
  }

  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
`;

const StyledHelperTextBox = styled(Flex)`
  color: ${color.error};
  justify-content: start;
  height: 24px;
`;

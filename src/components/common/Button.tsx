import { color, typography } from 'wowds-tokens';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
}

/**
 * @default {HTMLButtonElement}
 *
 * @param {string |number} width?: 버튼 너비
 */
export const Button = ({ children, width, ...props }: ButtonProps) => {
  return (
    <StyledButton width={width} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ width?: string | number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 0px;
  border-radius: 100px;
  width: ${({ width }) => (width ? width : '100%')};

  background-color: ${color.blue100};
  ${typography.label1}
  color: ${color.white}

  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed; /* 커서 변경 */
      background-color: ${color.blue100}
    `}
`;

import { theme } from '@/styles';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
}

/**
 * @default {HTMLButtonElement}
 *
 * @param {number} width?: 버튼 너비
 */
export const Button = ({ children, width = 358, ...props }: ButtonProps) => {
  return (
    <StyledButton width={width} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 0px;
  border-radius: 100px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  background-color: ${theme.palette.blue100};
  ${theme.typo.label1}
  color: ${theme.palette.white}
`;

import { GitHubIcon } from '@/assets/GitHubIcon';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

/**
 * @default {HTMLButtonElement}
 */
export const GitHubButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <GitHubIcon />
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 12px 0;
  width: 100%;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  gap: 8px;

  background-color: ${theme.palette.black};
  color: ${theme.palette.white};

  ${theme.typo.label1};
`;

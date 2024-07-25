import { GitHubIcon } from '@/assets/GitHubIcon';
import { color, typography } from 'wowds-tokens';
import Button from 'wowds-ui/Button';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

/**
 * @default {HTMLButtonElement}
 */
export const GitHubButton = ({
  children,
  onClick
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      onClick={onClick}
      style={{
        display: 'flex',
        backgroundColor: `${color.github}`,
        maxWidth: '100%'
      }}>
      <StyledButton>
        <GitHubIcon />
        {children}
      </StyledButton>
    </Button>
  );
};

const StyledButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;

  color: ${color.white};

  ${typography.label1};
`;

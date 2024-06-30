import { theme } from '@/styles';
import { color } from 'wowds-tokens';
import styled from '@emotion/styled';

/**
 * @default {HTMLButtonElement}
 */
export const JoinButton = styled.button`
  padding: 7.5px 20px;
  ${theme.typo.label2}
  color: ${theme.palette.black};
  border: 1px solid ${color.sub};
  border-radius: 20px;
  min-width: max-content;
`;

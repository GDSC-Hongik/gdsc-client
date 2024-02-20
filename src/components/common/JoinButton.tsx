import { theme } from '@/styles';
import styled from '@emotion/styled';

/**
 * @default {HTMLButtonElement}
 */
export const JoinButton = styled.button`
  padding: 7.5px 20px;
  ${theme.typo.label2}
  color: ${theme.palette.black};
  border: 1px solid ${theme.palette.gray3};
  border-radius: 20px;
`;

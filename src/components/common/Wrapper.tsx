import { KeyOfPalette, KeyOfTypo, theme } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  gap?: number;
  css?: ReturnType<typeof css>;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  width: 100%;
  box-sizing: border-box;
  ${({ css }) => css}
`;

export const Space = styled.div<{
  height?: number;
  width?: number;
  css?: ReturnType<typeof css>;
}>`
  height: ${({ height }) => (height ? `${height}px` : '')};
  width: ${({ width }) => (width ? `${width}px` : '')};
  ${({ css }) => css}
`;

export const Text = styled.p<{
  typo?: KeyOfTypo;
  color?: KeyOfPalette;
  css?: ReturnType<typeof css>;
}>`
  ${({ typo = 'body1' }) => theme.typo[typo]};
  color: ${({ color = 'black' }) => theme.palette[color]};

  display: flex;
  align-items: center;

  white-space: pre-wrap;

  margin: 0;
  padding: 0;

  ${({ css }) => css}
`;

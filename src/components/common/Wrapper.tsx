import { css } from '@emotion/react';
import type { color as colorType } from 'wowds-tokens';
import type { typography as typographyType } from 'wowds-tokens';
import type { space as spaceType } from 'wowds-tokens';
import { color as wowColor } from 'wowds-tokens';
import { typography as wowTypo } from 'wowds-tokens';
import { space as wowSpace } from 'wowds-tokens';
import styled from '@emotion/styled';

type colorKey = keyof typeof colorType;
type typoKey = keyof typeof typographyType;
type spaceKey = keyof typeof spaceType;

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  margin?: spaceKey;
  padding?: spaceKey;
  gap?: spaceKey;
  css?: ReturnType<typeof css>;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ gap }) => (gap ? wowSpace[gap] : '0px')};
  margin: ${({ margin }) => (margin ? wowSpace[margin] : '0')};
  padding: ${({ padding }) => (padding ? wowSpace[padding] : '0')};
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
  typo?: typoKey;
  color?: colorKey;
  css?: ReturnType<typeof css>;
}>`
  ${({ typo = 'body1' }) => wowTypo[typo]};
  color: ${({ color = 'textBlack' }) => wowColor[color]};

  text-align: start;

  white-space: pre-wrap;
  word-break: keep-all;

  margin: 0;
  padding: 0;

  ${({ css }) => css}
`;

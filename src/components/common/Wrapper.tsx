import { css } from '@emotion/react';
import type {
  color as colorType,
  typography as typographyType,
  space as spaceType
} from 'wowds-tokens';

import {
  color as wowColor,
  typography as wowTypo,
  space as wowSpace
} from 'wowds-tokens';

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
  height?: number | string;
  width?: number;
  css?: ReturnType<typeof css>;
}>`
  height: ${({ height }) =>
    height && typeof height === 'number'
      ? `${height}px`
      : height
        ? height
        : ''};
  width: ${({ width }) => (width ? `${width}px` : '')};
  ${({ css }) => css}
`;

export const Text = styled.p<{
  typo?: typoKey;
  color?: colorKey;
  css?: ReturnType<typeof css>;
}>`
  font-family: 'SUIT', 'Apple SD Gothic Neo';
  ${({ typo = 'body1' }) => wowTypo[typo]};
  color: ${({ color = 'textBlack' }) => wowColor[color]};
  text-align: start;

  white-space: pre-wrap;
  word-break: keep-all;

  margin: 0;
  padding: 0;

  ${({ css }) => css}
`;

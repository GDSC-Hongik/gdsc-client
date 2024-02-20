import { KeyOfPalette, KeyOfTypo, theme } from '@/styles';
import styled from '@emotion/styled';

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  gap?: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  width: 100%;
`;

export const Space = styled.div<{
  height?: number;
  width?: number;
}>`
  height: ${({ height }) => (height ? `${height}px` : '')};
  width: ${({ width }) => (width ? `${width}px` : '')};
`;

export const Text = styled.p<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
}>`
  ${({ typo }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};

  display: flex;
  align-items: center;

  white-space: pre-wrap;

  margin: 0;
  padding: 0;
`;

import { palette } from './palette';
import { typo } from './typo';

export interface TypeOfTheme {
  typo: TypeOfTypo;
  palette: TypeOfPalette;
}

export const theme: TypeOfTheme = {
  typo,
  palette
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;

export const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;
export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(988),
  mobile: `@media (max-width : 988px)`
};

import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  heading1: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(40)};
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -2%;
  `,
  heading2: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(32)};
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.64px;
  `,
  heading3: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(24)};
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -2%;
  `,
  heading4: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(18)};
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -2%;
  `,
  heading5: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(16)};
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -2%;
  `,
  body1: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(16)};
    font-weight: 500;
    line-height: 160%;
    letter-spacing: -2%;
  `,
  body2: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(16)};
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -2%;
  `,
  body3: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(14)};
    font-weight: 500;
    line-height: 140%;
  `,
  label1: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(16)};
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -2%;
  `,
  label2: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(14)};
    font-weight: 600;
    line-height: 120%;
  `,
  label3: css`
    font-family: 'SUIT', 'Apple SD Gothic Neo';
    font-size: ${calcRem(12)};
    font-weight: 600;
    line-height: 130%;
  `
} as const;

import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProExtraLight') format('woff2'),
      url('../assets/fonts/SofiaProExtraLight') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProLight') format('woff2'),
      url('../assets/fonts/SofiaProLight') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProRegular') format('woff2'),
      url('../assets/fonts/SofiaProRegular') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProMedium') format('woff2'),
      url('../assets/fonts/SofiaProMedium') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProSemiBold') format('woff2'),
      url('../assets/fonts/SofiaProSemiBold') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProBold') format('woff2'),
      url('../assets/fonts/SofiaProBold') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src:
      url('../assets/fonts/SofiaProBlack') format('woff2'),
      url('../assets/fonts/SofiaProBlack') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  ${emotionReset}
  body {
    min-height: 100vh;
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
      scroll: smooth;
    }
    font-family: 'Pretendard';

    background-color: #f8f8f8;
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  button:focus {
    outline: none;
  }
  button:disabled {
    pointer-events: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  input,
  textarea {
    border: none;
    margin: 0;
  }
  a {
    text-align: center;
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit; /* 링크의 색상 제거 */
  }
`;

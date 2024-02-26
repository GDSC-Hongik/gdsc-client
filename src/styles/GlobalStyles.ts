import { theme } from '@/styles';
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
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

    *:required {
      background-color: ${theme.palette.white};
    }
  }
  a {
    text-align: center;
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit; /* 링크의 색상 제거 */
  }

  strong {
    color: ${theme.palette.discord};
    background-color: ${theme.palette.white};
    border: 1px solid ${theme.palette.discord};
    border-radius: 4px;
    padding: 0px 4px;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

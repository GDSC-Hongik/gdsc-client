import { ButtonHTMLAttributes } from 'react';

export const RightArrow = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <svg
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 13.5L7 7.5L0.999999 1.5"
          stroke="#D32F2F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

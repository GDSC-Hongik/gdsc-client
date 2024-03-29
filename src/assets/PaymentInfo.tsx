import { ButtonHTMLAttributes } from 'react';

export const PaymentInfo = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_631_3825)">
          <path
            d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625Z"
            stroke="#CCCCCC"
            strokeWidth="1.8"
            strokeMiterlimit="10"
          />
          <path
            d="M10.0878 13.6437V13.7383H11.6077V13.6437C11.6235 12.434 11.9706 11.8923 12.8647 11.3506C13.8114 10.7721 14.3846 9.97271 14.3846 8.78938C14.3846 7.08013 13.0908 5.9231 11.1554 5.9231C9.38833 5.9231 7.95782 6.95917 7.89471 8.85249H9.50404C9.57241 7.75331 10.3508 7.25894 11.1502 7.25894C12.0443 7.25894 12.7648 7.84798 12.7648 8.77361C12.7648 9.56249 12.2809 10.1095 11.6551 10.4986C10.6768 11.0982 10.1036 11.6925 10.0878 13.6437ZM9.83537 15.8894C9.82485 16.4679 10.3087 16.9412 10.8925 16.9412C11.4605 16.9412 11.9443 16.4679 11.9443 15.8894C11.9443 15.3108 11.4605 14.8375 10.8925 14.8375C10.3087 14.8375 9.82485 15.3108 9.83537 15.8894Z"
            fill="#CCCCCC"
          />
        </g>
        <defs>
          <clipPath id="clip0_631_3825">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

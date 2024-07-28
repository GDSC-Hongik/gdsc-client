export const OnboardingArrow = () => {
  return (
    <>
      <style>
        {`
        @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      .bounce {
        animation: bounce 1s infinite;
      }
    `}
      </style>
      <svg
        className="bounce"
        width="58"
        height="26"
        viewBox="0 0 58 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L29 9L57 1"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 9L29 17L57 9"
          stroke="white"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 17L29 25L57 17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

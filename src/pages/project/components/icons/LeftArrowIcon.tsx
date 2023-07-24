import React from "react";

interface LeftArrowProps {
  className?: string;
}

const LeftArrowIcon = ({ className }: LeftArrowProps) => {
  return (
    <svg
      //   fill='var(--white)'
      width='30px'
      height='30px'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        id='primary'
        d='M21,12H3M6,9,3,12l3,3'
        style={{
          //   fill: "none",
          //   stroke: "var(--white)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
        }}
      />
    </svg>
  );
};

export default LeftArrowIcon;

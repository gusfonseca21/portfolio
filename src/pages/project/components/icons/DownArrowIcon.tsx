import React from "react";

interface DownArrowIconProps {
  className?: string;
}

const DownArrowIcon = ({ className }: DownArrowIconProps) => (
  <svg
    fill='var(--white)'
    width='30px'
    height='30px'
    viewBox='0 0 24 24'
    id='down-arrow-circle'
    data-name='Flat Color'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <circle
      id='primary'
      cx='12'
      cy='12'
      r='10'
      style={{ fill: "var(--white)" }}
    />
    <path
      id='secondary'
      d='M14.14,13H13V7a1,1,0,0,0-2,0v6H9.86a1,1,0,0,0-.69,1.5l2.14,3.12a.82.82,0,0,0,1.38,0l2.14-3.12A1,1,0,0,0,14.14,13Z'
      style={{ fill: "var(--main-color)" }}
    />
  </svg>
);

export default DownArrowIcon;

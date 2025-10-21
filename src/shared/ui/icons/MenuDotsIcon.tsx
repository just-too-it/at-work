import type { IconBaseProps } from "./types";

export const MenuDotsIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: IconBaseProps) => (
  <svg
    viewBox="0 0 4 16"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <path
      id="Vector"
      d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
      fill={color}
      fillRule="nonzero"
      transform="matrix(6.12323e-17,-1,1,6.12323e-17,0,16)"
    />
  </svg>
);

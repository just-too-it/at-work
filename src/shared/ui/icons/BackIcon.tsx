import type { IconBaseProps } from "./types";

export const BackIcon = ({
  size = 18,
  color = "currentColor",
  className,
}: IconBaseProps) => (
  <svg
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect
      id="arrow-left"
      width="18.000000"
      height="18.000000"
      x="0.000000"
      y="0.000000"
    />
    <path
      id="Vector"
      d="M11.25 9L0.75 9"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      id="Vector"
      d="M6 14.25L0.75 9L6 3.75"
      fillRule="nonzero"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

import React, { SVGProps } from "react";

export default function Logo({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      width={"1em"}
      height={"1em"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      className={props.className}
      {...props}
    >
      <path d="M8 10H16M8 14H16M7 4.5C7 4.5 3 7 3 12C3 17 7 19.5 7 19.5M17 4.5C17 4.5 21 7 21 12C21 17 17 19.5 17 19.5" />
    </svg>
  );
}

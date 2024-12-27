import React, { SVGProps } from "react";

const Shisa = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    width={"1em"}
    height={"1em"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    ref={props.ref}
    {...props}
  >
    {props.children}
  </svg>
);

const ShisaCreateEquation = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M7.5 14H12.5M13 9C7 9 13 19 7 19" stroke="currentColor" />
    <path
      d="M9 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H14C16.2091 22 18 20.2091 18 18V15"
      stroke="currentColor"
    />
    <path d="M14 5.91992H22" stroke="currentColor" />
    <path d="M18 2V10" stroke="currentColor" />
  </Shisa>
);

const ShisaUndo = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M15 19H16C18.2091 19 20 17.2091 20 15V13C20 10.7909 18.2091 9 16 9L4 9"
      stroke="currentColor"
    />
    <path
      d="M8 5L3.97609 8.21913C3.47568 8.61946 3.47568 9.38054 3.97609 9.78087L8 13"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaExtractVariables = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M18 12V9C18 7.89543 17.1046 7 16 7H13" stroke="currentColor" />
    <path
      d="M15 16C19 16 19 21 15 21M21 16C17 16 17 21 21 21"
      stroke="currentColor"
    />
    <path d="M3.5 8H8.5M9 3C3 3 9 13 3 13" stroke="currentColor" />
  </Shisa>
);

const ShisaCross = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M18 6L6 18" stroke="currentColor" />
    <path d="M18 18L6 6" stroke="currentColor" />
  </Shisa>
);

export { ShisaCreateEquation, ShisaUndo, ShisaExtractVariables, ShisaCross };

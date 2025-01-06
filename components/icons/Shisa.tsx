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

const ShisaGlobe = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <rect x="1" y="1" width="22" height="22" rx="11" stroke="currentColor" />
    <path d="M12 1.5V22.5" stroke="currentColor" />
    <path
      d="M1 12.0001C1 12.0001 3 14.4998 12 14.5C21 14.5002 23 12.0001 23 12.0001"
      stroke="currentColor"
    />
    <path
      d="M12 22.5C12 22.5 17.4998 21 17.5 12C17.5002 3 12 1.5 12 1.5"
      stroke="currentColor"
    />
    <path
      d="M12 22.5C12 22.5 6.50021 21 6.5 12C6.49979 3 12 1.5 12 1.5"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaCopy = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <rect x="3" y="7" width="14" height="14" rx="2" stroke="currentColor" />
    <path d="M9 3H17C19.2091 3 21 4.79086 21 7V15" stroke="currentColor" />
  </Shisa>
);

const ShisaFolder = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M1 10H23V17C23 19.7614 20.7614 22 18 22H6C3.23858 22 1 19.7614 1 17V10Z"
      stroke="currentColor"
    />
    <path
      d="M1 10L1 6C1 3.79086 2.79086 2 5 2L9.41886 2C10.3631 2 11.2014 2.60421 11.5 3.5V3.5C11.7986 4.39579 12.6369 5 13.5811 5H17L19 5C21.2091 5 23 6.79086 23 9L23 10"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaHence = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M9 10L15 10M9 14L15 14M7 4.5C7 4.5 3 7 3 12C3 17 7 19.5 7 19.5M17 4.5C17 4.5 21 7 21 12C21 17 17 19.5 17 19.5"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaVariables = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M14 8V10.625C14 10.625 14 15 17.5 15C21 15 21 10.625 21 10.625V8"
      stroke="currentColor"
    />
    <path
      d="M3 8C8.33333 8 8.33333 15 3 15M11 8C5.66667 8 5.66667 15 11 15"
      stroke="currentColor"
    />
    <path
      d="M21 8V18.5C21 18.5 21 22 17.5 22C14 22 14 18.5 14 18.5"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaArrowRight = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M19 12H4" stroke="currentColor" />
    <path
      d="M12 5L19.1399 11.2474C19.5952 11.6458 19.5952 12.3542 19.1399 12.7526L12 19"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaPercent = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M4 20L20 4" stroke="currentColor" />
    <circle cx="6.5" cy="6.5" r="3.5" stroke="currentColor" />
    <circle cx="17.5" cy="17.5" r="3.5" stroke="currentColor" />
  </Shisa>
);

const ShisaDocument = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M1 6C1 3.23858 3.23858 1 6 1H12.5147C13.8408 1 15.1126 1.52678 16.0503 2.46447L19.2929 5.70711L21.5355 7.94975C22.4732 8.88743 23 10.1592 23 11.4853V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6Z"
      stroke="currentColor"
    />
    <path d="M6 7L12 7" stroke="currentColor" />
    <path d="M6 12L17 12" stroke="currentColor" />
    <path d="M6 17L18 17" stroke="currentColor" />
  </Shisa>
);

const ShisaSearch = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M15.5 15.5L21 21" stroke="currentColor" />
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" />
  </Shisa>
);

const ShisaHistory = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M15 15L12 12" stroke="currentColor" />
    <path d="M12 12L12 7" stroke="currentColor" />
    <path
      d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 8.13845 21.0102 4.74163 18 2.77893"
      stroke="currentColor"
    />
    <path d="M17 7V2.5C17 2.22386 17.2239 2 17.5 2H22" stroke="currentColor" />
  </Shisa>
);

const ShisaSmartphone = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M10 20H14" stroke="currentColor" />
    <rect x="4" y="1" width="16" height="22" rx="3" stroke="currentColor" />
  </Shisa>
);

const ShisaChevronDown = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M5 9L10.6984 13.8844C11.4474 14.5263 12.5526 14.5263 13.3016 13.8844L19 9"
      stroke="currentColor"
    />
  </Shisa>
);

export {
  ShisaCreateEquation,
  ShisaUndo,
  ShisaExtractVariables,
  ShisaCross,
  ShisaGlobe,
  ShisaCopy,
  ShisaFolder,
  ShisaHence,
  ShisaVariables,
  ShisaArrowRight,
  ShisaPercent,
  ShisaDocument,
  ShisaSearch,
  ShisaHistory,
  ShisaSmartphone,
  ShisaChevronDown,
};

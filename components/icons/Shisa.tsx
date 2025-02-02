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
    {/* <path
      d="M9 10L15 10M9 14L15 14M7 4.5C7 4.5 3 7 3 12C3 17 7 19.5 7 19.5M17 4.5C17 4.5 21 7 21 12C21 17 17 19.5 17 19.5"
      stroke="currentColor"
    /> */}
    <path
      d="M8.5 9.5H15.5M8.5 14.5H15.5M6.44444 4C6.44444 4 2 6.66667 2 12C2 17.3333 6.44444 20 6.44444 20M17.5556 4C17.5556 4 22 6.66667 22 12C22 17.3333 17.5556 20 17.5556 20"
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

const ShisaChevronRight = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M9 5L13.8844 10.6984C14.5263 11.4474 14.5263 12.5526 13.8844 13.3016L9 19"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaSettings = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M3.07178 13.5839L2.72066 14.5202L3.07178 13.5839L2.51307 13.3744C1.24312 12.8982 1.24312 11.1018 2.51307 10.6256L3.07178 10.4161C4.91057 9.72654 5.60478 7.48752 4.47859 5.87869C3.83369 4.95739 4.95739 3.83369 5.87869 4.47859C7.48752 5.60478 9.72654 4.91057 10.4161 3.07178L9.47975 2.72066L10.4161 3.07178L10.6256 2.51307C11.1018 1.24312 12.8982 1.24312 13.3744 2.51307L13.5839 3.07178C14.2735 4.91057 16.5125 5.60478 18.1213 4.47859C19.0426 3.83369 20.1663 4.95739 19.5214 5.87869C18.3952 7.48752 19.0894 9.72654 20.9282 10.4161L21.4869 10.6256C22.7569 11.1018 22.7569 12.8982 21.4869 13.3744L20.9282 13.5839C19.0894 14.2735 18.3952 16.5125 19.5214 18.1213C20.1663 19.0426 19.0426 20.1663 18.1213 19.5214C16.5125 18.3952 14.2735 19.0894 13.5839 20.9282L13.3744 21.4869C12.8982 22.7569 11.1018 22.7569 10.6256 21.4869L10.4161 20.9282C9.72654 19.0894 7.48752 18.3952 5.87869 19.5214C4.95739 20.1663 3.83369 19.0426 4.47859 18.1213C5.60478 16.5125 4.91057 14.2735 3.07178 13.5839Z"
      stroke="currentColor"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" />
  </Shisa>
);

const ShisaPlus = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M6 11.9199H18" stroke="currentColor" />
    <path d="M12 6V18" stroke="currentColor" />
  </Shisa>
);

const ShisaEdit = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M10.8347 16.6212C10.5555 16.9004 10.1999 17.0907 9.8127 17.1681L6.57406 17.8158C5.87434 17.9558 5.25742 17.3389 5.39736 16.6391L6.04509 13.4005C6.12253 13.0133 6.31284 12.6577 6.59204 12.3785L15.1421 3.82842C15.9232 3.04737 17.1895 3.04737 17.9706 3.82842L19.3848 5.24263C20.1658 6.02368 20.1658 7.29001 19.3848 8.07106L10.8347 16.6212Z"
      stroke="currentColor"
    />
    <path d="M3 21H21" stroke="currentColor" />
    <path d="M13 6L17 10" stroke="currentColor" />
  </Shisa>
);

const ShisaBookmark = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M7 3H17C18.1046 3 19 3.89543 19 5V19.8433C19 20.7563 17.8771 21.1918 17.2615 20.5176L13.1077 15.9682C12.5129 15.3168 11.4871 15.3168 10.8923 15.9682L6.73849 20.5176C6.12289 21.1918 5 20.7563 5 19.8433V5C5 3.89543 5.89543 3 7 3Z"
      stroke="currentColor"
    />
  </Shisa>
);

const ShisaHome = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path
      d="M4 7V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V7"
      stroke="currentColor"
    />
    <path
      d="M23 9L13.0738 2.6833C12.4186 2.26639 11.5814 2.26639 10.9262 2.6833L6.5 5.5L1 9"
      stroke="currentColor"
    />
    <circle cx="12" cy="14" r="3" stroke="currentColor" />
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
  ShisaChevronRight,
  ShisaSettings,
  ShisaPlus,
  ShisaEdit,
  ShisaBookmark,
  ShisaHome,
};

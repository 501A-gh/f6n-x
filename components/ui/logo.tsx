import { cn } from "@/lib/utils";
import React, { SVGProps } from "react";

export default function Logo({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      width={"1em"}
      height={"1em"}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      // stroke="currentColor"
      strokeWidth={2}
      className={cn(props.className, "animate-blur-in")}
      {...props}
    >
      <path d="M3 12H9M9 7C3 7 9 17 1 17" className="animate-svg-path" />
      <path
        d="M12 12C16 12 16 17 12 17C7 17 9.16614 7 15 7"
        className="animation-delay-100 animate-svg-path"
      />
      <g className="*:animation-delay-200 *:animate-svg-path">
        <path d="M16 12C24 12 23 16 23 18" />
        <path d="M16 12C20 12 20 17 16 17" />
      </g>
    </svg>
  );
}

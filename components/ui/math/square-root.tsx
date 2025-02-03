"use client";
import React, { useEffect, useRef, useState } from "react";

interface SquareRootProps {
  children: React.ReactNode; // Math expression inside
}

export const SquareRoot: React.FC<SquareRootProps> = ({ children }) => {
  // Refs and state for measuring content dimensions
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState<number>(50);
  const [contentHeight, setContentHeight] = useState<number>(24); // starting guess

  // Base dimensions for the hook (from the original path coordinates)
  const baseHookHeight = 16; // from y=1 to about y=13.5 in the original path
  const verticalPadding = 5; // extra padding so the hook doesn't hug the content too tightly

  // Compute a scale factor so that the hook's height matches the content height plus padding.
  const scaleFactor = (contentHeight + verticalPadding) / baseHookHeight;

  // Update dimensions when the children change.
  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth + 10); // extra horizontal padding
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  // Define overall SVG dimensions.
  const svgWidth = contentWidth + 20; // extra horizontal room for the square root sign
  // The effective height of the hook becomes: baseHookHeight * scaleFactor
  // We ensure the SVG is tall enough to contain the scaled hook.
  const svgHeight = Math.max(50, baseHookHeight * scaleFactor);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      {/* The SVG square root symbol */}
      <div className="flex items-start gap-0">
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          // strokeLinecap="round"
          strokeWidth="1.5"
        >
          <path
            d="M0.5 8H1.77924C2.20967 8 2.59181 8.27543 2.72792 8.68377L4.88604 15.1581C4.9541 15.3623 5.14516 15.5 5.36038 15.5H5.5901C5.82844 15.5 6.03365 15.3318 6.08039 15.0981L8.83922 1.30388C8.93271 0.83646 9.34312 0.5 9.8198 0.5H11.5"
            fill="none"
            stroke="currentColor"
            vector-effect="non-scaling-stroke"
          />
        </svg>
        <svg
          height={svgHeight}
          width={svgWidth}
          viewBox={`0 0 12 16`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
          strokeWidth="1.5"
          // strokeLinecap="round"
        >
          {/* <line
            x1="0"
            y1={scaleFactor * 1} // y=1 scaled
            x2={svgWidth}
            y2={scaleFactor * 1}
            stroke="red"
            vectorEffect="non-scaling-stroke"
          /> */}
          <line
            x1="0"
            y1={0.5} // y=1 scaled
            x2={svgWidth}
            y2={0.5}
            stroke="blue"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Math content; positioned so that it appears within the square root.
          Adjust the translate offsets as needed. */}
      {/* <div
        ref={contentRef}
        className="absolute text-base"
        style={{
          paddingLeft: "10px",
          // top: -(verticalPadding / 2), // optionally tweak vertical alignment
        }}
      >
        {children}
      </div> */}
    </div>
  );
};

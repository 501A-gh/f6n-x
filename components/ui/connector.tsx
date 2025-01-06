import React from "react";

const ConnectorVertical = () => (
  <div className="z-0 flex flex-row justify-center gap-1.5 h-8 *:w-[1px] *:h-full *:bg-zinc-300 *:dark:bg-zinc-700">
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

const ConnectorHorizontal = () => (
  <div className="z-0 flex flex-col justify-center gap-1.5 w-8 *:h-[1px] *:w-full *:bg-zinc-300 *:dark:bg-zinc-700">
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export { ConnectorVertical, ConnectorHorizontal };

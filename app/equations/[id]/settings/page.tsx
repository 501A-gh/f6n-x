import React from "react";

export default function SettingsPage() {
  return (
    <>
      <div className="rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-black dark:text-white">
        <div className="p-4">
          <h1>Equation</h1>
          <p>
            An equation is a mathematical statement that two expressions are
            equal. It consists of two expressions on either side of an equal
            sign.
          </p>
        </div>
        <hr />
        <div className="p-4">
          <p>
            <code>3x + 2 = 8</code>
          </p>
        </div>
      </div>
    </>
  );
}

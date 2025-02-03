"use client";
import React, { useState } from "react";
import { ShisaPlus } from "../icons/Shisa";

function Cursor({ onInsert }) {
  const latexBlocks = [
    {
      name: "Fraction",
      latex: "\\frac{}{}",
    },
    {
      name: "Square Root",
      latex: "\\sqrt{}",
    },
    {
      name: "Text",
      latex: "",
    },
  ];

  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      {edit ? (
        <div className="flex items-center gap-2 relative">
          <input
            autoFocus
            type="text"
            className="h-9 font-mono text-sm border border-zinc-200 dark:border-zinc-800 rounded-lg px-2 w-36"
            placeholder="Search blocks..."
            onBlur={() => setEdit(false)}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="absolute translate-y-10 z-10">
            <div className="border border-zinc-200 bg-white dark:bg-zinc-950 p-1 h-auto w-36 flex flex-col gap-1 rounded-lg shadow-md">
              {latexBlocks
                .filter(
                  ({ name, latex }) =>
                    name.toLowerCase().includes(input.toLowerCase()) ||
                    latex.toLowerCase().includes(input.toLowerCase())
                )
                .map((block, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 p-0 h-7 px-2 rounded-sm text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    onClick={() => {
                      onInsert(block.latex);
                      setEdit(false);
                      setInput("");
                    }}
                  >
                    {block.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <ShisaPlus onClick={() => setEdit(true)} />
      )}
    </>
  );
}

function LatexBlock({ latex, onInsertInside }) {
  // Parse the LaTeX and add placeholders with plus buttons inside {}
  const renderedLatex = latex.replace(
    /(\{\})/g,
    () => `{<ShisaPlus onClick={onInsertInside} />}`
  );

  return (
    <div className="flex items-center gap-1 border border-zinc-200 dark:border-zinc-800 p-2 rounded-md font-mono text-sm bg-white dark:bg-zinc-950">
      <span dangerouslySetInnerHTML={{ __html: renderedLatex }} />
    </div>
  );
}

export default function LatexInput() {
  const [inputBlocks, setInputBlocks] = useState([]);

  const handleInsertBlock = (index, latex) => {
    const newBlocks = [...inputBlocks];
    if (latex.includes("{}")) {
      newBlocks.splice(index + 1, 0, { latex, children: [] });
    } else {
      newBlocks.splice(index + 1, 0, { latex, children: null });
    }
    setInputBlocks(newBlocks);
  };

  const renderBlock = (block, index) => (
    <div key={index} className="flex items-center gap-2">
      <LatexBlock
        latex={block.latex}
        onInsertInside={() => {
          const updatedBlocks = [...inputBlocks];
          updatedBlocks[index].children.push("");
          setInputBlocks(updatedBlocks);
        }}
      />
      <Cursor onInsert={(latex) => handleInsertBlock(index, latex)} />
    </div>
  );

  return (
    <div className="p-4">
      {inputBlocks.map((block, index) => renderBlock(block, index))}
      <Cursor
        onInsert={(latex) =>
          setInputBlocks([...inputBlocks, { latex, children: null }])
        }
      />
    </div>
  );
}

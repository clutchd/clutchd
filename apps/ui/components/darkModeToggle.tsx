"use client";

import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

function DarkModeToggle({ initialValue }: { initialValue: Theme }) {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`;
      document
        .querySelector("body")
        .setAttribute("class", theme === "dark" ? "dark" : "");
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-1 top-1 z-50 flex h-6 items-center justify-center rounded-full bg-gray-800 p-2 font-mono text-xs text-white"
    >
      {theme === "dark" ? "dark" : "light"}
    </button>
  );
}

export { DarkModeToggle };

"use client";

import themeAtom, { themeAtomCallback } from "@/atoms/theme.atom";
import { useAtom } from "jotai";
import { useLayoutEffect } from "react";

function ThemeChecker() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [themeCallback, setThemeCallback] = useAtom(themeAtomCallback);

  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      setTheme((theme) => {
        return { fromLocalStorage: true, dark: true };
      });
    } else {
      setTheme({ fromLocalStorage: true, dark: false });
    }
  }, [setTheme]);

  return <></>;
}

export default ThemeChecker;

"use client";

import themeAtom from "@/atoms/theme.atom";
import ToggleButton from "@/ui/Forms/ToggleButton";
import theme from "@material-tailwind/react/theme";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

function Settings() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div>
      <p className=" text-sm font-medium mb-3">Dark Mode</p>
      <ToggleButton
        isActive={theme.dark}
        onClick={() =>
          setTheme((theme) => {
            return { ...theme, dark: !theme.dark };
          })
        }
      />
    </div>
  );
}

export default Settings;

"use client";

import locationAtom from "@/atoms/location.atom";

import LogsIcon from "@/ui/Icons/Logs";
import NeoIcon from "@/ui/Icons/Neo";
import SettingsIcon from "@/ui/Icons/Settings";
import UploadIcon from "@/ui/Icons/Upload";
import UserIcon from "@/ui/Icons/User";

import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

function NavbarDashboard() {
  const pathname = usePathname();

  return (
    <nav
      className={twMerge([
        " fixed md:top-0 left-0 bottom-0 w-screen h-16 md:h-screen rounded-tr-lg rounded-br-lg md:w-[85px] py-3 px-5 bg-light-v-2 dark:bg-dark-v-1",
      ])}
    >
      <div className=" hidden md:block">
        <NeoIcon isDark={false} width={45} />
      </div>

      <div
        className={twMerge([
          "bg-dark-v-1/80 dark:bg-primary/80 rounded-full md:mt-4 w-full h-[2px]",
        ])}
      ></div>

      <div className=" flex md:grid items-center justify-around md:justify-center gap-6 mt-4 md:mt-10">
        <Link href={"/neo/dashboard"}>
          <UserIcon isDark={false} isActive={pathname === "/neo/dashboard"} />
        </Link>
        <Link href={"/neo/builds"}>
          <UploadIcon isActive={pathname === "/neo/builds"} />
        </Link>
        <Link href={"/neo/logs"}>
          <LogsIcon isActive={pathname === "/neo/logs"} />
        </Link>
        <Link href={"/neo/settings"}>
          <SettingsIcon isActive={pathname === "/neo/settings"} />
        </Link>
      </div>
    </nav>
  );
}

export default NavbarDashboard;

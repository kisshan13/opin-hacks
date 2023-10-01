import { twMerge } from "tailwind-merge";
import { ThemeIcon } from "./Neo";

function MenuIcon({ width, className }: ThemeIcon) {
  return (
    <svg
      width={width || 24}
      height={width || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge([" fill-dark-v-1 opacity-80 dark:fill-white ", className])}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z"
        />
      </g>
    </svg>
  );
}

export default MenuIcon;

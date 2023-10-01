import { twMerge } from "tailwind-merge";
import { ThemeIcon } from "./Neo";

export interface ThemeNavIcon extends ThemeIcon {
  isActive?: boolean;
}

function UserIcon({ isDark = false, width, isActive = false }: ThemeNavIcon) {
  return (
    <svg
      width={width || 26}
      height={width || 26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge([
        " fill-dark-v-1 dark:fill-primary",
        !isActive && "opacity-50",
      ])}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5833 22.6296C20.5833 23.2941 20.0645 23.8333 19.4226 23.8333C18.7807 23.8333 18.2619 23.2941 18.2619 22.6296C18.2619 19.311 15.6584 16.6111 12.4583 16.6111C9.25822 16.6111 6.65474 19.311 6.65474 22.6296C6.65474 23.2941 6.1359 23.8333 5.49403 23.8333C4.85215 23.8333 4.33331 23.2941 4.33331 22.6296C4.33331 17.9833 7.97912 14.2037 12.4583 14.2037C16.9375 14.2037 20.5833 17.9833 20.5833 22.6296ZM12.4583 4.57407C13.7386 4.57407 14.7797 5.65379 14.7797 6.98148C14.7797 8.30916 13.7386 9.38889 12.4583 9.38889C11.178 9.38889 10.1369 8.30916 10.1369 6.98148C10.1369 5.65379 11.178 4.57407 12.4583 4.57407ZM12.4583 11.7963C15.0188 11.7963 17.1012 9.63685 17.1012 6.98148C17.1012 4.32611 15.0188 2.16666 12.4583 2.16666C9.89778 2.16666 7.81546 4.32611 7.81546 6.98148C7.81546 9.63685 9.89778 11.7963 12.4583 11.7963Z"
      />
    </svg>
  );
}

export default UserIcon;

import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

function PlatformButton({className, children, ...props}: ButtonProps) {
    return ( 
        <button className={twMerge([" border dark:bg-dark-v-2 border-dark-v-1/20 active:scale-90 transition-all shadow-sm hover:border-dark-v-2/30 font-medium px-10 py-2 rounded-md", className])}>
            {children}
        </button>
     );
}

export default PlatformButton;
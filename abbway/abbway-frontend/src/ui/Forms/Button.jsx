import { twMerge } from "tailwind-merge";

function Button({ children, className, business, ...props }) {
  return (
    <button
      className={twMerge([
        " p-2 text-white font-medium hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed transition-all bg-primary",
        business && "bg-primary-business",
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

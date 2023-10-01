import { twMerge } from "tailwind-merge";

function Input({ className, business, register, ...props }) {
  return (
    <input
      placeholder="Email"
      className={twMerge([
        " bg-white outline-none border-b disabled:opacity-70 disabled:cursor-not-allowed border-b-light-black/75 focus:border-b-light-black/100 transition-all py-2 px-1",
        ,
        business &&
          "border-b-primary-business/75 focus:border-b-light-black/100",
        className,
      ])}
      {...(typeof register === "function" && { ...register() })}
      {...props}
    />
  );
}

export default Input;

import { twMerge } from "tailwind-merge";

function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge([
        " p-4 shadow-md rounded-lg w-max bg-white dark:bg-dark-v-1",
        className,
      ])}
    >
      {children}
    </div>
  );
}

export default CardContainer;

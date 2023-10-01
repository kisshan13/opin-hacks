import { twMerge } from "tailwind-merge";

interface EvenText extends React.HTMLAttributes<HTMLParagraphElement> {
  event?: "Completed" | "Failed" | "Progress";
  className?: string;
}

function EventText({ event, className, children, ...props }: EvenText) {
  const eventStyle =
    event === "Completed"
      ? "text-success"
      : event === "Failed"
      ? "text-failed"
      : event === "Progress"
      ? "text-progress"
      : "text-dark-v-1";
  return (
    <p
      className={twMerge([eventStyle, "text-sm font-medium", className])}
      {...props}
    >
      {children}
    </p>
  );
}

export default EventText;

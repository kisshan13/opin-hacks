import { twMerge } from "tailwind-merge";

interface EventIndicatorProps {
  event?: "Completed" | "Failed" | "Progress";
  className?: string;
}

function EventIndicator({ event, className }: EventIndicatorProps) {
  const eventStyle =
    event === "Completed"
      ? "bg-success-light"
      : event === "Failed"
      ? "bg-failed-light"
      : event === "Progress"
      ? "bg-progress-light"
      : "bg-black/50";

  return (
    <div
      className={twMerge([
        " w-full h-[5px] rounded-full",
        eventStyle,
        className,
      ])}
    ></div>
  );
}

export default EventIndicator;

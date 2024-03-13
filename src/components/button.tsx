import { cn } from "../utils";

interface IProps {
  type: "submit" | "button";
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const PomodoroButton: React.FC<IProps> = ({
  children,
  type,
  className,
}) => {
  return (
    <button
      type={type}
      className={cn(
        "py-4 px-12 rounded-full font-bold text-base text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

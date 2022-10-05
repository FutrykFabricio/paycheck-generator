import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ColumnContentProps extends PropsWithChildren {
  className?: string;
}

const ColumnContent: FC<ColumnContentProps> = ({ children, className }) => {
  return <div className={twMerge("text-center", className)}>{children}</div>;
};

export default ColumnContent;

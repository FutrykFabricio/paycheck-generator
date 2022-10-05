import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TableColumnProps extends PropsWithChildren {
  className?: string;
}

const TableColumn: FC<TableColumnProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "flex w-full flex-col border-r-[1px] border-black",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TableColumn;

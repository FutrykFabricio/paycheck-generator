import { FC, PropsWithChildren } from "react";

interface TableRowProps extends PropsWithChildren {}

const TableRow: FC<TableRowProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-around border-l-[1px]  border-black ">
      {children}
    </div>
  );
};

export default TableRow;

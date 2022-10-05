import { FC, PropsWithChildren } from "react";

interface ColumnHeaderProps extends PropsWithChildren {}

const ColumnHeader: FC<ColumnHeaderProps> = ({ children }) => {
  return (
    <h2 className="w-full border-t-[1px] border-b-[1px] border-black bg-gray-200 text-center">
      {children}
    </h2>
  );
};

export default ColumnHeader;

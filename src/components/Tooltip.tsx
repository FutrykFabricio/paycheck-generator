import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface TooltipProps extends PropsWithChildren {
  tooltipContent: string;
}

const Tooltip: FC<TooltipProps> = ({ tooltipContent, children }) => {
  const tooltip = `group-hover:block top-0 left-0 text-center -translate-y-8 -translate-x-4 hidden w-max py-[5px] px-3 absolute z-10 border-2 border-[#c7c7c7]`;
  const tooltipArrow =
    "after:content-[''] after:absolute after:top-full after:left-1/4 after:-ml-[10px] after:border-[10px] after:border-transparent after:border-t-[#c7c7c7]";
  return (
    <div className="group relative inline-block">
      {children}
      <span
        className={twMerge(
          "rounded-md bg-white text-xs text-black",
          tooltip,
          tooltipArrow
        )}
      >
        {tooltipContent}
      </span>
    </div>
  );
};

export default Tooltip;

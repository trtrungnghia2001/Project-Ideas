import React, { FC, SelectHTMLAttributes } from "react";
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const SelectTerm: FC<Props> = ({ options, ...props }) => {
  return (
    <div className="shadow-md w-full sm:max-w-[200px]">
      <select {...props} className="px-4 py-2 border-none outline-none w-full bg-[--itemBg]">
        {options.map((item, index) => {
          return (
            <option value={item.value} key={index} className="py-2">
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTerm;

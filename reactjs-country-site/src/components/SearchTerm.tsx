import React, { FC, InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";
interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const SearchTerm: FC<Props> = ({ ...props }) => {
  return (
    <div className="px-4 flex items-center gap-4 bg-[--itemBg] shadow-md w-full sm:max-w-[300px]">
      <FaSearch />
      <input
        type="text"
        className="border-none outline-none py-2 w-full bg-transparent"
        {...props}
      />
    </div>
  );
};

export default SearchTerm;

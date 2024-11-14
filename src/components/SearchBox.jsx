import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-1 bg-white border rounded-full shadow-md w-[500px]">
      <IconSearch size={20} className="text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search product..."
        className="px-2 py-1 outline-none"
      />
    </div>
  );
};

export default SearchBox;

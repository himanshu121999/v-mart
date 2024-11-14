import { IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";

const Dropdown = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between gap-2 p-3 bg-white border rounded-md shadow-md text-slate-700"
      >
        <div>
          {" "}
          Sort by : <span className="font-medium"> {value} </span>{" "}
        </div>
        <span>
          <IconChevronDown className="text-gray-500" />
        </span>
      </div>

      {isOpen && (
        <ul className="absolute w-full p-2 mt-1 bg-white border rounded-md shadow-md">
          {options?.map((option) => {
            const isSelected = option === value;
            return (
              <li
                onClick={() => onChange(option)}
                className={`px-2 py-1 cursor-pointer ${
                  isSelected ? "font-medium" : ""
                }`}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

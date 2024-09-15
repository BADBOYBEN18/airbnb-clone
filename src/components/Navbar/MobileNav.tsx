import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

export const MobileNav = () => {
  return (
    <div className="shadow-lg rounded-full md:hidden py-2 px-4 flex items-center gap-x-4">
      <div>
        <FaSearch className=" w-5 h-5" />
      </div>
      <div>
        <h1 className="text-[14px] font-medium tracking-wide">Where to?</h1>
        <div className="flex items-center text-[12px] text-[#6a6a6a] gap-2">
          <p>Anywhere</p>
          <span className="text-[#6a6a6a]">
            <GoDotFill className="w-1 h-1" />
          </span>
          <p>Any week</p>
          <span className="text-[#6a6a6a]">
            <GoDotFill className="w-1 h-1" />
          </span>
          <p>Add guests</p>
        </div>
      </div>
    </div>
  );
};

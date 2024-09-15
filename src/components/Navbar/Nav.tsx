/* eslint-disable @next/next/no-img-element */
// import Link from 'next/link';
import React from 'react';
import { FaAirbnb } from 'react-icons/fa6';
import { MobileNav } from './MobileNav';
import Search from './Search';
import UserMenu from './UserMenu';
import Categories from './Categories';

export const Nav = () => {
  return (
    <div className="font-main shadow-sm sticky top-0 z-10 bg-white">
      <div className="py-4 lg:py-0 border-b-[1px]">
        <div className="max-w-[2054px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 flex flex-row items-center justify-between gap-2 md:gap-0">
          <div className="md:hidden w-full m-auto">
            <MobileNav />
          </div>

          <img
            src="https://ik.imagekit.io/h6pmd5ivo/airbnbimages/airbnb.svg?updatedAt=1726135699452"
            className="hidden lg:block w-24 h-24"
            alt=""
          />

          <div className="flex items-center gap-x-4">
            <FaAirbnb className="hidden md:block lg:hidden w-8 h-8 text-[#ff385c]" />
            <div className="hidden md:block">
              <Search />
            </div>
          </div>

          <div className="hidden md:block">
            <UserMenu />
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

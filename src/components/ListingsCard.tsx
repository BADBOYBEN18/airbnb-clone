/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
// import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

interface ListingsCardsProps {
  key: number;
  location: string;
  src: string;
  rating: number;
  Viewed: string;
  guest: string;
  date: string;
  price: number;
}

const ListingsCard: React.FC<ListingsCardsProps> = ({
  src,
  location,
  rating,
  Viewed,
  price,
  date,
  guest,
}) => {
  const [color, setColor] = useState('bg-gray-800');

  const handleClick = () => {
    setColor((prevColor) =>
      prevColor === 'bg-gray-800' ? 'bg-red-500/70' : 'bg-gray-800'
    );
  };

  return (
    <div>
      {/* absolute top-0  mt-4 ml-2 p-2 font-extrabold shadow-lg bg-white rounded-full text-[12px] */}
      <div>
        <div className="relative">
          <div
            onClick={handleClick}
            className={`absolute top-0 right-0 m-4 p-2 rounded-full hover:scale-110 transition-all cursor-pointer ${color}`}
          >
            <CiHeart className="h-5 w-5 text-white" />
          </div>
          <div
            className={` ${
              guest === ''
                ? `hidden`
                : `absolute top-0  mt-4 ml-2 p-2 font-extrabold shadow-lg bg-white rounded-full text-[12px]`
            } `}
          >
            {guest}
          </div>
          <img
            src={src}
            className=" h-[300px] w-[400px] rounded-xl mb-2 "
            alt=""
          />
        </div>

        <div className="space-y-[2px] ">
          <div className=" flex items-center justify-between">
            <p className="text-[16px] font-semibold">{location}</p>
            <span
              className={`font-medium inline-flex items-center gap-[4px] ${
                rating >= 3.5 ? `text-green-400` : `text-yellow-400 `
              } ${rating <= 2.5 ? `text-red-500` : ``}`}
            >
              <BsStarFill className="text-black/70" /> {rating}
            </span>
          </div>
          <p className="text-gray-600/70 text-[15px]">{Viewed}</p>
          <p className="text-gray-600/70 text-[15px]"> {date}</p>
          <p className="text-[14px] mt-[3px]">
            <span className="font-semibold">
              ${price} {''}
            </span>
            night
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;

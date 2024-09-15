/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const ImageSlider = () => {
  const slides = [
    {
      url: 'https://ik.imagekit.io/h6pmd5ivo/airbnbimages/3d-house-model-with-modern-architecture.jpg?updatedAt=1726259591158',
    },
    {
      url: 'https://ik.imagekit.io/h6pmd5ivo/airbnbimages/clay-banks-BJc1mj3xgeE-unsplash.jpg?updatedAt=1726259544109',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    const isFirstslide = currIndex === 0;
    const newIndex = isFirstslide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastslide = currIndex === slides.length - 1;
    const newIndex = isLastslide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const goToSlide = (slideindex: number) => {
    setCurrIndex(slideindex);
  };

  return (
    <div className="max-w-[1440px] h-[780px] w-full m-auto py-16 px-4 relative group cursor-pointer ">
      <div
        style={{ backgroundImage: `url(${slides[currIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-all"
      ></div>

      {/* arrow-left */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl bg-black/80 p-2  text-white cursor-pointer rounded-full ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* arrow-right */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl bg-black/80 p-2  text-white cursor-pointer rounded-full">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideindex) => (
          <div
            key={slideindex}
            onClick={() => goToSlide(slideindex)}
            className={`text-2xl  transition-all cursor-pointer ${
              currIndex === slideindex
                ? `text-black scale-125`
                : `text-gray-500/70 `
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

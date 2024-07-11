"use client";

import React from "react";
import { BsStarFill, BsHandThumbsUpFill } from "react-icons/bs";
import { Image as AntdImage } from "antd";

export default function MainBanner({
  slides,
  activeIndex,
  handlePaginationClick,
}: any) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <div className="flex items-center overflow-hidden">
          <div
            className="flex items-center transition-transform duration-500 ease-in-out h-[220px]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides?.map((slide: any, index: number) => (
              <div
                key={index}
                className={`flex-none w-full h-[220px] relative`}
              >
                <div className="flex items-center justify-center ">
                  <AntdImage
                    preview={false}
                    src={slide.src}
                    alt={`image_${index}`}
                  />
                </div>
                <div className="absolute bottom-0 right-1 p-1">
                  <div className="bg-white rounded-lg p-1">
                    <div className="text-primary text-center flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <BsStarFill />
                        <div className="text-xs">{slide.star}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsHandThumbsUpFill />
                        <div className="text-xs">{slide.good}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`mt-1 flex py-2 items-center justify-center cursor-pointer`}
      >
        {slides.map((_: any, index: number) => (
          <div
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              activeIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

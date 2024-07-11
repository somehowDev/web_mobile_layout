"use client";

import React, { useState, useEffect, createRef } from "react";
import { v4 as uuid } from "uuid";
import PlanItem from "@/components/PlanItem/PlanItem";
import { BsFilterRight } from "react-icons/bs";
import MainBanner from "@/components/MainBanner/MainBanner";

const slides = [
  {
    src: "/trip/1.jpg",
    star: 2340,
    good: 4419,
  },
  {
    src: "/trip/3.jpg",
    star: 1341,
    good: 3418,
  },
  {
    src: "/trip/4.jpg",
    star: 745,
    good: 1412,
  },
  {
    src: "/trip/5.jpg",
    star: 442,
    good: 816,
  },
];

const preloadImages = (srcArray: any) => {
  const promises = srcArray.map((src: any) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
};

export default function Plan() {
  const [items, setItems] = useState(() => [
    {
      id: uuid(),
      text: "Enjoying a beautiful night view",
      nodeRef: createRef(),
      isNew: false,
      imgSrc: "/trip/1.jpg",
      moreImages: 7,
      hoveredIcon: null,
    },
    {
      id: uuid(),
      text: "Traveling to the sea with children",
      nodeRef: createRef(),
      isNew: false,
      imgSrc: "/trip/2.jpg",
      moreImages: 6,
      hoveredIcon: null,
    },
    {
      id: uuid(),
      text: "Trip with views and food",
      nodeRef: createRef(),
      isNew: false,
      imgSrc: "/trip/3.jpg",
      moreImages: 5,
      hoveredIcon: null,
    },
  ]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // 활성화된 슬라이드 인덱스

  // 자동 재생 및 activeIndex 변경시 interval 초기화
  useEffect(() => {
    let interval: any;
    interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides?.length);
    }, 5000); // 5초마다 슬라이드 전환
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [activeIndex]);

  useEffect(() => {
    const imgSrcArray = items.map((item) => item.imgSrc);
    preloadImages(imgSrcArray)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to preload images", err);
      });
  }, [items]);

  const addItem = () => {
    const newItem = {
      id: uuid(),
      text: `New Plan ${items.length + 1}`,
      nodeRef: createRef(),
      isNew: true,
      imgSrc: `/trip/${(items.length % 10) + 1}.jpg`,
      moreImages: Math.floor(Math.random() * 10) + 1, // Random number of more images
      hoveredIcon: null,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleMouseEnter = (id: string, icon: string) => {
    setItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === id ? { ...item, hoveredIcon: icon } : item
      )
    );
  };

  const handleMouseLeave = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, hoveredIcon: null } : item
      )
    );
  };

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative p-2 h-full">
      <button
        onClick={addItem}
        className="mb-2 px-4 py-2 bg-primary text-white rounded"
      >
        + Add Plan
      </button>
      <div className="text-center flex items-center">
        <MainBanner
          slides={slides}
          activeIndex={activeIndex}
          handlePaginationClick={handlePaginationClick}
        />
      </div>
      <div className="h-[30px] border border-solid border-orange-600 m-1 flex items-center justify-end p-2">
        <span className="text-primary px-1 py-1 ounded-2xl mx-1 cursor-pointer">
          <BsFilterRight className="text-2xl" />
        </span>
      </div>
      <div className="todo-list">
        {items.map((item) => (
          <PlanItem
            key={item.id}
            {...item}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            isNew={item.isNew}
          />
        ))}
      </div>
    </div>
  );
}

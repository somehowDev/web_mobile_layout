"use client";

import {
  BsHouse,
  BsHouseFill,
  BsRocketTakeoff,
  BsRocketTakeoffFill,
  BsStar,
  BsStarFill,
  BsPersonCircle,
} from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "홈",
    icon: BsHouse,
    iconfill: BsHouseFill,
    link: "/",
  },
  {
    label: "여행",
    icon: BsRocketTakeoff,
    iconfill: BsRocketTakeoffFill,
    link: "/plan",
  },
  {
    label: "추천",
    icon: BsStar,
    iconfill: BsStarFill,
    link: "/recommend",
  },
  {
    label: "마이페이지",
    icon: BsPersonCircle,
    iconfill: BsPersonCircle,
    link: "/my",
  },
];

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-10 w-full">
      <ul className="border-gray-500 grid h-[64px] grid-cols-4 border-y border-solid  bg-white pt-[6px]">
        {navItems.map((item, index) => {
          const isActive =
            item.link === "/"
              ? pathName === item.link
              : pathName === item.link || pathName?.startsWith(`${item.link}/`);
          return (
            <Link key={item.label} href={item.link}>
              <li
                className={`flex flex-col items-center justify-center gap-[6px] text-[11px] font-[400] ${
                  isActive ? "text-primary" : "text-gray"
                }`}
              >
                {isActive ? (
                  <item.iconfill className="text-2xl" />
                ) : (
                  <item.icon className="text-2xl" />
                )}
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

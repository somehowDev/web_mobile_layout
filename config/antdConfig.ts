// src/theme.ts
"use client";
import { Noto_Sans_KR } from "next/font/google";

const sans = Noto_Sans_KR({ subsets: ["latin"] });

const theme = {
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  token: {
    colorPrimary: "#0f54fb",
    fontFamily: "Noto Sans KR",
  },
};

export default theme;

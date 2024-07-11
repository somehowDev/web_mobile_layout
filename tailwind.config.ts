import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5300",
        secondary: {
          blue: "#0053ff", // 블루 계열
          light: "#ff7f33", // 밝은 주황색
          lighter: "#ff9a66", // 부드러운 주황색
          dark: "#cc4200", // 진한 주황색
          yellow: "#ffaa00", // 밝은 노란색
          yellowLight: "#ffd633", // 밝은 노란 오렌지색
          yellowLighter: "#ffee99", // 연한 노란색
          red: "#ff3300", // 밝은 빨간색
          redLight: "#ff6666", // 연한 빨간색
          redLighter: "#ff9999", // 부드러운 빨간색
          gray: "#d1d5db", // 밝은 회색
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(180deg, rgba(247, 247, 247, 0.00) 0%, #F7F7F7 100%), #FFF",
      },
    },
  },
  plugins: [],
};
export default config;

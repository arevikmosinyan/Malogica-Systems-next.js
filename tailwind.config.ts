import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundPosition: {
      //   "bottom-20px": "calc(100% - 500px)",
      // },
      backgroundImage: {
        buttonGradientThreeColors:
          "linear-gradient(to right, #1A86A1, #4245CD, #FF15E5)",
        buttonGradientTwoColors: "linear-gradient(to right, #5FA4FF, #B974FF)",
      },
      colors: {
        buttonGradient:
          "bg-gradient-to-r from-[#1A86A1] via-[#4245CD] to-[#FF15E5]",
        darkGray: "#1A1A1A",
        lightGray: "#232323",
        gradient: "linear-gradient(91.63deg, #5FA4FF 0.56%, #B974FF 46.15%)",
        lightBlue: "#5FA4FF",
      },
      dropShadow: {
        custom: "0px 0px 51px #343434",
      },
    },
  },
  plugins: [],
};
export default config;

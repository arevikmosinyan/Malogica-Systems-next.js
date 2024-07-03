import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   gradient: "linear-gradient(91.63deg, #5FA4FF 0.56%, #B974FF 46.15%)",
      // },
      colors: {
        darkGray: "#1A1A1A",

        lightGray: "#232323",
        gradient: "linear-gradient(91.63deg, #5FA4FF 0.56%, #B974FF 46.15%)",
        lightBlue: "#5FA4FF",

        // "custom-gradient":
        //   "linear-gradient(90.37deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)",
      },
      dropShadow: {
        custom: "0px 0px 51px #343434",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#1A1A1A",
        lightGray: "#232323",

        // "custom-gradient":
        //   "linear-gradient(90.37deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D33F49",
        "dark-v-1": "#222222",
        "dark-v-2": "#2b2b2b",
        "light-v-1": "#F8F8F8",
        "light-v-2": "#fff",
        "success-light": "#E2FBD7",
        success: "#34B53A",
        "failed-light": "#FFE5D3",
        failed: "#FF3A29",
        "progress-light": "#FFF5CC",
        progress: "#FFB200",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
export default config;

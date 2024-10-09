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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'black': '#0B0C0E',
        'dark-gray': '#3C3D3E',
        'light-gray': '#C7D0D9',
        'off-white': '#F4F7FA',
        
      },
    },
  },
  plugins: [],
};
export default config;

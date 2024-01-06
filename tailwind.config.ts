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
        "brand-primary": "#00252E",
        "brand-secondary": "#00303C",
        "is-green": "#04E3AC",
        "is-yellow": "#C7FB03",
        "is-blur": "#039CFB",
        "is-pink": "#EC68FD",
        "is-orange": "#FB7F03",
        "is-purple": "#8168FD",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

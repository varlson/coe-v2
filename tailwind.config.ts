import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        jura: ["var(--font-jura)"],
        play_fair: ["var(--font-playFair)"],
        oswald: ["var(--font-oswald)"],
      },
      colors: {
        dred: "#D9280D",
        red800: "#a71c07",
        dblack: "#303030",
        red900: "#873926",
        red950: "#943e29",
        dblack900: "#0a0301",
        darkLight: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;

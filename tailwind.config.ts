import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

import burgerConfig from "./tailiwind-setup/burger";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./src/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        loadPage: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        ...burgerConfig["theme"]?.extend?.keyframes,
      },
      animation: {
        loadPage: "loadPage 0.5s ease-in-out",
        ...burgerConfig["theme"]?.extend?.animation,
      },
      height: {
        25: "100px",
      },
      width: {
        25: "100px",
      },
      bgGradientDeg: {
        75: "75deg",
      },
    },
    fontFamily: {
      courier: '"Courier New", Courier, sans-serif',
      base: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            10: "10deg",
            15: "15deg",
            20: "20deg",
            25: "25deg",
            30: "30deg",
            45: "45deg",
            60: "60deg",
            90: "90deg",
            120: "120deg",
            135: "135deg",
          }),
        }
      );
    }),
    // use as nth-[3n+1], sm:nth-[1], md:nth-[2] etc.
    plugin(function ({ matchVariant }) {
      matchVariant("nth", (value) => {
        return `&:nth-child(${value})`;
      });
    }),
  ],
};

export default config;

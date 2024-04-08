import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
} satisfies Config;

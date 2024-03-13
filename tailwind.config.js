/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        "space-mono": ["Space Mono", "monospace"],
      },
      colors: {
        red: "#F87070",
        cyan: "#70F3F8",
        purple: "#D881F8",
        "light-blue": "#D7E0FF",
        "dark-blue": "#1E213F",
        white: "#FFFFFF",
        "light-gray": "#EFF1FA",
        "dark-gray": "#161932",
      },
      fontSize: {
        huge: "6.25rem", // 100px
        large: "1.75rem", // 28px
        medium: "1rem", // 16px
        small: "0.8125rem", // 13px
        normal: "0.875rem", // 14px
        tiny: "0.75rem", // 12px
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        fair: ["var(--font-fair)"],
        lpmq: ["var(--font-lpmq)"],
        surahName: ["var(--font-surahName)"],
      },
      colors: {
        text: "#384555",
        primary: "#325efa",
        "white-blue": "#EFFFFB",
        arab: "#272727",
      },
      backgroundImage: {
        primary: "linear-gradient(289.41deg, #35aaff 0.65%, #325efa 100%)",
        hero: 'url("/hero.png")',
      },
    },
  },
  plugins: [],
};

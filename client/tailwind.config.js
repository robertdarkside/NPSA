/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": 'url("./src/assets/homepage.svg")',
        "faq-bg": 'url("./src/assets/faq_bg_pic.svg")',
        "about-bg": 'url("./src/assets/bg-about.svg")',
      },
    },
  },
  plugins: [],
};

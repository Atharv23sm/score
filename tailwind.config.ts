import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'navbar': {
          '0%,100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(30%)' },
        },
        'firstload': {
          '0%': {
            height: '100vh',
            opacity: '1'
          },
          '70%': {
            height: '100vh',
            opacity: '1'
          },
          '100%': {
            height: '0vh',
            opacity: '0'
          }
        },
        'firstloadtext': {
          '0%': { fontSize: '20vw' },
          '70%': { fontSize: '20vw' },
          '100%': { fontSize: '0vw' }
        }
      },
      backgroundImage: {
        'bg1': 'url("/back.jpg")'

      }
    },
  },
  plugins: [],
};
export default config;

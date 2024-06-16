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
          '0%':{opacity:'1'},
          '80%':{opacity:'1'},
          '100%':{opacity:'0'}
        }
      },
      backgroundImage:{
        'bg1':'url("/back.jpg")'
        
      }
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "serif"]
      },
      colors: {
        primary: {
          light: '#4F9DDE',
          dark: '#6FCF97'
        },
        background: {
          light: '#F5F5F5',
          dark: '#121212'
        },
        text: {
          light: '#333333',
          dark: '#E0E0E0'
        },
        accent: {
          light: '#F4A261',
          dark: '#FFD166'
        }

      },
      backgroundImage: {
        'slide1-bg' : "url('https://i.ibb.co.com/B4gBfXj/ai-generated-8577448-1280.png')",
        'slide2-bg' : "url('https://i.ibb.co.com/YWN0PHw/ai-generated-8575440-1280.jpg')",
        'slide3-bg' : "url('https://i.ibb.co.com/Kmy2HPt/giovanni-gagliardi-fv-T3t9i-Oa-JI-unsplash.jpg')",
      }
    },
  },
  plugins: [require('daisyui'),],
}
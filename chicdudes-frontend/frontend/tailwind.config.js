/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'chic': ['chic']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      screens: {
        'phone': 'max-width: 639px',
        // => @media (max-width: 639px) { ... }
        
        'laptop': {'raw': '(min-width: 768px) and (orientation: portrait)'},
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

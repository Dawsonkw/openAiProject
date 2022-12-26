/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
        '90/1': '90%',
      }, 
      maxHeight: {
        '1/4': '25%',
        '1/2': '300px',
        '3/4': '75%',
        '90/1': '90%',
      },
      colors: {
        'regal-blue': '#243c5a',
        'tan': '#b68d40',
        'cream': '#f4ebd0',
        'charcoal': '#122620',
        'gold': '#d6ad60',
        'forestgreen': '#104210',
      },
    },
  },
  plugins: [],
}

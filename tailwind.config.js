/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mb':'310px',

      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'bgrey': '#EDEDED',
        'buttonColor': '#F4F4F4',
        'yellow':'#EF7F1A',

      },
      height: {
        '24': '1.1rem',
        '34': '1.425rem',
        '36': '2.25rem',
        '44': '2.75rem',
        '48':'3rem',
        '58': '3.625rem',
        '90': '9 rem',
        '128': '32rem',
        '138': '8.625rem',
        '153': '9.563rem',
        '170': '11.99rem',
        '340': '21.25rem',
        '379':'23.688rem',
        "651": '35.063rem',
        "415":'27.5rem',
        '651': '40.688rem',
        '657':'31.463rem',
        '726':'45.375rem',
      },
      width:{
        '24': '1.1rem',
        '34': '1.425rem',
        '36': '2.25rem',
        '156': '9.75rem',
        '186':'11.625rem',
        '210':'11.125rem',
        '245': '15.313rem',
        '310':'19.375rem',
        '415':'25.938rem',
        '470':'29.75rem',
        '480': '30rem',
        '565': '35.313rem',
        '638': '39.875rem',
      },
      spacing: {
       '84':'5.25rem',
       '64': '4rem',
       '43':'2.688rem',
       '45': '2.813rem',
       '38': '2.375rem',
       '24':'1.5rem',
       '70': '4.375rem',
       '76': '4.75rem',
       '120':'7.5rem',
        '215':'13.438rem'
        
      },
    },
  },
  plugins: [],
}
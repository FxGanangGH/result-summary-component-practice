/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      colors: {
        primary: {
          red: 'hsl(0, 100%, 67%)',
          yellow: 'hsl(39, 100%, 56%)',
          teal: 'hsl(166, 100%, 37%)',
          blue: 'hsl(234, 85%, 45%)'
        },
        gradients: {
          'background-1': 'hsl(252, 100%, 67%)',
          'background-2': 'hsl(241, 81%, 54%)',
          'circle-1': 'hsla(256, 72%, 46%, 1)',
          'circle-2': 'hsla(241, 72%, 46%, 0)'
        },
        neutral: {
          'pale-blue': 'hsl(221, 100%, 96%)',
          'gray-blue': 'hsl(224, 30%, 27%)',
          lavender: 'hsl(241, 100%, 89%)'
        }
      },
      fontFamily: {
        'hanken-grotesk': ['Hanken Grotesk', 'sans-serif']
      },
      borderRadius: {
        'result-summary': '30px'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-7': {
          display: '-webkit-box',
          '-webkit-line-clamp': '7',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-8': {
          display: '-webkit-box',
          '-webkit-line-clamp': '8',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-9': {
          display: '-webkit-box',
          '-webkit-line-clamp': '9',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-10': {
          display: '-webkit-box',
          '-webkit-line-clamp': '10',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      });
    }),
  ],
}


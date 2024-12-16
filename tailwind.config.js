/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    'src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Product Sans', 'NanumSquareNeo'],
      'serif': ['Product Sans', 'NanumSquareNeo'],
      'mono': ['Product Sans', 'NanumSquareNeo'],
      'display': ['Product Sans', 'NanumSquareNeo'],
      'body': ['Product Sans', 'NanumSquareNeo'],
    },
    darkMode: 'class',
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

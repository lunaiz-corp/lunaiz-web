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
      'sans': ['Product Sans', 'NanumSquareNeoVar'],
      'serif': ['Product Sans', 'NanumSquareNeoVar'],
      'mono': ['Product Sans', 'NanumSquareNeoVar'],
      'display': ['Product Sans', 'NanumSquareNeoVar'],
      'body': ['Product Sans', 'NanumSquareNeoVar'],
    },
    darkMode: 'class',
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

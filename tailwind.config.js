/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,d.ts}",
];
export const theme = {
  // ...
};
export const plugins = [
  require('tailwind-scrollbar-hide')
  // ...
];

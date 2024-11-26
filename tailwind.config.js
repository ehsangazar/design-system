/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Match your Vite project files
    "./node_modules/@radix-ui/**/*.{js,ts,jsx,tsx}", // Include Radix UI components
  ],
  theme: {
    extend: {
      // Add custom Radix UI states
      data: {
        state: {
          open: '[data-state="open"]',
          closed: '[data-state="closed"]',
        },
      },
    },
  },
  plugins: [],
};

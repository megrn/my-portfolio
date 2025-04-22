/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter','ui-sans-serif','system-ui'],
        heading: ['Inter','ui-sans-serif','system-ui']
      },
      colors: {
        // نُعرِّفها هنا كـ flat keys
        'background-light': '#F9FAFB',
        'background-dark':  '#1F2937',
        'text-light':       '#374151',
        'text-dark':        '#D1D5DB',
        'primary':          '#1E3A8A',
        'secondary':        '#2563EB',
        'accent':           '#10B981',
      },
      boxShadow: {
        card:  '0 4px 14px rgba(0,0,0,0.1)',
        hover: '0 8px 30px rgba(0,0,0,0.12)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

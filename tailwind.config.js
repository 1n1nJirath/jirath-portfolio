/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans Thai',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        surface: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
        },
        ink: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
        },
        accent: {
          DEFAULT: '#0D9488',
          hover: '#0F766E',
          light: '#F0FDFA',
          border: '#99F6E4',
        },
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'card': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        'elevated': '0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 4px 10px -4px rgba(15, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
}

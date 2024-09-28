import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121927', // Example blue for primary buttons and highlights
          light: '#3B82F6',   // Light shade for hover or background highlights
          dark: '#1E40AF',    // Darker shade for dark mode or deeper accents
        },
        secondary: {
          DEFAULT: '#32D583', // Example green for attendance boxes
          light: '#32D583',   // Lighter shade for hover or highlights
          dark: '#32D583',    // Darker shade for contrast
        },
        customGray: {
          50: '#F5F6F7',
          100: '#ECEEF0',
          200: '#E6E8EB',
          300: '#E0E3E8', // Base Color
          400: '#BFC3C9',
          500: '#9FA4AD',
          600: '#7F858F',
          700: '#5F6671',
          800: '#3F4654',
          900: '#20232E',
        },
        background: {
          light: '#F9FAFB', // Light mode background
          dark: '#1F2937',  // Dark mode background
        },
        textColor: {
          primary: '#111827',  // Dark mode text
          secondary: '#9CA3AF', // Muted text or description
        },
        // Neutral / Gray palette for backgrounds and text
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Additional colors
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
        danger: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        info: {
          light: '#BFDBFE',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
      },
      // Custom shades for typography and UI elements
      textColor: {
        primary: '#1E40AF',
        secondary: '#32D583',
        muted: '#6B7280',
      },
      backgroundColor: {
        page: '#f2f4f7', 
        darkPage: '#111827', // Dark mode background
      },
      borderColor: {
        primary: '#1E40AF',
        secondary: '#434445',
        light: '#E5E7EB',
        dark: '#374151',
      },
      // Custom shadows
      boxShadow: {
        primary: '0 4px 6px -1px rgba(30, 64, 175, 0.1), 0 2px 4px -1px rgba(30, 64, 175, 0.06)',
        secondary: '0 4px 6px -1px rgba(217, 119, 6, 0.1), 0 2px 4px -1px rgba(217, 119, 6, 0.06)',
      },
    },
  },
  variants: {
    extend: {
      // Enables dark mode variants for these utilities
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      boxShadow: ['dark'],
    },
  },
  boxShadow: {
    card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for cards
    hover: '0 6px 10px rgba(0, 0, 0, 0.15)', // Slightly elevated shadow for hover state
  },
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  plugins: [],
};
export default config;

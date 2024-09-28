import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				light: '#3B82F6',
  				dark: '#1E40AF',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#32D583',
  				dark: '#32D583',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			customGray: {
  				'50': '#F5F6F7',
  				'100': '#ECEEF0',
  				'200': '#E6E8EB',
  				'300': '#E0E3E8',
  				'400': '#BFC3C9',
  				'500': '#9FA4AD',
  				'600': '#7F858F',
  				'700': '#5F6671',
  				'800': '#3F4654',
  				'900': '#20232E'
  			},
  			background: 'hsl(var(--background))',
  			textColor: {
  				primary: '#111827',
  				secondary: '#9CA3AF'
  			},
  			neutral: {
  				'50': '#F9FAFB',
  				'100': '#F3F4F6',
  				'200': '#E5E7EB',
  				'300': '#D1D5DB',
  				'400': '#9CA3AF',
  				'500': '#6B7280',
  				'600': '#4B5563',
  				'700': '#374151',
  				'800': '#1F2937',
  				'900': '#111827'
  			},
  			success: {
  				light: '#D1FAE5',
  				DEFAULT: '#10B981',
  				dark: '#047857'
  			},
  			danger: {
  				light: '#FEE2E2',
  				DEFAULT: '#EF4444',
  				dark: '#B91C1C'
  			},
  			warning: {
  				light: '#FEF3C7',
  				DEFAULT: '#F59E0B',
  				dark: '#B45309'
  			},
  			info: {
  				light: '#BFDBFE',
  				DEFAULT: '#3B82F6',
  				dark: '#1D4ED8'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		textColor: {
  			primary: '#1E40AF',
  			secondary: '#32D583',
  			muted: '#6B7280'
  		},
  		backgroundColor: {
  			page: '#f2f4f7',
  			darkPage: '#111827'
  		},
  		borderColor: {
  			primary: '#1E40AF',
  			secondary: '#434445',
  			light: '#E5E7EB',
  			dark: '#374151'
  		},
  		boxShadow: {
  			primary: '0 4px 6px -1px rgba(30, 64, 175, 0.1), 0 2px 4px -1px rgba(30, 64, 175, 0.06)',
  			secondary: '0 4px 6px -1px rgba(217, 119, 6, 0.1), 0 2px 4px -1px rgba(217, 119, 6, 0.06)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;

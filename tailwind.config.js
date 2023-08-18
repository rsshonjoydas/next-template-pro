/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const { fontFamily } = require('tailwindcss/defaultTheme');
const animate = require('tailwindcss-animate');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gradient: {
          orange: 'linear-gradient(10deg, #ffaa00, #ff6a00)',
          purple: 'linear-gradient(15deg, #ef5dff, #b648ff)',
          green: 'linear-gradient(15deg, #6adb00, #04e800)',
          success: 'linear-gradient(15deg, #6adb00, #04e800)',
          error: 'linear-gradient(15deg, #ff596d, #d72c2c)',
          warning: 'linear-gradient(15deg, #ffac37, #ff9238)',
          light: 'linear-gradient(15deg, #e7e7e7, #f4f4f4)',
          dark: 'linear-gradient(15deg, #202121, #292a2d)',
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        roboto: 'Roboto, sans-serif;',
        poppins: 'Poppins, sans-serif;',
        montserrat: 'Montserrat, sans-serif;',
        cursive: 'Moon Dance, sans-serif',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        primary: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        light:
          'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -30px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px',
        dark: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [tailwindcss, postcss, autoprefixer, animate],
};

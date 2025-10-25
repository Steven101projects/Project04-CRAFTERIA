/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        rocatwo: ["'Roca Two'", "serif"],
        spartan: ["'League Spartan'", "sans-serif"],
      },
      keyframes: {
        // Gentle floating motion
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Smooth slide down (for titles)
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Smooth fade up (for subtitles or paragraphs)
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Simple fade in (for lines or accents)
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Slow float (for decorative shapes)
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Background gradient animation (optional)
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatlr: { // Custom keyframe name
          '0%, 100%': { transform: 'translateX(-10px)' }, // Starting and ending position (slightly left)
          '50%': { transform: 'translateX(10px)' },     // Mid-point position (slightly right)
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        }
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        slideDown: 'slideDown 1s ease-out forwards',
        fadeUp: 'fadeUp 1.2s ease-out forwards',
        fadeIn: 'fadeIn 1.5s ease-in forwards',
        floatSlow: 'floatSlow 3s ease-in-out infinite',
        gradientMove: 'gradientMove 8s ease infinite',
        floatlr: 'floatlr 3s ease-in-out infinite', 
                pulseScale: 'pulseScale 3s ease-in-out infinite',
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [],
}

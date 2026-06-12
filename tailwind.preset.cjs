/**
 * Shared design tokens for web (Tailwind) and mobile (NativeWind).
 * Dark-mode-first: the app renders on OLED black; there is no light theme.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Backgrounds: true black for OLED, with two elevation steps.
        oled: "#000000",
        surface: "#0A0A0B",
        raised: "#131316",
        edge: "#26262B",
        // Typography
        ink: "#FAFAFA",
        muted: "#8B8B93",
        faint: "#55555C",
        // Semantic accents (the ONLY colors in the app)
        correct: {
          DEFAULT: "#10B981",
          bright: "#34D399",
          dim: "#064E3B"
        },
        wrong: {
          DEFAULT: "#E11D48",
          bright: "#FB7185",
          dim: "#4C0519"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  }
};

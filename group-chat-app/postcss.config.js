// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ REQUIRED for Tailwind 4+
    autoprefixer: {},
  },
};

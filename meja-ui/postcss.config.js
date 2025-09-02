export default {
  plugins: {
    // Tailwind v4 extracts the PostCSS plugin to a separate package
    // Use @tailwindcss/postcss here to avoid the runtime error seen in Vite.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

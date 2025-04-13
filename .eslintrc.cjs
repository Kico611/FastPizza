module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier", // Dodaje Prettier podršku i onemogućava konflikte s ESLint-om
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier", "tailwindcss"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": "off",
    "tailwindcss/no-custom-classname": "off", // Možeš uključiti ako želiš provjeru Tailwind klasa
  },
};

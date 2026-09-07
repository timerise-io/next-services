import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
];

export default config;

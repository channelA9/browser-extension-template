import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Inter"', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.{html,tsx,ts,jsx,js}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['cupcake'],
  },
} satisfies Config;

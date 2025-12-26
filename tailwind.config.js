/** @type {import('tailwindcss').Config} */
export default {
	// content: ['./src/**/*.{html,js,svelte,ts}']
	content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*.svelte',
    './src/**/*.{svelte,js,ts,html}'
	],
    theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
}

  
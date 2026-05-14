/* src/index.css */
@import "tailwindcss";

@theme {
  /* Vos couleurs officielles du cahier des charges */
  --color-primary: oklch(0.62 0.19 45);     /* Orange */
  --color-success: oklch(0.55 0.16 145);    /* Vert */
  --color-sidebar: oklch(0.20 0.04 45);     /* Brun foncé */
  --color-bg: oklch(0.99 0.005 80);         /* Blanc chaud */
  --color-text: oklch(0.18 0.025 50);       /* Brun nuit */
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
}
  

# Deexa Birthday Keepsake (React + Vite)

## 1. Install and run

```bash
npm install
npm run dev
```

## 2. Ballerina mascot artwork

The project includes the two 3×3 mascot sheets used by the `page-mascot` component:

- `public/mascots/ballerina-directions.webp`
- `public/mascots/ballerina-reactions.png`

No additional mascot download is required.

## 3. Build for deployment

```bash
npm run build
```

Upload the generated `dist` folder to your static host, or connect this project to Vercel.

## Project structure

- `src/birthday-content.html` — your original Deexa birthday page content, preserved
- `src/birthday.css` — original page styling, preserved
- `src/components/BirthdayMascot.jsx` — `page-mascot` ballerina component
- `src/App.jsx` — combines the original page and mascot

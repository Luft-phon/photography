# Luftphon Photography Portfolio

A dynamic, multilingual, and highly interactive photography portfolio built with Next.js, featuring smooth scrollytelling animations, a custom masonry gallery, and a responsive mobile experience.

## Features

- **Multilingual Support**: Built-in support for English (`en`) and Vietnamese (`vi`) using `next-intl`.
- **Advanced Animations**: Powered by `GSAP`, `ScrollTrigger`, and `framer-motion` for smooth reveals, scrollytelling, and seamless page transitions.
- **Custom Gallery Grid**: A masonry-style layout with a built-in full-screen lightbox modal and category filtering.
- **Responsive Design**: Fully responsive tailored layout featuring a custom full-screen animated mobile menu with pill-shaped buttons.
- **Custom Cursor & Smooth Scrolling**: Custom pointer and smooth scrolling integration for a premium, app-like feel.

---

## Getting Started

First, install the necessary packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📸 Managing Gallery Photos

The gallery is driven by the files in your `public` directory. To easily add or update photos:

### 1. Add your images to the public folder
Images are categorized by folders within the public directory. Drop your new `.jpg` photos into the desired folder:
- `/public/prewedding/`
- `/public/muse/`
- `/public/aodai/`
- `/public/xmas/`
- `/public/couple/`

*(We recommend naming them sequentially, e.g., `1.jpg`, `2.jpg`, `3.jpg`, to make loading them easier.)*

### 2. Update the Source Code
After adding new images, open `src/components/GalleryGrid.tsx` and update the `length` property for the respective category in the `imagesData` array to match the new number of photos.

```typescript
export const imagesData = [
  ...Array.from({ length: 18 }).map((_, i) => ({
    src: `/prewedding/${i + 1}.jpg`,
    category: "prewedding"
  })),
  // Update the length here to match the amount of images in the folder!
  ...Array.from({ length: 9 }).map((_, i) => ({
    src: `/muse/${i + 1}.jpg`,
    category: "muse"
  })),
];
```

---

## 🌍 Managing Translations (Multi-Language)

This project uses `next-intl` to support multiple languages. 

### To edit text:
1. Open the JSON files located in the `/messages` directory:
   - `en.json` (English)
   - `vi.json` (Vietnamese)
2. Update the key-value pairs. 
3. The changes will instantly reflect globally across the application.

### Adding a new language:
1. Add a new JSON file (e.g., `fr.json`) in the `/messages` folder.
2. Update the locales array under `src/i18n/routing.ts` to include your new language prefix.
3. Update `src/components/Navbar.tsx` to handle cycling to your new language.

---

## Built With

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/)
- [next-intl](https://next-intl-docs.vercel.app/)


Steps to multi language:
1. Add json file to messages/ en.json, vi.json, etc.
2. Use useTranslations hook to get translations
    const t = useTranslations("Hero");
    t('title')


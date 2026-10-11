# Abu Talha Portfolio

This portfolio is built with Next.js App Router, TypeScript, Tailwind CSS, and a minimalist editorial design inspired by premium developer portfolios. The content is sourced from the résumé in `public/documents/resume.pdf` and the hero asset in `public/hero/intro.mp4`.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
```

## Project structure

- `app/page.tsx` - Portfolio page layout and sections
- `app/layout.tsx` - App metadata and global wrapper
- `app/globals.css` - Tailwind import and global theme styles
- `src/lib/data.ts` - Centralized portfolio content
- `src/components/Navigation.tsx` - Responsive navigation
- `src/components/HeroVideo.tsx` - Video hero with sound toggle and viewport pause logic
- `src/components/ProjectCard.tsx` - Project card UI
- `src/components/SectionHeading.tsx` - Reusable section header
- `src/components/Buttons.tsx` - Action buttons and links
- `src/components/Reveal.tsx` - Reveal-on-scroll animation
- `public/documents/resume.pdf` - Resume download source
- `public/hero/intro.mp4` - Hero video asset

## Notes

- No public project deployment URLs were verified in the résumé, so project cards do not claim live deployment links.
- The portfolio intentionally omits an achievements section because the résumé does not include verified achievements.

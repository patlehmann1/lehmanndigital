# Lehmann Digital - Marketing Website

A modern, production-ready marketing website for Lehmann Digital, a full-stack software consulting business specializing in ASP.NET, .NET, and TypeScript development.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags, Open Graph support, and semantic HTML
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Fast & Lightweight**: Minimal dependencies, optimized for performance
- **Accessible**: Proper contrast ratios, semantic HTML, and ARIA attributes
- **Production Ready**: Optimized for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## Project Structure

```
lehmanndigital/
├── app/
│   ├── components/
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── Services.tsx       # Services grid
│   │   ├── About.tsx          # About section
│   │   ├── WorkApproach.tsx   # How we work section
│   │   └── Contact.tsx        # Contact section with mailto & LinkedIn
│   ├── layout.tsx             # Root layout with SEO metadata
│   ├── page.tsx               # Main landing page
│   └── globals.css            # Global styles & Tailwind config
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lehmanndigital
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/lehmanndigital)

## Customization

### Update Contact Information

Edit `app/components/Contact.tsx`:
- Replace `contact@lehmanndigital.com` with your email
- Update LinkedIn URL at line 31

### Modify Content

- **Hero**: Edit `app/components/Hero.tsx`
- **Services**: Edit `app/components/Services.tsx`
- **About**: Edit `app/components/About.tsx`
- **Work Approach**: Edit `app/components/WorkApproach.tsx`
- **Contact**: Edit `app/components/Contact.tsx`

### SEO & Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Keywords
- Open Graph tags

### Color Scheme

The site uses a cool blue color palette. To customize:

Edit `app/globals.css`:
```css
:root {
  --primary: #2563eb;        /* Blue-600 */
  --primary-hover: #1d4ed8;  /* Blue-700 */
  --accent: #0f172a;         /* Slate-900 */
}
```

## Performance

This site is optimized for performance:
- No heavy JavaScript frameworks or libraries
- Minimal bundle size
- Server-side rendering (SSR) with Next.js
- Optimized fonts with next/font
- Responsive images
- Fast Time to First Byte (TTFB)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

All rights reserved © 2026 Lehmann Digital

## Support

For questions or issues, please contact: contact@lehmanndigital.com

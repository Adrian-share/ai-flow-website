# AI Workflow Agency Landing Page

A modern, dark-themed landing page for an AI Workflow automation agency, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark, minimal design inspired by Cursor
- ⚡ Built with Next.js 14 (App Router)
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Optimized for performance
- 🚀 Ready to deploy

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Language:** TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
company-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components (Navbar, Footer, etc.)
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   ├── ui/                 # Reusable UI components
│   └── animations/         # Animation wrappers
├── lib/
│   ├── constants.ts        # Site content and configuration
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Sections

1. **Hero** - Full-screen hero with gradient glow effect
2. **Features** - Bento Grid layout showcasing key features
3. **Use Cases** - Application scenarios
4. **Workflow Demo** - Animated visualization of data flow
5. **CTA** - Call-to-action section
6. **Footer** - Contact information

## Customization

### Update Content

Edit `lib/constants.ts` to change:
- Site name, title, description
- Navigation items
- Features
- Use cases
- Workflow nodes

### Update Styles

Edit `app/globals.css` and `tailwind.config.ts` to customize:
- Colors
- Fonts
- Animations
- Spacing

### Update Email

Change the contact email in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  // ...
  email: "your-email@example.com",
};
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Railway

## Performance

- ✅ Static site generation for optimal performance
- ✅ Optimized fonts with next/font
- ✅ Smooth 60fps animations
- ✅ Mobile-first responsive design

## License

ISC

---

Built with ❤️ using Next.js and Tailwind CSS

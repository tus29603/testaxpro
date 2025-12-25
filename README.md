# Tax Preparation Services Website

A modern, professional, front-end only website for tax preparation services built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, professional design with blue + white color theme
- 📱 Mobile-first, responsive layout
- ⚡ Fast and accessible
- 🎯 Clear call-to-action buttons
- 📄 Single-page design with smooth scrolling
- 📝 All text content editable in one constants file
- 🚀 Deployable to Vercel as a static site

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Heroicons**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All text content can be edited in the `constants/content.ts` file. This includes:

- Business name and location
- Contact information (phone, email, text)
- Hero section content
- Services descriptions
- How It Works steps
- Pricing information
- FAQ questions and answers
- Contact form labels
- Footer disclaimer

### Updating Contact Information

Edit the `siteConfig` object in `constants/content.ts`:

```typescript
contact: {
  phone: '555-123-4567', // Your phone number
  email: 'info@testaxservices.com', // Your email
  text: '555-123-4567', // Your text number
}
```

## Building for Production

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment to Vercel

1. Push your code to a GitHub repository.

2. Import your repository in [Vercel](https://vercel.com):
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. Deploy:
   - Vercel will automatically build and deploy your site
   - The site will be live at a `*.vercel.app` URL
   - You can add a custom domain in the Vercel dashboard

### Vercel Configuration

The project is already configured for static export:
- `next.config.js` includes `output: 'export'`
- Images are set to `unoptimized: true` for static export

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Sticky navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services cards
│   ├── HowItWorks.tsx       # Process steps
│   ├── Pricing.tsx          # Pricing section
│   ├── FAQ.tsx              # FAQ accordion
│   ├── Contact.tsx          # Contact form and buttons
│   └── Footer.tsx           # Footer with links and disclaimer
├── constants/
│   └── content.ts           # All editable text content
├── public/                  # Static assets (if any)
└── package.json
```

## Sections

1. **Hero** - Headline, subtext, and primary CTA buttons
2. **Services** - 6 service cards with icons
3. **How It Works** - 4-step process visualization
4. **Pricing** - Starting price and disclaimer
5. **FAQ** - 6 expandable questions and answers
6. **Contact** - Contact form (mailto) and direct contact buttons
7. **Footer** - Business info, quick links, and disclaimer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.


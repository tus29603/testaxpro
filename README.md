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

## Deployment to GitHub Pages

This project is configured for static export and is ready to deploy to GitHub Pages.

### Build and Export

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **The build output:**
   - All static files are generated in the `out/` directory
   - The `out/` folder contains `index.html` and all assets
   - All paths use relative/absolute paths compatible with root domain hosting

### Deploy to GitHub Pages

**Option 1: Deploy the `out/` folder directly**

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the contents of the `out/` folder to your repository root (or a `docs/` folder)

3. In GitHub repository settings:
   - Go to Settings → Pages
   - Set Source to the folder containing the built files
   - Save

**Option 2: Use GitHub Actions (Recommended)**

1. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

2. Push to GitHub - the workflow will automatically build and deploy

### Important Notes

- The `CNAME` file is already configured for `testaxpro.com`
- The site is configured for root domain hosting (not subdirectory)
- All assets use absolute paths (`/logo.jpeg`) which work with root domain
- No backend or environment variables required
- The exported site is fully static HTML/CSS/JS

### Verify Deployment

After deployment, visit `https://testaxpro.com` - it should look exactly like `localhost:3000`.

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


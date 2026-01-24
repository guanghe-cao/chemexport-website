# ShiChem Industrial Materials Website

Professional B2B chemical export website built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Project Overview

This is a static website for ShiChem Industrial Materials Co., Ltd. (实化工业材料有限公司), a Chinese chemical trading company specializing in construction and industrial chemical exports. The site features:

- **24 product pages** across 5 categories (Concrete Admixtures, Dry-Mix Mortar Additives, Construction Fibers & Fillers, Pigments & Coating Materials, Water Treatment & Industrial Chemicals)
- **SEO-optimized content** with structured product taxonomy
- **Responsive design** with modern UI components (shadcn/ui)
- **Trust-focused messaging** for B2B buyers

---

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Deployment**: Static site (can be deployed to Vercel, Netlify, GitHub Pages, or any static host)

---

## Project Structure

```
chemexport-website/
├── client/                          # Frontend application
│   ├── public/                      # Static assets (served at root)
│   │   └── images/                  # Product and hero images
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── ui/                  # shadcn/ui components (DO NOT EDIT MANUALLY)
│   │   │   ├── Navigation.tsx       # Site header and navigation
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── ...
│   │   ├── contexts/                # React contexts (theme, etc.)
│   │   ├── data/                    # ⭐ PRODUCT DATA (EDIT HERE)
│   │   │   └── products.ts          # All product information
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── lib/                     # Utility functions
│   │   ├── pages/                   # ⭐ PAGE COMPONENTS (EDIT HERE)
│   │   │   ├── Home.tsx             # Homepage
│   │   │   ├── About.tsx            # About Us page
│   │   │   ├── Contact.tsx          # Contact page
│   │   │   ├── Products.tsx         # Products hub page
│   │   │   ├── ProductCategory.tsx  # Category listing page
│   │   │   ├── ProductDetail.tsx    # Individual product page
│   │   │   └── PlaceholderPages.tsx # Quality, Export, Applications, Resources
│   │   ├── App.tsx                  # Main app component with routes
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # ⭐ GLOBAL STYLES & THEME (EDIT HERE)
│   └── index.html                   # HTML template
├── server/                          # Minimal server for production (static file serving)
│   └── index.ts
├── shared/                          # Shared constants
│   └── const.ts
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
├── tailwind.config.ts               # Tailwind configuration
└── README.md                        # This file
```

---

## Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 22.x)
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository (if using Git)
git clone <your-repo-url>
cd chemexport-website

# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Start development server
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build static site
pnpm build
# or
npm run build
```

The built site will be in `dist/public/` directory.

### Preview Production Build

```bash
# Preview production build locally
pnpm preview
# or
npm run preview
```

---

## Content Editing Guide

### Where to Edit Content

| Content Type | File Location | Description |
|--------------|---------------|-------------|
| **Product Data** | `client/src/data/products.ts` | All product information (names, descriptions, grades, applications, packaging, MOQ, etc.) |
| **Homepage** | `client/src/pages/Home.tsx` | Hero section, product categories overview, "Why Choose Us", stats |
| **About Us** | `client/src/pages/About.tsx` | Company story, team info, commitments |
| **Contact** | `client/src/pages/Contact.tsx` | Contact form, address, email, phone |
| **Products Hub** | `client/src/pages/Products.tsx` | Products landing page with category cards |
| **Product Category** | `client/src/pages/ProductCategory.tsx` | Category listing page (dynamically generated from `products.ts`) |
| **Product Detail** | `client/src/pages/ProductDetail.tsx` | Individual product page (dynamically generated from `products.ts`) |
| **Placeholder Pages** | `client/src/pages/PlaceholderPages.tsx` | Quality, Export, Applications, Resources pages |
| **Navigation** | `client/src/components/Navigation.tsx` | Header, logo, menu items |
| **Footer** | `client/src/components/Footer.tsx` | Footer links, copyright, contact info |
| **Global Styles** | `client/src/index.css` | Theme colors, typography, spacing |
| **SEO Metadata** | `client/index.html` | Page title, meta description (global) |

### Editing Product Data

All product information is centralized in `client/src/data/products.ts`. This file exports:

1. **`productCategories`**: Array of product categories
2. **`products`**: Array of all products

**Example: Adding a New Product**

```typescript
// In client/src/data/products.ts

export const products: Product[] = [
  // ... existing products
  {
    id: "new-product-slug",
    categoryId: "concrete-admixtures", // Must match a category ID
    name: "New Product Name",
    shortDescription: "Brief description for listings",
    fullDescription: "Detailed description for product page",
    casNumber: "123-45-6",
    hsCode: "1234.56.78",
    forms: ["Powder", "Liquid"],
    grades: [
      {
        name: "Grade A",
        specifications: "Purity ≥99%, Moisture ≤0.5%",
        applications: "Use case 1, Use case 2"
      }
    ],
    applications: ["Application 1", "Application 2"],
    packaging: ["25kg bags", "1000kg IBCs"],
    moq: "5 tons (1 container)",
    compliance: ["ISO 9001", "REACH registered"],
    relatedProducts: ["pce", "snf"] // IDs of related products
  }
];
```

After editing `products.ts`, the changes will automatically appear on:
- Products hub page (`/products`)
- Category page (`/products/[category-id]`)
- Product detail page (`/products/[category-id]/[product-id]`)

---

## Styling and Design

### Theme Customization

The site uses Tailwind CSS 4 with custom design tokens defined in `client/src/index.css`.

**Color Palette:**
- **Primary**: Deep navy blue (used for CTAs, headings)
- **Accent**: Chemical green (used for highlights, icons)
- **Background**: White (light mode)
- **Foreground**: Dark gray (text)

**To Change Colors:**

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: var(--color-blue-700);        /* Change to your primary color */
  --primary-foreground: var(--color-blue-50);
  --accent: oklch(0.6 0.15 140);           /* Change to your accent color */
  /* ... other color variables */
}
```

**Typography:**

The site uses **Inter** font (loaded from Google Fonts in `client/index.html`). To change the font:

1. Update the Google Fonts link in `client/index.html`
2. Update the `font-sans` class in `client/src/index.css`

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite and configure build settings
4. Click "Deploy"

**Build Settings (if needed):**
- **Framework Preset**: Vite
- **Build Command**: `pnpm build` or `npm run build`
- **Output Directory**: `dist/public`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and import your repository
3. Configure build settings:
   - **Build Command**: `pnpm build` or `npm run build`
   - **Publish Directory**: `dist/public`
4. Click "Deploy"

### Deploy to GitHub Pages

1. Install `gh-pages` package:
   ```bash
   pnpm add -D gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "pnpm build && gh-pages -d dist/public"
     }
   }
   ```

3. Run deploy:
   ```bash
   pnpm deploy
   ```

### Deploy to Any Static Host

Build the site and upload the `dist/public/` directory to your hosting provider (AWS S3, DigitalOcean Spaces, Cloudflare Pages, etc.).

---

## AI-Assisted Editing Guide

This project is designed to work well with AI coding tools like **Cursor**, **v0**, and **GitHub Copilot**.

### Safe for AI Editing (Recommended)

These files are **safe to edit** with AI tools and will not break the site:

| File/Folder | What to Edit | Tool Recommendation |
|-------------|--------------|---------------------|
| `client/src/data/products.ts` | Add/edit/remove products | **Cursor** (structured data editing) |
| `client/src/pages/Home.tsx` | Homepage content and layout | **Cursor** or **v0** |
| `client/src/pages/About.tsx` | About page content | **Cursor** |
| `client/src/pages/Contact.tsx` | Contact page content | **Cursor** |
| `client/src/pages/PlaceholderPages.tsx` | Placeholder page content | **Cursor** |
| `client/src/components/Navigation.tsx` | Header and menu | **Cursor** |
| `client/src/components/Footer.tsx` | Footer content | **Cursor** |
| `client/src/index.css` | Theme colors, typography | **Cursor** |

### Use with Caution

These files can be edited but require careful review:

| File/Folder | What to Edit | Notes |
|-------------|--------------|-------|
| `client/src/pages/ProductCategory.tsx` | Category page layout | Uses dynamic data from `products.ts` |
| `client/src/pages/ProductDetail.tsx` | Product page layout | Uses dynamic data from `products.ts` |
| `client/src/App.tsx` | Routing configuration | Breaking routes will cause 404 errors |

### Do NOT Auto-Generate

These files should **NOT be regenerated** by AI tools:

| File/Folder | Why Not | Alternative |
|-------------|---------|-------------|
| `client/src/components/ui/*` | shadcn/ui components (standardized) | Use [shadcn/ui docs](https://ui.shadcn.com) to add new components manually |
| `package.json` | Dependency management | Edit manually or use `pnpm add <package>` |
| `vite.config.ts` | Build configuration | Edit manually |
| `tsconfig.json` | TypeScript configuration | Edit manually |

---

## Using Cursor for Content Editing

[Cursor](https://cursor.sh) is an AI-powered code editor ideal for editing content and making targeted changes.

**Best Use Cases:**
1. **Editing product data** in `client/src/data/products.ts`
2. **Updating page content** (headlines, descriptions, CTAs)
3. **Modifying styles** in `client/src/index.css`
4. **Refactoring components** for better structure

**Example Cursor Prompts:**

```
"Add a new product called 'Calcium Nitrate' to the concrete-admixtures category 
with CAS number 10124-37-5, available in powder form, packaged in 25kg bags"
```

```
"Update the homepage hero headline to: 'Trusted Chemical Export Partner Since 2014'"
```

```
"Change the primary color to a darker blue (oklch(0.3 0.1 240))"
```

---

## Using v0 for UI Components

[v0](https://v0.dev) by Vercel is great for generating **new UI components** or **redesigning sections**.

**Best Use Cases:**
1. **Creating new page sections** (e.g., testimonials, case studies)
2. **Redesigning existing sections** (e.g., "Why Choose Us" cards)
3. **Adding new interactive components** (e.g., product comparison table)

**How to Use v0:**

1. Go to [v0.dev](https://v0.dev)
2. Describe the component you want (e.g., "Create a testimonial section with 3 cards, each with a quote, company name, and person's name")
3. Copy the generated React + Tailwind code
4. Paste into a new file in `client/src/components/` or directly into a page component
5. Adjust imports and styling to match the existing design

**⚠️ Important:**
- v0 generates **UI only** (layout and styling)
- You must **manually connect** v0 components to your data (e.g., `products.ts`)
- Always review generated code for compatibility with the existing project

**Example v0 Prompt:**

```
"Create a product comparison table component with React and Tailwind CSS. 
It should accept an array of products with name, price, features, and a CTA button. 
Use the shadcn/ui Table component."
```

---

## Git and Version Control

### Initialize Git Repository

If you haven't already initialized Git:

```bash
cd chemexport-website
git init
git add .
git commit -m "Initial commit: ShiChem website"
```

### Connect to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/your-username/chemexport-website.git
git branch -M main
git push -u origin main
```

### Recommended .gitignore

A `.gitignore` file is already included in the project. It excludes:

- `node_modules/` (dependencies)
- `dist/` (build output)
- `.env` and `.env.local` (environment variables)
- IDE-specific files (`.vscode/`, `.idea/`)
- OS-specific files (`.DS_Store`, `Thumbs.db`)

### Branching Strategy

For safe editing:

1. **Create a feature branch** before making changes:
   ```bash
   git checkout -b feature/update-products
   ```

2. **Make changes** and commit:
   ```bash
   git add .
   git commit -m "Add new product: Calcium Nitrate"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin feature/update-products
   ```

4. **Create a Pull Request** on GitHub for review

5. **Merge to main** after review

---

## Troubleshooting

### Common Issues

**Issue: "Cannot find module" errors after cloning**

**Solution:** Install dependencies:
```bash
pnpm install
```

---

**Issue: Port 3000 is already in use**

**Solution:** Kill the process using port 3000 or specify a different port:
```bash
pnpm dev --port 3001
```

---

**Issue: Images not loading in production**

**Solution:** Ensure image paths use absolute paths starting with `/`:
```tsx
<img src="/images/hero-background.png" alt="..." />
```

---

**Issue: Routes not working after deployment**

**Solution:** Configure your hosting provider to redirect all routes to `index.html` (SPA fallback). For Vercel/Netlify, this is automatic.

---

### Getting Help

- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **Tailwind CSS Documentation**: https://tailwindcss.com
- **shadcn/ui Documentation**: https://ui.shadcn.com
- **Wouter (Routing) Documentation**: https://github.com/molefrog/wouter

---

## Project Maintenance

### Adding New Dependencies

```bash
# Using pnpm
pnpm add <package-name>

# Using npm
npm install <package-name>
```

### Updating Dependencies

```bash
# Update all dependencies to latest versions
pnpm update

# Check for outdated dependencies
pnpm outdated
```

### Code Quality

The project uses TypeScript for type safety. Run type checking:

```bash
pnpm check
# or
npm run check
```

---

## License

This project is proprietary and confidential. All rights reserved by ShiChem Industrial Materials Co., Ltd.

---

## Contact

For questions or support, contact:

- **Email**: [YOUR_EMAIL]
- **Website**: [YOUR_WEBSITE]

---

**Last Updated**: January 24, 2026

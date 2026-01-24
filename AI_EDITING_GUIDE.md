# AI-Assisted Editing Guide for ShiChem Website

This guide explains how to safely use AI coding tools (Cursor, v0, GitHub Copilot) to edit the ShiChem website without breaking functionality or losing content.

---

## Quick Reference

| Task | Recommended Tool | File to Edit | Risk Level |
|------|------------------|--------------|------------|
| Add/edit products | **Cursor** | `client/src/data/products.ts` | ✅ Low |
| Update homepage content | **Cursor** | `client/src/pages/Home.tsx` | ✅ Low |
| Change colors/fonts | **Cursor** | `client/src/index.css` | ✅ Low |
| Redesign a page section | **v0** | Any page component | ⚠️ Medium |
| Add new UI components | **v0** | `client/src/components/` | ⚠️ Medium |
| Modify routing | **Manual** | `client/src/App.tsx` | ⚠️ Medium |
| Update dependencies | **Manual** | `package.json` | ⚠️ Medium |
| Regenerate shadcn/ui components | **❌ Don't** | `client/src/components/ui/` | ❌ High |

---

## Part 1: Using Cursor for Content and Code Editing

[Cursor](https://cursor.sh) is an AI-powered code editor built on VS Code. It's ideal for making targeted changes to existing files.

### Installation

1. Download Cursor from [cursor.sh](https://cursor.sh)
2. Open the project folder: `File > Open Folder > chemexport-website`
3. Cursor will automatically detect the TypeScript/React project

### Best Use Cases for Cursor

#### 1. Editing Product Data

**File**: `client/src/data/products.ts`

This is the **safest and most common** editing task. All product information is centralized in this file.

**Example Prompts:**

```
Add a new product called "Calcium Nitrate" to the concrete-admixtures category.
CAS number: 10124-37-5
Forms: Powder, Granular
Packaging: 25kg bags, 1000kg big bags
MOQ: 10 tons
```

```
Update the PCE product description to mention that it's suitable for high-strength concrete (C50-C80)
```

```
Add a new grade to HPMC: "HPMC 200,000 mPa·s" with specifications "Viscosity: 180,000-220,000 mPa·s, Moisture: ≤5%"
```

**How to Use:**

1. Open `client/src/data/products.ts` in Cursor
2. Select the relevant section (or the entire file)
3. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open Cursor's AI chat
4. Type your prompt
5. Review the suggested changes
6. Accept or reject the changes

**⚠️ Important:**
- Always **review** the changes before accepting
- Ensure the `id` field is unique and uses kebab-case (e.g., `calcium-nitrate`)
- Ensure the `categoryId` matches an existing category

---

#### 2. Updating Page Content

**Files**: `client/src/pages/*.tsx`

You can use Cursor to update headlines, descriptions, CTAs, and other text content.

**Example Prompts:**

```
Update the homepage hero headline to: "Trusted Chemical Export Partner Since 2014"
```

```
Add a new section to the About page titled "Our Team" with placeholder text for founder bio
```

```
Change the Contact page headline to: "Get in Touch with Our Export Team"
```

**How to Use:**

1. Open the relevant page file (e.g., `client/src/pages/Home.tsx`)
2. Select the section you want to edit
3. Press `Cmd+K` or `Ctrl+K`
4. Type your prompt
5. Review and accept changes

**⚠️ Important:**
- Do not delete or rename existing components without understanding their purpose
- If you're unsure, ask Cursor to "explain this code" first

---

#### 3. Changing Colors and Typography

**File**: `client/src/index.css`

The site's color palette and typography are defined in this file using CSS variables.

**Example Prompts:**

```
Change the primary color to a darker blue: oklch(0.3 0.1 240)
```

```
Update the accent color to a teal green: oklch(0.6 0.15 180)
```

```
Change the font from Inter to Roboto
```

**How to Use:**

1. Open `client/src/index.css`
2. Select the `:root` section (lines 20-60)
3. Press `Cmd+K` or `Ctrl+K`
4. Type your prompt
5. Review and accept changes

**⚠️ Important:**
- Use OKLCH color format for Tailwind CSS 4 compatibility
- Do not delete the entire `:root` or `.dark` sections
- Test the site after making color changes to ensure readability

---

#### 4. Refactoring Components

Cursor can help you refactor components for better structure or readability.

**Example Prompts:**

```
Extract the "Why Choose Us" section from Home.tsx into a separate component called WhyChooseUs.tsx
```

```
Refactor the ProductDetail page to use a separate component for the specifications table
```

```
Add TypeScript types to the Navigation component props
```

**How to Use:**

1. Open the file you want to refactor
2. Select the code you want to refactor
3. Press `Cmd+K` or `Ctrl+K`
4. Type your prompt
5. Review the suggested changes and new files

**⚠️ Important:**
- Ensure imports are updated correctly after refactoring
- Test the site after refactoring to ensure nothing broke

---

### Cursor Tips and Tricks

**Tip 1: Use "Explain" to Understand Code**

If you're unsure what a piece of code does, select it and ask Cursor:
```
Explain this code
```

**Tip 2: Use "Fix" for Errors**

If you see a TypeScript error, select the error and ask Cursor:
```
Fix this TypeScript error
```

**Tip 3: Use "Generate" for Boilerplate**

If you need to create a new component, ask Cursor:
```
Generate a new React component called Testimonials.tsx with props for name, company, and quote
```

**Tip 4: Use "Test" for Quality Assurance**

After making changes, ask Cursor:
```
Are there any potential bugs or issues with this code?
```

---

## Part 2: Using v0 for UI Component Generation

[v0](https://v0.dev) by Vercel is a tool for generating React + Tailwind CSS components from natural language prompts.

### When to Use v0

v0 is best for:
- **Creating new UI sections** (e.g., testimonials, case studies, team bios)
- **Redesigning existing sections** (e.g., "Why Choose Us" cards)
- **Adding interactive components** (e.g., product comparison table, FAQ accordion)

v0 is **NOT** good for:
- Editing existing components (use Cursor instead)
- Connecting components to data (you must do this manually)
- Generating entire pages (too complex, use Cursor instead)

---

### How to Use v0

#### Step 1: Go to v0.dev

Visit [v0.dev](https://v0.dev) and sign in with your GitHub account.

#### Step 2: Describe the Component

Write a detailed prompt describing the component you want. Be specific about:
- Layout (grid, flex, cards, etc.)
- Content (text, images, icons, etc.)
- Interactions (hover effects, animations, etc.)
- Style (colors, spacing, shadows, etc.)

**Example Prompts:**

```
Create a testimonial section with 3 cards in a grid. Each card should have:
- A quote in large text
- The person's name and job title
- The company name
- A subtle shadow on hover
Use Tailwind CSS and shadcn/ui Card component.
```

```
Create a product comparison table with 4 columns and 5 rows. 
The first column should be feature names, the other 3 columns should be product names.
Each cell should have a checkmark or X icon.
Use Tailwind CSS and shadcn/ui Table component.
```

```
Create a FAQ section with an accordion. Each question should expand/collapse on click.
Use shadcn/ui Accordion component.
Style it with a subtle border and padding.
```

#### Step 3: Generate and Review

v0 will generate 2-3 variations of the component. Review each one and select the best.

#### Step 4: Copy the Code

Click "Copy Code" to copy the React + Tailwind CSS code.

#### Step 5: Integrate into Your Project

1. Create a new file in `client/src/components/` (e.g., `Testimonials.tsx`)
2. Paste the v0 code
3. **Adjust imports** to match your project structure:
   ```tsx
   // v0 might generate:
   import { Card } from "@/components/ui/card"
   
   // This should work in your project (no changes needed)
   ```
4. **Connect to your data** (if needed):
   ```tsx
   // v0 generates hardcoded data:
   const testimonials = [
     { name: "John Doe", company: "Acme Inc", quote: "Great service!" }
   ];
   
   // You should replace this with props or imported data:
   interface TestimonialsProps {
     testimonials: Array<{
       name: string;
       company: string;
       quote: string;
     }>;
   }
   
   export function Testimonials({ testimonials }: TestimonialsProps) {
     // ...
   }
   ```
5. **Import and use** the component in a page:
   ```tsx
   // In client/src/pages/Home.tsx
   import { Testimonials } from "@/components/Testimonials";
   
   // ...
   <Testimonials testimonials={testimonialsData} />
   ```

---

### v0 Examples

#### Example 1: Testimonials Section

**Prompt:**
```
Create a testimonials section with 3 cards in a horizontal grid. 
Each card should have a quote icon at the top, a quote in italic text, 
the person's name in bold, and the company name in smaller text below.
Use shadcn/ui Card component and Tailwind CSS.
Add a subtle shadow and scale effect on hover.
```

**Generated Code (simplified):**
```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "ShiChem provided excellent service and high-quality products.",
      name: "John Doe",
      company: "ABC Construction"
    },
    // ... more testimonials
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="italic text-muted-foreground mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**How to Integrate:**

1. Save this code to `client/src/components/Testimonials.tsx`
2. Replace the hardcoded `testimonials` array with props or imported data
3. Import and use in `client/src/pages/Home.tsx`:
   ```tsx
   import { Testimonials } from "@/components/Testimonials";
   
   // Inside the Home component, add:
   <Testimonials />
   ```

---

#### Example 2: Product Comparison Table

**Prompt:**
```
Create a product comparison table for 3 concrete admixtures (PCE, SNF, SMF).
Rows: Water Reduction, Slump Retention, Dosage, Cost, Best For.
Use checkmarks and X icons for boolean values.
Use shadcn/ui Table component and Tailwind CSS.
```

**Generated Code (simplified):**
```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

export function ProductComparison() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Feature</TableHead>
          <TableHead>PCE</TableHead>
          <TableHead>SNF</TableHead>
          <TableHead>SMF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Water Reduction</TableCell>
          <TableCell>25-40%</TableCell>
          <TableCell>15-25%</TableCell>
          <TableCell>15-25%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Slump Retention</TableCell>
          <TableCell><Check className="text-green-600" /></TableCell>
          <TableCell><X className="text-red-600" /></TableCell>
          <TableCell className="text-muted-foreground">Moderate</TableCell>
        </TableRow>
        {/* ... more rows */}
      </TableBody>
    </Table>
  );
}
```

**How to Integrate:**

1. Save to `client/src/components/ProductComparison.tsx`
2. Make the table data dynamic by accepting props
3. Use in a product page or application page

---

### v0 Tips and Tricks

**Tip 1: Be Specific About Styling**

Instead of:
```
Create a card component
```

Use:
```
Create a card component with rounded corners, subtle shadow, 
white background, and a hover effect that scales it up by 5%
```

**Tip 2: Reference shadcn/ui Components**

v0 works best when you specify which shadcn/ui components to use:
```
Use shadcn/ui Card, Button, and Badge components
```

**Tip 3: Request Multiple Variations**

v0 generates 2-3 variations by default. Review all of them and pick the best, or combine elements from multiple variations.

**Tip 4: Iterate on the Design**

If the first generation isn't perfect, click "Edit" and refine your prompt:
```
Make the cards larger and add more spacing between them
```

---

## Part 3: What NOT to Do

### ❌ Do Not Regenerate shadcn/ui Components

The `client/src/components/ui/` folder contains standardized UI components from shadcn/ui. **Do not** ask Cursor or v0 to regenerate these components.

**Why?** These components are carefully configured to work with the project's theme and styling. Regenerating them will break consistency.

**If you need a new shadcn/ui component:**

1. Go to [ui.shadcn.com](https://ui.shadcn.com)
2. Find the component you need (e.g., "Tabs")
3. Follow the installation instructions (usually `npx shadcn@latest add tabs`)

---

### ❌ Do Not Auto-Edit package.json

**Why?** Dependency management requires careful version control. Auto-editing can introduce breaking changes.

**If you need to add a dependency:**

```bash
pnpm add <package-name>
# or
npm install <package-name>
```

---

### ❌ Do Not Delete or Rename Routes Without Understanding

The `client/src/App.tsx` file defines all routes. Deleting or renaming routes will cause 404 errors.

**If you need to change routes:**

1. Understand the current routing structure
2. Update `App.tsx` manually
3. Update all internal links (in Navigation, Footer, etc.)

---

### ❌ Do Not Overwrite Product Data Without Backup

The `client/src/data/products.ts` file contains all product information. If you accidentally delete or overwrite it, you'll lose all product data.

**Before making major changes:**

1. Create a backup: `cp client/src/data/products.ts client/src/data/products.backup.ts`
2. Or commit to Git: `git commit -am "Backup before editing products"`

---

## Part 4: Testing Your Changes

After making changes with Cursor or v0, always test the site locally.

### Step 1: Start the Development Server

```bash
pnpm dev
```

### Step 2: Check for Errors

- Open the browser console (F12) and check for errors
- Check the terminal for TypeScript errors

### Step 3: Test Affected Pages

- Navigate to the pages you edited
- Test all links and buttons
- Check responsive design (resize the browser window)

### Step 4: Run Type Checking

```bash
pnpm check
```

This will catch any TypeScript errors.

---

## Part 5: Common AI Editing Scenarios

### Scenario 1: Adding a New Product

**Tool**: Cursor

**Steps**:
1. Open `client/src/data/products.ts`
2. Select the `products` array
3. Press `Cmd+K` or `Ctrl+K`
4. Prompt: "Add a new product called [NAME] to the [CATEGORY] category with [DETAILS]"
5. Review and accept changes
6. Test the product page: `http://localhost:3000/products/[category]/[product-id]`

---

### Scenario 2: Redesigning the Homepage Hero

**Tool**: v0

**Steps**:
1. Go to [v0.dev](https://v0.dev)
2. Prompt: "Create a hero section for a B2B chemical export website. Include a headline, subheadline, 2 CTA buttons, and a background image. Use Tailwind CSS."
3. Copy the generated code
4. Open `client/src/pages/Home.tsx` in Cursor
5. Replace the existing hero section with the v0 code
6. Adjust imports and data connections
7. Test: `http://localhost:3000`

---

### Scenario 3: Changing the Color Scheme

**Tool**: Cursor

**Steps**:
1. Open `client/src/index.css`
2. Select the `:root` section
3. Press `Cmd+K` or `Ctrl+K`
4. Prompt: "Change the primary color to [COLOR] and the accent color to [COLOR]"
5. Review and accept changes
6. Test the entire site to ensure readability

---

### Scenario 4: Adding a New Page

**Tool**: Cursor

**Steps**:
1. Create a new file: `client/src/pages/NewPage.tsx`
2. Prompt Cursor: "Create a new React page component called NewPage with a hero section and placeholder content"
3. Open `client/src/App.tsx`
4. Add a new route:
   ```tsx
   <Route path="/new-page" component={NewPage} />
   ```
5. Update Navigation to include a link to the new page
6. Test: `http://localhost:3000/new-page`

---

## Part 6: Getting Help

### If Something Breaks

1. **Check the browser console** for errors (F12)
2. **Check the terminal** for TypeScript errors
3. **Undo your changes** in Cursor (Cmd+Z / Ctrl+Z)
4. **Restore from Git** if you committed before making changes:
   ```bash
   git checkout -- <file>
   ```
5. **Ask Cursor to fix it**: Select the error and prompt "Fix this error"

### If You're Stuck

1. **Read the README.md** for project structure and guidelines
2. **Check the official docs**:
   - [React](https://react.dev)
   - [Tailwind CSS](https://tailwindcss.com)
   - [shadcn/ui](https://ui.shadcn.com)
3. **Ask Cursor to explain**: Select the code and prompt "Explain this code"

---

## Summary

| Task | Tool | File | Risk |
|------|------|------|------|
| Edit products | Cursor | `client/src/data/products.ts` | ✅ Low |
| Edit page content | Cursor | `client/src/pages/*.tsx` | ✅ Low |
| Change colors | Cursor | `client/src/index.css` | ✅ Low |
| Create new UI | v0 | New component file | ⚠️ Medium |
| Redesign section | v0 | Existing component | ⚠️ Medium |
| Add new page | Cursor | New page file + `App.tsx` | ⚠️ Medium |
| Refactor code | Cursor | Any file | ⚠️ Medium |
| Edit shadcn/ui | ❌ Don't | `client/src/components/ui/` | ❌ High |
| Edit package.json | ❌ Don't | `package.json` | ❌ High |

**Remember**: Always test your changes locally before deploying!

---

**Last Updated**: January 24, 2026

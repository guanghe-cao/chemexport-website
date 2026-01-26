# Deployment Guide for ShiChem Website

This guide explains how to deploy the ShiChem website to various hosting platforms.

---

## Quick Deployment Options

| Platform | Difficulty | Cost | Best For |
|----------|------------|------|----------|
| **Vercel** | ⭐ Easy | Free (Hobby) | Fastest deployment, automatic previews |
| **Netlify** | ⭐ Easy | Free (Starter) | Great for static sites, easy rollbacks |
| **GitHub Pages** | ⭐⭐ Medium | Free | Simple hosting, no custom server needed |
| **Cloudflare Pages** | ⭐ Easy | Free | Fast global CDN, unlimited bandwidth |
| **AWS S3 + CloudFront** | ⭐⭐⭐ Advanced | Pay-as-you-go | Full control, enterprise-grade |

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the fastest and easiest way to deploy the React + Vite frontend and the `/api/contact` serverless function. It automatically detects the framework and configures everything for you.

### Step 1: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
cd chemexport-website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/chemexport-website.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your GitHub repository (`chemexport-website`)
4. Vercel will auto-detect Vite and configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `dist/public`
5. Click **"Deploy"**

### Step 3: Configure Environment Variables

Set the following environment variables in **Project Settings → Environment Variables**:

- `RESEND_API_KEY` (required)
- `INQUIRY_TO_EMAIL` (default: `tatum.hongquan@gmail.com`)
- `INQUIRY_CC_EMAIL` (default: `sales.hongquan@gmail.com`)
- `INQUIRY_FROM_EMAIL` (required for production deliverability)

**Notes:**
- `INQUIRY_FROM_EMAIL` must be a **verified sender** in Resend.
- If `INQUIRY_FROM_EMAIL` is not set, the API falls back to `onboarding@resend.dev` for development.

### Step 4: Wait for Deployment

Vercel will build and deploy your site in 1-2 minutes. You'll get a URL like:
```
https://chemexport-website.vercel.app
```

### Step 5: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click **"Domains"**
3. Add your custom domain (e.g., `shichem.com`)
4. Follow Vercel's instructions to update your DNS records

---

## Option 2: Deploy to Netlify

Netlify is another popular option for static sites with easy rollbacks and branch previews.

### Step 1: Push to GitHub

Same as Vercel (see above).

### Step 2: Import to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your GitHub repository (`chemexport-website`)
4. Configure build settings:
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Publish Directory**: `dist/public`
5. Click **"Deploy site"**

### Step 3: Wait for Deployment

Netlify will build and deploy your site in 1-2 minutes. You'll get a URL like:
```
https://chemexport-website.netlify.app
```

### Step 4: Configure Custom Domain (Optional)

1. Go to **"Domain settings"** in Netlify
2. Click **"Add custom domain"**
3. Follow Netlify's instructions to update your DNS records

---

## Option 3: Deploy to GitHub Pages

GitHub Pages is a free hosting service for static sites directly from your GitHub repository.

### Step 1: Install gh-pages Package

```bash
cd chemexport-website
pnpm add -D gh-pages
# or
npm install -D gh-pages
```

### Step 2: Update package.json

Add a `homepage` field and a `deploy` script to `package.json`:

```json
{
  "name": "chemexport-website",
  "homepage": "https://your-username.github.io/chemexport-website",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "deploy": "pnpm build && gh-pages -d dist/public"
  }
}
```

Replace `your-username` with your GitHub username.

### Step 3: Update Vite Config

Update `vite.config.ts` to set the correct base path:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/chemexport-website/', // Must match your repo name
  plugins: [react()],
  // ... rest of config
});
```

### Step 4: Deploy

```bash
pnpm deploy
# or
npm run deploy
```

This will build the site and push it to the `gh-pages` branch of your repository.

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** → **"Pages"**
3. Under **"Source"**, select **"gh-pages"** branch
4. Click **"Save"**

Your site will be available at:
```
https://your-username.github.io/chemexport-website
```

---

## Option 4: Deploy to Cloudflare Pages

Cloudflare Pages offers fast global CDN and unlimited bandwidth for free.

### Step 1: Push to GitHub

Same as Vercel (see above).

### Step 2: Create Cloudflare Pages Project

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign in
2. Click **"Pages"** → **"Create a project"**
3. Connect your GitHub account and select your repository
4. Configure build settings:
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Build Output Directory**: `dist/public`
5. Click **"Save and Deploy"**

### Step 3: Wait for Deployment

Cloudflare will build and deploy your site. You'll get a URL like:
```
https://chemexport-website.pages.dev
```

### Step 4: Configure Custom Domain (Optional)

1. Go to **"Custom domains"** in Cloudflare Pages
2. Add your domain
3. Cloudflare will automatically configure DNS if your domain is on Cloudflare

---

## Option 5: Deploy to AWS S3 + CloudFront (Advanced)

This option gives you full control and is suitable for enterprise deployments.

### Step 1: Build the Site

```bash
pnpm build
```

The built site will be in `dist/public/`.

### Step 2: Create S3 Bucket

1. Go to [AWS S3 Console](https://s3.console.aws.amazon.com)
2. Click **"Create bucket"**
3. Name: `shichem-website` (or any unique name)
4. Region: Choose the closest region to your users
5. Uncheck **"Block all public access"** (we'll configure this later)
6. Click **"Create bucket"**

### Step 3: Upload Files

1. Open your bucket
2. Click **"Upload"**
3. Drag and drop all files from `dist/public/` folder
4. Click **"Upload"**

### Step 4: Enable Static Website Hosting

1. Go to **"Properties"** tab
2. Scroll to **"Static website hosting"**
3. Click **"Edit"**
4. Enable **"Static website hosting"**
5. Index document: `index.html`
6. Error document: `index.html` (for client-side routing)
7. Click **"Save changes"**

### Step 5: Configure Bucket Policy

1. Go to **"Permissions"** tab
2. Click **"Bucket Policy"**
3. Add this policy (replace `shichem-website` with your bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::shichem-website/*"
    }
  ]
}
```

4. Click **"Save"**

### Step 6: Create CloudFront Distribution (Optional but Recommended)

CloudFront provides HTTPS and global CDN.

1. Go to [CloudFront Console](https://console.aws.amazon.com/cloudfront)
2. Click **"Create Distribution"**
3. **Origin Domain**: Select your S3 bucket
4. **Viewer Protocol Policy**: Redirect HTTP to HTTPS
5. **Default Root Object**: `index.html`
6. Click **"Create Distribution"**

### Step 7: Configure Custom Error Pages

1. Go to your CloudFront distribution
2. Click **"Error Pages"** tab
3. Click **"Create Custom Error Response"**
4. **HTTP Error Code**: 403
5. **Response Page Path**: `/index.html`
6. **HTTP Response Code**: 200
7. Click **"Create"**
8. Repeat for 404 error code

Your site will be available at the CloudFront URL (e.g., `https://d1234567890.cloudfront.net`).

---

## Environment Variables

If you need to add environment variables (e.g., API keys), follow these steps for each platform:

### Vercel

1. Go to your project settings
2. Click **"Environment Variables"**
3. Add the variables required for `/api/contact`:
   - `RESEND_API_KEY`
   - `INQUIRY_TO_EMAIL`
   - `INQUIRY_CC_EMAIL`
   - `INQUIRY_FROM_EMAIL`
4. Redeploy

### Netlify

1. Go to **"Site settings"** → **"Environment variables"**
2. Add variables
3. Redeploy

### GitHub Pages

GitHub Pages doesn't support environment variables. You'll need to:
1. Create a `.env.production` file locally
2. Build locally with `pnpm build`
3. Deploy the built files

**⚠️ Warning**: Never commit `.env` files with secrets to Git. Use `.gitignore` to exclude them.

---

## Continuous Deployment

All platforms (Vercel, Netlify, Cloudflare Pages) automatically redeploy when you push to GitHub.

**Workflow:**

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update homepage content"
   git push
   ```
3. Platform automatically rebuilds and deploys (1-2 minutes)

---

## Custom Domain Setup

### Step 1: Purchase a Domain

You can purchase a domain from:
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Cloudflare Registrar](https://cloudflare.com)
- [Google Domains](https://domains.google)

### Step 2: Configure DNS

Each platform provides DNS instructions. Generally, you'll need to add:

**For Vercel/Netlify/Cloudflare:**
- **A Record**: Points to platform's IP address
- **CNAME Record**: Points `www` to your domain

**Example (Vercel):**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for DNS Propagation

DNS changes can take 1-48 hours to propagate globally. You can check status at [whatsmydns.net](https://whatsmydns.net).

---

## Troubleshooting

### Issue: 404 Errors on Refresh

**Cause**: Client-side routing (Wouter) requires all routes to serve `index.html`.

**Solution**:
- **Vercel/Netlify**: Automatically configured
- **GitHub Pages**: Already configured in deployment steps
- **S3 + CloudFront**: Configure custom error pages (see Step 7 above)

---

### Issue: Images Not Loading

**Cause**: Incorrect image paths or missing files.

**Solution**:
1. Ensure images are in `client/public/images/`
2. Use absolute paths: `/images/hero-background.png`
3. Check browser console for 404 errors

---

### Issue: Build Fails on Platform

**Cause**: Missing dependencies or incorrect build command.

**Solution**:
1. Check build logs for errors
2. Ensure `package.json` has correct scripts
3. Try building locally first: `pnpm build`

---

### Issue: Site Looks Broken After Deployment

**Cause**: CSS not loading or incorrect base path.

**Solution**:
1. Check browser console for errors
2. Ensure `vite.config.ts` has correct `base` path (for GitHub Pages)
3. Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

---

## Performance Optimization

After deployment, consider these optimizations:

1. **Enable Gzip/Brotli Compression** (usually automatic on Vercel/Netlify)
2. **Optimize Images**: Use WebP format and compress images
3. **Enable HTTP/2**: Automatic on most platforms
4. **Add Cache Headers**: Configure in platform settings
5. **Use CDN**: CloudFront, Cloudflare, or platform's built-in CDN

---

## Monitoring and Analytics

### Add Google Analytics

1. Get your Google Analytics tracking ID
2. Add to `client/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Add Vercel Analytics

If using Vercel:
1. Go to your project settings
2. Click **"Analytics"**
3. Enable analytics (free for Hobby plan)

---

## Rollback and Version Control

### Rollback on Vercel

1. Go to **"Deployments"** in your project
2. Find the previous deployment
3. Click **"..."** → **"Promote to Production"**

### Rollback on Netlify

1. Go to **"Deploys"**
2. Find the previous deployment
3. Click **"Publish deploy"**

### Rollback with Git

```bash
# Revert to previous commit
git revert HEAD
git push

# Or reset to specific commit (destructive)
git reset --hard <commit-hash>
git push --force
```

---

## Summary

| Platform | Setup Time | Cost | Best For |
|----------|------------|------|----------|
| Vercel | 5 minutes | Free | Fastest, easiest |
| Netlify | 5 minutes | Free | Easy rollbacks |
| GitHub Pages | 10 minutes | Free | Simple hosting |
| Cloudflare Pages | 5 minutes | Free | Fast CDN |
| AWS S3 + CloudFront | 30 minutes | ~$1-5/month | Enterprise |

**Recommendation**: Start with **Vercel** for the easiest deployment. Upgrade to AWS if you need more control.

---

**Last Updated**: January 24, 2026

# RJ Colarina - Portfolio

An animated portfolio built with Astro and TypeScript, deployed to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, usually http://localhost:4321/.

## Customize

Edit `src/pages/index.astro` to update your bio, projects, skills, experience, email, and social links. Replace the placeholder project and experience content before sharing the site.

## Automatic deployment with Vercel

This project is configured as a static Astro site. Vercel detects Astro automatically,
runs `npm run build`, and publishes the generated `dist` directory.

To connect it:

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. Select **Add New... -> Project**.
3. Import the `Qoqqa/portfolio` repository.
4. Confirm these settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Select **Deploy**.

After the first deployment, every push to `main` automatically creates a new
production deployment. Pull requests receive preview deployments.

The live URL is shown in the Vercel project dashboard. To use a custom domain,
open **Project -> Settings -> Domains** in Vercel. Add your domain there, then
copy the DNS records Vercel provides into your domain registrar's DNS settings.

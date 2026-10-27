# RJ Colarina - Portfolio

An animated portfolio built with Astro and TypeScript, deployed to Netlify.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, usually http://localhost:4321/.

## Customize

Edit `src/pages/index.astro` to update your bio, projects, skills, experience, email, and social links. Replace the placeholder project and experience content before sharing the site.

## Automatic deployment with Netlify

This project is configured as a static Astro site. The [netlify.toml](./netlify.toml)
file tells Netlify to run `npm run build` and publish the generated `dist` directory
using Node.js 22.

To connect it:

1. Sign in at [netlify.com](https://www.netlify.com/) with GitHub.
2. Select **Add new site -> Import an existing project**.
3. Choose **GitHub** and authorize Netlify to access the `Qoqqa/portfolio` repository.
4. Select the `Qoqqa/portfolio` repository.
5. Confirm these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Select **Deploy site**.

After the first deployment, every push to `main` automatically creates a new
production deployment. Pull requests can receive preview deployments.

The live URL is shown in the Netlify site dashboard. To use a custom domain,
open **Domain management** in Netlify site settings.

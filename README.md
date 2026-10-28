# Aojie Xu academic homepage

This is the bilingual academic homepage of Aojie Xu, rebuilt from [PRISM](https://github.com/xyjoey/PRISM) (MIT license). The original template's example identity and content have been replaced with the site's research, publication, projects, awards and CV.

## Edit content

- `content/` contains the English site configuration, biography, BibTeX publication list, projects, awards and CV.
- `content_zh/` contains Chinese versions. The BibTeX entry is shared from `content/publications.bib`.
- `public/profile.png` is the profile photo.

Keep unpublished manuscripts out of `publications.bib`. The `manuscripts` section in each locale's `publications.toml` lists work under revision or being prepared for submission, with its status stated. `service.toml` contains academic service and community engagement.

The bilingual content was updated on 28 October 2026 from `简历内容_详细版（放网页）.docx`, including three published articles, three manuscripts in progress, seven research projects, honours, service and the detailed CV.

## Run

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
npm run build
```

The static site is exported to `out/`. The existing Sites project ID is retained in `.openai/hosting.json`.

## GitHub Pages

The homepage is published at https://aj-x-d.github.io/ from the `AJ-x-D/AJ-x-D.github.io` repository.
Every push to `main` builds the static website with Node.js 22 and deploys it through `.github/workflows/pages.yml`.
To update the homepage, edit the content or components, commit the changes, and push `main`.
The repository's Settings → Pages → Source must be set to **GitHub Actions**.

## Private visitor statistics

Cloudflare Web Analytics uses the provider's standard deferred module script in
production, when `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` is configured. Development builds
and builds without a token do not load analytics. The beacon supports client-side
page navigation and adds no visible counter, map, badge or dashboard link.

To activate statistics:

1. Sign in to your own [Cloudflare dashboard](https://dash.cloudflare.com/) and open
   **Web Analytics**. Add `aj-x-d.github.io` as a site using manual JavaScript installation.
2. Copy the site token from **Manage site**. This is the public beacon token, not an
   account API token or dashboard credential.
3. In this GitHub repository, go to **Settings → Secrets and variables → Actions → Variables**
   and set `CLOUDFLARE_WEB_ANALYTICS_TOKEN` to that token.
4. Run **Deploy homepage to GitHub Pages**, or push a change to `main`.

View page views, visits, countries, referrers and popular pages in your signed-in
Cloudflare Web Analytics dashboard. No public dashboard is linked from the website.
Cloudflare Web Analytics does not use analytics cookies. Browser developer tools
can still reveal the script and its network requests; this is not undetectable tracking.
Collection begins only after activation; earlier visits cannot be reconstructed.

For a local production build, set `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` in
`.env.local` before running `npm run build`. Leave it unset for ordinary previews
to avoid adding preview visits to the statistics.

## Attribution

The website is adapted from PRISM by xyjoey under the MIT license. See `LICENSE` for the upstream license text.

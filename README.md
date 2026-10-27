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

## Attribution

The website is adapted from PRISM by xyjoey under the MIT license. See `LICENSE` for the upstream license text.

# SoftKore Digital: Focused SEO & Security Cleanup

Status: **built and validated locally. Ready to merge/commit, push to GitHub, and deploy to production.**
Historical URL record: [seo-page-plan.csv](seo-page-plan.csv) (all 793 legacy sitemap URLs).

## Diagnosis & Goal

Search Console showed 81 of 793 pages indexed and 711 as "Crawled - currently not indexed" on the live `main` site because the production site still served hundreds of programmatic location and industry doorway templates, while the prior cleanup branch (`seo/national-cleanup`) had not been merged or deployed and still contained 22 off-focus `/ai-agents/*` and `/industries/*` pages plus non-core service pages.

The site now focuses exclusively on SoftKore Digital's three core pillars across South Africa with **13 high-authority pages**:
1. **Website Design & Development** (`/services/web-development/`)
2. **SEO Services** (`/services/seo-services/`)
3. **Website Security & Cyber Security** (`/services/website-security/`)

## Kept Pages (13)

| Type | Count | Routes |
|---|---:|---|
| Core & company pages | 5 | `/`, `/about/`, `/contact/`, `/work/`, `/services/` |
| Core service pages | 3 | `/services/web-development/`, `/services/seo-services/`, `/services/website-security/` |
| Guides index & guides | 5 | `/guides/`, `/guides/website-prices-south-africa/`, `/guides/technical-seo-checklist/`, `/guides/why-your-website-is-not-ranking/`, `/guides/website-security-checklist/` |

## Retired Pages & Single-Hop 301 Redirects

All legacy location pages, industry pages, AI agent pages, and retired service/guide URLs (876 source paths in `deploy/page-plan.json`, expanding to 2,000+ Nginx rules including slash/no-slash/index.html variants) 301-redirect in a single hop to the closest kept page:

- **Website maintenance & cybersecurity industry URLs:** `/services/website-security/` and `/guides/website-security-checklist/`.
- **SEO & marketing URLs:** `/services/seo-services/`.
- **Web development, custom web apps, bookings, industries & AI agents URLs:** `/services/web-development/`.

## How it works

- `deploy/page-plan.json` is the single source of truth for kept pages and redirects.
- `npm run predeploy` generates `deploy/redirects-softkore-nginx.conf` and `deploy/redirects-softkore.json`, validates all redirects (no chains, no self-redirects, all targets in `keep`), builds the Next.js static export (`out/`), and validates that `sitemap.xml` and every internal link match the 13 kept routes.
- Removed from the codebase: `src/app/ai-agents/`, `src/app/industries/`, `src/data/ai-agents.ts`, `src/data/industries.ts`, `src/components/AiAgentTemplate.tsx`, `src/components/IndustryTemplate.tsx`, and non-core service/guide entries.

## Release steps

1. Merge/commit changes to `main` and push to GitHub (`origin/main`).
2. On the Hetzner server (`ssh softkoredigital` -> `/var/www/softkoredigital`):
   - `git pull origin main`
   - `npm install`
   - `npm run clean:next`
   - `npm run predeploy`
   - `sudo cp deploy/redirects-softkore-nginx.conf /etc/nginx/snippets/softkore-redirects.conf`
   - `sudo nginx -t && sudo systemctl reload nginx`
3. Verify live URLs (redirects, `sitemap.xml`, and all 13 kept pages).
4. Submit `https://www.softkoredigital.co.za/sitemap.xml` in Google Search Console, run `npm run submit:indexnow`, and request indexing on the 13 kept pages.

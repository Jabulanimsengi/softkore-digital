# SoftKore Digital: National SEO Cleanup

Status: **built and validated locally. Not committed or deployed.**
Page-by-page record: [seo-page-plan.csv](seo-page-plan.csv) (all 793 old sitemap URLs).

## Goal

Search Console showed 81 of 793 pages indexed and 711 as "Crawled - currently not indexed". The site now targets the whole of South Africa with 39 strong pages instead of 793 mostly generated ones.

## The result

| Action | Pages | Notes |
|---|---:|---|
| Rewritten with new national content | 18 | Homepage, company pages, indexes, 6 service pages and 5 guides |
| Updated | 10 | Rebuilt industry pages: national H1, full content shown, location links removed |
| Kept unchanged, needs confirmation | 11 | AI agents section |
| Redirected (301) | 754 | Includes all location pages and generated industry pages |

Redirects go to the closest kept page:

- **Location pages:** the matching national service page.
- **Industry + service pages:** the parent industry if kept, otherwise the matching service page.
- **Other industries:** the closest kept industry, otherwise `/industries/`.
- **Old guides:** the current guide covering the same topic.

## How it now works

- `deploy/page-plan.json` is the single source of truth for kept pages and redirects.
- `npm run predeploy` generates the nginx rules from it, validates them, builds the site and checks the export.
- The checks fail if a redirect does not end on a kept page, the sitemap and the plan disagree, or a kept page links to anything outside the plan.
- Removed: the legacy static HTML, its generators and the location routes.

To add a page later, build it, add it to `keep` in the plan, and include it in `src/app/sitemap.ts`.

## Needed from you

1. **Prices:** real price ranges for the website prices guide. It explains cost drivers only, because no real prices were available.
2. **Proof:** named case studies and real testimonials, with client permission. The anonymous testimonials are hidden and the case studies are now described as project types. Add real testimonials in `src/components/Testimonials.tsx`.
3. **About:** who runs the business, plus any registered company details.
4. **AI agents:** confirm you sell this. If not, redirect the 11 pages to `/services/custom-web-applications/`.
5. **Address:** confirm 111 Commissioner Street is a real public address. It remains in the contact map only, and is not in the schema or page text.
6. **GA4:** provide the measurement ID for `NEXT_PUBLIC_GA4_ID`. Tracking remains off until then.
7. **Content review:** check that claims are accurate, especially remote work in all nine provinces, the services offered and the WhatsApp number shown as a phone number.

## Release (each step separately authorised)

1. Review the changes and commit them.
2. Push to GitHub.
3. On the server: pull, run `npm install`, `npm run clean:next` and `npm run predeploy`, copy the redirect snippet, test nginx and reload it.
4. Audit live: all 793 old URLs, the new sitemap, and the body of every kept page.
5. Submit the new sitemap in Search Console and request indexing for the main pages.
6. Use "Validate Fix" on the not-indexed reasons.

Rollback: revert the commit on the server, run `npm run clean:next` and `npm run predeploy`, copy the redirect snippet and reload nginx.

## After release

- Set up a Google Business Profile if the address qualifies.
- List on Clutch, DesignRush and Bizcommunity.
- Earn links from client sites and suppliers.
- Check the Pages report monthly. Do not generate new location or industry pages until the kept pages are indexed and earning impressions.

## What this does not promise

- Google does not say why a page is excluded. The quality explanation is an inference.
- Recovery usually takes months, and national terms are highly competitive. Authority and proof still have to be built.
- The 24 clicks earned by redirected pages over six months may not all transfer.
- The list of 81 indexed pages was not checked before this cleanup. Any redirected page can be restored from git.
- Backlinks and Core Web Vitals have not been measured.

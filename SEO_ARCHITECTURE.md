# SoftKore Digital SEO Architecture & Keyword Strategy

## 1. Strategic Diagnosis

SoftKore Digital currently presents all services on one homepage. That is good for brand clarity, but weak for organic growth because one page cannot deeply satisfy separate search intents such as:

- "web development agency South Africa"
- "SEO services Johannesburg"
- "custom web app developers Pretoria"
- "website maintenance packages"
- "salon booking platform developers"

The site should move from a single landing page into a multi-page service, location, industry, and resource architecture. The goal is not to create many keyword pages. The goal is to create a crawlable, useful hierarchy where every page answers a distinct buyer problem.

## 2. Recommended Site Architecture

Use a strict nested URL model. Avoid flat location URLs like `/web-design-johannesburg`.

### Core Service Hubs

These target national service intent and become the main authority pages.

- `/services/web-development`
- `/services/custom-web-applications`
- `/services/seo-services`
- `/services/website-maintenance`

### Service + Province Hubs

These target broader regional intent.

- `/services/web-development/gauteng`
- `/services/web-development/western-cape`
- `/services/web-development/kwazulu-natal`
- `/services/seo-services/gauteng`
- `/services/seo-services/western-cape`
- `/services/custom-web-applications/gauteng`

### Service + City Pages

These target high-intent local searches. Build slowly and only where the content can be genuinely unique.

- `/services/web-development/gauteng/johannesburg`
- `/services/web-development/gauteng/pretoria`
- `/services/web-development/gauteng/sandton`
- `/services/seo-services/western-cape/cape-town`
- `/services/seo-services/gauteng/sandton`
- `/services/custom-web-applications/kwazulu-natal/durban`

### Industry Solution Pages

These target niche transactional searches and should feel like tailored solution pages, not generic service rewrites.

- `/industries/salon-booking-software`
- `/industries/medical-practice-websites`
- `/industries/ecommerce-development`
- `/industries/real-estate-websites`
- `/industries/legal-firm-seo-services`

### Commercial Investigation Pages

These capture comparison and pricing-stage buyers.

- `/pricing`
- `/guides/web-development-pricing-south-africa`
- `/guides/custom-web-app-vs-template-website`
- `/guides/nextjs-vs-wordpress-business-websites`
- `/guides/website-maintenance-packages`

### Informational Hub

These attract top-of-funnel traffic and internally link readers toward services.

- `/blog/technical-seo-checklist`
- `/blog/why-is-my-website-not-ranking`
- `/blog/how-to-improve-core-web-vitals`
- `/blog/website-vs-web-application`
- `/blog/google-search-console-seo-monitoring`

## 3. Search Intent Mapping

### Transactional

Target users who are ready to hire.

Primary pages:

- Core service hubs
- Pricing page
- Contact page

Keywords:

- web development agency South Africa
- custom web application development South Africa
- SEO company South Africa
- B2B SEO services
- website maintenance packages
- custom software development services

### Geo-Targeted Transactional

Target users looking for a nearby or regionally relevant provider.

Primary pages:

- Province hubs
- City pages

Keywords:

- web design company Johannesburg
- SEO agency Cape Town
- custom web app developers Pretoria
- local SEO services Sandton
- software development company Gauteng
- ecommerce website designers Durban

### Commercial Investigation

Target users comparing price, technology, vendors, or approaches.

Primary pages:

- Pricing page
- Guides
- Comparison pages

Keywords:

- web development pricing South Africa
- cost of building a web application in 2026
- custom web app vs template website
- Next.js vs WordPress for business websites
- what is included in website maintenance

### Industry-Specific Transactional

Target buyers who want a provider that understands their business model.

Primary pages:

- Industry solution pages

Keywords:

- salon booking platform developers
- medical practice website design
- real estate agency website design
- legal firm SEO services
- ecommerce development South Africa

### Informational

Target users who are problem-aware but not yet vendor-aware.

Primary pages:

- Blog posts
- Guides

Keywords:

- why is my website not ranking on Google
- how to improve Core Web Vitals
- what is technical SEO
- how to track SEO in Google Search Console
- difference between a website and web application

## 4. Page Template Requirements

### Core Service Page Template

Each core service page should include:

- H1 focused on the service and market.
- Clear service positioning.
- Problems the service solves.
- Deliverables and process.
- Technology or implementation approach.
- Proof or capability examples.
- FAQ section for real buying objections.
- Internal links to relevant province, city, industry, and guide pages.
- CTA above the fold and near the bottom.

Recommended minimum depth: 900-1,500 words, but only if the content is useful. Do not pad.

### Province Page Template

Each province page should include:

- Province-specific H1.
- Explanation of business needs in that province.
- Links to relevant city pages.
- Service benefits for regional businesses.
- Local trust signals where available.
- Differentiated copy, not copied city text.
- CTA for province-based enquiries.

### City Page Template

City pages are the highest doorway-page risk. Only create them when they can include useful local differentiation.

Each city page should include:

- City-specific business context.
- Specific service angle for that city.
- Local industries or buyer types.
- Nearby areas served.
- Original examples, screenshots, or use cases where possible.
- Unique FAQ questions for that city.
- Clear path back to the parent province and service hub.

Avoid city pages where only the city name changes.

### Industry Page Template

Each industry page should include:

- Industry-specific pain points.
- Features required by that industry.
- Relevant workflows.
- Conversion and SEO considerations for that industry.
- Example platform structure.
- CTA tied to that business type.

## 5. Internal Linking Model

The link flow should work like this:

Homepage -> Core Services -> Province Pages -> City Pages

Blog Posts -> Relevant Core Service -> Relevant Location or Industry Page

Industry Pages -> Core Service Pages -> Contact

Pricing/Guides -> Service Pages -> Contact

The homepage should include an "Areas We Serve" block linking to the first priority regional hubs:

- Gauteng web development
- Johannesburg web development
- Pretoria web development
- Sandton SEO services
- Cape Town SEO services
- Durban custom web applications

## 6. Schema Strategy

Use structured data carefully. Schema should describe real page content, not claim unsupported details.

Recommended schema:

- Homepage: `Organization` or `LocalBusiness` if a real address/service-area profile is available.
- Core service pages: `Service`, `Organization`, `BreadcrumbList`.
- Location pages: `Service`, `BreadcrumbList`, and `LocalBusiness` only if the business has legitimate local business details to mark up.
- Blog/guides: `Article`, `BreadcrumbList`.
- FAQ markup: use conservatively. Google currently limits FAQ rich-result eligibility mostly to authoritative government or health sites, so FAQ content can still help users, but should not be treated as a guaranteed rich-result tactic.

## 7. Build Roadmap

### Phase 1: Technical Foundation

- Move from static single-page HTML to a scalable routing setup.
- Recommended: Next.js App Router with static generation for SEO pages.
- Add shared layout, header, footer, and reusable section components.
- Add metadata generation per page.
- Add sitemap.xml and robots.txt.
- Add canonical URLs.
- Add Open Graph metadata.
- Add JSON-LD helpers for schema.

### Phase 2: Core Service Expansion

Build the first four high-quality service pages:

- Web Development
- Custom Web Applications
- SEO Services
- Website Maintenance

These should be strong enough to rank nationally and act as parent pages.

### Phase 3: Local SEO Rollout

Start with one service and one province before scaling:

1. `/services/web-development/gauteng`
2. `/services/web-development/gauteng/johannesburg`
3. `/services/web-development/gauteng/pretoria`
4. `/services/web-development/gauteng/sandton`

Only after those are strong, roll out SEO services and custom web application pages.

### Phase 4: Industry Pages

Prioritize pages that match SoftKore's strongest proof and likely revenue:

1. Salon booking software
2. Ecommerce development
3. Medical practice websites
4. Real estate websites
5. Legal firm SEO services

### Phase 5: Content Engine

Publish guides that support service pages, not random blog posts.

First articles:

- Technical SEO checklist for South African businesses
- Why your website is not ranking on Google
- Website vs web application: which does your business need?
- How much does a custom web app cost in South Africa?
- What is included in monthly website maintenance?

## 8. First Build Priorities

The best next implementation step is:

1. Convert the site into a multi-page framework.
2. Preserve the current homepage design as the brand entry page.
3. Add `/services/web-development`, `/services/seo-services`, and `/services/custom-web-applications`.
4. Add an "Areas We Serve" block to the homepage.
5. Add sitemap, robots, canonical metadata, and Organization schema.

This gives SoftKore Digital a scalable SEO foundation without rushing into thin local pages.

## 9. Quality Rules

- Do not mass-generate location pages.
- Do not create city pages that only swap place names.
- Do not target every city at once.
- Every page must have a reason to exist for users, not just search engines.
- Every location page must be reachable through normal navigation or internal links.
- Every page should have a clear parent and child relationship.
- Every page should point users toward the next logical action.


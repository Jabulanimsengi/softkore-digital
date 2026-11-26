/**
 * Central site image registry.
 *
 * IMPORTANT (`npm run audit:images`):
 * - Every /images/site/... path literal must appear ONLY ONCE across all src/ files
 *   (including comments — never write quoted image paths inside comments).
 * - Define each asset once as a top-level `const` here, then reuse it by variable/spread
 *   across pageHeroImages, guideImages, homeIndustryCards, and Open Graph metadata.
 * - `homeIndustryCards` drives the 6 homepage sector cards, each linking directly to its
 *   corresponding published Industry Playbook in src/data/guide-batches/industries.ts.
 */
import type { GuideCategory } from "@/data/guides";

export type SiteImage = {
  src: string;
  alt: string;
};

export type PageHeroImageEntry = SiteImage & {
  badge?: string;
  caption?: string;
};

const localGautengImage: SiteImage = {
  src: "/images/site/local-gauteng.webp",
  alt: "South African specialists investigating website performance and regional search data overlooking Johannesburg.",
};

const aboutStudioImage: SiteImage = {
  src: "/images/site/about-studio.webp",
  alt: "Four smiling SoftKore Digital team members collaborating over laptops in a bright South African studio.",
};

const overviewWorkImage: SiteImage = {
  src: "/images/site/overview-work.webp",
  alt: "Two South African creative technologists reviewing responsive website layouts and performance charts on a studio display.",
};

const overviewIndustriesImage: SiteImage = {
  src: "/images/site/overview-industries.webp",
  alt: "Four South African digital specialists reviewing a website, SEO and security project plan around a bright studio table.",
};

const overviewAiImage: SiteImage = {
  src: "/images/site/overview-ai.webp",
  alt: "Technical SEO specialists inspecting a site crawl and indexing workflow diagram on a laptop.",
};

const guidePricingImage: SiteImage = {
  src: "/images/site/guide-pricing.webp",
  alt: "A South African business owner comparing a website project plan and budget at his desk.",
};

const guideTechnicalSeoImage: SiteImage = {
  src: "/images/site/guide-technical-seo.webp",
  alt: "A South African search specialist reviewing technical site structure and performance metrics on a wide display.",
};

const guideMaintenanceImage: SiteImage = {
  src: "/images/site/guide-maintenance.webp",
  alt: "A specialist completing website maintenance, security and uptime checks across laptop and tablet screens.",
};

const guideNotRankingImage: SiteImage = {
  src: "/images/site/guide-not-ranking.webp",
  alt: "A consultant and business owner diagnosing Google search visibility trends together on a studio screen.",
};

const guideWebVsAppImage: SiteImage = {
  src: "/images/site/guide-web-vs-app.webp",
  alt: "A strategist comparing website layout wireframes and traffic metrics while planning a clean rebuild.",
};

const industryAccountingImage: SiteImage = {
  src: "/images/site/industry-accounting.webp",
  alt: "A South African business owner and SEO specialist comparing search growth charts and budgets on a laptop.",
};

const industryLegalImage: SiteImage = {
  src: "/images/site/industry-legal.webp",
  alt: "South African professionals reviewing website privacy notices, domain governance and compliance documentation.",
};

const industryEcommerceImage: SiteImage = {
  src: "/images/site/industry-ecommerce.webp",
  alt: "A South African online store owner reviewing ecommerce orders and website checkout metrics on a laptop.",
};

const industryDentalImage: SiteImage = {
  src: "/images/site/industry-dental.webp",
  alt: "South African clinic team checking local patient enquiries and Google Business Profile details on a tablet.",
};

const industryLogisticsImage: SiteImage = {
  src: "/images/site/industry-logistics.webp",
  alt: "South African logistics managers checking dispatch systems and operations schedules on a tablet beside delivery vans.",
};

const industryRealEstateImage: SiteImage = {
  src: "/images/site/industry-real-estate.webp",
  alt: "A South African property advisor showing buyers clean local listing search results on a tablet.",
};

const industrySalonImage: SiteImage = {
  src: "/images/site/industry-salon.webp",
  alt: "South African salon owners managing client bookings and service menus at a bright studio reception desk.",
};

const industryMedicalImage: SiteImage = {
  src: "/images/site/industry-medical.webp",
  alt: "Medical practitioner and clinic manager reviewing a responsive appointment workflow on a tablet.",
};

const industryConstructionImage: SiteImage = {
  src: "/images/site/industry-construction.webp",
  alt: "South African construction engineers reviewing site plans and project documentation on a tablet.",
};

const industryPlumberImage: SiteImage = {
  src: "/images/site/industry-plumber.webp",
  alt: "South African tradespeople checking incoming mobile job requests beside a service van.",
};

const homeServiceWeb: SiteImage = {
  src: "/images/site/home-service-web.webp",
  alt: "Minimalist studio desk with a laptop and smartphone displaying a clean white-and-emerald business website layout.",
};

const homeServiceSeo: SiteImage = {
  src: "/images/site/home-service-seo.webp",
  alt: "Bright studio desk with a laptop showing an upward organic search growth curve beside a notebook and ceramic cup.",
};

const homeServiceSecurity: SiteImage = {
  src: "/images/site/home-service-security.webp",
  alt: "Clean daylight office workspace with a laptop displaying a green security shield status graphic and server health checks.",
};

const processDiscover: SiteImage = {
  src: "/images/site/process-discover.webp",
  alt: "A smiling South African digital strategist on a sunlit discovery video consultation taking structured project notes.",
};

const processPlan: SiteImage = {
  src: "/images/site/process-plan.webp",
  alt: "Overhead studio view of website wireframe sketches, Midnight Navy and Cyber Emerald swatches, and a tablet on an oak desk.",
};

const processBuild: SiteImage = {
  src: "/images/site/process-build.webp",
  alt: "A South African web developer testing a responsive business website simultaneously on a laptop and smartphone in a sunlit studio.",
};

const serviceCardWeb: SiteImage = {
  src: "/images/site/service-card-web.webp",
  alt: "Architectural desk composition showing a sleek responsive website across an ultrathin laptop and phone beside travertine stone.",
};

const serviceCardSeo: SiteImage = {
  src: "/images/site/service-card-seo.webp",
  alt: "A South African SEO strategist pointing at upward organic search visibility charts on a laptop in a bright boardroom.",
};

const serviceCardSecurity: SiteImage = {
  src: "/images/site/service-card-security.webp",
  alt: "A South African cybersecurity engineer in a modern studio reviewing firewall, network shield and SSL audit status.",
};

const detailWebShowcase: SiteImage = {
  src: "/images/site/detail-web-showcase.webp",
  alt: "A South African designer and business owner comparing clean mobile website prototypes on smartphones at an oak studio table.",
};

const detailWebSa: SiteImage = {
  src: "/images/site/detail-web-sa.webp",
  alt: "A South African small business founder smiling while replying to a customer WhatsApp enquiry in a sunlit studio shop.",
};

const detailSecurityShowcase: SiteImage = {
  src: "/images/site/detail-security-showcase.webp",
  alt: "A South African security engineer inspecting server hardening diagnostics and security controls in a bright modern office.",
};

const detailSecuritySa: SiteImage = {
  src: "/images/site/detail-security-sa.webp",
  alt: "Two South African specialists reviewing printed website checklists and a laptop dashboard in a bright meeting room.",
};

// Homepage "A South African studio" band (replace with a dedicated image when one is generated).
export const homeTeamImage: SiteImage = {
  ...aboutStudioImage,
  alt: "South African professionals smiling together around laptops in a bright, modern office.",
};

// Page heroes: each image is used only as its own page's hero (never reused as a card).
export const homeHeroImage: SiteImage = {
  src: "/images/site/hero-home.webp",
  alt: "A smiling South African café owner checking a new online order on her phone while customers pay by tap at her bakery counter.",
};

const heroServicesImage: SiteImage = {
  src: "/images/site/hero-services.webp",
  alt: "Three South African professionals laughing and high-fiving at a standing desk with Table Mountain visible through the window.",
};

const heroWebDevelopmentImage: SiteImage = {
  src: "/images/site/hero-web-development.webp",
  alt: "A South African furniture store owner holding up his new mobile website on a smartphone beside his smiling web designer.",
};

const heroSeoServicesImage: SiteImage = {
  src: "/images/site/hero-seo-services.webp",
  alt: "A South African plumber grinning on a customer call beside his service van on a jacaranda-lined street.",
};

const heroWebsiteSecurityImage: SiteImage = {
  src: "/images/site/hero-website-security.webp",
  alt: "A relaxed South African security engineer and a relieved business owner beside a monitor showing a green shield status.",
};

const heroWorkImage: SiteImage = {
  src: "/images/site/hero-work.webp",
  alt: "Two South African team members cheering a website launch while their client applauds on a video call.",
};

const heroAboutImage: SiteImage = {
  src: "/images/site/hero-about.webp",
  alt: "A diverse group of young South African professionals laughing together on a Johannesburg rooftop at golden hour.",
};

const heroContactImage: SiteImage = {
  src: "/images/site/hero-contact.webp",
  alt: "A friendly South African consultant smiling and waving on a video call from a bright café workspace.",
};

const heroGuidesImage: SiteImage = {
  src: "/images/site/hero-guides.webp",
  alt: "A South African business owner in an emerald head wrap smiling as she reads a guide on her tablet and takes notes.",
};

export const pageHeroImages: Record<
  | "services"
  | "web-development"
  | "seo-services"
  | "website-security"
  | "work"
  | "about"
  | "contact"
  | "guides",
  PageHeroImageEntry
> = {
  services: {
    ...heroServicesImage,
    badge: "All nine provinces",
    caption: "Website builds, technical SEO and cyber security delivered together.",
  },
  "web-development": {
    ...heroWebDevelopmentImage,
    badge: "Mobile-first builds",
    caption: "Fast business websites structured around clear customer enquiries.",
  },
  "seo-services": {
    ...heroSeoServicesImage,
    badge: "Search visibility",
    caption: "Technical audits, Google indexing fixes and honest Search Console reporting.",
  },
  "website-security": {
    ...heroWebsiteSecurityImage,
    badge: "Hardened & monitored",
    caption: "Security audits, WAF protection, hack recovery and verified off-site backups.",
  },
  work: {
    ...heroWorkImage,
    badge: "How we deliver",
    caption: "Clear scope, real-screen reviews and launch checks on every project.",
  },
  about: {
    ...heroAboutImage,
    badge: "South African studio",
    caption: "Plain-language engineering focused on build quality, SEO and security.",
  },
  contact: {
    ...heroContactImage,
    badge: "Start a conversation",
    caption: "Direct replies by email, phone or WhatsApp across all nine provinces.",
  },
  guides: {
    ...heroGuidesImage,
    badge: "Practical SA guides",
    caption: "Plain-language playbooks on pricing in rand, industry SEO, Google indexing and website security.",
  },
};

export const guideImages: Record<string, SiteImage> = {
  "website-prices-south-africa": guidePricingImage,
  "technical-seo-checklist": guideTechnicalSeoImage,
  "website-security-checklist": guideMaintenanceImage,
  "why-your-website-is-not-ranking": guideNotRankingImage,
  "hacked-website-recovery-south-africa": {
    ...localGautengImage,
    alt: "South African specialists investigating a website security incident on a laptop overlooking Johannesburg.",
  },
  "fix-crawled-currently-not-indexed": overviewAiImage,
  "seo-prices-south-africa": industryAccountingImage,
  "popia-website-compliance-checklist": {
    ...industryLegalImage,
    alt: "South African professionals reviewing website privacy notices and POPIA compliance documentation.",
  },
  "website-redesign-seo-checklist": guideWebVsAppImage,
  "ecommerce-website-cost-south-africa": industryEcommerceImage,
  "how-to-choose-web-design-company-south-africa": {
    ...overviewIndustriesImage,
    alt: "A South African business team reviewing website architecture plans around a studio table.",
  },
  "google-business-profile-south-africa": industryDentalImage,
  "medical-practice-website-seo-south-africa": {
    ...industryMedicalImage,
    alt: "South African medical practitioners planning patient booking pages and POPIA-safe clinic enquiry forms.",
  },
  "construction-company-website-seo-south-africa": {
    ...industryConstructionImage,
    alt: "South African civil and construction directors reviewing CIDB tender proof and project portfolio pages.",
  },
  "logistics-company-website-seo-south-africa": {
    ...industryLogisticsImage,
    alt: "South African freight and fleet managers reviewing corridor SEO pages and online quote workflows.",
  },
  "real-estate-website-seo-south-africa": {
    ...industryRealEstateImage,
    alt: "A South African property practitioner showcasing clean suburb landing pages and fast listings on a tablet.",
  },
  "trades-plumber-solar-website-seo-south-africa": {
    ...industryPlumberImage,
    alt: "South African field-service contractors checking urgent mobile call and WhatsApp enquiries from Google Maps.",
  },
  "salon-aesthetics-booking-website-seo-south-africa": {
    ...industrySalonImage,
    alt: "South African salon and aesthetics owners reviewing treatment menus, online bookings and local search visibility.",
  },
  "law-firm-website-seo-south-africa": {
    ...industryLegalImage,
    alt: "South African attorneys reviewing practice-area SEO structure and domain email spoofing safeguards.",
  },
  "accounting-firm-website-seo-south-africa": {
    ...industryAccountingImage,
    alt: "South African accounting partners planning tax and compliance search pages with secure client intake.",
  },
  "ecommerce-store-seo-conversion-south-africa": {
    ...industryEcommerceImage,
    alt: "A South African ecommerce founder reviewing category SEO, PayFast checkout UX and store security.",
  },
  "dental-practice-website-seo-south-africa": {
    ...industryDentalImage,
    alt: "South African dental practice team reviewing treatment pages and local Google Business Profile bookings.",
  },
};

const extraGuideHeroImages: Record<string, SiteImage> = {
  "payfast-vs-yoco-vs-ozow-south-africa": {
    ...detailWebSa,
    alt: "A South African shop founder handling mobile payments and WhatsApp customer orders at her counter.",
  },
  "wordpress-vs-custom-website-south-africa": {
    ...processBuild,
    alt: "A South African developer testing clean custom code and mobile speed on a laptop and phone.",
  },
  "how-long-to-build-a-website-south-africa": {
    ...overviewWorkImage,
    alt: "Two South African strategists reviewing website design stages and launch milestones together.",
  },
  "website-maintenance-cost-south-africa": {
    ...guideMaintenanceImage,
    alt: "A technical specialist walking through monthly website maintenance, backups and update checks.",
  },
  "co-za-vs-com-domain-south-africa": {
    ...aboutStudioImage,
    alt: "A South African studio team planning domain strategy and national website branding together.",
  },
  "mobile-first-website-design-south-africa": {
    ...detailWebShowcase,
    alt: "Two South African women testing responsive mobile website layouts side by side on smartphones.",
  },
  "what-makes-a-service-page-convert": {
    ...industrySalonImage,
    alt: "South African business owners checking incoming client bookings generated from their service pages.",
  },
  "website-hosting-guide-south-africa": {
    ...detailSecurityShowcase,
    alt: "A South African engineer auditing server performance, hosting uptime and response latency.",
  },
  "fix-discovered-currently-not-indexed": {
    ...overviewAiImage,
    alt: "SEO specialists mapping crawl links and resolving indexing queues on a laptop.",
  },
  "google-ads-vs-seo-south-africa": {
    ...industryAccountingImage,
    alt: "A South African business owner and advisor comparing paid campaigns against long-term SEO ROI.",
  },
  "local-seo-vs-national-seo-south-africa": {
    ...localGautengImage,
    alt: "South African SEO specialists planning regional and national Google search visibility overlooking Johannesburg.",
  },
  "why-duplicate-location-pages-hurt-seo": {
    ...industryRealEstateImage,
    alt: "A South African property advisor reviewing clean regional suburb pages on a tablet.",
  },
  "how-long-does-seo-take-south-africa": {
    ...serviceCardSeo,
    alt: "A South African SEO strategist walking through steady multi-month organic search growth charts.",
  },
  "core-web-vitals-guide-south-africa": {
    ...guideTechnicalSeoImage,
    alt: "A South African web engineer inspecting page speed diagnostics and Core Web Vitals telemetry.",
  },
  "internal-linking-guide-for-business-websites": {
    ...guideWebVsAppImage,
    alt: "A strategist sketching connected website page hierarchies and internal link paths on studio boards.",
  },
  "google-search-console-guide-business-owners": {
    ...guideNotRankingImage,
    alt: "Two South African specialists interpreting Google Search Console clicks and indexing reports together.",
  },
  "seo-copywriting-guide-south-africa": {
    ...processDiscover,
    alt: "A South African digital strategist taking notes during a client interview to write clear SEO copy.",
  },
  "spf-dkim-dmarc-guide-south-africa": {
    ...detailSecurityShowcase,
    alt: "A South African engineer verifying domain email authentication records and security diagnostics.",
  },
  "remove-google-deceptive-site-ahead-warning": {
    ...serviceCardSecurity,
    alt: "A South African cybersecurity engineer clearing malware warnings and verifying clean site status.",
  },
  "why-wordpress-websites-get-hacked-south-africa": {
    ...guideMaintenanceImage,
    alt: "A specialist reviewing CMS plugin hygiene, access controls and patch management checkpoints.",
  },
  "fix-your-connection-is-not-private-ssl": {
    ...serviceCardSecurity,
    alt: "A South African security engineer inspecting SSL certificate chain validity and HTTPS status.",
  },
  "website-firewall-waf-cloudflare-south-africa": {
    ...detailSecurityShowcase,
    alt: "A South African security specialist configuring edge firewall rules and traffic protection controls.",
  },
  "offsite-website-backups-south-africa": {
    ...industryLogisticsImage,
    alt: "South African operations leads verifying reliable recovery systems and off-site operational continuity.",
  },
  "http-security-headers-explained": {
    ...guideTechnicalSeoImage,
    alt: "A web engineer auditing technical server configuration and HTTP security response headers.",
  },
  "stop-contact-form-spam-and-bots": {
    ...detailWebSa,
    alt: "A South African business owner reading genuine customer enquiries rather than spam messages.",
  },
  "website-security-audit-what-it-checks": {
    ...detailSecuritySa,
    alt: "Two South African security auditors reviewing a website hardening checklist and compliance dashboard.",
  },
  "protecting-domain-hijacking-co-za": {
    ...industryLegalImage,
    alt: "South African executives verifying domain ownership records and registrar transfer protection.",
  },
};

const guideCategoryFallbackImages: Record<GuideCategory, SiteImage> = {
  "Website Design & Development": detailWebShowcase,
  "SEO Services": serviceCardSeo,
  "Website & Cyber Security": detailSecurityShowcase,
  "Industry Playbooks": overviewIndustriesImage,
};

export function getGuideHeroImage(slug: string, category: GuideCategory): SiteImage {
  return guideImages[slug] ?? extraGuideHeroImages[slug] ?? guideCategoryFallbackImages[category];
}

export const homeServiceImages: Record<string, SiteImage> = {
  "web-development": homeServiceWeb,
  "seo-services": homeServiceSeo,
  "website-security": homeServiceSecurity,
};

export const homeProcessImages: SiteImage[] = [
  processDiscover,
  processPlan,
  processBuild,
  detailSecurityShowcase,
];

export const homeIndustryCards: Array<{
  sector: string;
  title: string;
  href: string;
  image: SiteImage;
}> = [
  {
    sector: "Medical & Clinics",
    title: "Trustworthy booking paths for patients",
    href: "/guides/medical-practice-website-seo-south-africa/",
    image: industryMedicalImage,
  },
  {
    sector: "Construction & Engineering",
    title: "Credible project proof for tender buyers",
    href: "/guides/construction-company-website-seo-south-africa/",
    image: industryConstructionImage,
  },
  {
    sector: "Logistics & Fleet",
    title: "Clear delivery routes and easy quote requests",
    href: "/guides/logistics-company-website-seo-south-africa/",
    image: industryLogisticsImage,
  },
  {
    sector: "Property & Real Estate",
    title: "High-speed listings and local search reach",
    href: "/guides/real-estate-website-seo-south-africa/",
    image: industryRealEstateImage,
  },
  {
    sector: "Trades & Field Services",
    title: "More calls and WhatsApp messages from your site",
    href: "/guides/trades-plumber-solar-website-seo-south-africa/",
    image: industryPlumberImage,
  },
  {
    sector: "Salons & Wellness",
    title: "Effortless mobile menus and repeat bookings",
    href: "/guides/salon-aesthetics-booking-website-seo-south-africa/",
    image: industrySalonImage,
  },
];

export const serviceCardImages: Record<string, SiteImage> = {
  "web-development": serviceCardWeb,
  "seo-services": serviceCardSeo,
  "website-security": serviceCardSecurity,
};

export const serviceDetailImages: Record<
  string,
  { showcase: SiteImage; southAfrica: SiteImage }
> = {
  "web-development": {
    showcase: processBuild,
    southAfrica: detailWebSa,
  },
  "seo-services": {
    showcase: overviewAiImage,
    southAfrica: localGautengImage,
  },
  "website-security": {
    showcase: detailSecurityShowcase,
    southAfrica: detailSecuritySa,
  },
};

export const aboutGalleryImages: Array<SiteImage & { caption: string }> = [
  {
    ...processBuild,
    caption: "Hands-on engineering reviews across real desktop and mobile screens.",
  },
  {
    ...processDiscover,
    caption: "Direct remote collaboration with businesses in all nine provinces.",
  },
];

export const contactConsultationImage: SiteImage = {
  ...localGautengImage,
  alt: "South African specialists collaborating over a laptop with the Johannesburg skyline behind them.",
};

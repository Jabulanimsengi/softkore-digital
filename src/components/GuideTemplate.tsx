import Link from "next/link";
import { ArticleToc, ReadingProgressBar } from "@/components/ArticleReadingAid";
import { ConversionBand, FaqList, LinkList } from "@/components/PageSections";
import { RichText } from "@/components/RichText";
import { UiIcon } from "@/components/UiIcon";
import type { GuideCallout, GuidePage } from "@/data/guides";
import {
  getDefaultMidCta,
  getGuideCategoryAnchor,
  getGuideReadingStats,
  getGuideTocItems,
} from "@/lib/guide-metrics";
import { getGuideHeroImage } from "@/lib/site-images";

const calloutBadgeLabel: Record<GuideCallout["tone"], string> = {
  tip: "Pro tip",
  warning: "Watch out",
  note: "South Africa note",
};

export function GuideTemplate({ guide }: { guide: GuidePage }) {
  const heroImage = getGuideHeroImage(guide.slug, guide.category);
  const stats = getGuideReadingStats(guide);
  const tocItems = getGuideTocItems(guide);
  const categoryHref = getGuideCategoryAnchor(guide.category);
  const takeaways =
    guide.takeaways && guide.takeaways.length > 0
      ? guide.takeaways
      : guide.summary;
  const midCta = guide.midCta ?? getDefaultMidCta(guide.category);
  const midCtaAfterIndex =
    guide.sections.length >= 3
      ? Math.max(1, Math.floor(guide.sections.length / 2) - 1)
      : -1;
  const formattedUpdated = new Date(guide.updated).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="article-page">
      <ReadingProgressBar />

      <section className="article-hero">
        <div className="article-hero-bg">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={1536}
            height={1024}
            loading="eager"
            fetchPriority="high"
          />
          <span className="article-hero-shade" aria-hidden="true" />
        </div>
        <div className="article-hero-inner">
          <div className="article-hero-copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">
                Home
              </Link>
              <span>/</span>
              <Link prefetch={false} href="/guides/">
                Guides
              </Link>
              <span>/</span>
              <span>{guide.category}</span>
            </nav>

            <div className="article-meta">
              <Link
                prefetch={false}
                href={categoryHref}
                className="article-category-pill"
              >
                {guide.category}
              </Link>
              <span className="article-readtime">
                <svg
                  className="article-clock-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {stats.label}
              </span>
              <span className="article-updated">
                Updated <time dateTime={guide.updated}>{formattedUpdated}</time>
              </span>
            </div>

            <h1>{guide.title}</h1>
            <p className="article-lead">
              <RichText text={guide.intro} />
            </p>

            <div className="hero-actions">
              <Link
                prefetch={false}
                className="button button-primary"
                href="/contact/"
              >
                Start a Project <UiIcon name="arrow" />
              </Link>
              <Link
                prefetch={false}
                className="button button-secondary"
                href="/guides/"
              >
                All Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="article-shell">
        <div className="article-layout">
          <article className="article-prose" data-article-body>
            {takeaways.length > 0 ? (
              <section
                className="article-takeaways"
                aria-label="Key takeaways"
              >
                <div className="article-takeaways-head">
                  <strong>Key takeaways</strong>
                  <span>{stats.label}</span>
                </div>
                <ul className="article-list article-list-bullets">
                  {takeaways.map((item, idx) => (
                    <li key={`takeaway-${idx}`}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <ArticleToc
              items={tocItems}
              readTimeLabel={stats.label}
              variant="mobile"
            />

            {guide.sections.map((section, index) => {
              const sectionId = tocItems[index]?.id ?? `section-${index + 1}`;
              return (
                <div key={sectionId}>
                  <section id={sectionId} className="article-section">
                    <span className="article-section-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2>
                      <RichText text={section.title} />
                    </h2>

                    {section.body.map((paragraph, pIdx) => (
                      <p key={`${sectionId}-p-${pIdx}`}>
                        <RichText text={paragraph} />
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 ? (
                      <ul className="article-list article-list-bullets">
                        {section.bullets.map((item, bIdx) => (
                          <li key={`${sectionId}-b-${bIdx}`}>
                            <RichText text={item} />
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.numbered && section.numbered.length > 0 ? (
                      <ol className="article-list article-list-numbered">
                        {section.numbered.map((item, nIdx) => (
                          <li key={`${sectionId}-n-${nIdx}`}>
                            <RichText text={item} />
                          </li>
                        ))}
                      </ol>
                    ) : null}

                    {section.subsections && section.subsections.length > 0
                      ? section.subsections.map((sub, subIdx) => (
                          <div
                            key={`${sectionId}-sub-${subIdx}`}
                            className="article-subsection"
                          >
                            <h3>
                              <RichText text={sub.heading} />
                            </h3>
                            {sub.body.map((paragraph, spIdx) => (
                              <p key={`${sectionId}-sub-${subIdx}-p-${spIdx}`}>
                                <RichText text={paragraph} />
                              </p>
                            ))}
                            {sub.bullets && sub.bullets.length > 0 ? (
                              <ul className="article-list article-list-bullets">
                                {sub.bullets.map((item, sbIdx) => (
                                  <li
                                    key={`${sectionId}-sub-${subIdx}-b-${sbIdx}`}
                                  >
                                    <RichText text={item} />
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                            {sub.numbered && sub.numbered.length > 0 ? (
                              <ol className="article-list article-list-numbered">
                                {sub.numbered.map((item, snIdx) => (
                                  <li
                                    key={`${sectionId}-sub-${subIdx}-n-${snIdx}`}
                                  >
                                    <RichText text={item} />
                                  </li>
                                ))}
                              </ol>
                            ) : null}
                          </div>
                        ))
                      : null}

                    {section.table ? (
                      <div className="article-table-wrap">
                        <table className="article-table">
                          {section.table.caption ? (
                            <caption>
                              <RichText text={section.table.caption} />
                            </caption>
                          ) : null}
                          <thead>
                            <tr>
                              {section.table.headers.map((header, hIdx) => (
                                <th key={`${sectionId}-th-${hIdx}`} scope="col">
                                  <RichText text={header} />
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={`${sectionId}-tr-${rIdx}`}>
                                {row.map((cell, cIdx) => (
                                  <td key={`${sectionId}-td-${rIdx}-${cIdx}`}>
                                    <RichText text={cell} />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}

                    {section.callout ? (
                      <aside
                        className={`article-callout article-callout-${section.callout.tone}`}
                      >
                        <span className="article-callout-badge">
                          {calloutBadgeLabel[section.callout.tone]}
                        </span>
                        <strong>
                          <RichText text={section.callout.heading} />
                        </strong>
                        <p>
                          <RichText text={section.callout.text} />
                        </p>
                      </aside>
                    ) : null}
                  </section>

                  {index === midCtaAfterIndex ? (
                    <aside className="article-mid-cta">
                      <div>
                        <span className="article-mid-cta-kicker">
                          Practical support
                        </span>
                        <strong>
                          <RichText text={midCta.heading} />
                        </strong>
                        <p>
                          <RichText text={midCta.text} />
                        </p>
                      </div>
                      <Link
                        prefetch={false}
                        href={midCta.href}
                        className="button button-primary"
                      >
                        {midCta.label} <UiIcon name="arrow" />
                      </Link>
                    </aside>
                  ) : null}
                </div>
              );
            })}

            {guide.faqs.length > 0 ? (
              <section id="faq" className="article-faq-section">
                <span className="article-section-num">
                  {String(guide.sections.length + 1).padStart(2, "0")}
                </span>
                <h2>Frequently asked questions</h2>
                <FaqList items={guide.faqs} />
              </section>
            ) : null}
          </article>

          <aside className="article-sidebar">
            <ArticleToc
              items={tocItems}
              readTimeLabel={stats.label}
              variant="desktop"
            />
          </aside>
        </div>
      </div>

      <section className="section article-related">
        <div className="article-related-head">
          <p className="stitch-kicker">Continue reading</p>
          <h2>Related guides and services</h2>
        </div>
        <LinkList items={guide.related} />
      </section>

      <ConversionBand
        title="Would you like help applying this to your site?"
        text="We work with South African businesses across website design, technical SEO and website security."
        primaryLabel="Start a Project"
        secondaryHref="/services/"
        secondaryLabel="View Services"
      />
    </main>
  );
}

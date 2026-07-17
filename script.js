const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

const routeLoadingOverlay = document.createElement("div");
routeLoadingOverlay.className = "route-loading-overlay";
routeLoadingOverlay.setAttribute("aria-hidden", "true");
routeLoadingOverlay.setAttribute("aria-live", "polite");
routeLoadingOverlay.innerHTML = `
  <div class="route-loading-indicator" role="status">
    <span class="route-loading-spinner" aria-hidden="true"></span>
    <span>Loading</span>
  </div>
`;
document.body.append(routeLoadingOverlay);

document.addEventListener("click", (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) return;

  const anchor = event.target instanceof Element ? event.target.closest("a") : null;
  if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

  const destination = new URL(anchor.href, window.location.href);
  const current = new URL(window.location.href);
  if (destination.origin !== current.origin) return;
  if (destination.pathname === current.pathname && destination.search === current.search) return;

  document.body.setAttribute("aria-busy", "true");
  routeLoadingOverlay.classList.add("is-visible");
  routeLoadingOverlay.setAttribute("aria-hidden", "false");
}, true);

const revealItems = document.querySelectorAll(
  [
    "main > section",
    ".service-card",
    ".content-card",
    ".proof-list li",
    ".area-list a",
    ".case-card",
    ".faq-item",
    ".conversion-band",
    ".reveal",
  ].join(",")
);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reduceMotion.matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  revealItems.forEach((item) => item.classList.add("scroll-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

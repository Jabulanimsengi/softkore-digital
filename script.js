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

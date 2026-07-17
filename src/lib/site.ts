export const site = {
  name: "SoftKore Digital",
  domain: "https://www.softkoredigital.co.za",
  email: "info@softkoredigital.co.za",
  description:
    "SoftKore Digital develops websites, business systems, and online growth solutions that help growing businesses operate efficiently, reach more customers, and scale with confidence.",
  logo: "https://www.softkoredigital.co.za/logo.png",
};

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${cleanPath}`;
}

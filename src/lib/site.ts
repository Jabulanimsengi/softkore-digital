export const site = {
  name: "SoftKore Digital",
  domain: "https://www.softkoredigital.co.za",
  email: "info@softkoredigital.co.za",
  phone: "+27738021196",
  phoneDisplay: "073 802 1196",
  description:
    "SoftKore Digital is a South African web company. We build websites and web applications, and provide SEO and website maintenance for businesses across the country.",
  logo: "https://www.softkoredigital.co.za/logo.png",
};

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${cleanPath}`;
}

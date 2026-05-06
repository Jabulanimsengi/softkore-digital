export const site = {
  name: "SoftKore Digital",
  domain: "https://www.softkoredigital.co.za",
  email: "info@softkoredigital.co.za",
  description:
    "SoftKore Digital builds modern websites, web applications, and SEO-driven digital platforms for businesses that want to grow online.",
  logo: "https://www.softkoredigital.co.za/logo.png",
};

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${cleanPath}`;
}

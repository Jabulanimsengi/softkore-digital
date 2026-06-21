export const site = {
  name: "Softkore Technologies",
  domain: "https://www.softkoredigital.co.za",
  email: "info@softkoredigital.co.za",
  description:
    "Softkore Technologies builds modern websites, SEO systems, web applications, cloud infrastructure, and digital platforms for businesses that want to grow online.",
  logo: "https://www.softkoredigital.co.za/logo.png",
};

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${cleanPath}`;
}

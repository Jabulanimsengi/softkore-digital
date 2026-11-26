export const site = {
  name: "SoftKore Digital",
  domain: "https://www.softkoredigital.co.za",
  email: "info@softkoredigital.co.za",
  phone: "+27738021196",
  phoneDisplay: "073 802 1196",
  description:
    "SoftKore Digital is a South African web company specialising in website design & development, SEO services, and website & cyber security for businesses nationwide.",
  logo: "https://www.softkoredigital.co.za/logo.png",
};

/**
 * Registered company details — single source of truth.
 * Sources: CIPC CoR14.3 registration certificate and disclosure (issued 12 Oct 2026),
 * CIPC B-BBEE EME certificate 9468591979, and the Information Regulator
 * Information Officer registration certificate 2026-073228.
 * Never add the director's ID number or a residential-only address here.
 */
export const company = {
  tradingName: site.name,
  legalName: "African Digital Tech Solutions (Pty) Ltd",
  registrationNumber: "2026/810960/07",
  registrationDate: "2026-10-12",
  address: {
    street: "111 Commissioner Street",
    locality: "Johannesburg",
    region: "Gauteng",
    postalCode: "2000",
    country: "ZA",
  },
  bbbee: {
    level: "Level 1",
    type: "Exempted Micro Enterprise (EME)",
    procurementRecognition: "135%",
    blackOwnership: "100%",
    youthOwnership: "100%",
    certificateNumber: "9468591979",
    issued: "2026-10-09",
    /** Renew before this date and update this record. */
    expires: "2027-10-08",
    expiresDisplay: "8 October 2027",
  },
  informationOfficer: {
    name: "Jabulani Msengi",
    email: site.email,
    regulatorRegistration: "2026-073228",
  },
};

export const companyAddressLine = `${company.address.street}, ${company.address.locality}, ${company.address.region}, ${company.address.postalCode}`;

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${cleanPath}`;
}

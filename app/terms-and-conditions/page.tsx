import type { Metadata } from "next";
import TermsConditionsClient from "../../components/terms-and-conditions/TermsConditionsClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://afterrmatch.com";

const lastUpdated = "24 July 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions | AfterrMatch",
  description:
    "Read the Terms & Conditions for using the AfterrMatch website, booking pickleball courts, participating in events, and accessing our services in Greater Noida.",
  keywords: [
    "AfterrMatch Terms & Conditions",
    "AfterrMatch Terms",
    "Pickleball Court Booking Terms",
    "Pickleball Club Terms India",
    "AfterrMatch Greater Noida",
  ],
  alternates: {
    canonical: `${siteUrl}/terms-and-conditions`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/terms-and-conditions`,
    siteName: "AfterrMatch",
    title: "Terms & Conditions | AfterrMatch",
    description:
      "Review the terms governing use of the AfterrMatch website, court bookings, memberships, events, payments, and club services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | AfterrMatch",
    description:
      "Read the terms for using AfterrMatch services, booking courts, joining memberships, and participating in events.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/terms-and-conditions#webpage`,
  url: `${siteUrl}/terms-and-conditions`,
  name: "Terms & Conditions | AfterrMatch",
  description:
    "The Terms and Conditions governing use of the AfterrMatch website, court bookings, memberships, events, payments, and related services.",
  dateModified: "2026-07-24",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "AfterrMatch",
    url: siteUrl,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "AfterrMatch",
  url: siteUrl,
  email: "afterrmatch.pr@gmail.com",
  sameAs: ["https://www.instagram.com/afterrmatch/"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms & Conditions",
      item: `${siteUrl}/terms-and-conditions`,
    },
  ],
};

export default function TermsAndConditionsPage() {
  const schemas = [
    webPageSchema,
    organizationSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <TermsConditionsClient lastUpdated={lastUpdated} />
    </>
  );
}
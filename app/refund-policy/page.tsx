import type { Metadata } from "next";
import RefundPolicyClient from "../../components/refund-policy/RefundPolicyClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://afterrmatch.com";

const lastUpdated = "24 July 2026";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | AfterrMatch",
  description:
    "Learn about AfterrMatch's refund and cancellation policy for court bookings, memberships, event registrations, and online payments.",
  keywords: [
    "AfterrMatch Refund Policy",
    "AfterrMatch Cancellation Policy",
    "Pickleball Court Refund Policy",
    "Court Booking Cancellation",
    "AfterrMatch Greater Noida",
  ],
  alternates: {
    canonical: `${siteUrl}/refund-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/refund-policy`,
    siteName: "AfterrMatch",
    title: "Refund & Cancellation Policy | AfterrMatch",
    description:
      "Understand the cancellation, refund, credit, and rescheduling rules for AfterrMatch court bookings, memberships, and events.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy | AfterrMatch",
    description:
      "Review AfterrMatch's refund, cancellation, credit, and rescheduling policy.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/refund-policy#webpage`,
  url: `${siteUrl}/refund-policy`,
  name: "Refund & Cancellation Policy | AfterrMatch",
  description:
    "The AfterrMatch refund and cancellation policy for court bookings, memberships, events, private bookings, and online payments.",
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
      name: "Refund & Cancellation Policy",
      item: `${siteUrl}/refund-policy`,
    },
  ],
};

export default function RefundPolicyPage() {
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

      <RefundPolicyClient lastUpdated={lastUpdated} />
    </>
  );
}
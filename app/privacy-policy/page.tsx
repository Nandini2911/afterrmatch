import PrivacyPolicyClient from "@/components/privacy-policy/PrivacyPolicyClient";
import type { Metadata } from "next";


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://afterrmatch.com";

const lastUpdated = "24 July 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | AfterrMatch",
  description:
    "Read the AfterrMatch Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our website, book courts, or interact with our services.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/privacy-policy`,
    siteName: "AfterrMatch",
    title: "Privacy Policy | AfterrMatch",
    description:
      "Learn how AfterrMatch collects, uses, stores, and protects personal information across bookings, memberships, events, and website interactions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AfterrMatch",
    description:
      "Understand how AfterrMatch manages and protects your personal information.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/privacy-policy#webpage`,
  url: `${siteUrl}/privacy-policy`,
  name: "Privacy Policy | AfterrMatch",
  description:
    "The AfterrMatch Privacy Policy explains how personal information is collected, used, stored, shared, and protected.",
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
      name: "Privacy Policy",
      item: `${siteUrl}/privacy-policy`,
    },
  ],
};

export default function PrivacyPolicyPage() {
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

      <PrivacyPolicyClient lastUpdated={lastUpdated} />
    </>
  );
}
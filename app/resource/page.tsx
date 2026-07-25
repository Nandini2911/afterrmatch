import type { Metadata } from "next";
import ResourcesClient from "../../components/resource/ResourcesClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://afterrmatch.com";

export const metadata: Metadata = {
  title:
    "AfterrMatch Resource Center | Pickleball Guides, Downloads & Learning Hub",
  description:
    "Explore the AfterrMatch Resource Center for beginner guides, pickleball rules, equipment advice, fitness resources, event checklists, FAQs, and free downloadable resources.",
  keywords: [
    "Pickleball Resource Center",
    "Pickleball Resources",
    "Pickleball Learning Center",
    "Pickleball Guides",
    "Pickleball Knowledge Hub",
    "Pickleball Resources India",
    "Beginner Pickleball",
    "Pickleball Rules",
    "Pickleball Equipment",
    "Pickleball Downloads",
    "Sports Resources",
    "Fitness Guides",
    "Community Resources",
    "Pickleball Academy",
    "Pickleball Articles",
    "Pickleball Checklist",
  ],
  alternates: {
    canonical: `${siteUrl}/resources`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/resources`,
    siteName: "AfterrMatch",
    title:
      "AfterrMatch Resource Center | Pickleball Guides, Downloads & Learning Hub",
    description:
      "Learn pickleball, improve your game, explore equipment advice, fitness resources and practical guides from AfterrMatch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfterrMatch Pickleball Resource Center",
    description:
      "Explore pickleball guides, rules, equipment advice, fitness resources, FAQs and learning materials.",
  },
};

const faqItems = [
  {
    question: "Can complete beginners play pickleball at AfterrMatch?",
    answer:
      "Yes. AfterrMatch welcomes beginners, casual players and experienced players.",
  },
  {
    question: "How can I book a pickleball court?",
    answer:
      "Visit the AfterrMatch booking page and choose your preferred playing option.",
  },
  {
    question: "Do I need my own pickleball equipment?",
    answer:
      "Players may bring their own equipment. Contact AfterrMatch before your session to confirm equipment availability.",
  },
  {
    question: "Can AfterrMatch host private events?",
    answer:
      "Yes. AfterrMatch supports community games, private celebrations and curated group events, subject to availability.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AfterrMatch Resource Center",
    url: `${siteUrl}/resources`,
    description:
      "A pickleball learning center featuring beginner guides, equipment advice, training resources, fitness information and community resources.",
  },
  {
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
        name: "Resource Center",
        item: `${siteUrl}/resources`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AfterrMatch",
    url: siteUrl,
    email: "afterrmatch.pr@gmail.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function ResourcesPage() {
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

      <ResourcesClient />
    </>
  );
}
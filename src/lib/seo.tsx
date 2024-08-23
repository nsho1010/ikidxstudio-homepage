import type { Metadata } from "next";
import config from "@/config";

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, unknown>;
} = {}) => {
  return {
    title: title || config.appName,
    description: description || config.appDescription,
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),
    language: "ja-JP",
    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: config.appName,
      locale: "ja_JP",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
      creator: config.twitter,
    },
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),
    ...extraTags,
  };
};

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data

export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "image": "https://www.example.com/example_image.jpg",
          "url": "https://www.example.com",
          "sameAs": ["https://example.net/profile/example1234", "https://example.org/example1234"],
          "logo": "https://www.example.com/images/logo.png",
          "name": "Example Corporation",
          "description": "The example corporation is well-known for producing high-quality widgets",
          "email": "contact@example.com",
          "telephone": "+47-99-999-9999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1-1-1",
            "addressLocality": "Tokyo",
            "addressCountry": "JP",
            "addressRegion": "Tokyo",
            "postalCode": "100-0001"
          },
          "vatID": "FR12345678901",
          "iso6523Code": "0199:724500PMK2A2M1SQQ228"
        }),
      }}
    ></script>
  );
};

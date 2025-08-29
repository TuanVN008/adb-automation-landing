"use client";
import Script from "next/script";
import { site } from "@/lib/seo";
import { faq, pricing } from "@/lib/data";
import { demoVideos } from "@/lib/data";

function priceToNumber(v: string) {
  return Number(v.replace(/[^\d]/g, "")) || undefined;
}
const offerCurrency = "VND";
const priceValidUntil = (() => {
  const d = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 19) + "Z";
})();

export default function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.ico`,
    sameAs: [`https://zalo.me/${process.env.NEXT_PUBLIC_ZALO_PHONE || "0888103645"}`]
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    brand: { "@type": "Organization", name: site.name },
    description: site.description,
    offers: pricing.map((p: any) => ({
      "@type": "Offer",
      name: p.tier,
      priceCurrency: offerCurrency,
      price: priceToNumber(p.price),
      url: site.url + "#pricing",
      priceValidUntil
    }))
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Khóa học ADB Automation",
    description: site.description,
    provider: { "@type": "Organization", name: site.name, sameAs: site.url }
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const video = demoVideos?.[0]
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: demoVideos[0].title,
        embedUrl: demoVideos[0].url,
        description: "Demo ADB Automation",
        uploadDate: new Date().toISOString()
      }
    : null;

  return (
    <>
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Script id="ld-product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <Script id="ld-course" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      {video && (
        <Script id="ld-video" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(video) }} />
      )}
    </>
  );
}

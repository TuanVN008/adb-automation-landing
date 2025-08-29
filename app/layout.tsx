import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/"
    }
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "vi_VN"
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}


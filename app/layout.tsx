import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/common/components/layouts";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { METADATA } from "@/common/constant/metadata";
import ThemeProviderContext from "@/store/theme";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: METADATA.authors,
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderContext>
          <Layout>{children}</Layout>
        </ThemeProviderContext>
        <GoogleAnalytics
          measurementId={`${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
      </body>
    </html>
  );
}

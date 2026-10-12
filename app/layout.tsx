import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayjo – Shop Your Favourite Mall Brands Online",
  description:
    "Shop your favourite mall brands with Sayjo. Discover fashion, beauty, kids' products and more from nearby stores, with fast delivery straight to your doorstep.",
  metadataBase: new URL("https://www.sayjo.in"),
  openGraph: {
    title: "Sayjo – Shop Your Favourite Mall Brands Online",
    description:
      "Discover your favourite mall brands and shop products from nearby stores with fast delivery to your doorstep.",
    url: "https://www.sayjo.in",
    siteName: "Sayjo",
    type: "website",
    images: ["/sayjo-app.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayjo – Shop Your Favourite Mall Brands Online",
    description:
      "Discover your favourite mall brands and shop products from nearby stores with fast delivery.",
    images: ["/sayjo-app.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import MobileNavbar from "@/components/Layout/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://pavan-updated-portfolio.vercel.app";
  console.log(siteUrl);

  const longTitle =
    "Frontend Developer | React, Next.js & UI/UX Specialist - Pavan Prajapati";
  const description =
    "Experienced Frontend Developer specializing in React, Next.js, and Tailwind CSS. Crafting high-performance, responsive websites with a focus on user experience and modern web development best practices.";
  const keywords =
    "Frontend Developer, React Developer, Next.js, UI/UX Specialist, Web Development, Tailwind CSS, JavaScript, TypeScript, Responsive Design, Pavan Prajapati Portfolio, Pavan Prajapati, Modern Web Development, On-page SEO";

  const truncateTitle = (title, maxLength = 60) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return {
    metadataBase: new URL(siteUrl),
    title: truncateTitle(longTitle),
    description: description,
    keywords: keywords,
    canonical: `${siteUrl}`,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}`,
      title: longTitle,
      description: description,
      siteName: "Pavan Portfolio",
      images: [
        {
          url: `${siteUrl}/api/og`, // This should be relative
          width: 1200,
          height: 630,
          alt: "Portfolio website image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: longTitle,
      description: description,
      images: [`${siteUrl}/api/og`], // This should be relative
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="max-w-7xl mx-auto pt-[4rem] max-md:pt-0 max-md:overflow-x-hidden">
          {children}
          <div className="md:hidden">
            {" "}
            {/* Only show on mobile */}
            <MobileNavbar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

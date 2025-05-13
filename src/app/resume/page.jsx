import React from "react";
import ResumeSection from "./ResumeSection";

export async function generateMetadata() {
  
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://pavan-updated-portfolio.vercel.app";

  const title = "View My Resume | Frontend Developer";
  const description =
    "Check out my resume showcasing my skills, experience, and achievements. Click to view...";
  const keywords =
    "Frontend Developer Resume, React Developer, Next.js Developer, UI/UX Designer, Web Developer Portfolio, JavaScript, TypeScript, Tailwind CSS, Modern Web Development, Alok Tamrakar Resume";

  return {
    title,
    description,
    keywords: keywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      url: `${siteUrl}/resume`,
      title,
      description,
      siteName: "Pavan Portfolio",
      images: [
        {
          url: `${siteUrl}/resume/resume.png`,
          width: 1200,
          height: 630,
          alt: "Resume Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/resume/resume.png`],
    },
  };
}

const ResumeContainer = () => {
  return (
    <>
      <ResumeSection />
    </>
  );
};

export default ResumeContainer;

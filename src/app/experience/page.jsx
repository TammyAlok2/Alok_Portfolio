import ExperienceSection from "./ExperienceSection";

export async function generateMetadata() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://pavan-updated-portfolio.vercel.app";

  const title = "Experience - Pavan Prajapati";
  const description =
    "Explore the professional journey of Pavan Prajapati. Frontend Developer with expertise in React, Next.js, and UI/UX design.";
  const keywords =
    "Frontend Developer, Work Experience, React Developer, Next.js, UI/UX, Web Development, Pavan Prajapati Portfolio";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    canonical: `${siteUrl}/experience`,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/experience`,
      title,
      description,
      siteName: "Pavan Portfolio",
      images: [
        {
          url: `${siteUrl}/api/og`,
          width: 1200,
          height: 630,
          alt: "Experience section cover image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/api/og`],
    },
  };
}

export default function BestExperience() {  
  
  return (
    <ExperienceSection />
  );
}

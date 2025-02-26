import { experiences } from "@/data/experienceSectionData";
import { FaBriefcase } from "react-icons/fa";

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
    <div className="pb-12 pt-[6rem] px-6">
      <div className="relative border-l-4 border-[#4f46e5] pl-6">
        {Array.isArray(experiences) && experiences?.map((exp) => (
          <div key={exp.id} className="mb-8">
            <div className="absolute -left-6 bg-[#4f46e5] text-white p-3 rounded-full">
              <FaBriefcase size={20} />
            </div>
            <div className="bg-white dark:bg-[#1f2937] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 font-medium dark:text-[#586270]">{exp.company}</p>
              <span className="text-sm text-[#4f46e5] font-medium">{exp.years}</span>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 text-sm dark:text-[#596475]">
                {exp.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

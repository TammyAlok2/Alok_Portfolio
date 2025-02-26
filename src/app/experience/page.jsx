import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Frontend Web Developer",
    company: "Local Karo - Internship",
    years: "Dec 2024 - Feb 2025 · 3 mos",
    location: "Satna, Madhya Pradesh, India · On-site",
    details: [
      "Spearheaded migration from legacy codebase to modern Next.js architecture, improving scalability and increasing developer productivity by 35%.",
      "Implemented microservices-based frontend using React Query and Redux Toolkit, reducing API calls by 40% and improving responsiveness.",
      "Developed a design system with 50+ reusable components, ensuring consistent UI/UX and 50% faster development.",
      "Enabled instant updates for collaborative features used by 10,000+ users.",
      "Championed accessibility improvements with ARIA standards and keyboard navigation.",
      "Developed and maintained CI/CD pipelines with GitHub Actions, reducing deployment time by 65% and ensuring zero-downtime deployments.",
      "Architected advanced caching strategies using Next.js ISR and Redis, leading to 70% faster data retrieval and improved UX.",
      "Led technical discussions and mentored junior developers on best practices.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Yourlab.in - Internship",
    years: "Jul 2024 - Nov 2024 · 5 mos",
    location: "Satna, Madhya Pradesh, India · On-site",
    details: [
      "Developed responsive UI using Next.js, Tailwind CSS, and Redux.js, improving website load times by 30%.",
      "Implemented state management using Redux for handling complex data flows across multiple components.",
      "Participated in daily stand-ups and sprint planning, delivering features ahead of deadlines.",
      "Optimized performance through code splitting and lazy loading, reducing initial bundle size by 40%.",
      "Built and maintained reusable component libraries, improving development efficiency by 25%.",
      "Executed on-page SEO strategies, including meta tag optimization and dynamic sitemap generation with Next.js.",
      "Developed layouts and components following Next.js best practices, reducing development time by 30%.",
      "Handled complex state management with Redux Toolkit for multiple API integrations.",
      "Collaborated with UX designers to ensure responsive and visually appealing designs.",
    ],
  },
];

export default function BestExperience() {
  return (
    <div className="max-w-4xl mx-auto pb-12 pt-[6rem] px-6">
      <div className="relative border-l-4 border-[#4f46e5] pl-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-8">
            <div className="absolute -left-6 bg-[#4f46e5] text-white p-3 rounded-full">
              <FaBriefcase size={20} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-600 font-medium">{exp.company}</p>
              <span className="text-sm text-[#4f46e5] font-medium">{exp.years}</span>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
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
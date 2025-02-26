import { experiences } from "@/data/heroSectionData";
import { FaBriefcase } from "react-icons/fa";

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

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/data/skillSectionData";

const TechnicalSkillsIcons = () => {
  return (
    <div className="w-full p-8 rounded-lg">
      <div className="space-y-8">
        {technologies?.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: categoryIndex * 0.2 + toolIndex * 0.1,
                  }}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tool?.icon || "/placeholder.svg"}
                      alt={tool?.name}
                      fill
                      className={`object-contain ${
                        tool?.name === "Express" && "dark:invert-[1]"
                      } ${tool?.name === "On-page SEO" && "dark:invert-[1]"}`}
                    />
                  </div>
                  <span className="text-gray-400 text-sm text-center group-hover:text-white transition-colors duration-300">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkillsIcons;

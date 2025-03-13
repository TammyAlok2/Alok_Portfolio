"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skillSectionData";
import Chart from "./components/Chart";
import TechnicalSkillsIcons from "./components/TechnicalSkillsIcons";

// Sample data for the chart
const chartData = skills.map((skill, index) => ({
  name: skill.name.split(" ")[0], // Using first word for brevity
  value: skill.percentage,
}));

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-black" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Skills Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="mb-10">
              <motion.h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Technical Skills
              </motion.h2>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive overview of my technical expertise
              </p>
            </div>

            {/* Technical Skills Icons */}
            <TechnicalSkillsIcons />
          </motion.div>

          {/* Chart */}
          <Chart chartData={chartData} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

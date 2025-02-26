"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { skills, technologies } from "@/data/skillSectionData";



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
                  transition={{ delay: categoryIndex * 0.2 + toolIndex * 0.1 }}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
                    <Image src={tool?.icon || "/placeholder.svg"} alt={tool?.name} fill className={`object-contain ${tool?.name === "Express" && "dark:invert-[1]"} ${tool?.name === "On-page SEO" && "dark:invert-[1]"}`} />
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
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 max-sm:hidden max-sm:p-0">
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--tooltip-bg, #0004e4e0)",
                          color: "var(--tooltip-text, #cfcfcf)",
                          borderRadius: "8px",
                          padding: "10px",
                          border: "1px solid var(--tooltip-border, #d1d5db)",
                        }}
                        wrapperStyle={{
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                        formatter={(value, name, props) => [null, props.payload.name]}
                        labelFormatter={(label) => ''}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2563eb"
                        strokeWidth={2}
                        dot={{ stroke: "#4f46e5", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

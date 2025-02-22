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

const skills = [
  { name: "Frontend Development", percentage: 85, color: "bg-blue-500" },
  { name: "Backend Development", percentage: 45, color: "bg-blue-500" },
  { name: "UI/UX Design", percentage: 75, color: "bg-red-500" },
  { name: "React.js", percentage: 90, color: "bg-blue-600" },
  { name: "Next.js", percentage: 85, color: "bg-blue-600" },
  { name: "TypeScript", percentage: 60, color: "bg-purple-500" },
  { name: "JavaScript", percentage: 85, color: "bg-yellow-500" },
  { name: "HTML5", percentage: 95, color: "bg-orange-500" },
  { name: "CSS3", percentage: 90, color: "bg-blue-400" },
  { name: "Tailwind CSS", percentage: 85, color: "bg-teal-500" },
  { name: "Redux", percentage: 80, color: "bg-purple-600" },
  { name: "Zustand", percentage: 85, color: "bg-purple-600" },
  { name: "REST API", percentage: 75, color: "bg-green-500" },
  { name: "Version Control (Git)", percentage: 85, color: "bg-gray-700" },
  { name: "On-page SEO", percentage: 70, color: "bg-blue-300" },
  { name: "Responsive Design", percentage: 95, color: "bg-green-400" },
];

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
              <p className="text-gray-600">
                Comprehensive overview of my technical expertise
              </p>
            </div>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">
                    {skill.percentage}%
                  </span>
                </div>
                <Progress
                  value={skill.percentage}
                  className="h-2"
                  indicatorClassName={skill.color}
                />
              </motion.div>
            ))}
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

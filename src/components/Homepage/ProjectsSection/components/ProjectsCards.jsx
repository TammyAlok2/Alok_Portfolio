import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projectsSectionData";
import Image from "next/image";

const ProjectsCards = ({ setSelectedProject }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:flex max-md:flex-col max-md:w-full">
      {projects?.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className=""
        >
          <Card
            className="cursor-pointer group hover:shadow-xl hover:border-[#3a59eb] transition-all duration-500 dark:bg-[#1f2937] border-l-[.5rem] border-[#00000018] dark:border-[#bababa29] ease-in-out"
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="aspect-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#3a5beb8f] opacity-0 group-hover:opacity-100 w-0 group-hover:w-full duration-300 flex items-center justify-center transition-all ease-in-out">
                  <span className="text-white font-semibold text-2xl">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-emerald-600 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 truncate">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(3).map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-indigo-100 dark:bg-[#6366f1] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  <h1>...</h1>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsCards;

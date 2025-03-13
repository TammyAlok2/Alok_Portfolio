"use client";

import React, { useState } from "react";
import { motion} from "framer-motion";
import ProjectsCards from "./components/ProjectsCards";
import SingleProjectsCard from "./components/SingleProjectsCard";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#3a59eb]">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of my latest work and projects across different domains
          </p>
        </motion.div>

        {/* Projects Cards */}
        <ProjectsCards setSelectedProject={setSelectedProject} />

        {/* Single ProjectsCard component */}
        <SingleProjectsCard selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      </div>
    </section>
  );
};

export default ProjectsSection;

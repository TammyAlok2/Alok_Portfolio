import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";

const SingleProjectsCard = ({ selectedProject, setSelectedProject }) => {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#f1f1f13b] backdrop-blur-[4px] z-[1000] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] border-[#a7a7a781] hover:border-[#3a59eb] border-l-[.5rem] max-md:max-h-[68vh] dark:bg-black overflow-y-auto transition-all duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                width={1500}
                height={1500}
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-84 aspect-auto rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <span className="text-sm text-emerald-600 font-medium">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black dark:border-[.1rem] dark:border-gray-300 active:scale-90 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SingleProjectsCard;

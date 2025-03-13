"use client";

import { motion } from "framer-motion";
import ServiceCards from "./components/ServiceCards";
import { services } from "@/data/servicesSectionData";

export const ServicesSection = () => {
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            My Services
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Providing comprehensive design and development solutions that bring
            your vision to life
          </p>
        </motion.div>

        {/* Service Cards */}
        <ServiceCards services={services}/>
      </div>
    </section>
  );
};

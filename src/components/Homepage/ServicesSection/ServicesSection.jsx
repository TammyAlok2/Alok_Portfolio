"use client";

import { services } from "@/data/servicesSectionData";
import { motion } from "framer-motion";

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
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-[#1f2937] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-[.5rem] border-[#00000018] dark:border-[#bababa29]`}
            >
              <div key={service.id} className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.bgColor}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

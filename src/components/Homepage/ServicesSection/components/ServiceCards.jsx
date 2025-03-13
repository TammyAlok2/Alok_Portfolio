import React from "react";
import { motion } from "framer-motion";

const ServiceCards = ({ services }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-white dark:bg-[#1f2937] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-[.5rem] border-[#00000018] dark:border-[#bababa29]`}
        >
          <div
            key={service.id}
            className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.bgColor}`}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;

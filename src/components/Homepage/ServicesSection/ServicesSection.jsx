"use client";

import { motion } from "framer-motion";
import { Layout, Code, Palette } from "lucide-react";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences that delight your customers and drive results.",
    icon: <Layout className="w-8 h-8 text-emerald-600" />,
    bgColor: "bg-emerald-100",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable web applications using modern technologies.",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    title: "Brand Design",
    description:
      "Develop cohesive brand identities that communicate your values and connect with your audience.",
    icon: <Palette className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-purple-100",
  },
];

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
              className="bg-white dark:bg-[#1f2937] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-[.5rem] border-[#00000018] dark:border-[#bababa29]"
            >
              <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
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

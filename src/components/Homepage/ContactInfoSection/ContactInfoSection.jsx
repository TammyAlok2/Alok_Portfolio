"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/contactInfoSectionData";
import ContactInfoCards from "./components/ContactInfoCards";
import ContactForm from "./components/ContactForm";
import GoogleMap from "./components/GoogleMap";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactInfoSection() {
  return (
    <section className="py-20 dark:from-gray-900 dark:to-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <ContactInfoCards contactInfo={contactInfo} />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <ContactForm />

          {/* Google Map to Contact via location */}
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}

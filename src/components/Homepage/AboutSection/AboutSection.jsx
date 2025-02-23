'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutSection() {
    return (
        <section className="py-20" id="about">
            <div className="mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-12 md:grid-cols-2 items-center"
                >
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                            About Me
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-lg text-gray-600 dark:text-gray-300"
                        >
                            Hi, I'm John Doe, a passionate full-stack developer with over 5 years of experience in creating beautiful
                            and functional web applications. I specialize in React, Node.js, and cloud technologies.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex space-x-4"
                        >
                            <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                <Twitter size={24} />
                            </a>
                        </motion.div>
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r active:scale-90 from-blue-600 to-purple-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                        >
                            Contact Me
                            <ArrowRight className="ml-2" size={18} />
                        </motion.a>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40"></div>
                        <Image
                            src="/aboutsection/about.png"
                            alt="John Doe"
                            width={400}
                            height={400}
                            className="rounded-full mx-auto relative z-10"
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-16 grid gap-8 md:grid-cols-3"
                >
                    {[
                        {
                            title: "Web Development",
                            description: "Building responsive and high-performance web applications using modern frameworks and best practices.",
                        },
                        {
                            title: "UI/UX Design",
                            description: "Designing intuitive and visually appealing user interfaces to enhance user experience.",
                        },
                        {
                            title: "Single-Page Application (SPA) Development",
                            description: "Creating dynamic SPAs that provide seamless user experiences with minimal page reloads.",
                        },
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 border-b-[.5rem] border-[#00000018] dark:border-[#bababa29]"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}


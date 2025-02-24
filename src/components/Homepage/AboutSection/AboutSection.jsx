"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

// Reusable animation properties
const fadeIn = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
});

const skills = [
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
];

export default function AboutSection() {
    return (
        <section className="py-20" id="about">
            <div className="mx-auto px-4">
                <motion.div {...fadeIn()} className="grid gap-12 md:grid-cols-2 items-center">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <motion.h1 {...fadeIn(0.2, 0)} className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            About Me
                        </motion.h1>
                        <motion.p {...fadeIn(0.4)} className="text-lg text-gray-600 dark:text-gray-300">
                            Hi, I'm Pavan Prajapati, a passionate frontend web developer with over 4 years of experience in creating beautiful and functional web applications. 
                            I specialize in React, Next.JS, Tailwind CSS, On-page Optimization and multimore core technologies or Ai tools.
                        </motion.p>
                        <motion.div {...fadeIn(0.6)} className="flex space-x-4">
                            {[
                                { href: "https://github.com/Pavanpraja", icon: Github },
                                { href: "https://www.linkedin.com/in/pavan-prajapati-8a348626b/", icon: Linkedin },
                                { href: "https://x.com/pp3850064", icon: Twitter },
                            ].map(({ href, icon: Icon }, index) => (
                                <Link key={index} href={href} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </motion.div>
                        <motion.a
                            {...fadeIn(0.8)}
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r active:scale-90 from-blue-600 to-purple-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                        >
                            Contact Me
                            <ArrowRight className="ml-2" size={18} />
                        </motion.a>
                    </div>

                    {/* Right Section - Image */}
                    <motion.div {...fadeIn(0.2, 0)} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40"></div>
                        <Image src="/aboutsection/about.png" alt="John Doe" width={400} height={400} className="rounded-full mx-auto relative z-10" />
                    </motion.div>
                </motion.div>

                {/* Skills Section */}
                <motion.div {...fadeIn(0.4)} className="mt-16 grid gap-8 md:grid-cols-3">
                    {skills.map((skill, index) => (
                        <motion.div key={index} {...fadeIn(0.6 + index * 0.2)} className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 border-b-[.5rem] border-[#00000018] dark:border-[#bababa29]">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

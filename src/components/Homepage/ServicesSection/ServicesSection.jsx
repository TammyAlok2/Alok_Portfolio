'use client';

import { Download, Github, Instagram, Linkedin, Code, Palette, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

// ... (previous Home component code remains the same until main closing tag)
export const ServicesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id='services'>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Providing comprehensive design and development solutions that bring your vision to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            <Layout className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                        <p className="text-gray-600">
                            Create intuitive and engaging user experiences that delight your customers and drive results.
                        </p>
                    </motion.div>

                    {/* Service Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            <Code className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Web Development</h3>
                        <p className="text-gray-600">
                            Build fast, responsive, and scalable web applications using modern technologies.
                        </p>
                    </motion.div>

                    {/* Service Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            <Palette className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Brand Design</h3>
                        <p className="text-gray-600">
                            Develop cohesive brand identities that communicate your values and connect with your audience.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h4 className="text-4xl font-bold text-emerald-500 mb-2">3x</h4>
                        <p className="text-gray-600">Better Coverage</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center"
                    >
                        <h4 className="text-4xl font-bold text-emerald-500 mb-2">5x</h4>
                        <p className="text-gray-600">Faster Delivery</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <h4 className="text-4xl font-bold text-emerald-500 mb-2">100%</h4>
                        <p className="text-gray-600">Satisfaction</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
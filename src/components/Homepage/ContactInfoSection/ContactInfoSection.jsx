'use client';

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, ExternalLink, Linkedin, Twitter, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    details: ["Gopal Tola Nagod District Satna, (M.P), India"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    details: ["pp3850064@gmail.com"],
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    details: ["+91 6264360870"],
  },
]

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#", label: "Github" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
]

export default function ContactInfoSection() {

  return (
    <section className="py-20 dark:from-gray-900 dark:to-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Let's Connect
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">{info.icon}</div>
                    <h3 className="text-xl font-semibold">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6 dark:border-gray-300 border-[.1rem]">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form className="space-y-4" action="https://formsubmit.co/a09d451665ae435cf961b6e9d24d903f"
                  method="POST">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  {/* Hidden Fields for FormSubmit Features */}
                  <input type="hidden" name="_next" value="https://pavan-updated-portfolio.vercel.app/" />
                  <input type="hidden" name="_captcha" value="false" />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r font-bold text-md from-blue-400 to-purple-500"
                  >
                    {"Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d464444.2554698529!2d80.577173!3d24.5729451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739986691106!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <motion.div className="absolute bottom-4 right-4" whileHover={{ scale: 1.05 }}>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

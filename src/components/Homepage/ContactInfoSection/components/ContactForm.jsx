import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { formFields } from "@/data/contactInfoSectionData";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <Card>
        <CardContent className="p-6 dark:border-gray-300 border-[.1rem]">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form
            className="space-y-4"
            action="https://formsubmit.co/a09d451665ae435cf961b6e9d24d903f"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={`space-y-2 ${
                    field.colSpan === "full" ? "md:col-span-2" : ""
                  }`}
                >
                  <label className="text-sm font-medium" htmlFor={field.id}>
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      className={field.className}
                      required={field.required}
                    />
                  ) : (
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>

            <input
              type="hidden"
              name="_next"
              value="https://pavan-updated-portfolio.vercel.app/"
            />
            <input type="hidden" name="_captcha" value="false" />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r font-bold text-md from-blue-400 to-purple-500"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfoCards = ({contactInfo}) => {
  return (
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
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  {info.icon}
                </div>
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
  );
};

export default ContactInfoCards;

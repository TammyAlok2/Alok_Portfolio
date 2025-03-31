import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";

const ContactInfoCards = ({ contactInfo }) => {
  // Track which items have been copied
  const [copiedStates, setCopiedStates] = useState({});

  // Function to copy text and show animation
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      // Set this item as copied
      setCopiedStates({ ...copiedStates, [index]: true });
      
      // Reset the copied state after animation completes
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [index]: false });
      }, 2000);
    });
  };

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
              <div className="space-y-3">
                {info.details.map((detail, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <p className="text-gray-600 dark:text-gray-300">
                      {detail}
                    </p>
                    <motion.button
                      onClick={() => copyToClipboard(detail, `${index}-${i}`)}
                      className="p-1 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copiedStates[`${index}-${i}`] ? (
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10 
                          }}
                        >
                          <Check size={16} className="text-green-500" />
                        </motion.div>
                      ) : (
                        <Copy size={16} />
                      )}
                    </motion.button>
                  </div>
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
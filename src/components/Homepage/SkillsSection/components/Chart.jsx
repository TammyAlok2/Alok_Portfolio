import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const Chart = ({ chartData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 max-sm:hidden max-sm:p-0">
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--tooltip-bg, #0004e4e0)",
                    color: "var(--tooltip-text, #cfcfcf)",
                    borderRadius: "8px",
                    padding: "10px",
                    border: "1px solid var(--tooltip-border, #d1d5db)",
                  }}
                  wrapperStyle={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value, name, props) => [null, props.payload.name]}
                  labelFormatter={(label) => ""}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ stroke: "#4f46e5", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Chart;

import { Layout, Code, Palette } from "lucide-react";

export const services = [
    {
      id: 1,
      title: "Software Development and Deployment",
      description:
        "Create intuitive and engaging user experiences that delight your customers and drive results.",
      icon: <Layout className="w-8 h-8 text-white" />,
      bgColor: "bg-black",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Build fast, responsive, and scalable backend applications  using modern technologies.",
      icon: <Code className="w-8 h-8 text-white" />,
      bgColor: "bg-black",
    },
    {
      id: 3,
      title: "Gen AI Integration",
      description:
        "Integration of modern chatbot using langchain,NLP and other AI Products in development.",
      icon: <Palette className="w-8 h-8 text-white" />,
      bgColor: "bg-black",
    },
  ];
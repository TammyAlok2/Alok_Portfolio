import { Layout, Code, Palette } from "lucide-react";

export const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user experiences that delight your customers and drive results.",
      icon: <Layout className="w-8 h-8 text-white" />,
      bgColor: "bg-black",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Build fast, responsive, and scalable web applications using modern technologies.",
      icon: <Code className="w-8 h-8 text-white" />,
      bgColor: "bg-black",
    },
    {
      id: 3,
      title: "Brand Design",
      description:
        "Develop cohesive brand identities that communicate your values and connect with your audience.",
      icon: <Palette className="w-8 h-8 text-white" />,
      bgColor: "bg-black",
    },
  ];
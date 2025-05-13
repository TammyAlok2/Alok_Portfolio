import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

export const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    details: ["Mangawan Basti Dist.Rewa, (M.P), India"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    details: ["aloktamrakar2@gmail.com"],
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    details: ["+91 9644905810"],
  },
];

export const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#", label: "Github" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
];

export const formFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    required: true,
    colSpan: "half", // For grid layout
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    required: true,
    colSpan: "half", // For grid layout
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "How can I help you?",
    required: true,
    colSpan: "full",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message here...",
    required: true,
    colSpan: "full",
    className: "min-h-[150px]",
  },
];

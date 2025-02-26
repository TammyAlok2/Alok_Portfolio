
import { FaReact, FaPaintBrush, FaSearch } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";

export const experiences = [
  {
    name: "React.js Development",
    position: "right-[25rem] top-4 max-md:right-0 max-[1134px]:right-[20rem]",
    icon: <FaReact className=" text-black dark:text-gray-300" size={24} />,
  },
  {
    name: "Next.js & TypeScript",
    position:
      "top-12 right-[-1rem] max-md:right-0 max-md:top-12 max-[1024px]:top-3",
    icon: (
      <MdDeveloperMode className=" text-black dark:text-gray-300" size={24} />
    ),
  },
  {
    name: "UI/UX & Tailwind CSS",
    position:
      "right-[-3rem] bottom-[-11rem] max-md:right-0 max-md:bottom-[-9rem] max-[1354px]:right-0  max-[1354px]:bottom-[-15rem]",
    icon: <FaPaintBrush className=" text-black dark:text-gray-300" size={24} />,
  },
  {
    name: "JavaScript & ES6+",
    position:
      "top-[4rem] right-[23rem] max-md:right-0 max-md:top-[2rem] max-[1134px]:right-[17rem]",
    icon: <BiCodeAlt className=" text-black dark:text-gray-300" size={24} />,
  },
  {
    name: "On Page Optimization",
    position:
      "right-[28rem] bottom-[-10rem] max-md:right-0 max-md:bottom-[-8rem] max-[1134px]:right-[20rem]",
    icon: <FaSearch className=" text-black dark:text-gray-300" size={24} />,
  },
];

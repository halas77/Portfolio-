"use client"

import { motion } from "framer-motion";

import {
  FaCss3,
  FaPython,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWordpress,
  FaWix,
  FaHtml5,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiRedux,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

import { TbBrandVscode, TbBrandNextjs, TbBrandCpp } from "react-icons/tb";

export const tools = [
  { label: "Git", icon: <FaGitAlt size={25} />, color: "text-green-500" },
  { label: "Github", icon: <FaGithub size={25} />, color: "text-gray-100" },
  {
    label: "VsCode",
    icon: <TbBrandVscode size={25} />,
    color: "text-blue-500",
  },
  { label: "Figma", icon: <FaFigma size={25} />, color: "text-green-500" },
  {
    label: "Wordpress",
    icon: <FaWordpress size={25} />,
    color: "text-blue-500",
  },
  { label: "Wix", icon: <FaWix size={25} />, color: "text-blue-500" },
];

export const techs = [
  { label: "HTML5", icon: <FaHtml5 size={25} />, color: "text-red-500" },
  { label: "CSS", icon: <FaCss3 size={25} />, color: "text-blue-500" },
  {
    label: "Javascript",
    icon: <SiJavascript size={25} />,
    color: "text-yellow-500",
  },
  { label: "Python", icon: <FaPython size={25} />, color: "text-green-500" },
  { label: "React", icon: <FaReact size={25} />, color: "text-sky-500" },
  {
    label: "Tailwind",
    icon: <SiTailwindcss size={25} />,
    color: "text-sky-400",
  },
  {
    label: "Bootstrap",
    icon: <FaBootstrap size={25} />,
    color: "text-blue-500",
  },
  { label: "SQL/MySQL", icon: <FaDatabase size={25} />, color: "text-gray-50" },
  { label: "Django", icon: <SiDjango size={25} />, color: "text-green-500" },
  { label: "Node JS", icon: <FaNodeJs size={25} />, color: "text-green-500" },
  { label: "MongoDB", icon: <SiMongodb size={25} />, color: "text-green-500" },
  { label: "Redux", icon: <SiRedux size={25} />, color: "text-blue-500" },
  { label: "C++", icon: <TbBrandCpp size={25} />, color: "text-blue-500" },
  {
    label: "Next JS",
    icon: <TbBrandNextjs size={25} />,
    color: "text-slate-500",
  },
  {
    label: "Typescript",
    icon: <SiTypescript size={25} />,
    color: "text-blue-500",
  },
];

const page = () => {
  return (
    <div className="w-full h-screen text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-10 md:mx-28 my-8 xl:mx-36 xl:my-10">
          <h1 className="text-4xl mb-12 font-extrabold font-sans">
            MORE{" "}
            <span className="font-sans border-b border-green-500 p-1 pr-10">
              ABOUT ME
            </span>
          </h1>
          <p className="lg:ml-32 xl:ml-96 xl:mr-12 italic text-gray-100">
            With a background in computer science, I am committed to crafting
            efficient software solutions. My expertise spans diverse programming
            languages, including JavaScript, Python, React, SQL, and C++. I
            excel at troubleshooting performance issues in websites and apps,
            implementing new features, and ensuring seamless website
            functionality. My proficiency in both frontend and backend web
            development enables me to tackle projects of all scopes. With my
            technical skills and collaborative mindset, I am well-suited for
            software engineering and web development roles.
          </p>
          <h1 className="mt-28 text-4xl mb-12 font-extrabold font-sans">
            LANGUAGES &{" "}
            <span className="font-sans border-b border-green-500 p-1 pr-10">
              FRAMEWORKS
            </span>
          </h1>
          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              {techs.map((item) => (
                <div
                  key={item.label}
                  className="bg-zinc-900 p-5 rounded-sm hover:bg-zinc-800 ease-in-out duration-200 shadow-2xl flex mx-2"
                >
                  <i className={`${item.color}`}>{item.icon}</i>
                  {<p className="ml-3 font-bold text-sm">{item.label}</p>}
                </div>
              ))}
            </div>
          </div>
          <h1 className="mt-28 text-4xl mb-12 font-extrabold font-sans">
            TOOLS &{" "}
            <span className="font-sans border-b border-green-500 p-1 pr-10">
              PLATFORMS
            </span>
          </h1>
          <div className="pb-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {tools.map((item) => (
                <div
                  key={item.label}
                  className="bg-zinc-900 p-5 rounded-sm hover:bg-zinc-800 ease-in-out duration-200 shadow-2xl flex mx-2"
                >
                  <i className={`${item.color}`}>{item.icon}</i>
                  {<p className="ml-3 font-bold text-sm">{item.label}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;

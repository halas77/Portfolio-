"use client"

import { FaGear, FaDesktop } from "react-icons/fa6";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { MdSupportAgent, MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaDesktop size={40} />,
    label: "Frontend Developement",
    desc: "Crafts captivating and user-friendly interfaces, ensuring an engaging online experience for your customers.",
  },
  {
    icon: <FaGear size={40} />,
    label: "Backend Developement",
    desc: "I handle the technical backbone of your application, guaranteeing seamless functionality and data management",
  },
  {
    icon: <TbDeviceDesktopCog size={40} />,
    label: "Full Stack",
    desc: "Combines the best of FrontEnd and BackEnd, delivering comprehensive solutions that meet all your project needs",
  },
  {
    icon: <GiTeacher size={40} />,
    label: "Lecture and Mentorship",
    desc: "Empower individuals and teams by sharing knowledge and providing guidance, fostering professional growth and expertise.",
  },
  {
    icon: <MdSupportAgent size={40} />,
    label: "Technical Support",
    desc: "Ensures your systems run smoothly, offering rapid solutions to any software or hardware issues, keeping your business operations on track",
  },
  {
    icon: <MdOutlineSecurity size={40} />,
    label: "Penteration Testing",
    desc: "Fortifies your cybersecurity, proactively identifying vulnerabilities and safeguarding your digital assets against potential threats.",
  },
];

const Services = () => {
  return (
    <div className="w-full text-white ">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-12 md:mx:18 lg:mx-32 my-12">
          <h1 className="font max-sm:text-3xl font-extrabold text-4xl font-sans mb-10">
            SERVICE{" "}
            <span className="font-sans max-sm:text-3xl border-b border-green-500 pb-1 pr-10">
              I OFFER
            </span>
          </h1>
          <div className="">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {services.map((item) => (
                <div
                  key={item.label}
                  className="bg-zinc-900 md:p-16 p-5 flex flex-col mx-auto text-center rounded-md hover:bg-zinc-800 hover:scale-105 ease-in-out duration-300"
                >
                  <i className="text-white mx-auto">{item.icon}</i>
                  <h2 className="font-bold text-green-500 text-xl py-5">
                    {item.label}
                  </h2>
                  <p className="text-gray-300 font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

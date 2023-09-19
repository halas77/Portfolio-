"use client";
import { projects } from "@/constants/constants";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const catagories = ["All", "Web", "Code"];

const Portfolio = () => {
  const [selectedCatagory, setSelectedCatagory] = useState("All");

  const filtered =
    selectedCatagory === "All"
      ? projects
      : projects.filter((project) => project.catagory === selectedCatagory);

  const handleCatagoryChange = (catagory: string) => {
    setSelectedCatagory(catagory);
  };

  return (
    <div className="w-full text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-12 md:mx:18 lg:mx-32 my-12">
          <h1 className="font font-extrabold text-4xl font-sans mb-10">
            PROJECTS &{" "}
            <span className="font-sans border-b border-green-500 pb-1 pr-10">
              WORKS
            </span>
          </h1>
          <div className="">
            <div className="flex justify-center mx-auto mt-12 mb-20">
              <div className="flex items-center justify-between w-72 rounded-md h-10 px-3">
                {catagories.map((catagory) => (
                  <button
                    key={catagory}
                    onClick={() => handleCatagoryChange(catagory)}
                    className={`${
                      selectedCatagory === catagory
                        ? "bg-green-600 text-slate-900"
                        : " text-gray-300 bg-zinc-800 hover:bg-zinc-700 ease-in-out duration-200"
                    } w-20 rounded-sm h-8 font-semibold text-sm`}
                  >
                    {catagory}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((item) => (
                <div
                  key={item.label}
                  className="bg-zinc-900 px-5 my-6 pb-10 flex flex-col mx-auto text-center rounded-md hover:bg-zinc-800 ease-in-out duration-300"
                >
                  <Image
                    src={item.image}
                    width={450}
                    height={30}
                    alt="Project Image"
                    className="mx-auto mt-[-32px] shadow-lg rounded-lg shadow-gray-700"
                  />
                  <h2 className="font-extrabold font-sans text-gray-50 text-xl pt-7 pb-5">
                    {item.label}
                  </h2>
                  <p className="text-gray-400 font-sans">{item.desc}</p>
                  <div className="flex justify-center mx-auto mt-5 gap-5 w-28 rounded-md h- ">
                    <div className="flex justify-center mx-auto w-10 rounded-md h-8 bg-zinc-700 hover:bg-zinc-800 ease-in-out duration-300">
                      <AiFillGithub
                        size={30}
                        className="hover:text-green-400 hover:scale-125 ease-in-out duration-200"
                      />
                    </div>
                    <div className="flex justify-center mx-auto w-10 rounded-md h-8 bg-zinc-700 hover:bg-zinc-800 ease-in-out duration-300">
                      <AiOutlineLink
                        size={30}
                        className="hover:text-green-400 hover:scale-125 ease-in-out duration-200"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;

"use client";

import { TiLocation } from "react-icons/ti";
import { MdEmail, MdCall, MdShare } from "react-icons/md";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import Form from "@/components/Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full text-white">
      <motion.div
        initial={{ opacity: 0, y: 80, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mx-10 md:mx:24 lg:mx-32 my-12">
          <h1 className="font font-extrabold text-4xl font-sans mb-10">
            CONTACT{" "}
            <span className="font-sans border-b border-green-500 pb-1 pr-10">
              ME
            </span>
          </h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="bg-zinc-950 px-4 flex items-center h-28">
              <div className="bg-zinc-800 p-3 rounded-full">
                <i className="text-green-500">
                  <TiLocation size={25} />{" "}
                </i>
              </div>
              <div className="px-5">
                <h2 className="pb-2 text-xl font-sans font-bold text-gray-400">
                  My Address
                </h2>
                <p className="font-sans text-gray-50 text-sm">
                  {" "}
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
            <div className="bg-zinc-950 p-4 flex items-center h-28 ">
              <div className="bg-zinc-800 p-3 rounded-full">
                <i className="text-green-500">
                  <MdEmail size={25} />{" "}
                </i>
              </div>
              <div className="p-5">
                <h2 className="pb-2 text-xl font-sans font-bold  text-gray-400">
                  Email Me
                </h2>
                <p className="font-sans text-gray-50 text-sm">
                  Dawitm777@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-zinc-950 p-4 flex items-center h-28 ">
              <div className="bg-zinc-800 p-3 rounded-full">
                <i className="text-green-500">
                  <MdCall size={25} />{" "}
                </i>
              </div>
              <div className="p-5">
                <h2 className="pb-2 text-xl font-sans font-bold  text-gray-400">
                  Call Me
                </h2>
                <p className="font-sans text-gray-50 text-sm">
                  {" "}
                  +251-938-071193
                </p>
              </div>
            </div>
            <div className="bg-zinc-950 p-4 flex items-center h-28 ">
              <div className="bg-zinc-800 p-3 rounded-full">
                <i className="text-green-500">
                  <MdShare size={25} />{" "}
                </i>
              </div>
              <div className="p-5">
                <h2 className="pb-2 text-xl font-sans font-bold  text-gray-400">
                  Social Links
                </h2>
                <div className="flex gap-3 ">
                  <Link
                    href="https://github.com/halas77"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-gray-100 hover:text-green-500 ease-in-out duration-300">
                      <AiFillGithub size={23} />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/dawit-mellese-670b90254/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-gray-50 hover:text-green-500 ease-in-out duration-300">
                      <AiOutlineLinkedin size={23} />
                    </div>
                  </Link>
                  <Link
                    href="https://twitter.com/Halas9550443467"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-gray-50 hover:text-green-500 ease-in-out duration-300">
                      <AiOutlineTwitter size={23} />
                    </div>
                  </Link>

                  <Link
                    href="https://t.me/dawitmellese"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-gray-50 hover:text-green-500 ease-in-out duration-300">
                      <FaTelegramPlane size={23} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Form />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

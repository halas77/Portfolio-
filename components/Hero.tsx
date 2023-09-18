"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <main className="flex flex-row items-center w-full h-screen mt-[-106px]">
        <div className="mx-8 sm:mx-24 md:mx-36">
          <motion.div
            initial={{ opacity: 0, y: 0, x: -40 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="my-5 text-gray-400 italic">
              Your vision, My code – Unstoppable results.
            </h3>
            <h1 className="my-5 text-green-500 font-extrabold text-4xl md:text-6xl font-sans">
              DAWIT MELLESE
            </h1>
            <p className="text-gray-400 text-lg md:text-xl ">
              I am a passionate{" "}
              <span className="text-white text-xl md:text-2xl">
                {" "}
                software developer{" "}
              </span>
              dedicated to crafting innovative and efficient solutions!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className="w-32 h-10  border border-green-400 mt-5 hover:bg-zinc-950 hover:text-gray-200 hover:border-gray-200 ease-in-out duration-300 rounded-full text-green-400 mr-8">
              {" "}
              Resume{" "}
            </button>
            <button className="w-32 h-10 border border-green-400 mt-5 rounded-full hover:bg-zinc-950 hover:text-gray-200 hover:border-gray-200 ease-in-out duration-300 text-green-400 ">
              {" "}
              Contact Me{" "}
            </button>
            <div className="flex gap-5 my-8 ml-2">
              <Link href={"/"}>
                <div className="w-9 h-9 rounded-full hover:bg-green-600 ease-in-out duration-300 bg-zinc-900 text-gray-300 flex items-center justify-center">
                  <AiFillGithub size={25} />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-9 h-9 rounded-full hover:bg-green-600 ease-in-out duration-300 bg-zinc-900 text-gray-300 flex items-center justify-center">
                  <AiOutlineTwitter size={25} />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-9 h-9 rounded-full hover:bg-green-600 ease-in-out duration-300 bg-zinc-900 text-gray-300 flex items-center justify-center">
                  <AiOutlineLinkedin size={25} />
                </div>
              </Link>

              <Link href={"/"}>
                <div className="w-9 h-9 rounded-full hover:bg-green-600 ease-in-out duration-300 bg-zinc-900 text-gray-300 flex items-center justify-center">
                  <FaTelegramPlane size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

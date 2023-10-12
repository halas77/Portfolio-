"use client";

import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => setOpenMenu((prev) => !prev);
  const pathname = usePathname();

  return (
    <div className="">
      <div className="hidden lg:flex w-full my-10 text-gray-300">
        <div className="w-1/2 text-white lg:ml-24 xl:ml-44 2xl:ml-56 text-4xl font-extrabold"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay:0 }}
        >
          <div className="w-1/2 text-white 700 mr-12 text-4xl font-extrabold"></div>
          <div className="flex w-1/2 font-semibold ">
            <ul className="flex gap-7">
              {navLinks.map((item) => (
                <Link
                 key={item.label}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-white border-b border-green-500 pb-1"
                      : "text-gray-300 hover:border-b hover:border-green-500 pb-1 ease-in-out duration-105"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      {/* Mobile */}
      <div className="mx-6 my-6 flex justify-end lg:hidden">
        <div className=" text-white cursor-pointer" onClick={handleMenu}>
          {openMenu ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>

        <div
          className={
            openMenu
              ? "fixed left-6 top-14 w-[80%] h-[450px] bg-opacity-[95] rounded-md bg-zinc-900 ease-in-out duration-500"
              : "ease-in-out duration-500 fixed top-[-100%]"
          }
        >
          <ul className="p-4 text-center">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="font-semibold p-4 border-b border-zinc-800 text-gray-400"
              >
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "text-green-500 pb-1"
                      : "text-gray-100 hover:text-green-500 pb-1 ease-in-out duration-105"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

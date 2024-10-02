"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";
import { useAppSelector } from "../redux/hooks";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function NavBar({ setShowCart }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hover: { scale: 1.1, rotate: 10 },
  };

  const cartCount = useAppSelector((state) => state.cartReducer.length || 0);

  return (
    <div className="bg-gray-800 py-4 sticky top-0 z-10 shadow-md">
      <div className="container flex justify-between items-center">
        <motion.div
          className="sm:hidden text-[26px] text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 1.2 }}
        >
          <RxHamburgerMenu />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-white"
          whileHover={{ scale: 1.1, color: "#ff0080" }}
        >
          <Link
            href="/"
            className="hover:text-pink-500 transition duration-300"
          >{`MakeUp`}</Link>
        </motion.div>

        <motion.ul
          className="hidden sm:flex gap-6"
          initial="hidden"
          animate="visible"
          variants={linkVariants}
          transition={{ staggerChildren: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="text-white hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.05, color: "#ff0080" }}
            >
              <Link href={link.path}>{link.name}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex gap-6 text-[26px]">
          <motion.div
            className="relative cursor-pointer text-white"
            onClick={() => setShowCart(true)}
            variants={iconVariants}
            whileHover="hover"
          >
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
              {cartCount}
            </div>
          </motion.div>

          <motion.div
            className="cursor-pointer text-white"
            variants={iconVariants}
            whileHover="hover"
          >
            <AiOutlineSearch className="hover:text-pink-500 transition duration-300" />
          </motion.div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden bg-gray-700 py-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="block text-white hover:text-pink-500 py-2 px-4 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

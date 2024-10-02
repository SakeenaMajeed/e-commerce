"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg"
      >
        <video
          src="/WhatsApp Video 2024-10-02 at 01.56.43_c45957c2.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </motion.div>

      {/* Text Container */}
      <div className="absolute bottom-4 left-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 lg:left-10 lg:bottom-10 text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
          Welcome to Our Store
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">
          Discover the best makeup products!
        </p>

        <Link href="/shop">
          <button className="px-3 py-2 text-xs sm:text-sm md:text-base bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-black transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

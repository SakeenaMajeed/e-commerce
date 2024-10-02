"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const categories = [
  {
    img: "/OIP (17).jpeg",
    type: "Makeup",
    quantity: "(3 Items)",
  },
  {
    img: "/download (1).jpeg",
    type: "Nail & Wax",
    quantity: "(8 Items)",
  },
  {
    img: "/10271186.jpeg",
    type: "Skin Care",
    quantity: "(4 Items)",
  },
];

export default function Category() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex(
        (prevIndex) => (prevIndex + 1) % categories.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-10 mt-32 min-h-[50vh] w-full relative">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className={`${roboto.className} text-4xl font-bold mb-4`}>
          Top Category
        </h2>

        <h2
          className={`${roboto.className} text-5xl italic font-extrabold mb-8 text-pink-400 tracking-wide`}
        >
          Favorite Category
        </h2>

        {/* Categories Container */}
        <div className="flex justify-center space-x-10 mb-8 flex-wrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-700 ease-in-out transform ${
                index === currentCategoryIndex
                  ? "scale-110 shadow-2xl"
                  : "scale-100"
              }`}
            >
              <div className="overflow-hidden rounded-full w-40 h-40 flex items-center justify-center border-4 border-pink-500 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={category.img}
                  alt={`Category image of ${category.type}`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3
                className={`text-xl font-bold mt-3 ${
                  index === 0
                    ? "text-pink-400"
                    : index === 1
                    ? "text-white"
                    : "text-blue-300"
                } italic`}
              >
                {category.type}
              </h3>
              <p className="text-sm text-gray-300 italic font-semibold">
                {category.quantity}
              </p>
            </div>
          ))}
        </div>

        <p className="text-md text-gray-400 mt-6 max-w-xl mx-auto">
          Explore our top categories featuring the latest trends in makeup,
          skincare, and more. Find your favorites and elevate your beauty
          routine!
        </p>
      </div>
    </div>
  );
}

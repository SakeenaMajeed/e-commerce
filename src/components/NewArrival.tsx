// src/components/NewArrival.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Whisper } from "next/font/google";
import ProductData from "../utils/ProductData";
import ProductCard, { IProduct } from "./ProductCard";
import Link from "next/link"; // Importing Link for navigation

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const tabData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

export default function NewArrival() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState<IProduct[]>([]);

  const shuffleArray = (array: IProduct[]): IProduct[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setData(shuffleArray(ProductData).slice(0, 15));
  }, []);

  const handleTab = (index: number) => {
    const category = tabData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArray(ProductData).slice(0, 15));
      return;
    }

    const filteredData = ProductData.filter((item) =>
      Array.isArray(item.category)
        ? item.category.some((cat) => cat.toLowerCase().includes(category))
        : typeof item.category === "string" &&
          item.category.toLowerCase().includes(category)
    );
    setData(shuffleArray(filteredData));
  };

  return (
    <div className="container pt-32 px-4 sm:px-6 lg:px-8 bg-slate-200">
      <div className="text-center">
        <h3
          className={`${whisper.className} text-3xl sm:text-4xl md:text-5xl text-gray-700`}
        >
          For your Beauty
        </h3>
        <h2 className="font-semibold text-4xl sm:text-5xl">New Arrival</h2>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-lg sm:text-xl">
          {tabData.map((text, index) => (
            <li
              key={text}
              className={`cursor-pointer hover:text-accent ${
                selectedTab === index ? "text-accent" : ""
              }`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {data.length > 0 ? (
            data.map((item: IProduct) => (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                sale={item.sale}
              />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

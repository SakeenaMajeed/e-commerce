"use client";

import React, { useEffect, useState } from "react";
import ProductCard, { IProduct } from "./ProductCard";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { Whisper } from "next/font/google";
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });
const tabData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

// Sanity client configuration
const client = createClient({
  projectId: "yhjqtjbt",
  dataset: "production",
  apiVersion: "2024-12-25",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function NewArrival() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState<IProduct[]>([]);
  const [originalData, setOriginalData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://yhjqtjbt.api.sanity.io/v2024-12-25/data/query/production?query=*[_type == 'product']"
        );
        const result = await response.json();
        console.log("API Response:", result); 

        if (result.result) {
          const products: IProduct[] = result.result.map((item: any) => ({
            id: item._id,
            img: urlFor(item.image).url() || "https://via.placeholder.com/150",
            name: item.name || "No Name",
            price: item.price || 0,
            sale: item.sale || null,
            category: item.category || "Uncategorized",
          }));
          setOriginalData(products);
          setData(products);
        } else {
          throw new Error("No products found.");
        }
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(err.message || "Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleTab = (index: number) => {
    const category = tabData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(originalData);
      return;
    }

    const filteredData = originalData.filter((item) => {
      const categories = item.category as string | string[];
      if (Array.isArray(categories)) {
        return categories.some(
          (cat) =>
            typeof cat === "string" && cat.toLowerCase().includes(category)
        );
      }
      return (
        typeof categories === "string" &&
        categories.toLowerCase().includes(category)
      );
    });

    setData(filteredData);
  };

  return (
    <div className="container pt-32 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="text-center">
        {/* Stylish Section Heading */}
        <h3 className={`${whisper.className} text-3xl sm:text-4xl md:text-5xl text-gray-700`}>
          For your Beauty
        </h3>
        <h2 className="font-bold text-4xl sm:text-5xl mt-2 text-gray-800">
          New Arrival
        </h2>

        {/* Tabs for Filtering */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-lg sm:text-xl">
          {tabData.map((text, index) => (
            <li
              key={text}
              className={`cursor-pointer hover:text-accent transition duration-300 ${
                selectedTab === index ? "text-accent border-b-2 border-accent" : ""
              }`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : data.length > 0 ? (
            data.map((item: IProduct) => (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                sale={item.sale}
                category={item.category}
              />
            ))
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
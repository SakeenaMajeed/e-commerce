"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareFacebook, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { addToCart } from "@/src/redux/features/cartSlice";

// Sanity Client Configuration
const client = createClient({
  projectId: "yhjqtjbt",
  dataset: "production",
  apiVersion: "2024-12-25",
  useCdn: true,
});

// Image URL Builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [productData, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // Redux dispatch

  useEffect(() => {
    async function fetchProduct() {
      try {
        const query = `*[_type == "product" && _id == $id][0]`;
        const product = await client.fetch(query, { id });

        if (!product) {
          throw new Error("Product not found");
        }

        setProduct(product);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const addProductToCart = () => {
    const payload = {
      id: productData._id,
      name: productData.name,
      img: urlFor(productData.image).url(),
      price: productData.price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };

  if (loading) {
    return <div className="text-center py-8">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="pt-8">
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href="/" className="cursor-pointer hover:text-accent">
            Home
          </Link>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize">{productData?.category?.[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{productData?.name}</p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div>
            <Image
              className="w-full h-[450px] object-contain"
              src={urlFor(productData?.image).url()}
              width={900}
              height={300}
              alt={productData?.name}
            />
          </div>

          {/* Product Information */}
          <div className="space-y-2">
            {/* Ratings */}
            <div className="flex items-center text-accent">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">
                (8 customer reviews)
              </p>
            </div>

            {/* Product Name and Price */}
            <div className="text-[#161616] space-y-1">
              <h2 className="text-3xl font-semibold">{productData?.name}</h2>
              <p className="text-xl">${productData?.price}.00</p>
            </div>

            {/* Description and Stock */}
            <p className="text-gray-500 text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              ipsam debitis dicta ab blanditiis facilis velit laborum id
              pariatur odit perferendis ipsa iusto, eaque voluptatibus quos
              voluptas! Sequi, earum fugiat.
            </p>
            <p className="text-gray-500 text-[14px]">
              {productData?.stock} in stock
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={addProductToCart}
              className="uppercase bg-accent py-2 px-4 rounded-lg text-white flex gap-2 items-center hover:bg-black"
            >
              <AiOutlineShoppingCart className="text-[24px]" /> Add to cart
            </button>

            {/* Wish List and Compare */}
            <div className="flex gap-4 items-center uppercase py-1 text-[14px]">
              <div className="flex gap-1 items-center">
                <AiOutlineHeart /> Add to Wish List
              </div>
              <div className="flex gap-1 items-center">
                <MdCompareArrows /> Compare
              </div>
            </div>

            {/* Product Meta Information */}
            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div>Name: {productData?.name}</div>
            <div className="capitalize">
              Category: {productData?.category?.[0]}
            </div>
            <div className="flex gap-1 items-center capitalize ">
              Tags:{" "}
              {productData?.tags?.map((item: string) => (
                <span key={item} className="bg-gray-200 px-2 py-1 rounded-md">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 container flex justify-center gap-4">
        <Link href="https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL" target="_blank" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaSquareFacebook />
        </Link>
        <Link href="https://www.instagram.com/_sakeena_majeed/profilecard/?igsh=cHZ4MHl3MTF4dDcz" target="_blank" className="text-pink-500 text-2xl hover:text-pink-700">
          <FaSquareInstagram />
        </Link>
        <Link href="https://github.com/SakeenaMajeed" target="_blank" className="text-black text-2xl hover:text-gray-700">
          <FaSquareGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/sakeena-majeed-86b58732a/" target="_blank" className="text-blue-700 text-2xl hover:text-blue-900">
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;

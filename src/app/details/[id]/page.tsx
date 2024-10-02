"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Data from "@/src/utils/ProductData";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";

const ProductDetail = () => {
  const params = useParams();
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    const id = params.id;
    const getProductData = Data.filter((item) => item.id.toString() === id)[0];
    setProductData(getProductData);
  }, [params.id]);

  return (
    <div className="pt-8">
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

      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-[450px] object-contain"
              src={productData?.img}
              width={900}
              height={300}
              alt={productData?.name}
            />
          </div>
          <div className="space-y-2">
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
            <div className="text-[#161616] space-y-1">
              <h2 className="text-3xl font-semibold">{productData?.name}</h2>
              <p className="text-xl">${productData?.price}.00</p>
            </div>
            <p className="text-gray-500 text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              ipsam debitis dicta ab blanditiis facilis velit laborum id
              pariatur odit perferendis ipsa iusto, eaque voluptatibus quos
              voluptas! Sequi, earum fugiat.
            </p>
            <p className="text-gray-500 text-[14px]">20 in stock</p>
            <button className="uppercase bg-accent py-2 px-4 rounded-lg text-white flex gap-2 items-center hover:bg-black">
              <AiOutlineShoppingCart className="text-[24px]" /> Add to cart
            </button>

            <div className="flex gap-4 items-center uppercase py-1 text-[14px]">
              <div className="flex gap-1 items-center">
                <AiOutlineHeart /> Add to Wish List
              </div>
              <div className="flex gap-1 items-center">
                <MdCompareArrows /> Compare
              </div>
            </div>
            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div>Name: {productData?.name}</div>
            <div className="capitalize">
              Category: {productData?.category[0]}
            </div>
            <div className="flex gap-1 items-center capitalize ">
              Tags:{" "}
              {productData?.category.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div className="flex gap-1 items-center pt-1">
              SHARE:{" "}
              <div className="flex gap-1 items-center text-[18px]">
                <a
                  href="https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook />
                </a>
                <a
                  href="https://www.instagram.com/_sakeena_majeed?igsh=cHZ4MHl3MTF4dDcz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/SakeenaMajeed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

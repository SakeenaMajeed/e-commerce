import React from "react";
import Image from "next/image";

interface PropsType {
  img: string;
  title: string;
  desc: string;
}

export default function FeatureCard({ img, title, desc }: PropsType) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
      <Image
        className="h-[50px] w-auto mr-4"
        src={img}
        width={60}
        height={50}
        alt={title}
        priority={true} 
      />
      <div className="space-y-1">
        <h2 className="font-medium text-lg md:text-xl uppercase text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
}

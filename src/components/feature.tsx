import React from "react";
import FeatureCard from "./featureCard";

const data = [
    {
        img: "/png-transparent-money-bag-computer-icons-coin-dollar-payment-bank-united-states-dollar.png",
        title: "Secure Payment",
        desc: "Fully protected when paying online",
    },
    {
        img: "/download.png",
        title: "Naturally Derived",
        desc: "Natural and organic beauty product",
    },
    {
        img: "/images.png",
        title: "Free Shipping",
        desc: "Free shipping on all orders over $99",
    },
];

export default function Feature() {
  return (
    <div className="container pt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(item => (
          <FeatureCard 
            key={item.title} 
            img={item.img} 
            title={item.title} 
            desc={item.desc} 
          />
        ))}
      </div>
    </div>
  );
}

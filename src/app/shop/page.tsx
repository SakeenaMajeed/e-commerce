// src/app/shop/page.tsx
import React from "react";
import NewArrival from "@/src/components/NewArrival";

import Category from "@/src/components/category";
import Footer from "@/src/components/Footer";

const ShopPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gray-300 shadow py-4">
        <main className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Beauty Shop!
          </h1>
          <p className="text-lg text-gray-600">
            Explore a wide range of high-quality makeup products
          </p>
        </main>
      </header>

      <section className="py-10">
        <NewArrival />
      </section>

      <main className="flex-grow container mx-auto px-2 py-10">
        <Category />
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;

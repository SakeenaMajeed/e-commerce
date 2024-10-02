import React from "react";
import BlogSection from "../components/BlogSection";
import Category from "../components/category";
import Feature from "../components/feature";
import Hero from "../components/hero";
import NewArrival from "../components/NewArrival";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <BlogSection />
      <Footer />
    </div>
  );
}

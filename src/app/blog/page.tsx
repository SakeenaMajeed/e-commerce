
import React from "react";
import Footer from "@/src/components/Footer"; 
import BlogSection from "@/src/components/BlogSection";


const data = [
  {
    img: "/path/to/image1.jpg", 
    title: "Blog Post Title 1",
    date: "October 1, 2024",
    comment: "3 comments",
  },
  {
    img: "/path/to/image2.jpg",
    title: "Blog Post Title 2",
    date: "October 2, 2024",
    comment: "5 comments",
  },
  {
    img: "/path/to/image3.jpg",
    title: "Blog Post Title 3",
    date: "October 3, 2024",
    comment: "2 comments",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-gray-300 shadow py-4">
        <main className="container mx-auto px-4 text-center mt-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Latest Blogs!
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Stay updated with our latest beauty tips and trends.
          </p>
        </main>
      </div>

      <main className="flex-grow container mx-auto px-4 py-10">
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

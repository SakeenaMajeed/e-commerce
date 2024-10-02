import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "https://th.bing.com/th/id/OIP.oXu7mccvx4h6gDtm4XC0xgHaE8?rs=1&pid=ImgDetMain",
    title: "Lorem ipsum dolor sit amet",
    date: "sep 27 , 2024",
    comment: 8,
  },
  {
    img: "https://www.maverickx.io/wp-content/uploads/2022/12/iStock-1199860641.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "sep 25 , 2024",
    comment: 1,
  },
  {
    img: "https://th.bing.com/th/id/R.d04ad041b191445a1ce67f950ee61802?rik=pVnA%2bnhHpvaQ8Q&pid=ImgRaw&r=0",
    title: "Lorem ipsum dolor sit amet",
    date: "sep 30 , 2024",
    comment: 6,
  },
];

export default function BlogSection() {
  return (
    <div className="w-full mx-auto px-4 pt-32 ">
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        Latest News
      </h2>
      <p className="text-gray-500 text-sm md:text-base lg:text-lg text-center">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item, index) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
            style={
              index === 0
                ? { height: "228px", width: "100%", objectFit: "cover" }
                : {}
            } 
          />
        ))}
      </div>
    </div>
  );
}

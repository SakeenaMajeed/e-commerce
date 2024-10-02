import React from "react";

interface propsType {
  img: string;
  title: string;
  comment: number;
  date: string;
  style?: React.CSSProperties;
}

export default function BlogCard({
  img,
  title,
  date,
  comment,
  style,
}: propsType) {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
        style={style}
      />
      <div className="text-accent font-medium">
        <span>{date} /</span>
        <span>{comment} comments</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
}

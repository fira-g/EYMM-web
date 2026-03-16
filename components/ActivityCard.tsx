"use client";

import React from "react";
interface ActivityProps {
  image: string;
  title: string;
  description: string;
  link: string;
}
function ActivityCard({ image, title, description, link }: ActivityProps) {
  return (
    <div className="bg-blue-200 w-[500px] rounded px-5 py-6 gap-3 flex justify-evenly items-center drop-shadow-lg ">
      <img src={image} alt={title} className="rounded h-[150px] w-[170px] " />
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="font-bold text-center">{title}</h1>
        <p className="text-center text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-100 bg-primary-200 rounded px-3 py-1 drop-shadow-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ActivityCard;

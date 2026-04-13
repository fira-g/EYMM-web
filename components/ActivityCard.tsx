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
    /* Changes:
       1. Removed w-[500px] and added w-full with a max-width for desktop.
       2. Changed flex to flex-col (mobile) and md:flex-row (desktop).
    */
    <div className="bg-blue-200 w-[60%] md:w-full max-w-[500px] rounded px-5 py-6 gap-5 flex flex-col md:flex-row justify-evenly items-center drop-shadow-lg mx-auto">
      {/* Image: Adjusted to be responsive. Full width on mobile, fixed on desktop */}
      <img
        src={image}
        alt={title}
        className="rounded h-[180px] w-full md:h-[150px] md:w-[170px] object-cover"
      />

      <div className="flex flex-col gap-3 justify-center items-center md:items-start">
        <h1 className="font-bold text-center md:text-left text-lg leading-tight">
          {title}
        </h1>
        <p className="text-center md:text-left text-sm line-clamp-3">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-100 bg-primary-200 rounded px-4 py-2 text-sm font-medium drop-shadow-lg transition-transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ActivityCard;

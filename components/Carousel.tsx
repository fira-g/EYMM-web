"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActivityCard from "./ActivityCard";

type Activity = {
  image: string;
  title: string;
  description: string;
  link: string;
};

interface CarouselProps {
  activities: Activity[];
  autoSlide?: boolean;
  interval?: number;
}

export default function Carousel({
  activities,
  autoSlide = true,
  interval = 3500,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % activities.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  useEffect(() => {
    if (!autoSlide || paused) return;

    const id = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(id);
  }, [index, autoSlide, interval, paused]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto overflow-hidden py-10 px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex"
        animate={{
          // This moves the track so the "index" is always centered
          // 33.33% is the width of one card.
          // We shift by (index * 33.33) to align the start, then add 33.33 to offset it to center.
          x: `calc(-${index * 33.333}% + 33.333%)`,
        }}
        transition={{
          //   type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {activities.map((act, i) => {
          const isActive = i === index;

          return (
            <motion.div
              key={i}
              className="min-w-[33.333%] flex justify-center px-3"
              animate={{
                scale: isActive ? 1.2 : 0.85,
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ActivityCard
                image={act.image}
                title={act.title}
                description={act.description}
                link={act.link}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg transition"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {activities.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 transition-all duration-300 rounded-full ${
              i === index ? "w-8 bg-primary-100" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

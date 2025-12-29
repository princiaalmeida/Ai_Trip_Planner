"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-2xl pl-3 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destination To Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Rome, Italy",
    title: "Walk through History – Colosseum, Vatican, Roman Forum",
    src: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation – Burj Khalifa, Desert Safari",
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop", // ✅ your requested Dubai
    content: <DummyContent />,
  },
  {
    category: "India",
    title: "Heritage & Wonders – Taj Mahal, Wildlife, Culture",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", // ✅ Taj Mahal
    content: <DummyContent />,
  },
  {
    category: "Paris, France",
    title: "Explore the City of Lights – Eiffel Tower, Louvre & more",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "Experience NYC – Times Square, Central Park, Broadway",
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo – Shibuya, Cherry Blossoms, Temples",
    src: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=1600&q=80",
    content: <DummyContent />,
  },
];

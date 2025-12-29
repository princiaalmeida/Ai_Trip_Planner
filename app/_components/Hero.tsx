"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowDown, Globe2, Send } from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire me where to go",
    icon: <Globe2 className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Discover Hidden Gems",
    icon: <Globe2 className="text-orange-500 h-5 w-5" />,
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className="text-yellow-600 h-5 w-5" />,
  },
];

function Hero() {
  const { user } = useUser();
  const router = useRouter();
  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    //navigate to create Plan web page
  };

  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center space-y-6">
      {/* Container for all content and input */}
      <div className="max-w-3xl w-full text-center flex flex-col items-center space-y-6">
        <h1 className="text-xl md:text-4xl font-bold">
          Hey, I'm You're Personal{" "}
          <span className="text-primary">Trip Planner</span>
        </h1>
        <p className="text-lg">
          Tell me what you what and I'll handle the rest: Flight, Hotels, trip
          Planner - all in seconds
        </p>

        {/* PROPER Input Box with Flexbox and absolute button positioning */}
        <div className="w-full border rounded-2xl p-2 flex relative">
          <Textarea
            placeholder="Create a trip form Pris to New york"
            className="flex-grow bg-transparent border-none focus-visible:ring-0 resize-none h-28 pr-10" // Added pr-10
          />
          <Button
            size={"icon"}
            className="absolute bottom-6 right-6"
            onClick={() => onSend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Suggestion List (now outside the main vertical flex container) */}
      <div className="flex gap-3 p-2">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex gap-2 items-center border rounded-lg p-2 hover:bg-primary hover:text-white cursor-pointer"
          >
            {suggestion.icon}
            <h2 className="text-sm font-medium">{suggestion.title}</h2>
          </div>
        ))}
      </div>

      <h2 className="my-7 mt-14 flex gap-2 text-center">
        Not sure where to start?{" "}
        <strong>
          See how it works
          <ArrowDown />{" "}
        </strong>
      </h2>

      {/* Video Section */}
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.example.com/dummy-video"
        thumbnailSrc="https://mma.prnewswire.com/media/2401528/1__MindtripProduct.jpg?p=facebook.com"
        thumbnailAlt="Dummy Video Thumbnail"
      />
    </div>
  );
}

export default Hero;

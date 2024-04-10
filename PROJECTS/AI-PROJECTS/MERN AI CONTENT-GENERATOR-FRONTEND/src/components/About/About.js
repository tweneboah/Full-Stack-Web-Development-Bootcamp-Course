import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Innovative Solutions",
    description:
      "At Masync, innovation drives our solutions. We specialize in transforming complex AI technology into user-friendly tools for content generation, ensuring our clients stay ahead in the digital content race.",
    icon: PhoneIcon,
  },
  {
    name: "Dedicated Customer Support",
    description:
      "We believe in empowering our users with continuous support. Our dedicated team is always on standby to assist with any queries, ensuring a smooth, uninterrupted experience in content creation.",
    icon: LifebuoyIcon,
  },
  {
    name: "Press & Media Collaborations",
    description:
      "Masync is at the forefront of AI-driven content generation. We're eager to collaborate with media and press to share insights and developments in AI technology, shaping the future of digital content.",
    icon: NewspaperIcon,
  },
];

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background and layout elements */}
      {/* ... */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Masync AI - Redefining Content Creation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Masync AI is revolutionizing the way content is created. Our
            cutting-edge AI technology automates and enhances content
            generation, enabling creators to produce high-quality, engaging
            material with ease.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

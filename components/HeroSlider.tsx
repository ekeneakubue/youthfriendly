"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string; // path under public
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Empowering Youth at UNN",
    subtitle: "Resources, mentorship, and opportunities for every student.",
    image: "/images/24.webp", // placeholder; swap with actual banner later
  },
  {
    id: 2,
    title: "Health, Skills, Careers",
    subtitle: "Holistic programs to help you thrive.",
    image: "/images/30.webp",
  },
  {
    id: 3,
    title: "Community & Events",
    subtitle: "Join our workshops, talks, and campus initiatives.",
    image: "/images/28.webp",
  },
  {
    id: 4,
    title: "Community & Events",
    subtitle: "Join our workshops, talks, and campus initiatives.",
    image: "/images/9.webp",
  },
  {
    id: 5,
    title: "Community & Events",
    subtitle: "Join our workshops, talks, and campus initiatives.",
    image: "/images/13.webp",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="relative h-[56vh] sm:h-[64vh] md:h-[72vh] lg:h-[80vh]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-20 brightness-125 contrast-110 saturate-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-start justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#services" className="px-5 py-3 text-sm rounded bg-emerald-600 text-white hover:bg-emerald-700">
              Explore Services
            </a>
            <a href="#contact" className="px-5 py-3 text-sm rounded border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
              Get Involved
            </a>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "bg-emerald-600 w-8" : "bg-emerald-600/40 w-2"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



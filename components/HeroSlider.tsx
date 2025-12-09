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
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-200 via-emerald-100 to-white text-emerald-950"
    >
      <div className="relative h-[56vh] sm:h-[64vh] md:h-[72vh] lg:h-[80vh]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-70 brightness-110 contrast-105 saturate-115"
            priority
          />
          {/* Much lighter overlays so images stay bright but text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/25 via-transparent to-emerald-100/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-start justify-center">
          <div className="max-w-xl rounded-2xl bg-black/45 backdrop-blur-md px-5 py-6 sm:px-8 sm:py-7 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              {slide.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              {slide.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                className="px-5 py-3 text-sm rounded bg-emerald-500 text-white font-medium hover:bg-emerald-600 shadow-md hover:shadow-lg transition"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-5 py-3 text-sm rounded border border-emerald-300 text-emerald-100 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition"
              >
                Get Involved
              </a>
            </div>
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



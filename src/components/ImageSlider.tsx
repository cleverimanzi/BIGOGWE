import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Compass, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "../data/images";

export const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  // 4-second automatic interval
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[640px] md:h-[720px] lg:h-[780px] bg-[#0D261A] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Bigogwe Hero Carousel"
    >
      {/* Background Slides with crossfade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== slide.fallbackImage) {
                target.src = slide.fallbackImage;
              }
            }}
            alt={slide.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-10000"
          />
          {/* Multi-layer measured gradient scrim for 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-3xl">
          {/* Slide Tag / Theme */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DDA15E] mb-3">
            <span className="w-6 h-px bg-[#DDA15E]" />
            <span>{currentSlide.tag}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/80">Nyabihu District, Rwanda</span>
          </div>

          {/* Mandatory Main Headings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-[1.1] text-balance">
            WELCOME TO BIGOGWE
          </h1>

          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-serif text-[#EFEADF] italic font-normal text-balance">
            Discover the Culture, Cattle and Natural Beauty of Bigogwe
          </p>

          <p className="mt-4 text-sm sm:text-base text-stone-200/90 leading-relaxed max-w-2xl font-light">
            {currentSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 text-sm font-semibold text-[#143826] bg-[#DDA15E] hover:bg-[#BC6C25] hover:text-white rounded-lg transition-all duration-200 shadow-lg shadow-black/20 flex items-center gap-2 group whitespace-nowrap shrink-0"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/activities"
              className="px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-xs rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Compass className="w-4 h-4 text-[#DDA15E]" />
              <span>Explore Activities</span>
            </Link>
          </div>
        </div>

        {/* Prev / Next controls and Slider indicators */}
        <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8 lg:left-12 lg:right-12 flex items-center justify-between z-30 pt-4 border-t border-white/15">
          {/* Slider Indicators */}
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-1.5 focus:outline-none ${
                  idx === currentIndex
                    ? "w-8 bg-[#DDA15E]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="ml-3 text-xs text-stone-300 font-mono">
              0{currentIndex + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full text-white/90 hover:text-white bg-black/40 hover:bg-black/70 border border-white/20 backdrop-blur-xs transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full text-white/90 hover:text-white bg-black/40 hover:bg-black/70 border border-white/20 backdrop-blur-xs transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

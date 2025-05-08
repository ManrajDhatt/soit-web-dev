"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function HeroAnimation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  const slides = [
    {
      title: "Virtual Reality Experience",
      description: "Immerse yourself in stunning virtual worlds",
      // image: "https://images.pexels.com/photos/3761347/pexels-photo-3761347.jpeg",
      image:"vr.avif",
      overlayPosition: "left",
    },
    {
      title: "Augmented Reality Innovation",
      description: "Transform the world around you",
      image:"ar.jpg",
      overlayPosition: "right",
    },
    {
      title: "Mixed Reality Future",
      description: "Where virtual and reality converge",
      image:"vr_2.webp",
      overlayPosition: "center",
    },
  ];

  // Initialize window size on client-side
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const getOverlayStyle = (position: string) => {
    switch (position) {
      case "left":
        return "bg-gradient-to-r from-background/90 via-background/50 to-transparent";
      case "right":
        return "bg-gradient-to-l from-background/90 via-background/50 to-transparent";
      default:
        return "bg-gradient-to-t from-background/90 via-background/50 to-transparent";
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${getOverlayStyle(slides[currentSlide].overlayPosition)}`} />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 p-8"
          >
            <h2 className="mb-2 font-heading text-3xl font-bold text-black md:text-4xl lg:text-5xl">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg text-black/80 md:text-xl">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-8 top-8 h-24 w-24 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-8 top-16 h-16 w-16 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm"
      />

      {/* Particle Effects */}
      {windowSize.width > 0 && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-1 w-1 rounded-full bg-white/30"
        />
      ))}
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export function HeroAnimation() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [progressKey, setProgressKey] = useState(0); // Key to reset progress animation

//   const slides = [
//     // { image: "vr.avif" },
//     {image:"https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/3:2/w_1280%2Cc_limit/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg"},
//     { image: "ar.jpg" },
//     { image: "vr_2.webp" },
//     {image:"https://media.istockphoto.com/id/1440817156/photo/man-building-digital-3d-models.jpg?s=612x612&w=0&k=20&c=WNt1zutUcRfsGX_r4v5JnxqiUegCkWDwwYhKQg6Adh4="},
//     // {image:"https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/12/blender-on-macbook.jpg"},

//     {image:"https://store-images.s-microsoft.com/image/apps.57359.14113671515813629.e6ce4244-e76e-49d1-af79-455e0ac818be.90e96f5c-6c37-45c4-9742-94e9e33c81c3"}
//   ];

//   const slideDuration = 5000; // 8 seconds per slide

//   // Initialize window size on client-side
//   useEffect(() => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-slide interval
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         setIsAnimating(true);
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setProgressKey((prev) => prev + 1); // Reset progress
//         setTimeout(() => setIsAnimating(false), 600); // Match transition duration
//       }
//     }, slideDuration);

//     return () => clearInterval(interval);
//   }, [isAnimating]);

//   // Handle manual slide change (bars)
//   const handleBarClick = (index: number) => {
//     if (!isAnimating && index !== currentSlide) {
//       setIsAnimating(true);
//       setCurrentSlide(index);
//       setProgressKey((prev) => prev + 1); // Reset progress
//       setTimeout(() => setIsAnimating(false), 600); // Match transition duration
//     }
//   };

//   // Animation variants for sliding (always right-to-left)
//   const slideVariants = {
//     initial: {
//       x: "100%", // Enter from right
//     },
//     animate: {
//       x: 0,
//       transition: {
//         x: { duration: 0.6, ease: "easeInOut" },
//       },
//     },
//     exit: {
//       x: "-100%", // Exit to left
//       transition: {
//         x: { duration: 0.6, ease: "easeInOut" },
//       },
//     },
//   };

//   // Progress animation for active bar
//   const progressVariants = {
//     initial: { width: "0%" },
//     animate: {
//       width: "100%",
//       transition: {
//         duration: slideDuration / 1000,
//         ease: "linear",
//       },
//     },
//   };

//   return (
//     <div className="relative h-full w-full overflow-hidden rounded-2xl">
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={currentSlide}
//           layoutId="slide"
//           variants={slideVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           className="relative h-full w-full"
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt={`Slide ${currentSlide + 1}`}
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Bars with Progress */}
//       <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleBarClick(index)}
//             className={`h-1 rounded-full overflow-hidden ${
//               currentSlide === index ? "w-12 bg-white/50" : "w-4 bg-white/50"
//             }`}
//           >
//             {currentSlide === index && (
//               <motion.div
//                 key={progressKey} // Reset animation on slide change
//                 variants={progressVariants}
//                 initial="initial"
//                 animate="animate"
//                 className="h-full bg-blue-500"
//               />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Particle Effects */}
//       {windowSize.width > 0 &&
//         Array.from({ length: 20 }).map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{
//               x: Math.random() * windowSize.width,
//               y: Math.random() * windowSize.height,
//             }}
//             animate={{
//               x: Math.random() * windowSize.width,
//               y: Math.random() * windowSize.height,
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute h-1 w-1 rounded-full bg-white/30"
//           />
//         ))}
//     </div>
//   );
// }
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function HeroAnimation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [progressKey, setProgressKey] = useState(0);
  const isFirstRender = useRef(true); // Track first render

  const slides = [
    { image: "https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/3:2/w_1280%2Cc_limit/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg" },
    { image: "ar.jpg" },
    { image: "vr_2.webp" },
    { image: "https://media.istockphoto.com/id/1440817156/photo/man-building-digital-3d-models.jpg?s=612x612&w=0&k=20&c=WNt1zutUcRfsGX_r4v5JnxqiUegCkWDwwYhKQg6Adh4=" },
    { image: "https://store-images.s-microsoft.com/image/apps.57359.14113671515813629.e6ce4244-e76e-49d1-af79-455e0ac818be.90e96f5c-6c37-45c4-9742-94e9e33c81c3" },
  ];

  const slideDuration = 5000;

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgressKey((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 600);
      }
    }, slideDuration);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Set isFirstRender to false after first render
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Handle manual slide change
  const handleBarClick = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setProgressKey((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Animation variants for sliding
  const slideVariants = {
    initial: {
      x: isFirstRender.current ? 0 : "100%", // Start at x: 0 for first render
    },
    animate: {
      x: 0,
      transition: {
        x: { duration: 0.6, ease: "easeInOut" },
      },
    },
    exit: {
      x: "-100%",
      transition: {
        x: { duration: 0.6, ease: "easeInOut" },
      },
    },
  };

  // Progress animation for active bar
  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: slideDuration / 1000,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          layoutId="slide"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative h-full w-full"
        >
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Bars with Progress */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBarClick(index)}
            className={`h-1 rounded-full overflow-hidden ${
              currentSlide === index ? "w-12 bg-white/50" : "w-4 bg-white/50"
            }`}
          >
            {currentSlide === index && (
              <motion.div
                key={progressKey}
                variants={progressVariants}
                initial="initial"
                animate="animate"
                className="h-full bg-blue-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Particle Effects */}
      {windowSize.width > 0 &&
        Array.from({ length: 20 }).map((_, i) => (
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
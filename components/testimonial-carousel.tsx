// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const testimonials = [
//   {
//     id: 1,
//     content: "The AR/VR program at the School of Immersive Technologies completely transformed my career path. The hands-on projects and industry connections helped me land my dream job at a leading tech company.",
//     author: "Priya Sharma",
//     role: "VR Developer at TechVision",
//     image: "https://images.pexels.com/photos/4048018/pexels-photo-4048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 2,
//     content: "The faculty's expertise and the cutting-edge lab equipment provided me with invaluable experience. I was able to create a VR project that won national recognition even before graduating.",
//     author: "Raj Patel",
//     role: "AR App Developer",
//     image: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 3,
//     content: "As someone with no prior experience in AR/VR, I was amazed at how accessible the program made these complex technologies. The step-by-step guidance and supportive community were incredible.",
//     author: "Ananya Gupta",
//     role: "Immersive Experience Designer",
//     image: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   }
// ];

// export function TestimonialCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
//   const goToNext = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };
  
//   const goToPrev = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };
  
//   useEffect(() => {
//     // Auto-advance the carousel
//     intervalRef.current = setInterval(goToNext, 5000);
    
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, []);
  
//   return (
//     <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">
//       <div className="absolute right-6 top-6 text-primary/20 sm:right-10 sm:top-10">
//         <Quote className="h-12 w-12 rotate-180" />
//       </div>
      
//       <div className="relative min-h-[300px]">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={testimonial.id}
//             className={cn(
//               "absolute inset-0 transition-opacity duration-500",
//               index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
//             )}
//           >
//             <blockquote className="mb-8 text-lg italic text-foreground sm:text-xl">
//               "{testimonial.content}"
//             </blockquote>
            
//             <div className="flex items-center gap-4">
//               <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.author}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <div className="font-heading font-medium">{testimonial.author}</div>
//                 <div className="text-sm text-muted-foreground">{testimonial.role}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="mt-8 flex justify-between">
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={goToPrev}
//           disabled={isAnimating}
//           className="rounded-full"
//         >
//           <ChevronLeft className="h-5 w-5" />
//           <span className="sr-only">Previous</span>
//         </Button>
        
//         <div className="flex gap-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 if (isAnimating) return;
//                 setIsAnimating(true);
//                 setActiveIndex(index);
//                 setTimeout(() => setIsAnimating(false), 500);
//               }}
//               className={cn(
//                 "h-2 w-2 rounded-full transition-all duration-300",
//                 index === activeIndex
//                   ? "w-8 bg-primary"
//                   : "bg-primary/30 hover:bg-primary/50"
//               )}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
        
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={goToNext}
//           disabled={isAnimating}
//           className="rounded-full"
//         >
//           <ChevronRight className="h-5 w-5" />
//           <span className="sr-only">Next</span>
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "The AR/VR program at the School of Immersive Technologies completely transformed my career path. The hands-on projects and industry connections helped me land my dream job at a leading tech company.",
    author: "Priya Sharma",
    role: "VR Developer at TechVision",
    image: "https://images.pexels.com/photos/4048018/pexels-photo-4048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "The faculty's expertise and the cutting-edge lab equipment provided me with invaluable experience. I was able to create a VR project that won national recognition even before graduating.",
    author: "Raj Patel",
    role: "AR App Developer",
    image: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "As someone with no prior experience in AR/VR, I was amazed at how accessible the program made these complex technologies. The step-by-step guidance and supportive community were incredible.",
    author: "Ananya Gupta",
    role: "Immersive Experience Designer",
    image: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    // Auto-advance the carousel
    intervalRef.current = setInterval(goToNext, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div className="relative mx-auto max-w-5xl py-16">
      {/* Background animation elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -left-12 top-12 text-primary/5 animate-pulse">
          <Sparkles className="h-32 w-32" />
        </div>
        <div className="absolute right-16 bottom-16 text-accent/5 animate-pulse" style={{ animationDelay: "1s" }}>
          <Users className="h-40 w-40" />
        </div>
        <div className="absolute left-1/3 top-1/2 text-primary/3 animate-spin-slow">
          <Star className="h-16 w-16" />
        </div>
        <div className="absolute left-1/2 top-1/4 text-primary/5 animate-float">
          <Quote className="h-24 w-24" />
        </div>
      </div>
      
      {/* Section heading */}
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Student Experiences
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
      Hear from our students about their journey in immersive technologies
        </p>
      </div>
      
      {/* Main testimonial card */}
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-primary/5 p-8 shadow-xl shadow-primary/5 sm:p-10">
        <div className="absolute right-6 top-6 text-primary/20 sm:right-10 sm:top-10">
          <Quote className="h-12 w-12 rotate-180" />
        </div>
        
        <div className="relative min-h-[320px] flex flex-col justify-between">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "absolute inset-0 transition-all duration-500",
                index === activeIndex 
                  ? "opacity-100 translate-x-0" 
                  : index < activeIndex 
                    ? "opacity-0 -translate-x-full pointer-events-none" 
                    : "opacity-0 translate-x-full pointer-events-none"
              )}
            >
              <div className="flex flex-col h-full">
                <blockquote className="mb-8 text-lg italic text-foreground sm:text-xl md:text-xl leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-medium text-xl">{testimonial.author}</div>
                    <div className="text-primary font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Accent decorations */}
        <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-primary/10 blur-xl"></div>
        <div className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-accent/10 blur-xl"></div>
      </div>
      
      {/* Controls */}
      <div className="mt-10 flex justify-between items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          disabled={isAnimating}
          className="rounded-full hover:bg-primary/10 hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={cn(
                "h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-10 bg-primary shadow-sm shadow-primary/20"
                  : "w-3 bg-primary/30 hover:bg-primary/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          disabled={isAnimating}
          className="rounded-full hover:bg-primary/10 hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      
      {/* Call to action */}
      <div className="mt-16 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center shadow-xl">
        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Join Our Immersive Technology Community
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Discover how our immersive technology programs can transform your career path and creative potential.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="/programs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Explore Programs
          </a>
          <a href="/apply" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

// Add this animation to your global CSS file
const additionalCSS = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}
`;
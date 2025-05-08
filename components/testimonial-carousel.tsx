"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">
      <div className="absolute right-6 top-6 text-primary/20 sm:right-10 sm:top-10">
        <Quote className="h-12 w-12 rotate-180" />
      </div>
      
      <div className="relative min-h-[300px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <blockquote className="mb-8 text-lg italic text-foreground sm:text-xl">
              "{testimonial.content}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          disabled={isAnimating}
          className="rounded-full"
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
                "h-2 w-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
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
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
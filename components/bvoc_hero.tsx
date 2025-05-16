"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function HeroSection({ title, description, image }: HeroSectionProps) {
  // Refs for GSAP animations
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const subDescriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations
    // Animate the background video (scale only, no fade)
    gsap.fromTo(
      heroVideoRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: "power3.out" }
    );

    // Animate the hero content (title, description, button)
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        subDescriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-80">
        <video
          ref={heroVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={image}
          className="w-full h-full object-cover"
        >
          <source src="/bvoc_hero.webm" type="video/webm" />
          <source src="/bvoc_hero.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <Image src={image} alt={title} fill className="object-cover" />
        </video>
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div
        ref={heroContentRef}
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center"
      >
        <h1
          ref={titleRef}
          className="mb-4 font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl drop-shadow-lg"
        >
          {title}
        </h1>
        <p
          ref={descriptionRef}
          className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl drop-shadow-md"
        >
          {description}
        </p>
        <p
          ref={subDescriptionRef}
          className="mt-4 text-sm text-white/80 drop-shadow-md"
        >
          Dive into the world of immersive technologies with hands-on learning and industry-ready skills.
        </p>
        <div ref={buttonRef} className="mt-6 flex justify-center gap-4">
          <Button
            asChild
            className="h-12 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
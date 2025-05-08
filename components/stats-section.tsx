"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from "@/lib/utils";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

function StatItem({ label, value, suffix = '', delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startValue = 0;
    const duration = 2000; // ms
    const interval = 50; // ms
    const step = Math.ceil(value / (duration / interval));
    
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        startValue += step;
        
        if (startValue > value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(startValue);
        }
      }, interval);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);
  
  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        className="mb-2 font-heading text-4xl font-bold text-primary sm:text-5xl"
      >
        {count}{suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
        className="text-muted-foreground"
      >
        {label}
      </motion.div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative border-y border-border py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Impact
          </h2>
          
          <div className="mx-auto max-w-4xl grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatItem label="Students Enrolled" value={500} delay={0} />
            <StatItem label="Industry Partners" value={50} delay={1} />
            <StatItem label="Job Placement Rate" value={98} suffix="%" delay={2} />
            <StatItem label="Research Projects" value={125} delay={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
// components/admissions/AdmissionProcess.tsx
"use client";

import { Button } from "@/components/ui/button";
import { FileText, Users, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: "spring", bounce: 0.4 } },
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function AdmissionProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description:
        "Complete the online or offline application form with your personal and academic details. Ensure all required fields are filled accurately to avoid delays.",
      // link: "/apply",
      // linkText: "Start Application",
    },
    {
      icon: Users,
      title: "Attend Counseling Session",
      description:
        "Participate in a personalized counseling session with our experts to discuss your career goals, explore program options, and clarify any doubts. Sessions are available for students and parents.",
      link: "/contact",
      linkText: "Schedule a Session",
    },
    {
      icon: FileText,
      title: "Submit Documents",
      description:
        "Provide the necessary documents, including 10th and 12th mark sheets, graduation certificate (if applicable), identity proof (Aadhar card, passport, etc.), passport-sized photographs, and migration certificate (if required).",
    },
    {
      icon: CheckCircle,
      title: "Receive Admission Confirmation",
      description:
        "After verification of your application and documents, you’ll receive an admission confirmation. Pay the registration fee to secure your spot and prepare for orientation.",
    },
    {
      icon: Mail,
      title: "Join Orientation",
      description:
        "Attend the orientation session to get acquainted with the campus, faculty, and course structure. Start your journey at the School of Immersive Technologies!",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      className="w-full bg-gradient-to-b from-background to-muted/20 dark:bg-gradient-to-b dark:from-muted/50 dark:to-background/50 pt-16 py-20"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-foreground dark:text-foreground">
            Admission Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Your journey to joining the School of Immersive Technologies starts here. Follow these steps to become part of our creative community.
          </p>
        </motion.div>

        {/* Steps with Optional Illustration */}
        <div className="relative">
          {/* Illustration (Optional, Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: -3 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 3 } : { opacity: 0, x: 20, rotate: -3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden lg:block absolute -right-20 top-20 w-80 z-10"
          >
           
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-card dark:bg-muted/80 rounded-2xl p-6 sm:p-8 shadow-xl border border-border dark:border-border/50 relative z-20"
          >
            <div className="relative space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="flex items-start gap-6 relative group hover:bg-muted/50 dark:hover:bg-background/30 rounded-xl p-4 transition-all duration-300"
                >
                  {/* Timeline Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      variants={lineVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="absolute left-9 top-16 w-1 bg-gradient-to-b from-primary to-accent dark:from-primary/80 dark:to-accent/80"
                      style={{ height: "calc(100% + 2.5rem)" }}
                    />
                  )}
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary z-10 shadow-md"
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl sm:text-2xl font-heading text-foreground dark:text-foreground">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground mt-2">
                      {step.description}
                    </p>
                    {step.link && (
                      <Button
                        asChild
                        variant="outline"
                        className="mt-4 rounded-full border-primary/50 dark:border-primary/30 text-primary dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 hover:scale-105 transition-transform duration-300"
                      >
                        <Link href={step.link}>{step.linkText}</Link>
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground dark:text-muted-foreground mb-4 text-lg">
            Need assistance? Contact our admissions team for support.
          </p>
          <Button
            asChild
            variant="default"
            className="rounded-full bg-primary dark:bg-primary/90 text-primary-foreground dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary hover:scale-105 transition-transform duration-300 px-8 py-3"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
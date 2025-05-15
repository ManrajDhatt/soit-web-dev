// components/admissions/EligibilityCriteria.tsx
"use client";

import { useState } from "react";
import { BookOpen, UserCheck, GraduationCap, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants for content
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Animation variants for FAQs
const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EligibilityCriteria() {
  const [selectedCourse, setSelectedCourse] = useState("Degree");

  const criteria = [
    {
      id: "Diploma",
      icon: BookOpen,
      title: "Diploma Courses",
      description:
        "Open to students who have completed 10+2 (any stream) from a recognized board.",
      details: [
        "Age: 16+ years.",
        "Streams: Science, Commerce, Arts, or Vocational.",
        "No prior technical skills required; basic computer literacy is a plus.",
      ],
    },
    {
      id: "Advanced Diploma",
      icon: UserCheck,
      title: "Advanced Diploma Courses",
      description:
        "Designed for candidates with 10+2 or equivalent qualifications from a recognized board.",
      details: [
        "Age: 17+ years.",
        "Streams: Any stream (Science, Commerce, Arts).",
        "Basic knowledge of design or multimedia recommended but not mandatory.",
      ],
    },
    {
      id: "Degree",
      icon: GraduationCap,
      title: "B.Voc. in Multimedia and Animation",
      description:
        "Eligible for students with 10+2 for B.Voc. course in Multimedia and Animation.",
      details: [
        "Age: 17+ years for B.Voc., 20+ for advanced programs.",
        "Streams: Any stream for B.Voc.; relevant graduation (e.g., Arts, IT) for advanced programs.",
        "Portfolio or prior projects may enhance application for advanced programs.",
      ],
    },
    {
      id: "Short-Term",
      icon: Globe,
      title: "Short-Term Courses",
      description:
        "No strict eligibility criteria; open to all interested candidates, including beginners and professionals.",
      details: [
        "Age: 15+ years.",
        "No academic prerequisites; enthusiasm for creative technologies is sufficient.",
        "Ideal for hobbyists, career switchers, or professionals seeking upskilling.",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can I apply if I’m from a non-technical background?",
      answer:
        "Yes! Our programs, especially Diploma and Short-Term courses, are designed for beginners and require no technical background. Basic computer literacy is sufficient.",
    },
    {
      question: "Is there an entrance exam for the B.Voc. program?",
      answer:
        "No entrance exam is required. Admission is based on your 10+2 results and completion of the application process, including document verification.",
    },
    {
      question: "Can working professionals enroll in Short-Term courses?",
      answer:
        "Absolutely! Short-Term courses offer flexible schedules, including online/blended learning options, making them ideal for working professionals.",
    },
    {
      question: "What if I don’t meet the age criteria?",
      answer:
        "Age criteria are flexible for most programs. Contact our admissions team to discuss your eligibility and explore suitable courses.",
    },
  ];

  const selectedCriteria = criteria.find(
    (item) => item.id === selectedCourse
  )!;

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20 pt-16 relative">
      {/* Illustration as Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none hidden lg:block">
        <Image
          src="/images/eligibility-illustration.jpg" // Replace with your illustration path
          alt="Eligibility Illustration"
          fill
          className="object-contain object-right"
          sizes="50vw"
          priority
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-foreground">
            Eligibility Criteria
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the requirements to join our programs in multimedia, animation, VFX, and immersive technologies.
          </p>
        </motion.div>

        {/* Course Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {criteria.map((course) => (
            <Button
  key={course.id}
  variant={selectedCourse === course.id ? "default" : "outline"}
  className={cn(
    "px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300",
    selectedCourse === course.id
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border-primary/50 text-foreground hover:bg-accent hover:text-accent-foreground"
  )}
  onClick={() => setSelectedCourse(course.id)}
>
  {course.id}
</Button>
          ))}
        </div>

        {/* Selected Course Criteria */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCourse}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <selectedCriteria.icon className="h-8 w-8 text-primary" />
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                {selectedCriteria.title}
              </h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              {selectedCriteria.description}
            </p>
            <ul className="space-y-3 text-base text-muted-foreground">
              {selectedCriteria.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* FAQs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={faqVariants}
          className="mt-12"
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-center mb-6">
            Frequently Asked Questions
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
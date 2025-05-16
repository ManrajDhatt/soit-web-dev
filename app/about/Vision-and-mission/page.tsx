import Image from "next/image";
import { Metadata } from "next";
import { ChevronRight, Target, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission | School of Immersive Technologies",
  description: "Discover the vision and mission of SOIT, dedicated to leading multimedia and immersive technology education in Northern India.",
};

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Vision & Mission
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Guiding SOIT’s commitment to excellence in multimedia and immersive technologies.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
              alt="Vision and Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Our Guiding Principles
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                Shaping the future of education with innovation and industry alignment.
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mb-24 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              To become the leading educational institution in Northern India for immersive technologies and multimedia education by providing:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Industry-aligned curriculum</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>State-of-the-art infrastructure</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Innovation hub for AR/VR/MR</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Global partnerships</span>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              To create future-ready professionals equipped with skills to excel in:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Animation, VFX, and digital content creation</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Immersive technologies (AR, VR, MR)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Game development and interactive media</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Graphic design and user experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Join Our Mission
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Be part of SOIT’s vision to lead multimedia and immersive tech education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/courses"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Courses
            </a>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Director’s Message | School of Immersive Technologies",
  description: "Read the inspiring message from Dr. Prem Kumar, Executive Director of MBCIE, guiding the future of immersive technology education.",
};

export default function DirectorMessagePage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Executive Director’s Message
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A vision for transformative education in multimedia and immersive technologies.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px]">
            <Image
            src="https://media.istockphoto.com/id/2173915109/photo/skill-competency-development-concept-up-new-ability-skill-training-for-technology-evolution.jpg?s=612x612&w=0&k=20&c=xjzDpZbVEdCXCOUqM6JzqVf8XmkK46vu05JwTc3QU8U="
            //   src="https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg"
              alt="Executive Director’s vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Leading the Future
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                Dr. Prem Kumar shares his vision for SOIT’s role in shaping global creators.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Director’s Message */}
        <div className="mb-24 rounded-xl border border-border bg-card p-8 shadow-xl">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3">
              <div className="relative mx-auto aspect-square max-w-[300px] overflow-hidden rounded-xl border-4 border-background shadow-2xl">
                <Image
                  src="/executive_director_premkumar.jpg" // Replace with the actual path to the uploaded image
                  alt="Dr. Prem Kumar, Executive Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <h2 className="font-heading text-2xl font-bold">Dr. Prem Kumar</h2>
                <p className="text-primary">Executive Director, MBCIE</p>
              </div>
            </div>
            <div className="relative md:w-2/3">
              <Quote className="absolute -left-4 -top-4 h-12 w-12 text-primary/20 sm:h-16 sm:w-16" />
              <div className="space-y-6 text-muted-foreground">
                <p className="relative z-10 text-lg">Dear Innovators,</p>
                <p>
                  The Munjal BCU Centre of Innovation & Entrepreneurship (MBCIE) is proud to house SOIT, a beacon of creativity and technology. Our STEAM-oriented approach blends science, technology, engineering, arts, and mathematics to foster innovation.
                </p>
                <p>
                  As Executive Director, I am committed to providing you with world-class resources, industry partnerships, and an incubation center to launch your entrepreneurial dreams. SOIT’s programs, from B.Voc. to short-term courses, are designed to make you leaders in multimedia and immersive tech.
                </p>
                <p>
                  Let’s create, innovate, and shape the future together.
                </p>
                <div className="pt-4">
                  <p className="font-medium">Best regards,</p>
                  <div className="mt-4 font-heading text-xl italic">Dr. Prem Kumar</div>
                  <p>Executive Director, MBCIE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Join Our Vision
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Explore our programs and become part of SOIT’s transformative journey.
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
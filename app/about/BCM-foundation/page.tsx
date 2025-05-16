import Image from "next/image";
import { Metadata } from "next";
import { ChevronRight, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "BCM Foundation | School of Immersive Technologies",
  description: "Learn about BCM Foundation, the backbone of SOIT, established by the Munjal family in 1976, driving educational excellence in Punjab.",
};

export default function BcmFoundationPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            BCM Foundation
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A legacy of educational excellence since 1976, powering the School of Immersive Technologies.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px]">
            <Image
              src="https://dugri.bcmschools.org/Upload/MainBanner/item_b349e0_School.jpg"
              alt="BCM Foundation campus"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                A Legacy of Hero Cycle
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                BCM Foundation, founded by the Munjal family, is the cornerstone of SOIT’s mission to transform education in Punjab.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-24 space-y-12">
          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
            <h3 className="mb-3 font-heading text-xl font-semibold">Our History</h3>
            <p className="text-muted-foreground">
              Established in 1976 by the Munjal family, BCM Foundation began with BCM School Dugri and has grown into a network of premier institutions, including BCM School Chandigarh Road, BCM School Basant City, and BCM School Focal Point. With over 45 years of excellence, it is a beacon of education in Punjab.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
            <h3 className="mb-3 font-heading text-xl font-semibold">Our Impact</h3>
            <p className="text-muted-foreground">
              BCM schools are renowned for academic rigor, holistic development, and top rankings in Punjab. Students excel in board exams, national competitions, and global careers, embodying the motto “From Darkness to Light.”
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Top-performing schools in Punjab</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Holistic education with sports and arts</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Alumni succeeding globally</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
            <h3 className="mb-3 font-heading text-xl font-semibold">SOIT and BCM Foundation</h3>
            <p className="text-muted-foreground">
              Launched in 2018 under the Munjal BCU Centre, SOIT is BCM Foundation’s innovative venture into multimedia and immersive technologies, offering programs like B.Voc. in Multimedia and Animation and short-term courses in AR/VR, VFX, and more.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Explore Our Programs
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join SOIT to be part of BCM Foundation’s legacy of excellence in education.
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
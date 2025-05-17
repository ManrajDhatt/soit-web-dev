import Image from "next/image";
import { Metadata } from "next";
import { ChevronRight, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Hero Group | School of Immersive Technologies",
  description: "Discover the legacy of Hero Group, founded by the Munjal family, and its role in establishing SOIT as a leader in multimedia education.",
};

export default function HeroGroupPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hero Group
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The entrepreneurial spirit of Hero Group powers SOIT’s innovative education.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px]">
            <Image
              src="https://www.bmu.edu.in/wp-content/uploads/2024/09/allbegan.png"
              alt="Hero Group legacy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                A Legacy of Innovation
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                Hero Group’s vision drives SOIT to create future-ready professionals in immersive technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-24 space-y-12">
          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
            <h3 className="mb-3 font-heading text-xl font-semibold">Founding and Growth</h3>
            <p className="text-muted-foreground">
              Founded in 1956 by the Munjal brothers, Hero Group grew from a bicycle manufacturer to the world’s largest two-wheeler producer, Hero MotoCorp. The group’s diversification into education, healthcare, and social initiatives reflects its commitment to societal impact.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
            <h3 className="mb-3 font-heading text-xl font-semibold">Leadership</h3>
            <p className="text-muted-foreground">
              Under Mr. Sunil Kant Munjal, Chairman of Hero Enterprise, the group has embraced innovation. His leadership led to the creation of the Munjal BCU Centre in 2018, housing SOIT to advance multimedia and immersive tech education.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Mr. Sunil Kant Munjal’s vision for education</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-primary" />
                <span>Munjal BCU Centre established in 2018</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
            <h3 className="mb-3 font-heading text-xl font-semibold">Impact on SOIT</h3>
            <p className="text-muted-foreground">
              Hero Group’s entrepreneurial ethos inspires SOIT’s curriculum, fostering creativity and leadership. Programs like B.Voc. in Multimedia and Animation and short-term courses in AR/VR reflect the group’s commitment to cutting-edge education.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Join the Hero Legacy
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Be part of SOIT’s mission to innovate, inspired by Hero Group’s global impact.
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
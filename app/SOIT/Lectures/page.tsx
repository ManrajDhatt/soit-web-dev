import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";

export default function Lectures() {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-tech-pattern" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Guest Lectures
          </h2>
          <p className="text-muted-foreground">
            Learn from industry experts and faculty on the latest trends in multimedia, animation, and immersive technologies.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Lecture 1: 3D Lighting in Animation */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                            src="/events_images/lect3.jpg"

                alt="3D Lighting Lecture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">3D Lighting in Animated Films</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore the impact of 3D lighting on scene aesthetics with industry expert Mr. Younis Ahmed.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/lectures/3d-lighting">Attend →</Link>
              </Button> */}
            </div>
          </div>

          {/* Lecture 2: Future of VFX */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/lect2.jpg"
                alt="Future of VFX"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">The Future of Visual Effects</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mr. Arul Moorthy discusses the role of VFX in modern films and advertisements.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/lectures/future-vfx">Join →</Link>
              </Button> */}
            </div>
          </div>

          {/* Lecture 3: AI in Digital Marketing */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/lect1.jpg"
                alt="AI in Digital Marketing"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">AI in Digital Marketing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how AI tools enhance campaign strategies and analytics.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/lectures/ai-digital-marketing">Register →</Link>
              </Button> */}
            </div>
          </div>

          {/* Lecture 4: Motion Graphics Trends */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/lect5.jpg"
                alt="Motion Graphics Trends"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">Trends in Motion Graphics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover the latest techniques in kinetic typography and animated storytelling.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/lectures/motion-graphics">Sign Up →</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";

export default function Events() {
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
            Events at SOIT
          </h2>
          <p className="text-muted-foreground">
            Join us for inspiring workshops, industry talks, and showcases that bring the world of multimedia and immersive technologies to life.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event 1: Animation Workshop */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/2danimation.jpg"
                alt="Animation Workshop"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">2D Animation Workshop</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn frame-by-frame animation techniques using Adobe Animate. Perfect for beginners and illustrators.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/events/2d-animation-workshop">Register Now →</Link>
              </Button> */}
            </div>
          </div>

          {/* Event 2: AR/VR Showcase */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/WhatsApp Image 2025-02-13 at 10.11.37 AM.jpeg"
                alt="AR/VR Showcase"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">AR/VR Project Showcase</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore student projects in virtual and augmented reality, from interactive experiences to immersive storytelling.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/events/ar-vr-showcase">Join Us →</Link>
              </Button> */}
            </div>
          </div>

          {/* Event 3: Digital Marketing Summit */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/WhatsApp Image 2025-01-25 at 12.55.25 PM.jpeg"
                alt="Digital Marketing Summit"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">AI-Powered Digital Marketing Summit</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover how AI tools like ChatGPT and Surfer SEO revolutionize campaign strategies.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/events/digital-marketing-summit">Learn More →</Link>
              </Button> */}
            </div>
          </div>

          {/* Event 4: VFX Masterclass */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/IMG-20250501-WA0035.jpg"
                alt="VFX Masterclass"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">VFX Masterclass</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Master chroma keying and motion tracking with Adobe After Effects and Nuke.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/events/vfx-masterclass">Sign Up →</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";

export default function Activities() {
  return (
    <section className="relative bg-muted py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Student Activities
          </h2>
          <p className="text-muted-foreground">
            Engage in hands-on projects, hackathons, and creative challenges that bring your multimedia and tech skills to life.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Activity 1: Game Design Hackathon */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/activity4.jpg"
                alt="AR Vr workshop"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">AR VR workshop</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Build a 2D or 3D game prototype using Unity in a 48-hour creative challenge.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/activities/game-design-hackathon">Join Now →</Link>
              </Button> */}
            </div>
          </div>

          {/* Activity 2: UI/UX Design Sprint */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/activity2.jpg"
                alt="UI/UX Design Sprint"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">UI/UX Design Sprint</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create user-friendly app interfaces using Figma and Adobe XD in a team-based sprint.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/activities/ui-ux-design-sprint">Participate →</Link>
              </Button> */}
            </div>
          </div>

          {/* Activity 3: Animation Film Project */}
          <div className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
              src="/events_images/activity1.jpg"
                alt="Animation Film Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-semibold">Animation Short Film Project</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Collaborate on a 2D/3D short film, from storyboarding to final render.
              </p>
              {/* <Button variant="link" className="p-0 text-accent">
                <Link href="/activities/animation-film-project">Get Involved →</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
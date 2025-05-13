import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";
import { HeroAnimation } from "@/components/hero-animation";
import { TechnologyCard } from "@/components/tech-card";
import { PartnerLogos } from "@/components/partner-logos";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { StatsSection } from "@/components/stats-section";
import RotatingGlowButton from "@/components/ui/RotatingGlowButton";

export default function Home() {
  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
      
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-tech-pattern opacity-10" />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 text-sm text-primary">
                Pioneering the future of education
              </div>
              <div className="mb-1 inline-flex px-3 text-sm text-gray-900 dark:text-gray-50">
              An initiative by Munjal Family, Hero Group
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-glow bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                  Immersive
                </span>{" "}
                Technologies for Tomorrow
              </h1>
              <p className="mb-8 max-w-md text-lg text-muted-foreground sm:text-xl">
                Learn, create, and innovate with cutting-edge AR, VR, and Mixed Reality technologies at the School of Immersive Technologies.
              </p>
              <div className="flex flex-wrap gap-4">
              
            <Button
      asChild
      className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20 z-10"
    >
      <Link href="/courses">Explore Courses</Link>
    </Button>
                {/* <Button variant="outline" className="text-lg">
                  Take a Virtual Tour
                </Button> */}
              </div>
              <div className="mt-8 flex items-center">
               
               
                <span className=" text-sm text-muted-foreground">
                  Join 500+ students already learning with us
                </span>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Cutting-Edge Technologies
            </h2>
            <p className="text-muted-foreground">
              Explore the future of immersive technologies through our state-of-the-art programs
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TechnologyCard
              icon={<Icons.vr className="h-10 w-10 text-primary" />}
              title="Virtual Reality"
              description="Immerse yourself in completely virtual environments and learn to create transformative VR experiences."
            />
            <TechnologyCard
              icon={<Icons.ar className="h-10 w-10 text-primary" />}
              title="Augmented Reality"
              description="Blend digital content with the real world and develop innovative AR applications."
            />
            <TechnologyCard
              icon={<Icons.tech className="h-10 w-10 text-primary" />}
              title="Mixed Reality"
              description="Combine virtual and physical spaces for interactive experiences with real-world applications."
            />
            <TechnologyCard
              icon={<Icons.mobile className="h-10 w-10 text-primary" />}
              title="Mobile AR Development"
              description="Create accessible augmented reality experiences for smartphones and tablets."
            />
            <TechnologyCard
              icon={<Icons.ai className="h-10 w-10 text-primary" />}
              title="AI in Immersive Tech"
              description="Integrate artificial intelligence to create adaptive and responsive immersive experiences."
            />
            <TechnologyCard
              icon={<Icons.code className="h-10 w-10 text-primary" />}
              title="Game Development"
              description="Learn game development principles and tools specially focused on immersive technologies."
            />
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="relative bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Courses
            </h2>
            <p className="mt-4">
              Specialized courses designed to prepare you for the future of technology
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-700 to-black text-lg hover:shadow-lg hover:shadow-accent/20">
            <Link href="/courses">View All Courses</Link>
          </Button>
          {/* <RotatingGlowButton/> */}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "B.Voc. in Multimedia and Animation",
              duration: "3 Years",
              image: "https://subharti.bvocskill.com/img/courses/multimedia-animation.webp",
            },
            {
              title: "Augmented Reality & Virtual Reality",
              duration: "6 Weeks",
              image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              title: "Complete Digital Marketing with AI",
              duration: "1 Year",
              image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/digital-marketing-skills.jpg&w=1200&h=630",
            },
          ].map((program, index) => {
            const slug = generateSlug(program.title);
            return (
              <Link
                key={index}
                href={`/courses?program=${slug}`}
                className="group relative overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Icons.education className="h-5 w-5" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">{program.title}</h3>
                  <Button variant="link" className="p-0 text-accent">
                    Learn more →
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonials */}
      <section className="bg-background py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="border-t border-border bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Our Industry Partners
            </h2>
            <p className="text-muted-foreground">
              We collaborate with leading technology companies to provide the best opportunities for our students
            </p>
          </div>
          
          <PartnerLogos />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-tech-pattern opacity-10" />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 text-center shadow-xl shadow-primary/5 sm:p-12">
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Shape the Future?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Take the first step towards a career in immersive technologies. Apply now for our upcoming session and become part of the innovation revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <Button className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20">
              <Link href="/courses">Apply Now</Link>

            
              </Button> */}
              <Button variant="outline" className="text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
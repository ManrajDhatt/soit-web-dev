

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
import TrustpilotWidget from "@/components/ui/trustpilot";
// import CurtainAnimation from "@/components/CurtainAnimation";

export default function Home() {
  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    
      <>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-10">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-tech-pattern opacity-10" />
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col items-start">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 text-sm text-primary">
                  Build Your Future with Creative Technologies
                </div>
                <h1 className="mb-6 font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="text-glow bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                    Multimedia, Design & Tech
                  </span>
                  <br />
                  <span className="block text-xl sm:text-2xl md:text-3xl text-muted-foreground tracking-normal leading-relaxed mt-2">
                    Skills for Tomorrow
                  </span>
                </h1>
                <p className="mb-8 max-w-md text-lg text-muted-foreground sm:text-xl">
                  Explore a creative world of animation, video editing, graphic design, digital marketing, VFX, robotics, and immersive tech — all under one roof at the School of Immersive Technologies.
                </p>
                <div className="flex items-center gap-4 mt-4 mb-0 flex-nowrap">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20 z-10 py-6 whitespace-nowrap"
                  >
                    <Link href="/courses/b-voc-in-multimedia-and-animation">Explore Courses</Link>
                  </Button>
                  <div className="w-auto">
                    <TrustpilotWidget />
                  </div>
                </div>
                <div className="mt-0 flex items-center">
                  <span className="text-sm text-muted-foreground">
                    Join 500+ students already learning with us
                  </span>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[600px] w-full max-w-[1200px] mx-auto">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* BCM & Hero Cycle Group Section */}
        <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-200 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />
          <div className="relative z-20 mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                Powered by BCM & Hero Family Foundation
              </h2>
              <p className="mb-10 text-lg text-black">
                The School of Immersive Technologies is proudly supported by the BCM and the Hero Family Foundation, leaders in innovation, education, and industry excellence.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="mb-4 font-heading text-2xl font-semibold text-black">
                  BCM Foundation & MBCIE
                </h3>
                <p className="text-black text-base leading-relaxed">
                  The BCM Foundation, through the Munjal BCU Centre of Innovation & Entrepreneurship (MBCIE), drives innovation and creativity in education. Led by Mr. Sunil Kant Munjal and Prof. Julian Beer, MBCIE adopts a STEAM-oriented approach to transform learning. With a state-of-the-art Incubation Centre, it empowers young entrepreneurs to launch startups and foster innovation in SOIT’s world-class multimedia and immersive technology education.
                </p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="mb-4 font-heading text-2xl font-semibold text-black">
                  Hero Family Foundation
                </h3>
                <p className="text-black text-base leading-relaxed">
                  The Hero Family Foundation, founded by the visionary Munjal Family, is a global leader in manufacturing and innovation. With a legacy of excellence, it supports transformative initiatives like SOIT, enabling access to cutting-edge training and industry-aligned programs that prepare students for careers in the digital and creative industries.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-base text-black">
                Together, BCM and Hero Family Foundation are shaping the future of education and innovation at SOIT.
              </p>
            </div>
          </div>
          <div className="absolute top-10 left-[-80px] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
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
                icon={<Icons.multimedia className="h-10 w-10 text-primary" />}
                title="Multimedia Design"
                description="Create engaging visual and audio content using multimedia tools for dynamic digital experiences."
              />
              <TechnologyCard
                icon={<Icons.threeDAnimation className="h-10 w-10 text-primary" />}
                title="3D Animation"
                description="Produce dynamic 3D animations with realistic motion for storytelling and media."
              />
              <TechnologyCard
                icon={<Icons.graphicDesign className="h-10 w-10 text-primary" />}
                title="Graphic Design"
                description="Design stunning visuals for digital and print media using industry-standard graphic tools."
              />
              <TechnologyCard
                icon={<Icons.videoEditing className="h-10 w-10 text-primary" />}
                title="Video Editing & VFX"
                description="Master video editing and create stunning VFX for compelling, polished multimedia content."
              />
              <TechnologyCard
                icon={<Icons.robotics className="h-10 w-10 text-primary" />}
                title="Robotics"
                description="Explore robotics design and programming for innovative automation and interactive systems."
              />
              <TechnologyCard
                icon={<Icons.vr className="h-10 w-10 text-primary" />}
                title="Immersive Reality (VR/AR)"
                description="Create immersive VR environments and innovative AR apps blending digital and real-world experiences."
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
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "B.Voc. in Multimedia and Animation",
                  duration: "3 Years",
                  image: "https://media.greatbigphotographyworld.com/wp-content/uploads/2023/05/video-editor.jpg",
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
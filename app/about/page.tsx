import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | School of Immersive Technologies",
  description: "Learn about the School of Immersive Technologies, our history, mission, and our dedicated team of experts.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Pioneering the future of education through immersive technologies
          </p>
        </div>
        
        <div className="mb-16 rounded-xl border border-border bg-card overflow-hidden shadow-xl">
          <Image
            src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="School of Immersive Technologies campus"
            width={1200}
            height={600}
            className="w-full object-cover h-[400px]"
          />
        </div>
        
        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The School of Immersive Technologies was established in 2018 as part of the Munjal BCU Centre of Innovation & Entrepreneurship with a vision to bridge the gap between traditional education and the rapidly evolving world of immersive technologies.
              </p>
              <p>
                What began as a small research unit with a handful of VR headsets and passionate instructors has grown into a comprehensive educational institution at the forefront of AR/VR education in India.
              </p>
              <p>
                Our journey has been defined by continuous innovation, collaboration with industry leaders, and a commitment to preparing students for careers that may not even exist yet.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Our Approach</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We believe in learning by doing. Our curriculum combines theoretical knowledge with practical, hands-on experience in state-of-the-art immersive labs equipped with the latest hardware and software.
              </p>
              <p>
                Our faculty comprises industry veterans and academic experts who bring real-world insights into the classroom, ensuring that our students are exposed to both foundational principles and cutting-edge developments.
              </p>
              <p>
                We foster a collaborative environment where creativity, technical skill, and entrepreneurial thinking converge to create the next generation of immersive technology innovators.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Our Facilities</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "VR Development Lab",
                description: "Equipped with high-end VR headsets, motion capture systems, and powerful workstations for developing immersive experiences.",
                image:"/vr_lab.jpg"
                // image: "https://images.pexels.com/photos/8728305/pexels-photo-8728305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "AR Innovation Hub",
                description: "Specialized space for augmented reality development with various AR-capable devices and prototyping tools.",
                image: "https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Immersive Experience Center",
                description: "A showcase area where students can demonstrate their projects and the public can experience the latest in immersive technology.",
                image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
            ].map((facility, index) => (
              <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-heading text-xl font-semibold">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Leadership Team</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Amrita Patel",
                role: "Director",
                bio: "With over 15 years of experience in immersive technologies and education, Dr. Patel leads our institution with a vision to democratize access to cutting-edge tech education.",
                // image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              image:"placeholder.jpg"
              },
              {
                name: "Prof. Rajiv Mehta",
                role: "Head of Research",
                bio: "An acclaimed researcher in spatial computing, Prof. Mehta oversees our research initiatives and ensures our curriculum remains at the forefront of technological innovation.",
                // image: "https://images.pexels.com/photos/8434891/pexels-photo-8434891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              image:"placeholder.jpg"
              },
              {
                name: "Priya Subramaniam",
                role: "Industry Relations Lead",
                bio: "With a background in both technology and business development, Priya bridges the gap between academia and industry, creating opportunities for our students.",
                // image: "https://images.pexels.com/photos/6203758/pexels-photo-6203758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              image:"placeholder.jpg"
              },
            ].map((person, index) => (
              <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-heading text-xl font-semibold">{person.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{person.role}</p>
                  <p className="text-muted-foreground">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Our Values</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Innovation",
                description: "We embrace experimentation and push the boundaries of what's possible with immersive technologies."
              },
              {
                title: "Inclusivity",
                description: "We're committed to making immersive technology education accessible to students from all backgrounds."
              },
              {
                title: "Collaboration",
                description: "We foster partnerships between academia, industry, and communities to create holistic learning experiences."
              },
              {
                title: "Future-Focused",
                description: "We prepare our students not just for today's jobs, but for the careers and challenges of tomorrow."
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
                <h3 className="mb-3 font-heading text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-xl border border-border bg-card p-8 shadow-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Join Our Community</h2>
            <p className="mb-6 text-muted-foreground">
              Whether you're a prospective student, industry partner, or simply curious about immersive technologies, 
              we invite you to connect with us and explore the possibilities of this exciting field.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/programs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                View Programs
              </a>
              <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
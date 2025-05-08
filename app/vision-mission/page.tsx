import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission | School of Immersive Technologies",
  description: "Discover our vision and mission at the School of Immersive Technologies, where we are shaping the future of immersive education.",
};

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Vision & Mission
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our guiding principles and aspirations for the future of immersive technology education
          </p>
        </div>
        
        {/* Vision Section */}
        <div className="mb-24">
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <div className="relative h-[300px] w-full sm:h-[400px]">
              <Image 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
                <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Our Vision
                </h2>
                <p className="max-w-md text-lg text-foreground sm:text-xl">
                  To be the global leader in immersive technology education, 
                  empowering creators who will transform how humans interact with digital worlds.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global Impact",
                description: "Creating a worldwide impact through innovative research and educational approaches in immersive technologies."
              },
              {
                title: "Industry Leadership",
                description: "Fostering the next generation of leaders who will drive the immersive technology industry forward."
              },
              {
                title: "Technological Democratization",
                description: "Making immersive technologies more accessible, understandable, and beneficial for all segments of society."
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mb-24">
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <div className="relative h-[300px] w-full sm:h-[400px]">
              <Image 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-background/50" />
              <div className="absolute inset-0 flex flex-col items-end justify-center p-8 text-right sm:p-12">
                <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Our Mission
                </h2>
                <p className="max-w-md text-lg text-foreground sm:text-xl">
                  To provide exceptional education that balances technical expertise with creative innovation, 
                  preparing students to lead in the rapidly evolving field of immersive technologies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "World-Class Education",
                description: "Deliver comprehensive, cutting-edge educational programs that blend theoretical knowledge with practical, hands-on experience in immersive technologies.",
                highlights: ["Industry-aligned curriculum", "State-of-the-art facilities", "Expert faculty"]
              },
              {
                title: "Innovation & Research",
                description: "Advance the frontiers of immersive technologies through groundbreaking research and development initiatives.",
                highlights: ["Research laboratories", "Industry partnerships", "Publication opportunities"]
              },
              {
                title: "Industry Integration",
                description: "Foster strong connections with industry leaders to ensure our education remains relevant and our graduates are sought-after professionals.",
                highlights: ["Internship programs", "Industry mentors", "Collaborative projects"]
              },
              {
                title: "Community Engagement",
                description: "Extend the benefits of immersive technologies beyond our campus through outreach programs and public education initiatives.",
                highlights: ["Technology workshops", "Public exhibitions", "Community collaborations"]
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mb-4 text-muted-foreground">{item.description}</p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-24">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Our Core Values
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and exploring new possibilities in immersive technologies.",
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in education, research, and technological development.",
                color: "from-purple-600 to-purple-400",
              },
              {
                title: "Collaboration",
                description: "Working together across disciplines and with external partners to achieve greater impact.",
                color: "from-green-600 to-green-400",
              },
              {
                title: "Inclusivity",
                description: "Creating an environment where diverse perspectives are valued and everyone can thrive.",
                color: "from-orange-600 to-orange-400",
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className={`mb-4 h-2 w-16 rounded-full bg-gradient-to-r ${value.color}`} />
                <h3 className="mb-3 font-heading text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Strategic Goals */}
        <div className="mb-24">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Strategic Goals
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Educational Excellence",
                description: "Develop and maintain comprehensive educational programs that prepare students for leadership in immersive technologies.",
                targets: [
                  "Launch 3 new specialized programs by 2026",
                  "Achieve 95% graduate employment rate in relevant industries",
                  "Establish international exchange programs with leading institutions"
                ]
              },
              {
                title: "Research Impact",
                description: "Conduct groundbreaking research that advances immersive technologies and their applications across various fields.",
                targets: [
                  "Increase research funding by 50% over the next 5 years",
                  "Publish in top-tier academic journals and conferences",
                  "Develop 10 patentable technologies in immersive computing"
                ]
              },
              {
                title: "Industry Partnerships",
                description: "Strengthen connections with industry to enhance student opportunities and drive technological innovation.",
                targets: [
                  "Double the number of industry partnerships by 2027",
                  "Create an industry advisory board with leading companies",
                  "Establish a technology incubation center for student startups"
                ]
              },
              {
                title: "Global Recognition",
                description: "Position the School of Immersive Technologies as a globally recognized leader in immersive technology education.",
                targets: [
                  "Achieve top rankings in immersive technology education",
                  "Host an international conference on immersive technologies",
                  "Develop a global alumni network spanning 30+ countries"
                ]
              },
            ].map((goal, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{goal.title}</h3>
                <p className="mb-4 text-muted-foreground">{goal.description}</p>
                <div>
                  <h4 className="mb-2 text-sm font-medium">Key Targets:</h4>
                  <ul className="space-y-2">
                    {goal.targets.map((target, tIndex) => (
                      <li key={tIndex} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Message from Leadership */}
        <div className="mb-24 rounded-xl border border-border bg-card p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative h-auto w-full min-h-[300px] md:h-full">
              <Image 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Leadership"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                A Message from Our Leadership
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  "Our vision and mission are not just statements on a page—they are the driving force behind everything we do at the School of Immersive Technologies. We are committed to pushing the boundaries of what's possible in immersive education, research, and application.
                </p>
                <p>
                  The world is experiencing a fundamental shift in how we interact with digital information, and immersive technologies are at the forefront of this transformation. Our goal is to ensure that our students not only understand these technologies but are equipped to lead their development and application across industries.
                </p>
                <p>
                  We invite students, faculty, industry partners, and the broader community to join us on this exciting journey as we work together to create immersive experiences that educate, inspire, and transform."
                </p>
              </div>
              <div className="mt-6">
                <div className="font-heading font-semibold">Dr. Amrita Patel</div>
                <div className="text-sm text-muted-foreground">Director, School of Immersive Technologies</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Join Us in Shaping the Future
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Whether you're a prospective student, researcher, industry partner, or community member, 
            there are many ways to engage with our vision and contribute to our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/programs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Explore Programs
            </a>
            <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
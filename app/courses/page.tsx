// pages/programs.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, Award, Users, ChevronRight } from "lucide-react";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses | School of Immersive Technologies",
  description: "Explore our cutting-edge courses in VR, AR, and immersive technologies at the School of Immersive Technologies.",
};

export default function ProgramsPage() {
  return (
    <div className="relative bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in-up">
            Our Courses
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-200">
            Comprehensive education in immersive technologies to prepare you for the future of digital experiences
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 sm:px-6 mb-16">
        <Tabs defaultValue="diploma">
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2 p-2 bg-muted/30 rounded-xl">
              <TabsTrigger
                value="degree"
                className="flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                Degree Courses
              </TabsTrigger>
              <TabsTrigger
                value="diploma"
                className="flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                Diploma Courses
              </TabsTrigger>
              <TabsTrigger
                value="advanced-diploma"
                className="flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                Advanced Diploma
              </TabsTrigger>
              <TabsTrigger
                value="short-term"
                className="flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                Short-Term & Specialized
              </TabsTrigger>
            </TabsList>
          </div>

          {["degree", "diploma", "advanced-diploma", "short-term"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === category)
                  .map((program, index) => (
                    <div
                      key={index}
                      className="group bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="relative h-48">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-xs text-muted-foreground">{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-xs text-muted-foreground">{program.intake}</span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <span className="text-xs font-medium">Fees: </span>
                          <span className="text-xs text-muted-foreground">{program.fees}</span>
                        </div>
                        <div>
                          <h4 className="mb-2 text-sm font-medium text-foreground">Program Highlights:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {program.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-2 text-xs">
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="p-4">
                        <Button asChild variant="default" className="w-full rounded-full text-sm">
                          <Link href={`/courses/${program.slug}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Admission Process Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
              Admission Process
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              {[
                {
                  title: "Application Submission",
                  description:
                    "Complete the online application form and submit all required documents, including academic transcripts (10+2 for degree/diploma, open for short-term), statement of purpose, and portfolio (if applicable).",
                  icon: <Calendar className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Entrance Examination",
                  description:
                    "Qualified applicants for degree and diploma courses will be invited to take a program-specific entrance examination assessing relevant knowledge and aptitude.",
                  icon: <Award className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Interview",
                  description:
                    "Shortlisted candidates will participate in an interview with faculty members to discuss their background, goals, and fit for the program.",
                  icon: <Users className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Admission Decision",
                  description:
                    "Final admission decisions are made based on a holistic review of the application, entrance exam performance (if applicable), and interview.",
                  icon: <Award className="h-6 w-6 text-primary" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2 px-6">
                    <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">{step.icon}</div>
                        <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                      <p className="text-primary font-medium mt-2">Step {index + 1}</p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Key Dates for 2025-26 Admissions
          </h2>
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { event: "Applications Open", date: "November 1, 2024" },
                { event: "Early Application Deadline", date: "January 15, 2025" },
                { event: "Regular Application Deadline", date: "March 31, 2025" },
                { event: "Entrance Examinations", date: "April 15-30, 2025" },
                { event: "Interview Notifications", date: "May 10, 2025" },
                { event: "Interviews", date: "May 20-31, 2025" },
                { event: "Admission Decisions", date: "June 15, 2025" },
                { event: "Classes Begin", date: "August 1, 2025" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-border py-4 last:border-b-0"
                >
                  <div className="font-medium text-foreground">{item.event}</div>
                  <div className="text-right text-primary">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
              Meet Our Faculty
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dr. Rajiv Mehta",
                  role: "Professor of Spatial Computing",
                  image: "placeholder.jpg",
                },
                {
                  name: "Dr. Sarah Williams",
                  role: "Associate Professor of VR Design",
                  image: "placeholder.jpg",
                },
                {
                  name: "Prof. Anand Krishnan",
                  role: "Assistant Professor of AR Applications",
                  image: "placeholder.jpg",
                },
                {
                  name: "Dr. Maya Patel",
                  role: "Professor of Immersive Learning",
                  image: "placeholder.jpg",
                },
              ].map((faculty, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl bg-card shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground">{faculty.name}</h3>
                    <p className="text-sm text-primary">{faculty.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/faculty">View All Faculty</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight">
            Begin Your Journey in Immersive Technologies
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Take the first step toward a career at the forefront of immersive technologies. Apply now or contact our admissions team to learn more about our programs. Enjoy a 50% discount on all courses for our first batches!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="h-12 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href="/apply">
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border border-background bg-transparent text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href="/admissions">
                Contact Admissions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <a
        href="/apply"
        className="fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
      >
        Apply Now
        <ChevronRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
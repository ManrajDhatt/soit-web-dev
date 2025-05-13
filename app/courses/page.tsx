



// pages/programs.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, Award, Users, ChevronRight } from "lucide-react";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses | School of Immersive Technologies",
  description: "Explore our cutting-edge courses in VR, AR, and immersive technologies at the School of Immersive Technologies.",
};

// Function to create a URL-friendly slug from the course title
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Courses
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive education in immersive technologies to prepare you for the future of digital experiences
          </p>
        </div>

        <Tabs defaultValue="diploma" className="mb-16">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="degree">Degree Courses</TabsTrigger>
              <TabsTrigger value="diploma">Diploma Courses</TabsTrigger>
              <TabsTrigger value="advanced-diploma">Advanced Diploma</TabsTrigger>
              <TabsTrigger value="short-term">Short-Term & Specialized</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="degree">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "degree")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/courses/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          {/* Apply Now */}

                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="diploma">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "diploma")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/courses/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced-diploma">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "advanced-diploma")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/courses/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="short-term">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "short-term")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/courses/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Admission Process
          </h2>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-6 top-9 bottom-5 w-1.5 -translate-x-1/4 bg-border" />
            {[
              {
                title: "Application Submission",
                description:
                  "Complete the online application form and submit all required documents, including academic transcripts (10+2 for degree/diploma, open for short-term), statement of purpose, and portfolio (if applicable).",
                icon: <Calendar className="h-6 w-6 text-primary-foreground" />,
              },
              {
                title: "Entrance Examination",
                description:
                  "Qualified applicants for degree and diploma courses will be invited to take a program-specific entrance examination assessing relevant knowledge and aptitude.",
                icon: <Award className="h-6 w-6 text-primary-foreground" />,
              },
              {
                title: "Interview",
                description:
                  "Shortlisted candidates will participate in an interview with faculty members to discuss their background, goals, and fit for the program.",
                icon: <Users className="h-6 w-6 text-primary-foreground" />,
              },
              {
                title: "Admission Decision",
                description:
                  "Final admission decisions are made based on a holistic review of the application, entrance exam performance (if applicable), and interview.",
                icon: <Award className="h-6 w-6 text-primary-foreground" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative z-10 mb-16 flex last:mb-0">
                <div className="flex items-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    {step.icon}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Dates */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Key Dates for 2025-26 Admissions
          </h2>
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8">
            <div className="grid gap-6 md:grid-cols-2">
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
                <div key={index} className="flex items-center justify-between border-b border-border pb-4">
                  <div className="font-medium">{item.event}</div>
                  <div className="text-right text-primary">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Meet Our Faculty
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                    <h3 className="text-center font-heading text-lg font-semibold">
                      {faculty.name}
                    </h3>
                    <p className="text-center text-sm text-primary">{faculty.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faculty">
              <Button variant="outline">View All Faculty</Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center shadow-xl">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Begin Your Journey in Immersive Technologies
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Take the first step toward a career at the forefront of immersive technologies. Apply now or contact our
            admissions team to learn more about our programs. Enjoy a 50% discount on all courses for our first batches!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Button className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20">
              Apply Now
            </Button> */}
            <Link href="/admissions">
  <Button variant="outline" className="text-lg">
    Contact Admissions
  </Button>
</Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
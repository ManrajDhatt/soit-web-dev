// // app/programs/[courseSlug]/page.tsx

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { courses } from "@/lib/courses";
// import { Metadata } from "next";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Clock, Users, ChevronRight } from "lucide-react";

// interface Props {
//   params: { courseSlug: string };
// }

// export async function generateStaticParams() {
//   return courses.map((course) => ({
//     courseSlug: course.slug,
//   }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const course = courses.find((c) => c.slug === params.courseSlug);
//   if (!course) {
//     return {
//       title: "Course Not Found | School of Immersive Technologies",
//       description: "The requested course could not be found.",
//     };
//   }

//   return {
//     title: `${course.title} | School of Immersive Technologies`,
//     description: course.description,
//   };
// }

// export default function CoursePage({ params }: Props) {
//   const course = courses.find((c) => c.slug === params.courseSlug);

//   if (!course) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
//       <div className="mx-auto max-w-4xl">
//         <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
//           {course.title}
//         </h1>
//         <Card className="w-full">
//           <div className="relative h-[300px] w-full">
//             <Image src={course.image} alt={course.title} fill className="object-cover" />
//           </div>
//           <CardHeader>
//             <CardTitle>{course.title}</CardTitle>
//             <CardDescription>{course.description}</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="mb-4 flex items-center gap-4">
//               <div className="flex items-center gap-1.5">
//                 <Clock className="h-4 w-4 text-primary" />
//                 <span className="text-sm text-muted-foreground">{course.duration}</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Users className="h-4 w-4 text-primary" />
//                 <span className="text-sm text-muted-foreground">{course.intake}</span>
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="text-sm font-medium">Fees: </span>
//               <span className="text-sm text-muted-foreground">{course.fees}</span>
//             </div>
//             <div>
//               <h4 className="mb-2 text-sm font-medium">Program Highlights:</h4>
//               <ul className="space-y-2">
//                 {course.highlights.map((highlight, hIndex) => (
//                   <li key={hIndex} className="flex items-start gap-2 text-sm">
//                     <ChevronRight className="h-4 w-4 text-primary mt-0.5" />
//                     <span className="text-muted-foreground">{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </CardContent>
//           <CardContent>
//             <h4 className="mb-2 text-sm font-medium">Curriculum Overview</h4>
//             <p className="text-sm text-muted-foreground">
//               The {course.title} program includes hands-on training in industry-standard tools, project-based learning, and
//               opportunities to build a professional portfolio. Students will explore advanced techniques and collaborate on
//               real-world projects.
//             </p>
//           </CardContent>
//           <CardContent>
//             <h4 className="mb-2 text-sm font-medium">Career Opportunities</h4>
//             <p className="text-sm text-muted-foreground">
//               Graduates of this program are prepared for roles in animation, game design, visual effects, and immersive
//               technology industries, with strong industry connections to support career placement.
//             </p>
//           </CardContent>
//           <CardContent>
//             <Button variant="default" className="w-full">
//               Apply Now
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


// app/programs/[courseSlug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses, Course } from "@/lib/courses";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChevronRight, Star, Quote } from "lucide-react";

interface Props {
  params: { courseSlug: string };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseSlug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.courseSlug);
  if (!course) {
    return {
      title: "Course Not Found | School of Immersive Technologies",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | School of Immersive Technologies`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  };
}

export default function CoursePage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.courseSlug);

  if (!course) {
    notFound();
  }

  // Sample additional data (you can extend courses.ts to include this)
  const curriculum = [
    { module: "Module 1", title: "Introduction to Core Concepts", duration: "4 weeks" },
    { module: "Module 2", title: "Hands-On Tools Training", duration: "6 weeks" },
    { module: "Module 3", title: "Capstone Project", duration: "8 weeks" },
  ];

  const faculty = [
    { name: "Dr. Jane Doe", role: "Lead Instructor", image: "/images/faculty/jane-doe.jpg" },
    { name: "Prof. John Smith", role: "Guest Lecturer", image: "/images/faculty/john-smith.jpg" },
  ];

  const testimonials = [
    {
      quote: "This course transformed my career. The hands-on projects were invaluable!",
      author: "Alex R., Graduate",
    },
    {
      quote: "The faculty's expertise and industry connections opened many doors for me.",
      author: "Samantha K., Graduate",
    },
  ];

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
      {/* Hero Section */}
      <section className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative z-10 px-6 py-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {course.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {course.description}
          </p>
          <Button
            asChild
            className="mt-6 bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Course Overview
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <Clock className="mb-2 h-6 w-6 text-primary" />
            <h3 className="text-lg font-medium">Duration</h3>
            <p className="text-muted-foreground">{course.duration}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <Users className="mb-2 h-6 w-6 text-primary" />
            <h3 className="text-lg font-medium">Intake</h3>
            <p className="text-muted-foreground">{course.intake}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <Star className="mb-2 h-6 w-6 text-primary" />
            <h3 className="text-lg font-medium">Fees</h3>
            <p className="text-muted-foreground">{course.fees}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-medium">Program Highlights</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {course.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Curriculum
        </h2>
        <div className="space-y-4">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
            >
              <div>
                <h3 className="text-lg font-medium">{item.module}: {item.title}</h3>
                <p className="text-sm text-muted-foreground">Duration: {item.duration}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-primary" />
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Meet Your Instructors
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {faculty.map((instructor, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
            >
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          What Our Students Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key=' Kingston'
              className="relative rounded-lg border border-border bg-card p-6"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-primary opacity-20" />
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
            Explore Related Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedCourses.map((relatedCourse) => (
              <div
                key={relatedCourse.slug}
                className="rounded-lg border border-border bg-card p-4 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-[150px] w-full mb-4">
                  <Image
                    src={relatedCourse.image}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-medium">{relatedCourse.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {relatedCourse.description}
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href={`/programs/${relatedCourse.slug}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
          Ready to Start Your Journey?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          Enroll in {course.title} and take the first step toward a career in immersive technologies.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
        >
          <Link href="/apply">Apply Now</Link>
        </Button>
      </section>
    </div>
  );
}
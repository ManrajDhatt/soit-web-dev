
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

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  // Check if the current course is B.Voc. in Multimedia and Animation
  const isBVocMultimedia = params.courseSlug === "b-voc-in-multimedia-and-animation";

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
            <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
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
        {/* Fee Structure for B.Voc. in Multimedia and Animation */}
        {isBVocMultimedia && (
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-medium">Fee Structure (B.Voc. in Multimedia)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left">Sr. No.</th>
                    <th className="border border-border px-4 py-2 text-left">Semester</th>
                    <th className="border border-border px-4 py-2 text-left">Registration</th>
                    <th className="border border-border px-4 py-2 text-left">Tuition Fee</th>
                    <th className="border border-border px-4 py-2 text-left">Exam Fee</th>
                    <th className="border border-border px-4 py-2 text-left">Total (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">1</td>
                    <td className="border border-border px-4 py-2">I</td>
                    <td className="border border-border px-4 py-2">2000</td>
                    <td className="border border-border px-4 py-2">25000</td>
                    <td className="border border-border px-4 py-2">1500</td>
                    <td className="border border-border px-4 py-2">28,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">2</td>
                    <td className="border border-border px-4 py-2">II</td>
                    <td className="border border-border px-4 py-2">-</td>
                    <td className="border border-border px-4 py-2">25000</td>
                    <td className="border border-border px-4 py-2">1500</td>
                    <td className="border border-border px-4 py-2">26,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">3</td>
                    <td className="border border-border px-4 py-2">III</td>
                    <td className="border border-border px-4 py-2">-</td>
                    <td className="border border-border px-4 py-2">25000</td>
                    <td className="border border-border px-4 py-2">1500</td>
                    <td className="border border-border px-4 py-2">26,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">4</td>
                    <td className="border border-border px-4 py-2">IV</td>
                    <td className="border border-border px-4 py-2">-</td>
                    <td className="border border-border px-4 py-2">25000</td>
                    <td className="border border-border px-4 py-2">1500</td>
                    <td className="border border-border px-4 py-2">26,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">5</td>
                    <td className="border border-border px-4 py-2">V</td>
                    <td className="border border-border px-4 py-2">-</td>
                    <td className="border border-border px-4 py-2">25000</td>
                    <td className="border border-border px-4 py-2">1500</td>
                    <td className="border border-border px-4 py-2">26,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">6</td>
                    <td className="border border-border px-4 py-2">VI</td>
                    <td className="border border-border px-4 py-2">-</td>
                    <td className="border border-border px-4 py-2">25000</td>
                    <td className="border border-border px-4 py-2">1500</td>
                    <td className="border border-border px-4 py-2">26,500</td>
                  </tr>
                  <tr className="font-semibold bg-muted">
                    <td className="border border-border px-4 py-2">-</td>
                    <td className="border border-border px-4 py-2">TOTAL</td>
                    <td className="border border-border px-4 py-2">2000</td>
                    <td className="border border-border px-4 py-2">150000</td>
                    <td className="border border-border px-4 py-2">9000</td>
                    <td className="border border-border px-4 py-2">1,61,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
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
          {course.curriculum.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
            >
              <div>
                <h3 className="text-lg font-medium">
                  {item.module}: {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">Duration: {item.duration}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-primary" />
            </div>
          ))}
        </div>
      </section>

      {/* Future Scope and Opportunities Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Future Scope and Opportunities
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-muted-foreground">{course.futureScope}</p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Meet Your Instructors
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {course.faculty.map((instructor, index) => (
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

      {/* Alumni Support Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Alumni Support
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-muted-foreground">{course.alumniSupport}</p>
        </div>
      </section>

      {/* Industry Internships Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Industry Internships
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-muted-foreground">{course.industryInternships}</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          What Our Students Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {course.testimonials.map((testimonial, index) => (
            <div
              key={index}
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
                  <Link href={`/courses/${relatedCourse.slug}`}>Learn More</Link>
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
          <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
        </Button>
      </section>
    </div>
  );
}
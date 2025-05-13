
// // // app/programs/[courseSlug]/page.tsx
// // import { notFound } from "next/navigation";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { courses, Course } from "@/lib/courses";
// // import { Metadata } from "next";
// // import { Button } from "@/components/ui/button";
// // import { Clock, Users, ChevronRight, Star, Quote } from "lucide-react";

// // interface Props {
// //   params: { courseSlug: string };
// // }

// // export async function generateStaticParams() {
// //   return courses.map((course) => ({
// //     courseSlug: course.slug,
// //   }));
// // }

// // export async function generateMetadata({ params }: Props): Promise<Metadata> {
// //   const course = courses.find((c) => c.slug === params.courseSlug);
// //   if (!course) {
// //     return {
// //       title: "Course Not Found | School of Immersive Technologies",
// //       description: "The requested course could not be found.",
// //     };
// //   }

// //   return {
// //     title: `${course.title} | School of Immersive Technologies`,
// //     description: course.description,
// //     openGraph: {
// //       title: course.title,
// //       description: course.description,
// //       images: [course.image],
// //     },
// //   };
// // }

// // export default function CoursePage({ params }: Props) {
// //   const course = courses.find((c) => c.slug === params.courseSlug);

// //   if (!course) {
// //     notFound();
// //   }

// //   const relatedCourses = courses
// //     .filter((c) => c.category === course.category && c.slug !== course.slug)
// //     .slice(0, 3);

// //   // Check if the current course is B.Voc. in Multimedia and Animation
// //   const isBVocMultimedia = params.courseSlug === "b-voc-in-multimedia-and-animation";

// //   return (
// //     <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
// //       {/* Hero Section */}
// //       <section className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
// //         <div className="absolute inset-0">
// //           <Image
// //             src={course.image}
// //             alt={course.title}
// //             fill
// //             className="object-cover opacity-30"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
// //         </div>
// //         <div className="relative z-10 px-6 py-12 text-center">
// //           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
// //             {course.title}
// //           </h1>
// //           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
// //             {course.description}
// //           </p>
// //           {/* <Button
// //             asChild
// //             className="mt-6 bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
// //           >
// //             <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
// //           </Button> */}
// //         </div>
// //       </section>

// //       {/* Course Overview Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           Course Overview
// //         </h2>
// //         <div className="grid gap-6 md:grid-cols-3">
// //           <div className="rounded-lg border border-border bg-card p-6">
// //             <Clock className="mb-2 h-6 w-6 text-primary" />
// //             <h3 className="text-lg font-medium">Duration</h3>
// //             <p className="text-muted-foreground">{course.duration}</p>
// //           </div>
// //           <div className="rounded-lg border border-border bg-card p-6">
// //             <Users className="mb-2 h-6 w-6 text-primary" />
// //             <h3 className="text-lg font-medium">Intake</h3>
// //             <p className="text-muted-foreground">{course.intake}</p>
// //           </div>
// //           <div className="rounded-lg border border-border bg-card p-6">
// //             <Star className="mb-2 h-6 w-6 text-primary" />
// //             <h3 className="text-lg font-medium">Fees</h3>
// //             <p className="text-muted-foreground">{course.fees}</p>
// //           </div>
// //         </div>
// //         {/* Fee Structure for B.Voc. in Multimedia and Animation */}
// //         {isBVocMultimedia && (
// //           <div className="mt-8">
// //             <h3 className="mb-4 text-xl font-medium">Fee Structure (B.Voc. in Multimedia)</h3>
// //             <div className="overflow-x-auto">
// //               <table className="w-full border-collapse border border-border">
// //                 <thead>
// //                   <tr className="bg-muted">
// //                     <th className="border border-border px-4 py-2 text-left">Sr. No.</th>
// //                     <th className="border border-border px-4 py-2 text-left">Semester</th>
// //                     <th className="border border-border px-4 py-2 text-left">Registration</th>
// //                     <th className="border border-border px-4 py-2 text-left">Tuition Fee</th>
// //                     <th className="border border-border px-4 py-2 text-left">Exam Fee</th>
// //                     <th className="border border-border px-4 py-2 text-left">Total (INR)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td className="border border-border px-4 py-2">1</td>
// //                     <td className="border border-border px-4 py-2">I</td>
// //                     <td className="border border-border px-4 py-2">2000</td>
// //                     <td className="border border-border px-4 py-2">25000</td>
// //                     <td className="border border-border px-4 py-2">1500</td>
// //                     <td className="border border-border px-4 py-2">28,500</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border border-border px-4 py-2">2</td>
// //                     <td className="border border-border px-4 py-2">II</td>
// //                     <td className="border border-border px-4 py-2">-</td>
// //                     <td className="border border-border px-4 py-2">25000</td>
// //                     <td className="border border-border px-4 py-2">1500</td>
// //                     <td className="border border-border px-4 py-2">26,500</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border border-border px-4 py-2">3</td>
// //                     <td className="border border-border px-4 py-2">III</td>
// //                     <td className="border border-border px-4 py-2">-</td>
// //                     <td className="border border-border px-4 py-2">25000</td>
// //                     <td className="border border-border px-4 py-2">1500</td>
// //                     <td className="border border-border px-4 py-2">26,500</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border border-border px-4 py-2">4</td>
// //                     <td className="border border-border px-4 py-2">IV</td>
// //                     <td className="border border-border px-4 py-2">-</td>
// //                     <td className="border border-border px-4 py-2">25000</td>
// //                     <td className="border border-border px-4 py-2">1500</td>
// //                     <td className="border border-border px-4 py-2">26,500</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border border-border px-4 py-2">5</td>
// //                     <td className="border border-border px-4 py-2">V</td>
// //                     <td className="border border-border px-4 py-2">-</td>
// //                     <td className="border border-border px-4 py-2">25000</td>
// //                     <td className="border border-border px-4 py-2">1500</td>
// //                     <td className="border border-border px-4 py-2">26,500</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border border-border px-4 py-2">6</td>
// //                     <td className="border border-border px-4 py-2">VI</td>
// //                     <td className="border border-border px-4 py-2">-</td>
// //                     <td className="border border-border px-4 py-2">25000</td>
// //                     <td className="border border-border px-4 py-2">1500</td>
// //                     <td className="border border-border px-4 py-2">26,500</td>
// //                   </tr>
// //                   <tr className="font-semibold bg-muted">
// //                     <td className="border border-border px-4 py-2">-</td>
// //                     <td className="border border-border px-4 py-2">TOTAL</td>
// //                     <td className="border border-border px-4 py-2">2000</td>
// //                     <td className="border border-border px-4 py-2">150000</td>
// //                     <td className="border border-border px-4 py-2">9000</td>
// //                     <td className="border border-border px-4 py-2">1,61,000</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}
// //         <div className="mt-8">
// //           <h3 className="mb-4 text-xl font-medium">Program Highlights</h3>
// //           <ul className="grid gap-4 sm:grid-cols-2">
// //             {course.highlights.map((highlight, index) => (
// //               <li key={index} className="flex items-start gap-2">
// //                 <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
// //                 <span className="text-muted-foreground">{highlight}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </section>

// //       {/* Curriculum Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           Curriculum
// //         </h2>
// //         <div className="space-y-4">
// //           {course.curriculum.map((item, index) => (
// //             <div
// //               key={index}
// //               className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
// //             >
// //               <div>
// //                 <h3 className="text-lg font-medium">
// //                   {item.module}: {item.title}
// //                 </h3>
// //                 <p className="text-sm text-muted-foreground">Duration: {item.duration}</p>
// //               </div>
// //               <ChevronRight className="h-5 w-5 text-primary" />
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Future Scope and Opportunities Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           Future Scope and Opportunities
// //         </h2>
// //         <div className="rounded-lg border border-border bg-card p-6">
// //           <p className="text-muted-foreground">{course.futureScope}</p>
// //         </div>
// //       </section>

// //       {/* Faculty Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           Meet Your Instructors
// //         </h2>
// //         <div className="grid gap-6 sm:grid-cols-2">
// //           {course.faculty.map((instructor, index) => (
// //             <div
// //               key={index}
// //               className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
// //             >
// //               <div className="relative h-16 w-16 rounded-full overflow-hidden">
// //                 <Image
// //                   src={instructor.image}
// //                   alt={instructor.name}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div>
// //                 <h3 className="text-lg font-medium">{instructor.name}</h3>
// //                 <p className="text-sm text-muted-foreground">{instructor.role}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Alumni Support Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           Alumni Support
// //         </h2>
// //         <div className="rounded-lg border border-border bg-card p-6">
// //           <p className="text-muted-foreground">{course.alumniSupport}</p>
// //         </div>
// //       </section>

// //       {/* Industry Internships Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           Industry Internships
// //         </h2>
// //         <div className="rounded-lg border border-border bg-card p-6">
// //           <p className="text-muted-foreground">{course.industryInternships}</p>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="mb-16">
// //         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //           What Our Students Say
// //         </h2>
// //         <div className="grid gap-6 md:grid-cols-2">
// //           {course.testimonials.map((testimonial, index) => (
// //             <div
// //               key={index}
// //               className="relative rounded-lg border border-border bg-card p-6"
// //             >
// //               <Quote className="absolute top-4 right-4 h-6 w-6 text-primary opacity-20" />
// //               <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
// //               <p className="mt-4 font-medium">{testimonial.author}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Related Courses Section */}
// //       {relatedCourses.length > 0 && (
// //         <section className="mb-16">
// //           <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
// //             Explore Related Courses
// //           </h2>
// //           <div className="grid gap-6 md:grid-cols-3">
// //             {relatedCourses.map((relatedCourse) => (
// //               <div
// //                 key={relatedCourse.slug}
// //                 className="rounded-lg border border-border bg-card p-4 hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="relative h-[150px] w-full mb-4">
// //                   <Image
// //                     src={relatedCourse.image}
// //                     alt={relatedCourse.title}
// //                     fill
// //                     className="object-cover rounded-md"
// //                   />
// //                 </div>
// //                 <h3 className="text-lg font-medium">{relatedCourse.title}</h3>
// //                 <p className="text-sm text-muted-foreground line-clamp-2">
// //                   {relatedCourse.description}
// //                 </p>
// //                 <Button asChild variant="outline" className="mt-4 w-full">
// //                   <Link href={`/courses/${relatedCourse.slug}`}>Learn More</Link>
// //                 </Button>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       )}

// //       {/* Call to Action Section */}
// //       <section className="text-center py-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
// //         <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
// //           Ready to Start Your Journey?
// //         </h2>
// //         <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
// //           Enroll in {course.title} and take the first step toward a career in immersive technologies.
// //         </p>
// //         <Button
// //           asChild
// //           className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
// //         >
// //           <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
// //         </Button>
// //       </section>
// //     </div>
// //   );
// // }

// // app/programs/[courseSlug]/page.tsx
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { courses, Course } from "@/lib/courses";
// import { Metadata } from "next";
// import { Button } from "@/components/ui/button";
// import { Clock, Users, ChevronRight, Star, Quote, Award, BookOpen } from "lucide-react";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

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
//     openGraph: {
//       title: course.title,
//       description: course.description,
//       images: [course.image],
//     },
//   };
// }

// export default function CoursePage({ params }: Props) {
//   const course = courses.find((c) => c.slug === params.courseSlug);

//   if (!course) {
//     notFound();
//   }

//   const relatedCourses = courses
//     .filter((c) => c.category === course.category && c.slug !== course.slug)
//     .slice(0, 3);

//   // Check if the current course is B.Voc. in Multimedia and Animation
//   const isBVocMultimedia = params.courseSlug === "b-voc-in-multimedia-and-animation";

//   return (
//     <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
//       {/* Hero Section */}
//       <section className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
//         <div className="absolute inset-0">
//           <Image
//             src={course.image}
//             alt={course.title}
//             fill
//             className="object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
//         </div>
//         <div className="relative z-10 px-6 py-12 text-center">
//           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
//             {course.title}
//           </h1>
//           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
//             {course.description}
//           </p>
//           {/* <Button
//             asChild
//             className="mt-6 bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
//           >
//             <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
//           </Button> */}
//         </div>
//       </section>

//       {/* Course Overview Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Course Overview
//         </h2>
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="rounded-lg border border-border bg-card p-6">
//             <Clock className="mb-2 h-6 w-6 text-primary" />
//             <h3 className="text-lg font-medium">Duration</h3>
//             <p className="text-muted-foreground">{course.duration}</p>
//           </div>
//           <div className="rounded-lg border border-border bg-card p-6">
//             <Users className="mb-2 h-6 w-6 text-primary" />
//             <h3 className="text-lg font-medium">Intake</h3>
//             <p className="text-muted-foreground">{course.intake}</p>
//           </div>
//           <div className="rounded-lg border border-border bg-card p-6">
//             <Star className="mb-2 h-6 w-6 text-primary" />
//             <h3 className="text-lg font-medium">Fees</h3>
//             <p className="text-muted-foreground">{course.fees}</p>
//           </div>
//         </div>
//         {/* Fee Structure for B.Voc. in Multimedia and Animation */}
//         {isBVocMultimedia && (
//           <div className="mt-8">
//             <h3 className="mb-4 text-xl font-medium">Fee Structure (B.Voc. in Multimedia)</h3>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-border">
//                 <thead>
//                   <tr className="bg-muted">
//                     <th className="border border-border px-4 py-2 text-left">Sr. No.</th>
//                     <th className="border border-border px-4 py-2 text-left">Semester</th>
//                     <th className="border border-border px-4 py-2 text-left">Registration</th>
//                     <th className="border border-border px-4 py-2 text-left">Tuition Fee</th>
//                     <th className="border border-border px-4 py-2 text-left">Exam Fee</th>
//                     <th className="border border-border px-4 py-2 text-left">Total (INR)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-border px-4 py-2">1</td>
//                     <td className="border border-border px-4 py-2">I</td>
//                     <td className="border border-border px-4 py-2">2000</td>
//                     <td className="border border-border px-4 py-2">25000</td>
//                     <td className="border border-border px-4 py-2">1500</td>
//                     <td className="border border-border px-4 py-2">28,500</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-border px-4 py-2">2</td>
//                     <td className="border border-border px-4 py-2">II</td>
//                     <td className="border border-border px-4 py-2">-</td>
//                     <td className="border border-border px-4 py-2">25000</td>
//                     <td className="border border-border px-4 py-2">1500</td>
//                     <td className="border border-border px-4 py-2">26,500</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-border px-4 py-2">3</td>
//                     <td className="border border-border px-4 py-2">III</td>
//                     <td className="border border-border px-4 py-2">-</td>
//                     <td className="border border-border px-4 py-2">25000</td>
//                     <td className="border border-border px-4 py-2">1500</td>
//                     <td className="border border-border px-4 py-2">26,500</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-border px-4 py-2">4</td>
//                     <td className="border border-border px-4 py-2">IV</td>
//                     <td className="border border-border px-4 py-2">-</td>
//                     <td className="border border-border px-4 py-2">25000</td>
//                     <td className="border border-border px-4 py-2">1500</td>
//                     <td className="border border-border px-4 py-2">26,500</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-border px-4 py-2">5</td>
//                     <td className="border border-border px-4 py-2">V</td>
//                     <td className="border border-border px-4 py-2">-</td>
//                     <td className="border border-border px-4 py-2">25000</td>
//                     <td className="border border-border px-4 py-2">1500</td>
//                     <td className="border border-border px-4 py-2">26,500</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-border px-4 py-2">6</td>
//                     <td className="border border-border px-4 py-2">VI</td>
//                     <td className="border border-border px-4 py-2">-</td>
//                     <td className="border border-border px-4 py-2">25000</td>
//                     <td className="border border-border px-4 py-2">1500</td>
//                     <td className="border border-border px-4 py-2">26,500</td>
//                   </tr>
//                   <tr className="font-semibold bg-muted">
//                     <td className="border border-border px-4 py-2">-</td>
//                     <td className="border border-border px-4 py-2">TOTAL</td>
//                     <td className="border border-border px-4 py-2">2000</td>
//                     <td className="border border-border px-4 py-2">150000</td>
//                     <td className="border border-border px-4 py-2">9000</td>
//                     <td className="border border-border px-4 py-2">1,61,000</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//         <div className="mt-8">
//           <h3 className="mb-4 text-xl font-medium">Program Highlights</h3>
//           <ul className="grid gap-4 sm:grid-cols-2">
//             {course.highlights.map((highlight, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                 <span className="text-muted-foreground">{highlight}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* About B.Voc. Section (Only for B.Voc. Course) */}
//       {isBVocMultimedia && (
//         <section className="mb-16">
//           <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//             About B.Voc. Program
//           </h2>
//           <div className="rounded-lg border border-border bg-card p-6">
//             <p className="text-muted-foreground mb-4">
//               The Bachelor of Vocation (B.Voc.) program, launched by the University Grants Commission (UGC), focuses on skill development within higher education. It offers a flexible structure with multiple exit points—Diploma after 1 year, Advanced Diploma after 2 years, and a B.Voc. Degree after 3 years—aligned with the National Skills Qualifications Framework (NSQF). This ensures graduates are work-ready at each stage, equipped to contribute to India’s economy through employment, entrepreneurship, or innovation.
//             </p>
//             <p className="text-muted-foreground mb-4">
//               At SOIT, the B.Voc. in Multimedia and Animation is offered in collaboration with Lingaya’s Vidyapeeth School of Vocational Training (LV-SVS). The program integrates practical skills with general education, preparing students for global careers in animation, VFX, gaming, and immersive technologies like AR/VR/MR.
//             </p>
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="rounded-lg border border-border bg-muted p-4">
//                 <Award className="mb-2 h-6 w-6 text-primary" />
//                 <h3 className="text-lg font-medium">NSQF Levels & Awards</h3>
//                 <ul className="mt-2 text-muted-foreground">
//                   <li>Diploma (1 Year) - NSQF Level 5</li>
//                   <li>Advanced Diploma (2 Years) - NSQF Level 6</li>
//                   <li>B.Voc. Degree (3 Years) - NSQF Level 7</li>
//                 </ul>
//               </div>
//               <div className="rounded-lg border border-border bg-muted p-4">
//                 <BookOpen className="mb-2 h-6 w-6 text-primary" />
//                 <h3 className="text-lg font-medium">Assessment</h3>
//                 <p className="text-muted-foreground">
//                   Examinations are conducted by Lingaya’s Vidyapeeth, with skill components assessed in collaboration with Sector Skill Councils (NSDC). Practical assessments use designated industry assessors to ensure real-world relevance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Curriculum Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Curriculum
//         </h2>
//         <div className="space-y-6">
//           {course.curriculum.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row items-center rounded-lg border border-border bg-card overflow-hidden"
//             >
//               <div className="relative w-full md:w-1/3 h-[200px] md:h-[250px]">
//                 <Image
//                   src={item.image}
//                   alt={item.module}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex-1 p-6">
//                 <h3 className="text-xl font-medium text-primary">
//                   {item.module}: {item.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground mt-1">Duration: {item.duration}</p>
//                 <h4 className="mt-4 text-lg font-medium">Subjects Covered:</h4>
//                 <ul className="mt-2 space-y-1">
//                   {item.subjects.map((subject: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, sIndex: Key | null | undefined) => (
//                     <li key={sIndex} className="flex items-start gap-2 text-muted-foreground">
//                       <ChevronRight className="h-4 w-4 text-primary mt-0.5" />
//                       {subject}
//                     </li>
//                   ))}
//                 </ul>
//                 <h4 className="mt-4 text-lg font-medium">Practical Component:</h4>
//                 <p className="text-muted-foreground mt-1">{item.practical}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Future Scope and Opportunities Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Future Scope and Opportunities
//         </h2>
//         <div className="rounded-lg border border-border bg-card p-6">
//           <p className="text-muted-foreground">{course.futureScope}</p>
//           <h3 className="mt-4 text-xl font-medium">Career Roles:</h3>
//           <ul className="grid gap-2 sm:grid-cols-2 mt-2 text-muted-foreground">
//             <li className="flex items-start gap-2">
//               <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//               2D/3D Animator
//             </li>
//             <li className="flex items-start gap-2">
//               <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//               VFX Artist
//             </li>
//             <li className="flex items-start gap-2">
//               <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//               Game Designer
//             </li>
//             <li className="flex items-start gap-2">
//               <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//               Multimedia Specialist
//             </li>
//             <li className="flex items-start gap-2">
//               <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//               AR/VR Developer
//             </li>
//             <li className="flex items-start gap-2">
//               <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//               Motion Graphic Designer
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Faculty Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Meet Your Instructors
//         </h2>
//         <div className="grid gap-6 sm:grid-cols-2">
//           {course.faculty.map((instructor, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
//             >
//               <div className="relative h-16 w-16 rounded-full overflow-hidden">
//                 <Image
//                   src={instructor.image}
//                   alt={instructor.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium">{instructor.name}</h3>
//                 <p className="text-sm text-muted-foreground">{instructor.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Alumni Support Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Alumni Support
//         </h2>
//         <div className="rounded-lg border border-border bg-card p-6">
//           <p className="text-muted-foreground">{course.alumniSupport}</p>
//         </div>
//       </section>

//       {/* Industry Internships Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Industry Internships
//         </h2>
//         <div className="rounded-lg border border-border bg-card p-6">
//           <p className="text-muted-foreground">{course.industryInternships}</p>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           What Our Students Say
//         </h2>
//         <div className="grid gap-6 md:grid-cols-2">
//           {course.testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="relative rounded-lg border border-border bg-card p-6"
//             >
//               <Quote className="absolute top-4 right-4 h-6 w-6 text-primary opacity-20" />
//               <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
//               <p className="mt-4 font-medium">{testimonial.author}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Related Courses Section */}
//       {relatedCourses.length > 0 && (
//         <section className="mb-16">
//           <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//             Explore Related Courses
//           </h2>
//           <div className="grid gap-6 md:grid-cols-3">
//             {relatedCourses.map((relatedCourse) => (
//               <div
//                 key={relatedCourse.slug}
//                 className="rounded-lg border border-border bg-card p-4 hover:shadow-lg transition-shadow"
//               >
//                 <div className="relative h-[150px] w-full mb-4">
//                   <Image
//                     src={relatedCourse.image}
//                     alt={relatedCourse.title}
//                     fill
//                     className="object-cover rounded-md"
//                   />
//                 </div>
//                 <h3 className="text-lg font-medium">{relatedCourse.title}</h3>
//                 <p className="text-sm text-muted-foreground line-clamp-2">
//                   {relatedCourse.description}
//                 </p>
//                 <Button asChild variant="outline" className="mt-4 w-full">
//                   <Link href={`/courses/${relatedCourse.slug}`}>Learn More</Link>
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Call to Action Section */}
//       <section className="text-center py-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
//         <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
//           Ready to Start Your Journey?
//         </h2>
//         <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
//           Enroll in {course.title} and take the first step toward a career in immersive technologies.
//         </p>
//         <Button
//           asChild
//           className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
//         >
//           <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
//         </Button>
//       </section>
//     </div>
//   );
// }

// app/courses/[courseSlug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses, Course } from "@/lib/courses";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChevronRight, Star, Quote, Award, BookOpen, Target } from "lucide-react";

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

  const isBVocMultimedia = params.courseSlug === "b-voc-in-multimedia-and-animation";

  return (
    <div className="relative bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in-up">
            {course.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-200">
            {course.description}
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
            {/* <Button
              asChild
              className="h-12 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href={`/apply?course=${course.slug}`}>Apply Now</Link>
            </Button> */}
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Course Overview
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium">Duration</h3>
              </div>
              <p className="text-muted-foreground">{course.duration}</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium">Intake</h3>
              </div>
              <p className="text-muted-foreground">{course.intake}</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium">Fees</h3>
              </div>
              <p className="text-muted-foreground">{course.fees}</p>
            </div>
          </div>

          {/* Fee Structure for B.Voc. in Multimedia and Animation */}
          {isBVocMultimedia && (
            <div className="mt-12">
              <h3 className="mb-6 text-center font-heading text-2xl font-semibold text-foreground">
                Fee Structure (B.Voc. in Multimedia)
              </h3>
              <div className="overflow-x-auto rounded-xl shadow-lg border border-border">
                <table className="w-full border-collapse bg-card">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-3 text-left text-sm font-medium text-foreground">
                        Sr. No.
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-medium text-foreground">
                        Semester
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-medium text-foreground">
                        Registration
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-medium text-foreground">
                        Tuition Fee
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-medium text-foreground">
                        Exam Fee
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-medium text-foreground">
                        Total (INR)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">I</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">2000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">25000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1500</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">28,500</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-muted-foreground">2</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">II</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">-</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">25000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1500</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">26,500</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-muted-foreground">3</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">III</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">-</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">25000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1500</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">26,500</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-muted-foreground">4</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">IV</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">-</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">25000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1500</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">26,500</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-muted-foreground">5</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">V</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">-</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">25000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1500</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">26,500</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 text-muted-foreground">6</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">VI</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">-</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">25000</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">1500</td>
                      <td className="border border-border px-4 py-3 text-muted-foreground">26,500</td>
                    </tr>
                    <tr className="font-semibold bg-muted">
                      <td className="border border-border px-4 py-3">-</td>
                      <td className="border border-border px-4 py-3">TOTAL</td>
                      <td className="border border-border px-4 py-3">2000</td>
                      <td className="border border-border px-4 py-3">150000</td>
                      <td className="border border-border px-4 py-3">9000</td>
                      <td className="border border-border px-4 py-3">1,61,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Program Highlights */}
          <div className="mt-12">
            <h3 className="mb-6 text-center font-heading text-2xl font-semibold text-foreground">
              Program Highlights
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {course.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1"
                >
                  <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About B.Voc. Section (Only for B.Voc. Course) */}
      {isBVocMultimedia && (
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
                About B.Voc. Program
              </h2>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                <p className="text-muted-foreground mb-6">
                  The Bachelor of Vocation (B.Voc.) program, launched by the University Grants Commission (UGC), focuses on skill development within higher education. It offers a flexible structure with multiple exit points—Diploma after 1 year, Advanced Diploma after 2 years, and a B.Voc. Degree after 3 years—aligned with the National Skills Qualifications Framework (NSQF). This ensures graduates are work-ready at each stage, equipped to contribute to India’s economy through employment, entrepreneurship, or innovation.
                </p>
                <p className="text-muted-foreground mb-6">
                  At SOIT, the B.Voc. in Multimedia and Animation is offered in collaboration with Lingaya’s Vidyapeeth School of Vocational Training (LV-SVS). The program integrates practical skills with general education, preparing students for global careers in animation, VFX, gaming, and immersive technologies like AR/VR/MR.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-muted/50 rounded-xl p-6 shadow-inner">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">NSQF Levels & Awards</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                        Diploma (1 Year) - NSQF Level 5
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                        Advanced Diploma (2 Years) - NSQF Level 6
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                        B.Voc. Degree (3 Years) - NSQF Level 7
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-6 shadow-inner">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-4">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Assessment</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Examinations are conducted by Lingaya’s Vidyapeeth, with skill components assessed in collaboration with Sector Skill Councils (NSDC). Practical assessments use designated industry assessors to ensure real-world relevance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Curriculum
          </h2>
          {course.curriculum && course.curriculum.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {course.curriculum.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl bg-card shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    {item.image ? (
                      <Image
                        src={item.image as string}
                        alt={item.module}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <p className="text-muted-foreground">Image Coming Soon</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.module}: {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">Duration: {item.duration}</p>
                    {item.subjects && Array.isArray(item.subjects) && item.subjects.length > 0 && (
                      <>
                        <h4 className="text-lg font-medium text-foreground mb-2">Subjects Covered:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {item.subjects.map((subject: string, sIndex: number) => (
                            <li key={sIndex} className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {item.practical && (
                      <>
                        <h4 className="text-lg font-medium text-foreground mt-4 mb-2">Practical Component:</h4>
                        <div className="text-muted-foreground">{item.practical}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card p-6 shadow-lg border border-border text-center">
              <p className="text-muted-foreground">Curriculum details coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Future Scope and Opportunities Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
              Future Scope and Opportunities
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <p className="text-muted-foreground mb-6">{course.futureScope}</p>
              {isBVocMultimedia && (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Career Roles:</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "2D/3D Animator",
                      "VFX Artist",
                      "Game Designer",
                      "Multimedia Specialist",
                      "AR/VR Developer",
                      "Motion Graphic Designer",
                    ].map((role, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl bg-muted/50 p-4 transition-transform duration-300 hover:-translate-y-1"
                      >
                        <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{role}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Meet Your Instructors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {course.faculty.map((instructor, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{instructor.name}</h3>
                  <p className="text-muted-foreground">{instructor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Support Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
              Alumni Support
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <p className="text-muted-foreground">{course.alumniSupport}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Internships Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Industry Internships
          </h2>
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <p className="text-muted-foreground">{course.industryInternships}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
              What Our Students Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {course.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute top-4 right-4 h-6 w-6 text-primary opacity-20" />
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="container mx-auto px-4 py-16 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
              Explore Related Courses
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((relatedCourse) => (
                <div
                  key={relatedCourse.slug}
                  className="group bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{relatedCourse.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{relatedCourse.description}</p>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href={`/courses/${relatedCourse.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="bg-blue-400 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Enroll in {course.title} and take the first step toward a career in immersive technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Button
              asChild
              className="h-12 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href={`/apply?course=${course.slug}`}>
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border border-background bg-transparent text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href="/contact">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      {/* <a
        href="/apply"
        className="fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
      >
        Apply Now
        <ChevronRight className="ml-2 h-4 w-4" />
      </a> */}
    </div>
  );
}
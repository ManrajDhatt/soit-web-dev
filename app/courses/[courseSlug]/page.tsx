

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { courses, Course } from "@/lib/courses";
// import { Metadata } from "next";
// import { Button } from "@/components/ui/button";
// import { Clock, Users, Star, Quote, Award, BookOpen, CheckCircle, Briefcase, GraduationCap, ChevronRight } from "lucide-react";

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

//   const isBVocMultimedia = params.courseSlug === "b-voc-in-multimedia-and-animation";

//   return (
//     <div className="relative bg-background">
//       {/* Hero Section with Parallax */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={course.image}
//             alt={course.title}
//             fill
//             className="object-cover opacity-40 parallax-bg"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
//         </div>
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
//           <h1 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl md:text-6xl ">
//             {course.title}
//           </h1>
//           <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl ">
//             {course.description}
//           </p>
//           <p className="mt-4 text-sm text-muted-foreground/80 ">
//             Dive into the world of immersive technologies with hands-on learning and industry-ready skills.
//           </p>
//           <div className="mt-6 flex justify-center gap-4 fade-in-up animation-delay-400">
//             <Button
//               asChild
//               variant="outline"
//               className="h-12 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             >
//               <Link href="/contact">Get in Touch</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Course Overview Section */}
//       <section className="container mx-auto px-4 py-12 sm:px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//             Course Overview
//           </h2>
//           <div className="grid gap-6 sm:grid-cols-3 mb-12">
//             {[
//               { icon: Clock, title: "Duration", value: course.duration, desc: "Flexible learning pace with expert guidance." },
//               { icon: Users, title: "Intake", value: course.intake, desc: "Limited seats for personalized attention." },
//               { icon: Star, title: "Fees", value: course.fees, desc: "Affordable pricing with scholarship options." },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-background scale-in"
//                 style={{ animationDelay: `${index * 100 + 200}ms` }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 bg-primary/10 rounded-full mr-4">
//                     <item.icon className="h-6 w-6 text-primary" />
//                   </div>
//                   <h3 className="text-lg font-medium">{item.title}</h3>
//                 </div>
//                 <p className="text-muted-foreground font-semibold">{item.value}</p>
//                 <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Program Highlights Section */}
//       <section className="bg-muted/30 py-12">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//               Why Choose This Program?
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2">
//               {course.highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-4 rounded-xl bg-card p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl scale-in"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="p-2 bg-primary/10 rounded-full">
//                     <CheckCircle className="h-6 w-6 text-primary" />
//                   </div>
//                   <span className="text-foreground font-medium">{highlight}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About B.Voc. Section (Only for B.Voc. Course) */}
//       {isBVocMultimedia && (
//         <section className="container mx-auto px-4 py-12 sm:px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//               Discover the B.Voc. in Multimedia & Animation
//             </h2>
//             <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
//               <div className="grid gap-8 lg:grid-cols-2">
//                 <div className="slide-in-left">
//                   <h3 className="text-2xl font-semibold text-foreground mb-4">A Program Designed for Success</h3>
//                   <p className="text-muted-foreground mb-4">
//                     The <span className="font-semibold text-primary">B.Voc. in Multimedia and Animation</span> at the School of Immersive Technologies (SOIT) is a UGC-approved program crafted to develop industry-ready professionals. Offered in collaboration with <span className="font-semibold">Lingaya’s Vidyapeeth School of Vocational Training (LV-SVS)</span>, this program combines practical skills with theoretical knowledge, preparing you for global careers in animation, VFX, gaming, and immersive technologies like AR/VR/MR.
//                   </p>
//                   <p className="text-muted-foreground mb-4">
//                     With affiliations to esteemed institutions like <span className="font-semibold">Birmingham University</span>, we ensure a curriculum that meets international standards. Choose between <span className="font-semibold">online</span> and <span className="font-semibold">offline</span> learning modes to suit your needs, with hands-on training in state-of-the-art labs.
//                   </p>
//                 </div>
//                 <div className="bg-muted/50 rounded-xl p-6 shadow-inner slide-in-right">
//                   <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Learning Pathway</h3>
//                   <p className="text-muted-foreground mb-4">
//                     The B.Voc. program offers multiple exit points aligned with the National Skills Qualifications Framework (NSQF):
//                   </p>
//                   <ul className="space-y-3 text-muted-foreground">
//                     {["Diploma (1 Year) - NSQF Level 5", "Advanced Diploma (2 Years) - NSQF Level 6", "B.Voc. Degree (3 Years) - NSQF Level 7"].map((item, index) => (
//                       <li key={index} className="flex items-start gap-3 slide-in-right" style={{ animationDelay: `${index * 100 + 200}ms` }}>
//                         <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="text-muted-foreground mt-4 slide-in-right animation-delay-500">
//                     Assessments are conducted by Lingaya’s Vidyapeeth, with skill components evaluated by Sector Skill Councils (NSDC) using industry assessors for real-world relevance.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Fee Structure for B.Voc. in Multimedia and Animation */}
//       {isBVocMultimedia && (
//         <section className="bg-muted/30 py-12">
//           <div className="container mx-auto px-4 sm:px-6">
//             <div className="max-w-5xl mx-auto">
//               {/* <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//                 Fee Structure (B.Voc. in Multimedia)
//               </h2>
//               <div className="overflow-x-auto rounded-xl shadow-lg border border-border fade-in-up animation-delay-200">
//                 <table className="w-full border-collapse bg-card">
//                   <thead>
//                     <tr className="bg-blue-500 text-primary-foreground">
//                       <th className="border border-border px-4 py-3 text-left text-sm font-medium">Sr. No.</th>
//                       <th className="border border-border px-4 py-3 text-left text-sm font-medium">Semester</th>
//                       <th className="border border-border px-4 py-3 text-left text-sm font-medium">Registration</th>
//                       <th className="border border-border px-4 py-3 text-left text-sm font-medium">Tuition Fee</th>
//                       <th className="border border-border px-4 py-3 text-left text-sm font-medium">Exam Fee</th>
//                       <th className="border border-border px-4 py-3 text-left text-sm font-medium">Total (INR)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { sr: "1", semester: "I", registration: "2000", tuition: "25000", exam: "1500", total: "28,500" },
//                       { sr: "2", semester: "II", registration: "-", tuition: "25000", exam: "1500", total: "26,500" },
//                       { sr: "3", semester: "III", registration: "-", tuition: "25000", exam: "1500", total: "26,500" },
//                       { sr: "4", semester: "IV", registration: "-", tuition: "25000", exam: "1500", total: "26,500" },
//                       { sr: "5", semester: "V", registration: "-", tuition: "25000", exam: "1500", total: "26,500" },
//                       { sr: "6", semester: "VI", registration: "-", tuition: "25000", exam: "1500", total: "26,500" },
//                       { sr: "-", semester: "TOTAL", registration: "2000", tuition: "150000", exam: "9000", total: "1,61,000" },
//                     ].map((row, index) => (
//                       <tr
//                         key={index}
//                         className={index === 6 ? "font-semibold bg-muted slide-in-left" : "hover:bg-muted/50 slide-in-left"}
//                         style={{ animationDelay: `${index * 50 + 300}ms` }}
//                       >
//                         <td className="border border-border px-4 py-3 text-muted-foreground">{row.sr}</td>
//                         <td className="border border-border px-4 py-3 text-muted-foreground">{row.semester}</td>
//                         <td className="border border-border px-4 py-3 text-muted-foreground">{row.registration}</td>
//                         <td className="border border-border px-4 py-3 text-muted-foreground">{row.tuition}</td>
//                         <td className="border border-border px-4 py-3 text-muted-foreground">{row.exam}</td>
//                         <td className="border border-border px-4 py-3 text-muted-foreground">{row.total}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div> */}
              
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Curriculum Section */}
//       <section className="container mx-auto px-4 py-12 sm:px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//             What You’ll Learn
//           </h2>
//           {course.curriculum && course.curriculum.length > 0 ? (
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {course.curriculum.map((item, index) => (
//                 <div
//                   key={index}
//                   className="group relative rounded-xl bg-card shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scale-in"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="relative h-48">
//                     {item.image ? (
//                       <Image
//                         src={item.image as string}
//                         alt={item.module}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-muted flex items-center justify-center">
//                         <p className="text-muted-foreground">Image Coming Soon</p>
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-foreground mb-2">
//                       {item.module}: {item.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
//                       <Clock className="h-4 w-4 text-primary" /> Duration: {item.duration}
//                     </p>
//                     {item.subjects && Array.isArray(item.subjects) && item.subjects.length > 0 && (
//                       <>
//                         <h4 className="text-lg font-medium text-foreground mb-3">Subjects Covered:</h4>
//                         <ul className="space-y-2 text-muted-foreground">
//                           {item.subjects.map((subject: string, sIndex: number) => (
//                             <li key={sIndex} className="flex items-start gap-2 slide-in-right" style={{ animationDelay: `${sIndex * 50}ms` }}>
//                               <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
//                               {subject}
//                             </li>
//                           ))}
//                         </ul>
//                       </>
//                     )}
//                     {item.practical && (
//                       <>
//                         <h4 className="text-lg font-medium text-foreground mt-4 mb-3">Practical Component:</h4>
//                         <div className="text-muted-foreground flex items-start gap-2 slide-in-right animation-delay-200">
//                           <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
//                           {item.practical}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="rounded-xl bg-card p-6 shadow-lg border border-border text-center fade-in-up">
//               <p className="text-muted-foreground">Curriculum details coming soon.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Future Scope and Opportunities Section */}
//       <section className="bg-muted/30 py-12">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//               Future Scope and Opportunities
//             </h2>
//             <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
//               <p className="text-muted-foreground mb-6 slide-in-left">{course.futureScope}</p>
//               {isBVocMultimedia && (
//                 <>
//                   <h3 className="text-xl font-semibold text-foreground mb-4 slide-in-left animation-delay-300">Career Roles You Can Pursue:</h3>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {[
//                       "2D/3D Animator",
//                       "VFX Artist",
//                       "Game Designer",
//                       "Multimedia Specialist",
//                       "AR/VR Developer",
//                       "Motion Graphic Designer",
//                     ].map((role, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-3 rounded-xl bg-muted/50 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-muted slide-in-right"
//                         style={{ animationDelay: `${index * 100}ms` }}
//                       >
//                         <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
//                         <span className="text-foreground font-medium">{role}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Faculty Section */}
//       {/* <section className="container mx-auto px-4 py-12 sm:px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//             Meet Your Instructors
//           </h2>
//           <div className="grid gap-6 sm:grid-cols-2 justify-items-center">
//             {course.faculty.slice(0, 2).map((instructor, index) => (
//               <div
//                 key={index}
//                 className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 max-w-sm scale-in"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden mb-4">
//                   <Image
//                     src="/placeholder.jpg"
//                     alt={instructor.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="text-center">
//                   <h3 className="text-lg font-semibold text-foreground">{instructor.name}</h3>
//                   <p className="text-muted-foreground">{instructor.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Alumni Support Section */}
//       <section className="bg-muted/30 py-12">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//               Alumni Support
//             </h2>
//             <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-primary/10 rounded-full">
//                   <GraduationCap className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-muted-foreground mb-4 slide-in-left">{course.alumniSupport}</p>
//                   <p className="text-muted-foreground italic slide-in-left animation-delay-300">
//                     "Our alumni network connects you with industry leaders and provides lifelong support for your career growth." – SOIT Alumni Team
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Industry Internships Section */}
//       <section className="container mx-auto px-4 py-12 sm:px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//             Industry Internships
//           </h2>
//           <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-primary/10 rounded-full">
//                 <Briefcase className="h-6 w-6 text-primary" />
//               </div>
//               <div>
//                 <p className="text-muted-foreground mb-4 slide-in-left">{course.industryInternships}</p>
//                 <p className="text-muted-foreground italic slide-in-left animation-delay-300">
//                   "Gain real-world experience with top companies in animation, gaming, and immersive tech." – SOIT Career Services
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-muted/30 py-12">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//               What Our Students Say
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2">
//               {course.testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="relative bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl scale-in"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <Quote className="absolute top-4 right-4 h-6 w-6 text-primary opacity-20" />
//                   <p className="text-muted-foreground italic mb-4">{testimonial.quote}</p>
//                   <p className="font-medium text-foreground">{testimonial.author}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Courses Section */}
//       {relatedCourses.length > 0 && (
//         <section className="container mx-auto px-4 py-12 sm:px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
//               Explore Related Courses
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {relatedCourses.map((relatedCourse, index) => (
//                 <div
//                   key={relatedCourse.slug}
//                   className="group bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scale-in"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="relative h-48">
//                     <Image
//                       src={relatedCourse.image}
//                       alt={relatedCourse.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold text-foreground mb-2">{relatedCourse.title}</h3>
//                     <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{relatedCourse.description}</p>
//                     <Button asChild variant="outline" className="w-full rounded-full">
//                       <Link href={`/courses/${relatedCourse.slug}`}>Learn More</Link>
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Call to Action Section */}
//       <section className="bg-blue-400 text-primary-foreground py-12">
//         <div className="container mx-auto px-4 sm:px-6 text-center">
//           <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight fade-in-up">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl fade-in-up animation-delay-200">
//             Enroll in {course.title} and take the first step toward a career in immersive technologies.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 fade-in-up animation-delay-400">
//             <Button
//               asChild
//               variant="outline"
//               className="h-12 rounded-full border border-background bg-transparent text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             >
//               <Link href="/contact">
//                 Contact Us
//                 <ChevronRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses, Course } from "@/lib/courses";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Quote, Award, BookOpen, CheckCircle, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import HeroSection from "@/components/bvoc_hero";

interface Props {
  params: { courseSlug: string };
}

// export default function generateStaticParams() {
//   return courses.map((course) => ({
//     courseSlug: course.slug,
//   }));
// }

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
      <HeroSection
        title={course.title}
        description={course.description}
        image={course.image}
      />

      {/* Course Overview Section */}
      <section className="container mx-auto px-4 py-12 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
            Course Overview
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 mb-12">
            {[
              { icon: Clock, title: "Duration", value: course.duration, desc: "Flexible learning pace with expert guidance." },
              { icon: Users, title: "Intake", value: course.intake, desc: "Limited seats for personalized attention." },
              { icon: Star, title: "Fees", value: course.fees, desc: "Affordable pricing with scholarship options." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-background scale-in"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <p className="text-muted-foreground font-semibold">{item.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
              Why Choose This Program?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {course.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl bg-card p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About B.Voc. Section (Only for B.Voc. Course) */}
      {isBVocMultimedia && (
        <section className="container mx-auto px-4 py-12 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
              Discover the B.Voc. in Multimedia & Animation
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="slide-in-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">A Program Designed for Success</h3>
                  <p className="text-muted-foreground mb-4">
                    The <span className="font-semibold text-primary">B.Voc. in Multimedia and Animation</span> at the School of Immersive Technologies (SOIT) is a UGC-approved program crafted to develop industry-ready professionals. Offered in collaboration with <span className="font-semibold">Lingaya’s Vidyapeeth School of Vocational Training (LV-SVS)</span>, this program combines practical skills with theoretical knowledge, preparing you for global careers in animation, VFX, gaming, and immersive technologies like AR/VR/MR.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With affiliations to esteemed institutions like <span className="font-semibold">Birmingham University</span>, we ensure a curriculum that meets international standards. Choose between <span className="font-semibold">online</span> and <span className="font-semibold">offline</span> learning modes to suit your needs, with hands-on training in state-of-the-art labs.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6 shadow-inner slide-in-right">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Learning Pathway</h3>
                  <p className="text-muted-foreground mb-4">
                    The B.Voc. program offers multiple exit points aligned with the National Skills Qualifications Framework (NSQF):
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    {["Diploma (1 Year) - NSQF Level 5", "Advanced Diploma (2 Years) - NSQF Level 6", "B.Voc. Degree (3 Years) - NSQF Level 7"].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 slide-in-right" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-4 slide-in-right animation-delay-500">
                    Assessments are conducted by Lingaya’s Vidyapeeth, with skill components evaluated by Sector Skill Councils (NSDC) using industry assessors for real-world relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fee Structure for B.Voc. in Multimedia and Animation */}
      {isBVocMultimedia && (
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              {/* Fee Structure Section (Commented Out) */}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-12 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
            What You’ll Learn
          </h2>
          {course.curriculum && course.curriculum.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {course.curriculum.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl bg-card shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.module}: {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" /> Duration: {item.duration}
                    </p>
                    {item.subjects && Array.isArray(item.subjects) && item.subjects.length > 0 && (
                      <>
                        <h4 className="text-lg font-medium text-foreground mb-3">Subjects Covered:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {item.subjects.map((subject: string, sIndex: number) => (
                            <li key={sIndex} className="flex items-start gap-2 slide-in-right" style={{ animationDelay: `${sIndex * 50}ms` }}>
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {item.practical && (
                      <>
                        <h4 className="text-lg font-medium text-foreground mt-4 mb-3">Practical Component:</h4>
                        <div className="text-muted-foreground flex items-start gap-2 slide-in-right animation-delay-200">
                          <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          {item.practical}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card p-6 shadow-lg border border-border text-center fade-in-up">
              <p className= "text-muted-foreground">Curriculum details coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Future Scope and Opportunities Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
              Future Scope and Opportunities
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
              <p className="text-muted-foreground mb-6 slide-in-left">{course.futureScope}</p>
              {isBVocMultimedia && (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-4 slide-in-left animation-delay-300">Career Roles You Can Pursue:</h3>
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
                        className="flex items-center gap-3 rounded-xl bg-muted/50 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-muted slide-in-right"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Support Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
              Alumni Support
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground mb-4 slide-in-left">{course.alumniSupport}</p>
                  <p className="text-muted-foreground italic slide-in-left animation-delay-300">
                    "Our alumni network connects you with industry leaders and provides lifelong support for your career growth." – SOIT Alumni Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Internships Section */}
      <section className="container mx-auto px-4 py-12 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
            Industry Internships
          </h2>
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border fade-in-up animation-delay-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground mb-4 slide-in-left">{course.industryInternships}</p>
                <p className="text-muted-foreground italic slide-in-left animation-delay-300">
                  "Gain real-world experience with top companies in animation, gaming, and immersive tech." – SOIT Career Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
              What Our Students Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {course.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-card rounded-xl p-6 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="absolute top-4 right-4 h-6 w-6 text-primary opacity-20" />
                  <p className="text-muted-foreground italic mb-4">{testimonial.quote}</p>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="container mx-auto px-4 py-12 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 text-center font-heading text-4xl font-bold tracking-tight text-foreground fade-in-up">
              Explore Related Courses
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((relatedCourse, index) => (
                <div
                  key={relatedCourse.slug}
                  className="group bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      <section className="bg-blue-400 text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight fade-in-up">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl fade-in-up animation-delay-200">
            Enroll in {course.title} and take the first step toward a career in immersive technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 fade-in-up animation-delay-400">
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
    </div>
  );
}
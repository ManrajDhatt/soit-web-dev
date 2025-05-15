// // app/admissions/page.tsx
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChevronRight, FileText, Users, BookOpen } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Admissions | School of Immersive Technologies",
//   description:
//     "Learn about the admission process, eligibility criteria, required documents, and program details for the School of Immersive Technologies at Lingaya's Vidyapeeth.",
//   openGraph: {
//     title: "Admissions | School of Immersive Technologies",
//     description:
//       "Join our cutting-edge programs in multimedia, animation, VFX, and immersive technologies. Explore our admission process and apply today!",
//     images: ["/images/admissions-hero.jpg"], // Replace with an actual image
//   },
// };

// export default function AdmissionsPage() {
//   return (
//     <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
//       {/* Hero Section */}
//       <section className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
//         <div className="absolute inset-0">
//           {/* <Image
//             src="/images/admissions-hero.jpg" // Replace with an actual hero image
//             alt="Admissions at School of Immersive Technologies"
//             fill
//             className="object-cover opacity-30"
//           /> */}
//           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
//         </div>
//         <div className="relative z-10 px-6 py-12 text-center">
//           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
//             Admissions
//           </h1>
//           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
//             Join the School of Immersive Technologies and start your journey in multimedia, animation, VFX, and immersive technologies.
//           </p>
//           <Button
//             asChild
//             className="mt-6 bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
//           >
//             <Link href="/apply">Apply Now</Link>
//           </Button>
//         </div>
//       </section>

//       {/* Admission Process Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Admission Process
//         </h2>
//         <div className="grid gap-6 md:grid-cols-2">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <FileText className="h-6 w-6 text-primary" />
//                 Application Forms
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground">
//                 We offer both online and offline application forms for your convenience. Complete the form with your details and submit the required documents to begin the admission process.
//               </p>
//               <Button asChild variant="outline" className="mt-4">
//                 <Link href="/apply">Start Application</Link>
//               </Button>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Users className="h-6 w-6 text-primary" />
//                 Counseling Sessions
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground">
//                 Our counseling sessions provide personalized guidance for students and parents. Discuss your goals, explore program options, and get answers to your questions.
//               </p>
//               <Button asChild variant="outline" className="mt-4">
//                 <Link href="/contact">Schedule a Session</Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Documents Required Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Documents Required for Admission
//         </h2>
//         <div className="rounded-lg border border-border bg-card p-6">
//           <ul className="space-y-3">
//             {[
//               "10th and 12th mark sheets and certificates",
//               "Graduation certificate (if applicable)",
//               "Identity proof (Aadhar card, passport, etc.)",
//               "Passport-sized photographs",
//               "Migration certificate (for students from other boards/universities)",
//             ].map((document, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                 <span className="text-muted-foreground">{document}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Eligibility Criteria Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           Eligibility Criteria
//         </h2>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               title: "Diploma Courses",
//               criteria: "10+2 (any stream) from a recognized board.",
//             },
//             {
//               title: "Advanced Diploma Courses",
//               criteria: "10+2 or equivalent from a recognized board.",
//             },
//             {
//               title: "Degree Courses",
//               criteria: "10+2 for B.Voc. or graduation for advanced programs.",
//             },
//             {
//               title: "Short-Term Courses",
//               criteria: "No strict eligibility criteria; open to all interested candidates.",
//             },
//           ].map((item, index) => (
//             <Card key={index}>
//               <CardHeader>
//                 <CardTitle className="text-lg">{item.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground">{item.criteria}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Proposed Project Report (B.Voc.) Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           B.Voc. Program Overview
//         </h2>
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* Curriculum */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <BookOpen className="h-6 w-6 text-primary" />
//                 Curriculum
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground mb-4">
//                 The B.Voc. in Multimedia and Animation is a comprehensive degree program covering multimedia, animation, VFX, game design, and immersive technologies.
//               </p>
//               <ul className="space-y-2">
//                 <li className="flex items-start gap-2">
//                   <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                   <span className="text-muted-foreground">
//                     <strong>Semester 1-2:</strong> Foundation courses in design, art, and 2D/3D animation.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                   <span className="text-muted-foreground">
//                     <strong>Semester 3-4:</strong> Intermediate courses in VFX, animation pipelines, and game design.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                   <span className="text-muted-foreground">
//                     <strong>Semester 5-6:</strong> Specialization in immersive technologies and advanced multimedia production.
//                   </span>
//                 </li>
//               </ul>
//               <p className="text-muted-foreground mt-4">
//                 Students will engage in internships, industry projects, and portfolio development to graduate with practical experience.
//               </p>
//             </CardContent>
//           </Card>

//           {/* Delivery Method */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Users className="h-6 w-6 text-primary" />
//                 Delivery Method
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-2">
//                   <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                   <span className="text-muted-foreground">
//                     <strong>Classroom Training:</strong> Hands-on training in labs with high-end workstations and industry-standard software.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
//                   <span className="text-muted-foreground">
//                     <strong>Online/Blended Learning:</strong> Theory classes and AR/VR courses available online via a Learning Management System (LMS) for distance learners and professionals.
//                   </span>
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Lingaya's Vidyapeeth School of Vocational Training (LV-SVS) Section */}
//       <section className="mb-16">
//         <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
//           About Lingaya's Vidyapeeth School of Vocational Training (LV-SVS)
//         </h2>
//         <div className="rounded-lg border border-border bg-card p-6">
//           <p className="text-muted-foreground mb-4">
//             Lingaya’s Vidyapeeth School of Vocational Training (LV-SVS) was established with a mission to “invent innovatively” the best training methods and pedagogies. Our goal is to ensure learners acquire the knowledge and skills needed to be work-ready and employable.
//           </p>
//           <p className="text-muted-foreground mb-4">
//             In today’s rapidly evolving technological landscape, jobs are becoming increasingly skill-intensive. LV-SVS addresses this challenge by reforming training approaches to align with industry needs. According to the National Skill Development Corporation (NSDC), India will require over 109.73 million skilled workers by 2022 across various sectors.
//           </p>
//           <p className="text-muted-foreground mb-4">
//             To meet these demands, the University Grants Commission (UGC) introduced the Bachelor of Vocation (B.Voc.) program. LV-SVS offers short- and medium-term vocational training in multiple streams under the B.Voc. scheme, collaborating with industry partners to ensure curricula meet practical industry requirements.
//           </p>
//           <Button asChild variant="outline">
//             <Link href="/about">Learn More About LV-SVS</Link>
//           </Button>
//         </div>
//       </section>

   
//     </div>
//   );
// }

// app/admissions/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { AdmissionProcess } from "@/components/admissions/AdmissionProcess";
// import { EligibilityCriteria } from "@/components/admissions/EligibilityCriteria";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users } from "lucide-react";
// import { AdmissionProcess } from "./admission-process/page";
// import { EligibilityCriteria } from "./eligibility-criteria/page";

export const metadata: Metadata = {
  title: "Admissions | School of Immersive Technologies",
  description:
    "Learn about the admission process, eligibility criteria, required documents, and program details for the School of Immersive Technologies at Lingaya's Vidyapeeth.",
  openGraph: {
    title: "Admissions | School of Immersive Technologies",
    description:
      "Join our cutting-edge programs in multimedia, animation, VFX, and immersive technologies. Explore our admission process and apply today!",
    images: ["/images/admissions-hero.jpg"],
  },
};

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
      {/* Hero Section */}
      <section className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative z-10 px-6 py-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Admissions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join the School of Immersive Technologies and start your journey in multimedia, animation, VFX, and immersive technologies.
          </p>
          <Button
            asChild
            className="mt-6 bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Admission Process Section */}
      {/* <AdmissionProcess /> */}

      {/* Documents Required Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          Documents Required for Admission
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <ul className="space-y-3">
            {[
              "10th and 12th mark sheets and certificates",
              "Graduation certificate (if applicable)",
              "Identity proof (Aadhar card, passport, etc.)",
              "Passport-sized photographs",
              "Migration certificate (for students from other boards/universities)",
            ].map((document, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span className="text-muted-foreground">{document}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      {/* <EligibilityCriteria /> */}

      {/* B.Voc. Program Overview Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          B.Voc. Program Overview
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Curriculum */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Curriculum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The B.Voc. in Multimedia and Animation is a comprehensive degree program covering multimedia, animation, VFX, game design, and immersive technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    <strong>Semester 1-2:</strong> Foundation courses in design, art, and 2D/3D animation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    <strong>Semester 3-4:</strong> Intermediate courses in VFX, animation pipelines, and game design.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    <strong>Semester 5-6:</strong> Specialization in immersive technologies and advanced multimedia production.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Students will engage in internships, industry projects, and portfolio development to graduate with practical experience.
              </p>
            </CardContent>
          </Card>

          {/* Delivery Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Delivery Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    <strong>Classroom Training:</strong> Hands-on training in labs with high-end workstations and industry-standard software.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    <strong>Online/Blended Learning:</strong> Theory classes and AR/VR courses available online via a Learning Management System (LMS) for distance learners and professionals.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lingaya's Vidyapeeth School of Vocational Training (LV-SVS) Section */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight">
          About Lingaya's Vidyapeeth School of Vocational Training (LV-SVS)
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-muted-foreground mb-4">
            Lingaya’s Vidyapeeth School of Vocational Training (LV-SVS) was established with a mission to “invent innovatively” the best training methods and pedagogies. Our goal is to ensure learners acquire the knowledge and skills needed to be work-ready and employable.
          </p>
          <p className="text-muted-foreground mb-4">
            In today’s rapidly evolving technological landscape, jobs are becoming increasingly skill-intensive. LV-SVS addresses this challenge by reforming training approaches to align with industry needs. According to the National Skill Development Corporation (NSDC), India will require over 109.73 million skilled workers by 2022 across various sectors.
          </p>
          <p className="text-muted-foreground mb-4">
            To meet these demands, the University Grants Commission (UGC) introduced the Bachelor of Vocation (B.Voc.) program. LV-SVS offers short- and medium-term vocational training in multiple streams under the B.Voc. scheme, collaborating with industry partners to ensure curricula meet practical industry requirements.
          </p>
          <Button asChild variant="outline">
            <Link href="/about">Learn More About LV-SVS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
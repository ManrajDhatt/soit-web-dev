// import Image from "next/image";
// import { Metadata } from "next";
// import { ChevronRight, Award } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Our Patron | School of Immersive Technologies",
//   description: "Learn about Mr. Sunil Kant Munjal, the patron of SOIT, and his vision for innovative education through the Munjal BCU Centre.",
// };

// export default function OurPatronPage() {
//   return (
//     <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
//       <div className="mx-auto max-w-5xl">
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//             Our Patron
//           </h1>
//           <p className="mx-auto max-w-2xl text-muted-foreground">
//             Mr. Sunil Kant Munjal, the visionary behind SOIT’s transformative mission.
//           </p>
//         </div>

//         {/* Hero Image */}
//         <div className="relative mb-16 overflow-hidden rounded-2xl">
//           <div className="relative h-[300px] w-full sm:h-[400px]">
//             <Image
//               src="https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg"
//               alt="Mr. Sunil Kant Munjal"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
//             <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
//               <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
//                 Visionary Leadership
//               </h2>
//               <p className="max-w-md text-lg text-foreground sm:text-xl">
//                 Mr. Sunil Kant Munjal’s legacy drives SOIT’s commitment to innovation and excellence.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="mb-24 space-y-12">
//           <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
//             <h3 className="mb-3 font-heading text-xl font-semibold">About Mr. Sunil Kant Munjal</h3>
//             <p className="text-muted-foreground">
//               As Chairman of Hero Enterprise and a key figure in Hero Group, Mr. Sunil Kant Munjal has driven innovation across industries. His vision for education led to the establishment of the Munjal BCU Centre of Innovation & Entrepreneurship in 2018, which houses SOIT.
//             </p>
//           </div>
//           <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
//             <h3 className="mb-3 font-heading text-xl font-semibold">His Vision for SOIT</h3>
//             <p className="text-muted-foreground">
//               Mr. Munjal’s philosophy of blending tradition with innovation shapes SOIT’s mission to create industry-ready professionals in multimedia, animation, and immersive technologies like AR/VR/MR.
//             </p>
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center gap-2 text-sm">
//                 <ChevronRight className="h-4 w-4 text-primary" />
//                 <span>Advancing education through innovation</span>
//               </li>
//               <li className="flex items-center gap-2 text-sm">
//                 <ChevronRight className="h-4 w-4 text-primary" />
//                 <span>Empowering students with global skills</span>
//               </li>
//               <li className="flex items-center gap-2 text-sm">
//                 <ChevronRight className="h-4 w-4 text-primary" />
//                 <span>Fostering entrepreneurship</span>
//               </li>
//             </ul>
//           </div>
//           <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
//             <h3 className="mb-3 font-heading text-xl font-semibold">Legacy of Impact</h3>
//             <p className="text-muted-foreground">
//               Through BCM Foundation and Hero Group, Mr. Munjal has transformed education and industry in Punjab, with SOIT as a testament to his commitment to shaping future leaders.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
//           <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
//             Be Inspired
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
//             Join SOIT to carry forward Mr. Munjal’s vision of innovation and excellence.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="/courses"
//               className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//             >
//               View Courses
//             </a>
//             <a
//               href="/contact"
//               className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"; // Add this to mark the component as a client component

import Image from "next/image";
import { Metadata } from "next";
import { motion } from "framer-motion";

// Metadata for the page
// export const metadata: Metadata = {
//   title: "Our Patrons | School of Immersive Technologies",
//   description: "Learn about our esteemed patrons, Mr. S.K. Rai and Dr. Prem Kumar, and their vision for innovative education at SOIT.",
// };

// Animation variants for fade-in and slide-up effects
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function OurPatronPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Patrons
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground sm:text-lg">
            Meet the visionary leaders guiding SOIT’s mission to innovate and excel in immersive technology education.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative mb-20 overflow-hidden rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]">
            <Image
            src="https://cms.nativeteams.com/uploads/How_to_Be_an_Inspiring_Leader_Transform_Your_Leadership_Skills_22989adbf7.jpg"
              alt="SOIT Patrons"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12 lg:p-16">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Visionary Leadership
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl lg:text-2xl">
                Our patrons are shaping the future of education through innovation and excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Patrons Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Our Patrons
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Mr. S.K. Rai",
                role: "Managing Director, Hero Group",
                image: "https://media.licdn.com/dms/image/v2/C5103AQHzIWt1d060YQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1554471524644?e=2147483647&v=beta&t=M4fmDgarvhc0g7UbQkJ5olW7NfR6J5gywc4gItmhdyI", // Replace with actual image path
                introduction:
                  "Mr. S.K. Rai is the Managing Director of Hero Cycles Limited, the world’s largest bicycle manufacturer. With over 40 years of experience in the Indian manufacturing industry, he has been instrumental in driving technological innovation and mass production, establishing Hero Group as a global leader. He is also deeply involved in educational and cultural initiatives, serving as the General Secretary and Organizational Secretary of Ludhiana Sanskritik Samagam.",
                message:
                  "At SOIT, we aim to empower the next generation of creators with cutting-edge skills in immersive technologies. I’m proud to support an institution that bridges innovation and education to shape a brighter future.",
              },
              {
                name: "Dr. Prem Kumar",
                role: "Executive Director, MBCIE",
                image: "/executive_director_premkumar.jpg", // Replace with actual image path
                introduction:
                  "Dr. Prem Kumar is the Executive Director of Munjal-BCU Centre of Innovation and Entrepreneurship (MBCIE). A renowned strategist and innovative leader, he has a strong track record in conceiving and managing educational institutions. Dr. Kumar is passionate about fostering interdisciplinary education, preparing students for the digital age through initiatives like the Masters in Applied Metaverse and Digital Leadership Programme.",
                message:
                  "SOIT is a beacon of innovation, equipping students with the tools to excel in the ever-evolving world of immersive tech. I’m honored to contribute to this transformative journey.",
              },
            ].map((patron, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
                variants={fadeInUp}
              >
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-xl">
                  <Image src={patron.image} alt={patron.name} fill className="object-contain" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-center">{patron.name}</h3>
                <p className="text-primary text-center mt-1">{patron.role}</p>
                <p className="text-muted-foreground mt-4 text-center">{patron.introduction}</p>
                <div className="mt-6">
                  <p className="text-foreground italic text-center">
                    “{patron.message}”
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center sm:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Be Inspired
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground sm:text-lg">
            Join SOIT to carry forward the vision of our patrons in innovation and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/courses"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Courses
            </a>
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
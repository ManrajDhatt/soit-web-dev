// // import Image from "next/image";
// // import { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "About Us | School of Immersive Technologies",
// //   description: "Learn about the School of Immersive Technologies, our history, mission, and our dedicated team of experts.",
// // };

// // export default function AboutPage() {
// //   return (
// //     <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
// //       <div className="mx-auto max-w-5xl">
// //         <div className="mb-12 text-center">
// //           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
// //             About Us
// //           </h1>
// //           <p className="mx-auto max-w-2xl text-muted-foreground">
// //             Pioneering the future of education through immersive technologies
// //           </p>
// //         </div>
        
// //         <div className="mb-16 rounded-xl border border-border bg-card overflow-hidden shadow-xl">
// //           <Image
// //             src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //             alt="School of Immersive Technologies campus"
// //             width={1200}
// //             height={600}
// //             className="w-full object-cover h-[400px]"
// //           />
// //         </div>
        
// //         <div className="mb-16 grid gap-12 md:grid-cols-2">
// //           <div>
// //             <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Our Story</h2>
// //             <div className="space-y-4 text-muted-foreground">
// //               <p>
// //                 The School of Immersive Technologies was established in 2018 as part of the Munjal BCU Centre of Innovation & Entrepreneurship with a vision to bridge the gap between traditional education and the rapidly evolving world of immersive technologies.
// //               </p>
// //               <p>
// //                 What began as a small research unit with a handful of VR headsets and passionate instructors has grown into a comprehensive educational institution at the forefront of AR/VR education in India.
// //               </p>
// //               <p>
// //                 Our journey has been defined by continuous innovation, collaboration with industry leaders, and a commitment to preparing students for careers that may not even exist yet.
// //               </p>
// //             </div>
// //           </div>
          
// //           <div>
// //             <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Our Approach</h2>
// //             <div className="space-y-4 text-muted-foreground">
// //               <p>
// //                 We believe in learning by doing. Our curriculum combines theoretical knowledge with practical, hands-on experience in state-of-the-art immersive labs equipped with the latest hardware and software.
// //               </p>
// //               <p>
// //                 Our faculty comprises industry veterans and academic experts who bring real-world insights into the classroom, ensuring that our students are exposed to both foundational principles and cutting-edge developments.
// //               </p>
// //               <p>
// //                 We foster a collaborative environment where creativity, technical skill, and entrepreneurial thinking converge to create the next generation of immersive technology innovators.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
        
// //         <div className="mb-16">
// //           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Our Facilities</h2>
          
// //           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //             {[
// //               {
// //                 title: "VR Development Lab",
// //                 description: "Equipped with high-end VR headsets, motion capture systems, and powerful workstations for developing immersive experiences.",
// //                 image:"/vr_lab.jpg"
// //                 // image: "https://images.pexels.com/photos/8728305/pexels-photo-8728305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //               },
// //               {
// //                 title: "AR Innovation Hub",
// //                 description: "Specialized space for augmented reality development with various AR-capable devices and prototyping tools.",
// //                 image: "https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //               },
// //               {
// //                 title: "Immersive Experience Center",
// //                 description: "A showcase area where students can demonstrate their projects and the public can experience the latest in immersive technology.",
// //                 image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //               },
// //             ].map((facility, index) => (
// //               <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
// //                 <div className="relative h-48 w-full overflow-hidden">
// //                   <Image
// //                     src={facility.image}
// //                     alt={facility.title}
// //                     fill
// //                     className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                   />
// //                 </div>
// //                 <div className="p-6">
// //                   <h3 className="mb-2 font-heading text-xl font-semibold">{facility.title}</h3>
// //                   <p className="text-muted-foreground">{facility.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div className="mb-16">
// //           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Leadership Team</h2>
          
// //           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //             {[
// //               {
// //                 name: "Mr. Sunil Kant Munjal",
// //                 role: "Director",
// //                 bio: "With over 15 years of experience in immersive technologies and education, Dr. Patel leads our institution with a vision to democratize access to cutting-edge tech education.",
// //                 // image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //               image:"placeholder.jpg"
// //               },
// //               {
// //                 name: "Prof. Rajiv Mehta",
// //                 role: "Head of Research",
// //                 bio: "An acclaimed researcher in spatial computing, Prof. Mehta oversees our research initiatives and ensures our curriculum remains at the forefront of technological innovation.",
// //                 // image: "https://images.pexels.com/photos/8434891/pexels-photo-8434891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //               image:"placeholder.jpg"
// //               },
// //               {
// //                 name: "Priya Subramaniam",
// //                 role: "Industry Relations Lead",
// //                 bio: "With a background in both technology and business development, Priya bridges the gap between academia and industry, creating opportunities for our students.",
// //                 // image: "https://images.pexels.com/photos/6203758/pexels-photo-6203758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //               image:"placeholder.jpg"
// //               },
// //             ].map((person, index) => (
// //               <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
// //                 <div className="relative h-64 w-full overflow-hidden">
// //                   <Image
// //                     src={person.image}
// //                     alt={person.name}
// //                     fill
// //                     className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                   />
// //                 </div>
// //                 <div className="p-6">
// //                   <h3 className="mb-1 font-heading text-xl font-semibold">{person.name}</h3>
// //                   <p className="mb-4 text-sm font-medium text-primary">{person.role}</p>
// //                   <p className="text-muted-foreground">{person.bio}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div className="mb-16">
// //           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Our Values</h2>
          
// //           <div className="grid gap-6 md:grid-cols-2">
// //             {[
// //               {
// //                 title: "Innovation",
// //                 description: "We embrace experimentation and push the boundaries of what's possible with immersive technologies."
// //               },
// //               {
// //                 title: "Inclusivity",
// //                 description: "We're committed to making immersive technology education accessible to students from all backgrounds."
// //               },
// //               {
// //                 title: "Collaboration",
// //                 description: "We foster partnerships between academia, industry, and communities to create holistic learning experiences."
// //               },
// //               {
// //                 title: "Future-Focused",
// //                 description: "We prepare our students not just for today's jobs, but for the careers and challenges of tomorrow."
// //               },
// //             ].map((value, index) => (
// //               <div key={index} className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
// //                 <h3 className="mb-3 font-heading text-xl font-semibold">{value.title}</h3>
// //                 <p className="text-muted-foreground">{value.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div className="rounded-xl border border-border bg-card p-8 shadow-xl">
// //           <div className="mx-auto max-w-3xl text-center">
// //             <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Join Our Community</h2>
// //             <p className="mb-6 text-muted-foreground">
// //               Whether you're a prospective student, industry partner, or simply curious about immersive technologies, 
// //               we invite you to connect with us and explore the possibilities of this exciting field.
// //             </p>
// //             <div className="flex flex-wrap justify-center gap-4">
// //               <a href="/programs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
// //                 View Programs
// //               </a>
// //               <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
// //                 Contact Us
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import Image from "next/image";
// import { Metadata } from "next";
// import { ArrowRight, ChevronRight } from "lucide-react";

// export const metadata: Metadata = {
//   title: "About Us | School of Immersive Technologies",
//   description:
//     "Discover the School of Immersive Technologies, our mission to lead AR/VR education, and our vision to shape the future of immersive innovation in India.",
//   keywords: [
//     "immersive technology education",
//     "AR/VR education India",
//     "School of Immersive Technologies",
//     "augmented reality courses",
//     "virtual reality training",
//   ],
//   openGraph: {
//     title: "About Us | School of Immersive Technologies",
//     description:
//       "Learn about our mission, vision, and innovative approach to immersive technology education.",
//     images: [
//       {
//         url: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
//         width: 1200,
//         height: 600,
//         alt: "School of Immersive Technologies campus",
//       },
//     ],
//   },
// };

// export default function AboutPage() {
//   return (
//     <div className="relative bg-background">
//       {/* Schema Markup */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "School of Immersive Technologies",
//             url: "https://www.example.com",
//             description:
//               "Leading AR/VR education institution fostering innovation in immersive technologies.",
//             logo: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
//           }),
//         }}
//       />

//       {/* Hero Section */}
//       <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="Immersive technology innovation"
//             fill
//             className="object-cover opacity-50"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
//         </div>
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
//           <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-fade-in-up">
//             Shaping the Future of Immersive Education
//           </h1>
//           <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-200">
//             At the School of Immersive Technologies, we empower creators to lead the AR/VR revolution through innovative education and research.
//           </p>
//           <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
//             <a
//               href="/programs"
//               className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             >
//               Explore Programs
//             </a>
//             <a
//               href="/contact"
//               className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Our Purpose Section */}
//       <section className="container mx-auto px-4 py-16 sm:px-6">
//         <div className="mx-auto max-w-5xl">
//           <div className="grid gap-12 md:grid-cols-2 items-center">
//             <div>
//               <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground">
//                 Our Purpose
//               </h2>
//               <p className="mb-6 text-muted-foreground">
//                 Founded in 2018, the School of Immersive Technologies is a beacon of innovation within the Munjal BCU Centre of Innovation & Entrepreneurship. Our mission is to deliver world-class AR/VR education, blending technical expertise with creative innovation.
//               </p>
//               <p className="text-muted-foreground">
//                 Our vision is to be the global leader in immersive technology education, empowering students to transform how we interact with digital worlds.
//               </p>
//             </div>
//             <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt="Students collaborating in immersive tech lab"
//                 fill
//                 className="object-cover transition-transform duration-500 hover:scale-110"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Facilities Section */}
//       <section className="bg-muted/50 py-16">
//         <div className="container mx-auto px-4 sm:px-6">
//           <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
//             State-of-the-Art Facilities
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
//             {[
//               {
//                 title: "VR Development Lab",
//                 description: "High-end VR headsets and motion capture systems for immersive experiences.",
//                 image: "https://images.pexels.com/photos/8728305/pexels-photo-8728305.jpeg",
//               },
//               {
//                 title: "AR Innovation Hub",
//                 description: "Prototyping tools and AR devices for cutting-edge development.",
//                 image: "https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg",
//               },
//               {
//                 title: "Immersive Experience Center",
//                 description: "Showcase student projects and engage the public with AR/VR.",
//                 image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
//               },
//             ].map((facility, index) => (
//               <div
//                 key={index}
//                 className="group relative rounded-xl overflow-hidden bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={facility.image}
//                     alt={facility.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{facility.title}</h3>
//                   <p className="text-muted-foreground">{facility.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="container mx-auto px-4 py-16 sm:px-6">
//         <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
//           Our Core Values
//         </h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
//           {[
//             {
//               title: "Innovation",
//               description: "Pushing boundaries in AR/VR through bold experimentation.",
//               color: "from-blue-500 to-blue-300",
//             },
//             {
//               title: "Excellence",
//               description: "Striving for the highest standards in education and research.",
//               color: "from-purple-500 to-purple-300",
//             },
//             {
//               title: "Collaboration",
//               description: "Partnering to amplify impact in immersive tech.",
//               color: "from-green-500 to-green-300",
//             },
//             {
//               title: "Inclusivity",
//               description: "Creating an accessible, diverse learning environment.",
//               color: "from-orange-500 to-orange-300",
//             },
//           ].map((value, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               <div className={`absolute top-0 left-0 h-1 w-16 bg-gradient-to-r ${value.color}`} />
//               <h3 className="mt-4 mb-2 font-heading text-xl font-semibold text-foreground">{value.title}</h3>
//               <p className="text-muted-foreground">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Leadership Section */}
//       <section className="bg-gradient-to-b from-background to-muted/20 py-16">
//         <div className="container mx-auto px-4 sm:px-6">
//           <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
//             Meet Our Leadership
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
//             {[
//               {
//                 name: "Mr. Sunil Kant Munjal",
//                 role: "Director",
//                 bio: "Leading our vision to democratize immersive tech education.",
//                 image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyWwUH17DSi_QqjBX--5vEvw80z5e_LiSDh43jZVVPsCtYE_8Ff_tiF5v-Es-RywVJR0BMixvorfCOyH-Sz-z-_g",
//               },
//               {
//                 name: "Mr. SK Rai",
//                 role: "Head of Research",
//                 bio: "Driving cutting-edge research in spatial computing.",
//                 image:"https://media.licdn.com/dms/image/v2/C5103AQHzIWt1d060YQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1554471524644?e=2147483647&v=beta&t=M4fmDgarvhc0g7UbQkJ5olW7NfR6J5gywc4gItmhdyI",
//               },
//               {
//                 name: "Priya Subramaniam",
//                 role: "Industry Relations Lead",
//                 bio: "Bridging academia and industry for student success.",
//                 image: "https://images.pexels.com/photos/6203758/pexels-photo-6203758.jpeg",
//               },
//             ].map((person, index) => (
//               <div
//                 key={index}
//                 className="group relative rounded-xl overflow-hidden bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 <div className="relative h-64">
//                   <Image
//                     src={person.image}
//                     alt={`${person.name}, ${person.role}`}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{person.name}</h3>
//                   <p className="mb-2 text-sm font-medium text-primary">{person.role}</p>
//                   <p className="text-muted-foreground">{person.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Message from Leadership */}
//       <section className="container mx-auto px-4 py-16 sm:px-6">
//         <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
//           <div className="grid md:grid-cols-2">
//             <div className="relative h-80 md:h-full">
//               <Image
//                 src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
//                 alt="Leadership vision for immersive education"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
//             </div>
//             <div className="p-8 md:p-12 bg-card">
//               <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground">
//                 From Our Director
//               </h2>
//               <p className="mb-6 text-muted-foreground">
//                 "We’re not just teaching technology—we’re shaping the future. Our students are the pioneers who will redefine how we experience the digital world through AR/VR innovation."
//               </p>
//               <div>
//                 <div className="font-heading font-semibold text-foreground">Mr. Sunil Kant Munjal</div>
//                 <div className="text-sm text-muted-foreground">Director, School of Immersive Technologies</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-blue-800 text-primary-foreground py-16">
//         <div className="container mx-auto px-4 sm:px-6 text-center">
//           <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight">
//             Join the Immersive Revolution
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl">
//             Become a part of our community to explore AR/VR education, collaborate on groundbreaking research, or partner with us to shape the future.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="/programs"
//               className="inline-flex h-12 items-center justify-center rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             >
//               Discover Programs
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </a>
//             <a
//               href="/contact"
//               className="inline-flex h-12 items-center justify-center rounded-full border border-background bg-transparent text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//             >
//               Contact Us
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Sticky CTA Button */}
//       <a
//         href="/contact"
//         className="fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
//       >
//         Connect Now
//         <ChevronRight className="ml-2 h-4 w-4" />
//       </a>
//     </div>
//   );
// }


import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ChevronRight, Quote, Building, GraduationCap, Users, Award, Target, Clock, BarChart3, Trophy, Code, Palette, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | School of Immersive Technologies",
  description:
    "Discover the School of Immersive Technologies in Ludhiana, Punjab, founded by the Munjal family of Hero Group under BCM Foundation, offering B.Voc. in Multimedia and Animation and cutting-edge AR/VR/MR training.",
  keywords: [
    "multimedia education Ludhiana",
    "B.Voc. Multimedia Animation",
    "Munjal family education",
    "AR/VR training Punjab",
    "animation courses India",
    "immersive technologies school",
    "Hero Group education initiative",
    "BCM Foundation Ludhiana",
    "multimedia institute Punjab",
  ],
  openGraph: {
    title: "About Us | School of Immersive Technologies",
    description:
      "Learn about the Munjal family's legacy, BCM Foundation's educational excellence, and our mission to train future-ready professionals in multimedia and AR/VR/MR.",
    images: [
      {
        url: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
        width: 1200,
        height: 600,
        alt: "School of Immersive Technologies campus in Ludhiana",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="relative bg-background">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "School of Immersive Technologies",
            url: "https://www.example.com",
            description:
              "Premier institute in Ludhiana, Punjab, under BCM Foundation and Munjal BCU Centre, offering B.Voc. in Multimedia and Animation and training in AR/VR/MR, animation, VFX, gaming, and graphic design.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ludhiana",
              addressRegion: "Punjab",
              addressCountry: "India",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "Munjal BCU Centre of Innovation & Entrepreneurship",
            },
            foundingDate: "2018",
            founder: {
              "@type": "Person",
              name: "Sunil Kant Munjal",
            },
            educationalProgram: [
              {
                "@type": "EducationalOccupationalProgram",
                name: "B.Voc. in Multimedia and Animation",
                provider: {
                  "@type": "EducationalOrganization",
                  name: "Lingaya Vidyapeeth",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Multimedia and immersive technology innovation"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-fade-in-up">
            Empowering Creators in Multimedia & Immersive Tech
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-200">
            Founded by the Munjal family of Hero Group under BCM Foundation, the School of Immersive Technologies in Ludhiana, Punjab, is shaping future-ready professionals in animation, VFX, gaming, and AR/VR/MR.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="/courses/b-voc-in-multimedia-and-animation"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* BCM Foundation Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">
                BCM Foundation: A Legacy of Hero Cycle
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Rooted in a commitment to education since 1976, BCM Foundation is a pioneer in shaping Punjab’s academic landscape.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                src="https://dugri.bcmschools.org/Upload/MainBanner/item_b349e0_School.jpg"
                  // src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="BCM Foundation campus in Ludhiana"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <p className="mb-6 text-muted-foreground">
                  Established in 1976 by the Munjal family, the Bhartiya Charitable Munjal (BCM) Foundation has been a cornerstone of educational excellence in Punjab. From its inception with BCM School Dugri, the foundation has grown into a network of prestigious institutions, including BCM School Chandigarh Road, BCM School Basant City, and BCM School Focal Point.
                </p>
                <p className="mb-6 text-muted-foreground">
                  BCM schools are renowned for their holistic approach, blending academic rigor with sports, arts, and co-curricular activities. They consistently rank among Punjab’s top institutions, producing students who excel in board exams, national competitions, and global careers. The foundation’s motto, “From Darkness to Light,” reflects its mission to empower students through knowledge and values.
                </p>
                <p className="text-muted-foreground">
                  The School of Immersive Technologies, launched in 2018 under the Munjal BCU Centre of Innovation & Entrepreneurship, is BCM Foundation’s latest venture. It embodies the foundation’s forward-thinking ethos, preparing students for cutting-edge careers in multimedia, animation, and immersive technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Munjal Legacy & Hero Group Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground">
                Munjal Family & Hero Group
              </h2>
              <p className="mb-6 text-muted-foreground">
                The School of Immersive Technologies is a proud extension of the Munjal family’s legacy, rooted in the entrepreneurial spirit of Hero Group. Founded in 1956 by the Munjal brothers, Hero Cycles laid the foundation for what would become the world’s largest two-wheeler manufacturer, Hero MotoCorp.
              </p>
              <p className="mb-6 text-muted-foreground">
                Under the leadership of Mr. Sunil Kant Munjal, Chairman of Hero Enterprise, the family has diversified into education, healthcare, and social initiatives. Their commitment to innovation and social responsibility is evident in the establishment of the Munjal BCU Centre of Innovation & Entrepreneurship in 2018, which houses the School of Immersive Technologies.
              </p>
              <p className="text-muted-foreground">
                The Munjal family’s philosophy of blending tradition with innovation inspires our institute. We aim to nurture not just skilled professionals but ethical leaders who will drive the future of multimedia and immersive technologies, continuing the Hero Group’s legacy of excellence.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
              src="https://www.bmu.edu.in/wp-content/uploads/2024/09/allbegan.png"
                // src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students in multimedia and AR/VR lab"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guided by a commitment to innovation and excellence in multimedia and immersive technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                To become the leading educational institution in Northern India for immersive technologies and multimedia education by providing:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Industry-aligned curriculum that evolves with technological advancements</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>State-of-the-art infrastructure mirroring professional workspaces</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Innovation hub for AR/VR/MR research and development</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Global partnerships for international exposure and collaboration</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                To create future-ready professionals equipped with skills to excel in:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Animation, VFX, and digital content creation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Immersive technologies (AR, VR, Mixed Reality)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Game development and interactive media</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Graphic design and user experience</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Professional ethics and industry practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">
            Organizational Structure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A robust framework fostering innovation, mentorship, and academic excellence.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 pb-8 border-b border-border">
              <div className="text-center md:w-1/3">
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                  <Building className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Governance Board</h3>
                <p className="text-muted-foreground">
                  Comprising Munjal family members, education experts, and industry leaders who provide strategic direction.
                </p>
              </div>
              <div className="text-center md:w-1/3">
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Executive Committee</h3>
                <p className="text-muted-foreground">
                  Led by the Director with department heads overseeing academic and operational affairs.
                </p>
              </div>
              <div className="text-center md:w-1/3">
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Industry Advisory Council</h3>
                <p className="text-muted-foreground">
                  Professionals ensuring curriculum relevance and industry alignment.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-lg font-semibold mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Academic Departments
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Animation & VFX:</span> 2D/3D animation, compositing, special effects</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Immersive Technologies:</span> AR/VR/MR development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Game Development:</span> Game design and programming</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Graphic Design & UX:</span> Visual communication and UI/UX</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Support Departments
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Student Affairs:</span> Counseling and career guidance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Research & Development:</span> Innovation and collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Administration:</span> Admissions and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-medium">Industry Relations:</span> Internships and partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">
              Our structure fosters collaboration between academia and industry, ensuring students gain theoretical knowledge and practical experience. The Munjal BCU Centre provides resources and guidance, aligning with BCM Foundation’s mission.
            </p>
          </div>
        </div>
      </section>

      {/* Director’s Message */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl flex flex-col gap-12 rounded-xl border border-border bg-card p-8 shadow-xl md:flex-row md:p-12">
            <div className="md:w-1/3">
              <div className="relative mx-auto aspect-square max-w-[300px] overflow-hidden rounded-xl border-4 border-background shadow-2xl">
                <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCfQ8P_dl3tl69y0lE0KvE6AzlITB_k-U-nZvy3u4KAcag4511KclJKLYkfIeZPzfJ2g&usqp=CAU"
                  // src="https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Er. Shilpa Miglani, Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <h2 className="font-heading text-2xl font-bold">Er. Shilpa Miglani</h2>
                <p className="text-primary">Director</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {/* Visionary Leader<br />
                  Chairman, Hero Enterprise<br />
                  Munjal BCU Centre of Innovation & Entrepreneurship */}
                </p>
              </div>
            </div>
            <div className="relative md:w-2/3">
              <Quote className="absolute -left-4 -top-4 h-12 w-12 text-primary/20 sm:h-16 sm:w-16" />
              <div className="space-y-6 text-muted-foreground">
                <p className="relative z-10 text-lg">Dear Aspiring Creators and Innovators,</p>
                <p>
                  Welcome to the School of Immersive Technologies, a testament to the Munjal family’s vision of transforming education in Ludhiana, Punjab. Rooted in BCM Foundation’s 45+ years of educational excellence and Hero Group’s legacy of innovation, our institute is dedicated to shaping the future of multimedia and immersive technologies.
                </p>
                <p>
                  In an era where digital and physical worlds converge, technologies like AR, VR, MR, animation, and VFX are redefining industries. Our B.Voc. in Multimedia and Animation, offered in partnership with Lingaya Vidyapeeth, and our specialized short-term courses provide a dynamic platform for students to master these fields. Our state-of-the-art facilities and industry-aligned curriculum ensure graduates are equipped to lead in animation, gaming, graphic design, and immersive tech.
                </p>
                <p>
                  Inspired by Hero Group’s entrepreneurial spirit, we foster a mindset of innovation and ethical leadership. Join us to create impactful digital experiences and carry forward the Munjal legacy of excellence and social responsibility.
                </p>
                <div className="pt-4">
                  <p className="font-medium">With best wishes,</p>
                  <div className="mt-4 font-heading text-xl italic">
                  Er. Shilpa Miglani
                  </div>
                  <p>Director, School of Immersive Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-aligned courses designed to prepare students for cutting-edge careers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              title: "B.Voc. in Multimedia and Animation",
              description:
                "A comprehensive degree program in partnership with Lingaya Vidyapeeth, covering animation, VFX, graphic design, and immersive technologies, with hands-on projects and industry internships.",
              icon: <GraduationCap className="h-8 w-8 text-primary" />,
            },
            {
              title: "Short-Term Courses",
              description:
                "Specialized certifications in 2D/3D animation, VFX, game development, AR/VR/MR programming, and graphic design, tailored for quick skill acquisition and career advancement.",
              icon: <Code className="h-8 w-8 text-primary" />,
            },
          ].map((program, index) => (
            <div
              key={index}
              className="tech-card rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">{program.icon}</div>
                <h3 className="font-heading text-xl font-semibold">{program.title}</h3>
              </div>
              <p className="text-muted-foreground">{program.description}</p>
              <a
                href="/programs"
                className="mt-4 inline-flex items-center text-primary hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Cutting-Edge Facilities
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "Multimedia & Animation Studio",
                description:
                  "Advanced workstations with Adobe Creative Suite, Autodesk Maya, and ZBrush for animation, VFX, and graphic design projects.",
                image: "https://images.pexels.com/photos/8728305/pexels-photo-8728305.jpeg",
              },
              {
                title: "AR/VR Innovation Lab",
                description:
                  "Equipped with Oculus Quest, HTC Vive, and Microsoft HoloLens for AR/VR/MR development and motion capture.",
                image: "https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg",
              },
              {
                title: "Gaming Development Hub",
                description:
                  "Workstations with Unity and Unreal Engine for game design, programming, and testing.",
                image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
              },
              {
                title: "Digital Recording Studio",
                description:
                  "Sound isolation booths and mixing equipment for voiceovers and music composition.",
                image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
              },
              {
                title: "Green Screen & Motion Capture Studio",
                description:
                  "Professional lighting, cameras, and motion capture tech for VFX and character animation.",
                image: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg",
              },
              {
                title: "Collaborative Learning Spaces",
                description:
                  "Modern classrooms with smart boards and video conferencing for interactive learning.",
                image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="tech-card group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
          Our Core Values
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {[
            {
              title: "Innovation",
              description: "Driving creativity in multimedia and immersive technologies, constantly exploring new boundaries and possibilities.",
              color: "from-blue-500 to-blue-300",
            },
            {
              title: "Excellence",
              description: "Pursuing the highest standards in education, infrastructure, and student outcomes through continuous improvement.",
              color: "from-purple-500 to-purple-300",
            },
            {
              title: "Collaboration",
              description: "Fostering partnerships between academia and industry to create a dynamic learning ecosystem with real-world relevance.",
              color: "from-green-500 to-green-300",
            },
            {
              title: "Inclusivity",
              description: "Creating a diverse and accessible learning community that welcomes students from all backgrounds and perspectives.",
              color: "from-orange-500 to-orange-300",
            },
            {
              title: "Integrity",
              description: "Maintaining ethical standards in all aspects of education and administration, reflecting the Munjal family values.",
              color: "from-red-500 to-red-300",
            },
            {
              title: "Social Responsibility",
              description: "Empowering students to use technology for positive societal impact, continuing the BCM Foundation's legacy.",
              color: "from-teal-500 to-teal-300",
            },
            {
              title: "Adaptability",
              description: "Embracing change and preparing students for evolving technological landscapes and career opportunities.",
              color: "from-indigo-500 to-indigo-300",
            },
            {
              title: "Entrepreneurship",
              description: "Cultivating a mindset of innovation and self-reliance, inspired by the Hero Group's entrepreneurial journey.",
              color: "from-amber-500 to-amber-300",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-0 h-1 w-16 bg-gradient-to-r ${value.color}`} />
              <h3 className="mt-4 mb-2 font-heading text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Our Milestones
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              {[
                {
                  year: "1976",
                  title: "BCM Foundation Established",
                  description: "The Munjal family founded BCM Foundation, starting with BCM School Dugri.",
                  icon: <Trophy className="h-6 w-6 text-primary" />,
                },
                {
                  year: "2018",
                  title: "School of Immersive Technologies Launched",
                  description: "Inaugurated under Munjal BCU Centre to focus on multimedia and AR/VR/MR.",
                  icon: <Code className="h-6 w-6 text-primary" />,
                },
                {
                  year: "2020",
                  title: "B.Voc. Program Introduced",
                  description: "Partnered with Lingaya Vidyapeeth to offer B.Voc. in Multimedia and Animation.",
                  icon: <GraduationCap className="h-6 w-6 text-primary" />,
                },
                {
                  year: "2023",
                  title: "AR/VR Lab Expansion",
                  description: "Upgraded facilities with advanced AR/VR/MR headsets and motion capture systems.",
                  icon: <Monitor className="h-6 w-6 text-primary" />,
                },
                {
                  year: "2025",
                  title: "Industry Partnerships Strengthened",
                  description: "Established collaborations with leading multimedia and tech firms for internships and projects.",
                  icon: <Users className="h-6 w-6 text-primary" />,
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2 px-6">
                    <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">{milestone.icon}</div>
                        <h3 className="font-heading text-xl font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">{milestone.description}</p>
                      <p className="text-primary font-medium">{milestone.year}</p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-400 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight">
            Join the Multimedia & Immersive Tech Revolution
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Enroll in our B.Voc. program, explore short-term courses, or partner with us to shape the future of animation, VFX, gaming, and AR/VR/MR in Ludhiana.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/programs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Discover Programs
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-background bg-transparent text-background px-6 py-3 text-sm font-medium transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <a
        href="/contact"
        className="fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
      >
        Connect Now
        <ChevronRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

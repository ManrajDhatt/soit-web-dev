// import Image from "next/image";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Us | School of Immersive Technologies",
//   description: "Learn about the School of Immersive Technologies, our history, mission, and our dedicated team of experts.",
// };

// export default function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
//       <div className="mx-auto max-w-5xl">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//             About Us
//           </h1>
//           <p className="mx-auto max-w-2xl text-muted-foreground">
//             Pioneering the future of education through immersive technologies
//           </p>
//         </div>
        
//         <div className="mb-16 rounded-xl border border-border bg-card overflow-hidden shadow-xl">
//           <Image
//             src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="School of Immersive Technologies campus"
//             width={1200}
//             height={600}
//             className="w-full object-cover h-[400px]"
//           />
//         </div>
        
//         <div className="mb-16 grid gap-12 md:grid-cols-2">
//           <div>
//             <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Our Story</h2>
//             <div className="space-y-4 text-muted-foreground">
//               <p>
//                 The School of Immersive Technologies was established in 2018 as part of the Munjal BCU Centre of Innovation & Entrepreneurship with a vision to bridge the gap between traditional education and the rapidly evolving world of immersive technologies.
//               </p>
//               <p>
//                 What began as a small research unit with a handful of VR headsets and passionate instructors has grown into a comprehensive educational institution at the forefront of AR/VR education in India.
//               </p>
//               <p>
//                 Our journey has been defined by continuous innovation, collaboration with industry leaders, and a commitment to preparing students for careers that may not even exist yet.
//               </p>
//             </div>
//           </div>
          
//           <div>
//             <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Our Approach</h2>
//             <div className="space-y-4 text-muted-foreground">
//               <p>
//                 We believe in learning by doing. Our curriculum combines theoretical knowledge with practical, hands-on experience in state-of-the-art immersive labs equipped with the latest hardware and software.
//               </p>
//               <p>
//                 Our faculty comprises industry veterans and academic experts who bring real-world insights into the classroom, ensuring that our students are exposed to both foundational principles and cutting-edge developments.
//               </p>
//               <p>
//                 We foster a collaborative environment where creativity, technical skill, and entrepreneurial thinking converge to create the next generation of immersive technology innovators.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mb-16">
//           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Our Facilities</h2>
          
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "VR Development Lab",
//                 description: "Equipped with high-end VR headsets, motion capture systems, and powerful workstations for developing immersive experiences.",
//                 image:"/vr_lab.jpg"
//                 // image: "https://images.pexels.com/photos/8728305/pexels-photo-8728305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               },
//               {
//                 title: "AR Innovation Hub",
//                 description: "Specialized space for augmented reality development with various AR-capable devices and prototyping tools.",
//                 image: "https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               },
//               {
//                 title: "Immersive Experience Center",
//                 description: "A showcase area where students can demonstrate their projects and the public can experience the latest in immersive technology.",
//                 image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               },
//             ].map((facility, index) => (
//               <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={facility.image}
//                     alt={facility.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="mb-2 font-heading text-xl font-semibold">{facility.title}</h3>
//                   <p className="text-muted-foreground">{facility.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="mb-16">
//           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Leadership Team</h2>
          
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 name: "Mr. Sunil Kant Munjal",
//                 role: "Director",
//                 bio: "With over 15 years of experience in immersive technologies and education, Dr. Patel leads our institution with a vision to democratize access to cutting-edge tech education.",
//                 // image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               image:"placeholder.jpg"
//               },
//               {
//                 name: "Prof. Rajiv Mehta",
//                 role: "Head of Research",
//                 bio: "An acclaimed researcher in spatial computing, Prof. Mehta oversees our research initiatives and ensures our curriculum remains at the forefront of technological innovation.",
//                 // image: "https://images.pexels.com/photos/8434891/pexels-photo-8434891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               image:"placeholder.jpg"
//               },
//               {
//                 name: "Priya Subramaniam",
//                 role: "Industry Relations Lead",
//                 bio: "With a background in both technology and business development, Priya bridges the gap between academia and industry, creating opportunities for our students.",
//                 // image: "https://images.pexels.com/photos/6203758/pexels-photo-6203758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               image:"placeholder.jpg"
//               },
//             ].map((person, index) => (
//               <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
//                 <div className="relative h-64 w-full overflow-hidden">
//                   <Image
//                     src={person.image}
//                     alt={person.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="mb-1 font-heading text-xl font-semibold">{person.name}</h3>
//                   <p className="mb-4 text-sm font-medium text-primary">{person.role}</p>
//                   <p className="text-muted-foreground">{person.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="mb-16">
//           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">Our Values</h2>
          
//           <div className="grid gap-6 md:grid-cols-2">
//             {[
//               {
//                 title: "Innovation",
//                 description: "We embrace experimentation and push the boundaries of what's possible with immersive technologies."
//               },
//               {
//                 title: "Inclusivity",
//                 description: "We're committed to making immersive technology education accessible to students from all backgrounds."
//               },
//               {
//                 title: "Collaboration",
//                 description: "We foster partnerships between academia, industry, and communities to create holistic learning experiences."
//               },
//               {
//                 title: "Future-Focused",
//                 description: "We prepare our students not just for today's jobs, but for the careers and challenges of tomorrow."
//               },
//             ].map((value, index) => (
//               <div key={index} className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
//                 <h3 className="mb-3 font-heading text-xl font-semibold">{value.title}</h3>
//                 <p className="text-muted-foreground">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="rounded-xl border border-border bg-card p-8 shadow-xl">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">Join Our Community</h2>
//             <p className="mb-6 text-muted-foreground">
//               Whether you're a prospective student, industry partner, or simply curious about immersive technologies, 
//               we invite you to connect with us and explore the possibilities of this exciting field.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a href="/programs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
//                 View Programs
//               </a>
//               <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | School of Immersive Technologies",
  description:
    "Discover the School of Immersive Technologies, our mission to lead AR/VR education, and our vision to shape the future of immersive innovation in India.",
  keywords: [
    "immersive technology education",
    "AR/VR education India",
    "School of Immersive Technologies",
    "augmented reality courses",
    "virtual reality training",
  ],
  openGraph: {
    title: "About Us | School of Immersive Technologies",
    description:
      "Learn about our mission, vision, and innovative approach to immersive technology education.",
    images: [
      {
        url: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
        width: 1200,
        height: 600,
        alt: "School of Immersive Technologies campus",
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
            "@type": "Organization",
            name: "School of Immersive Technologies",
            url: "https://www.example.com",
            description:
              "Leading AR/VR education institution fostering innovation in immersive technologies.",
            logo: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Immersive technology innovation"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-fade-in-up">
            Shaping the Future of Immersive Education
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-200">
            At the School of Immersive Technologies, we empower creators to lead the AR/VR revolution through innovative education and research.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="/programs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore Programs
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

      {/* Our Purpose Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground">
                Our Purpose
              </h2>
              <p className="mb-6 text-muted-foreground">
                Founded in 2018, the School of Immersive Technologies is a beacon of innovation within the Munjal BCU Centre of Innovation & Entrepreneurship. Our mission is to deliver world-class AR/VR education, blending technical expertise with creative innovation.
              </p>
              <p className="text-muted-foreground">
                Our vision is to be the global leader in immersive technology education, empowering students to transform how we interact with digital worlds.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students collaborating in immersive tech lab"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            State-of-the-Art Facilities
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "VR Development Lab",
                description: "High-end VR headsets and motion capture systems for immersive experiences.",
                image: "https://images.pexels.com/photos/8728305/pexels-photo-8728305.jpeg",
              },
              {
                title: "AR Innovation Hub",
                description: "Prototyping tools and AR devices for cutting-edge development.",
                image: "https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg",
              },
              {
                title: "Immersive Experience Center",
                description: "Showcase student projects and engage the public with AR/VR.",
                image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
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
              description: "Pushing boundaries in AR/VR through bold experimentation.",
              color: "from-blue-500 to-blue-300",
            },
            {
              title: "Excellence",
              description: "Striving for the highest standards in education and research.",
              color: "from-purple-500 to-purple-300",
            },
            {
              title: "Collaboration",
              description: "Partnering to amplify impact in immersive tech.",
              color: "from-green-500 to-green-300",
            },
            {
              title: "Inclusivity",
              description: "Creating an accessible, diverse learning environment.",
              color: "from-orange-500 to-orange-300",
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

      {/* Leadership Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight text-foreground">
            Meet Our Leadership
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: "Mr. Sunil Kant Munjal",
                role: "Director",
                bio: "Leading our vision to democratize immersive tech education.",
                image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg",
              },
              {
                name: "Prof. Rajiv Mehta",
                role: "Head of Research",
                bio: "Driving cutting-edge research in spatial computing.",
                image: "https://images.pexels.com/photos/8434891/pexels-photo-8434891.jpeg",
              },
              {
                name: "Priya Subramaniam",
                role: "Industry Relations Lead",
                bio: "Bridging academia and industry for student success.",
                image: "https://images.pexels.com/photos/6203758/pexels-photo-6203758.jpeg",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{person.name}</h3>
                  <p className="mb-2 text-sm font-medium text-primary">{person.role}</p>
                  <p className="text-muted-foreground">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Leadership */}
      <section className="container mx-auto px-4 py-16 sm:px-6">
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-full">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Leadership vision for immersive education"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
            </div>
            <div className="p-8 md:p-12 bg-card">
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground">
                From Our Director
              </h2>
              <p className="mb-6 text-muted-foreground">
                "We’re not just teaching technology—we’re shaping the future. Our students are the pioneers who will redefine how we experience the digital world through AR/VR innovation."
              </p>
              <div>
                <div className="font-heading font-semibold text-foreground">Mr. Sunil Kant Munjal</div>
                <div className="text-sm text-muted-foreground">Director, School of Immersive Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight">
            Join the Immersive Revolution
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Become a part of our community to explore AR/VR education, collaborate on groundbreaking research, or partner with us to shape the future.
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
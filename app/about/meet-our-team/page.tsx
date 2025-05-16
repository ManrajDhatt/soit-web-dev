import Image from "next/image";
import { Metadata } from "next";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Our Team | School of Immersive Technologies",
  description: "Get to know the dedicated faculty and staff at SOIT, driving innovation in multimedia and immersive technology education.",
};

export default function MeetOurTeamPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Meet Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our passionate faculty and staff are committed to your success in multimedia and immersive technologies.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="SOIT team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Our Experts
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                Meet the professionals guiding SOIT’s mission to shape future-ready creators.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Er. Shilpa Miglani",
              role: "Director",
              image: "/teacher/shilpa_director.jpg",
              description: "Overseeing SOIT’s strategic vision, ensuring top-tier education in immersive technologies.",
            },
            {
              name: "Kumaresh",
              role: "Technical Head",
              image: "/teacher/kumaresh_technicalHead.jpg",
              description: "Managing technical operations and leading innovation in 2D/3D animation programs.",
            },
            {
              name: "JC Verma",
              role: "Head HR & Admin",
              image: "/teacher/JCVerma_HEadHr.jpg",
              description: "Driving HR and administrative excellence to support SOIT’s growth and student success.",
            },
            {
              name: "Lovepreet Singh",
              role: "Technical Associate [IT]",
              image: "/teacher/lovepree_IT.jpg",
              description: "Maintaining IT infrastructure and supporting tech-driven learning environments.",
            },
            {
              name: "Raghav Sharma",
              role: "Business Development Executive",
              image: "/teacher/raghave_business_dev_exceutive.jpg",
              description: "Building partnerships and expanding SOIT’s reach in the immersive tech industry.",
            },
            {
              name: "Kim Sachdeva",
              role: "Student Counselor",
              image: "/teacher/kim_student_Counselor.jpg",
              description: "Guiding students through their academic journey with personalized support and advice.",
            },
            {
              name: "Saurav Sharma",
              role: "3D Generalist",
              image: "/teacher/saurav_teacher.jpg",
              description: "Specializing in AR/VR technologies, mentoring students in cutting-edge development.",
            },
            {
              name: "Sonika Dang",
              role: "AR/VR Trainer",
              image: "/teacher/sonika_teacher.jpg",
              description: "Training students in AR/VR tools like Unity and Unreal Engine for immersive projects.",
            },
            {
              name: "Nidhi Chhabra",
              role: "AR/VR Trainer",
              image: "/teacher/nidhi_teacher.jpg",
              description: "Empowering students with hands-on skills in AR/VR development and immersive design.",
            },
            {
              name: "Karan Singh",
              role: "Graphic Designer",
              image: "/teacher/karan_teacher.jpg",
              description: "Equipping students with expertise in AR/VR technologies for real-world applications.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                <Image src={member.image} alt={member.name} fill className="object-contain" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-primary text-center mt-1">{member.role}</p>
              <p className="text-muted-foreground mt-2 text-center">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Learn from the Best
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join SOIT and be mentored by our expert team in multimedia and immersive tech.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/courses"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Courses
            </a>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
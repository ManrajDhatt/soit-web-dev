import Image from "next/image";
import { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Director's Message | School of Immersive Technologies",
  description: "A message from the Director of the School of Immersive Technologies about our vision, mission, and commitment to excellence in immersive education.",
};

export default function DirectorsMessagePage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Director's Message
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A welcome from Dr. Amrita Patel, Director of the School of Immersive Technologies
          </p>
        </div>
        
        <div className="mb-16 flex flex-col gap-12 rounded-xl border border-border bg-card p-8 shadow-xl md:flex-row md:p-12">
          <div className="md:w-1/3">
            {/* <div className="relative mx-auto aspect-square max-w-[300px] overflow-hidden rounded-xl border-4 border-background shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dr. Amrita Patel"
                fill
                className="object-cover"
              />
            </div> */}
            <div className="mt-8 text-center">
              <h2 className="font-heading text-2xl font-bold">Dr. Amrita Patel</h2>
              <p className="text-primary">Director</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ph.D. in Computer Science<br />
                Former Head of Immersive Research at TechVision Labs<br />
                15+ years in Immersive Technologies
              </p>
            </div>
          </div>
          
          <div className="relative md:w-2/3">
            <Quote className="absolute -left-4 -top-4 h-12 w-12 text-primary/20 sm:h-16 sm:w-16" />
            
            <div className="space-y-6 text-muted-foreground">
              <p className="relative z-10 text-lg">
                Dear Students, Parents, Industry Partners, and Friends,
              </p>
              
              <p>
                It is with great pleasure that I welcome you to the School of Immersive Technologies at the Munjal BCU Centre of Innovation & Entrepreneurship. As we stand at the threshold of a new era in human-computer interaction, our institution is committed to preparing the next generation of pioneers who will shape the future of immersive technologies.
              </p>
              
              <p>
                The convergence of virtual reality, augmented reality, and mixed reality is transforming how we learn, work, play, and connect. These technologies are no longer the stuff of science fiction—they are rapidly becoming integral parts of industries ranging from healthcare and education to manufacturing, entertainment, and beyond.
              </p>
              
              <p>
                At the School of Immersive Technologies, we have created a unique educational ecosystem where technical expertise meets creative innovation. Our state-of-the-art facilities, industry-experienced faculty, and forward-thinking curriculum are designed to provide you with the knowledge, skills, and experiences needed to thrive in this exciting field.
              </p>
              
              <p>
                We believe in learning by doing. Our students don't just study immersive technologies—they create with them, experiment with them, and push their boundaries. Through hands-on projects, industry collaborations, and research initiatives, our students gain practical experience that prepares them for successful careers in this rapidly evolving landscape.
              </p>
              
              <p>
                Our commitment extends beyond education. We are dedicated to advancing the field of immersive technologies through cutting-edge research and development. Our faculty and students work on projects that address real-world challenges and explore new possibilities for immersive experiences.
              </p>
              
              <p>
                Whether you are a prospective student passionate about technology and creativity, a parent supporting your child's aspirations, an industry partner seeking innovation, or simply curious about the future of digital experiences, I invite you to explore what the School of Immersive Technologies has to offer.
              </p>
              
              <p>
                Join us as we journey into new realities and reshape how humans interact with the digital world.
              </p>
              
              <div className="pt-4">
                <p className="font-medium">Warm regards,</p>
                <div className="mt-4 font-heading text-xl italic">Amrita Patel</div>
                <p>Dr. Amrita Patel<br />Director, School of Immersive Technologies</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Leadership Philosophy
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Student-Centered Approach",
                description: "We believe in putting students at the center of everything we do, creating personalized learning experiences that cater to diverse interests and career aspirations.",
              },
              {
                title: "Innovation-Driven Education",
                description: "Our curriculum is continuously evolving to reflect the latest developments in immersive technologies, ensuring students are always at the cutting edge.",
              },
              {
                title: "Inclusive Excellence",
                description: "We are committed to creating an inclusive environment where diverse perspectives enrich the learning experience and drive innovation.",
              },
              {
                title: "Industry Integration",
                description: "We maintain strong connections with industry to ensure our education is relevant and our graduates are prepared for real-world challenges.",
              },
              {
                title: "Ethical Leadership",
                description: "We instill in our students a strong sense of responsibility regarding the ethical implications of immersive technologies.",
              },
              {
                title: "Global Perspective",
                description: "We cultivate a global mindset, preparing students to work in international contexts and address global challenges.",
              },
            ].map((philosophy, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="mb-2 font-heading text-xl font-semibold">{philosophy.title}</h3>
                <p className="text-muted-foreground">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Vision for the Future
          </h2>
          
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src="https://images.pexels.com/photos/8728460/pexels-photo-8728460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Future of Immersive Technologies"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="mx-auto max-w-4xl space-y-6 text-muted-foreground">
                <p>
                  As we look toward the future, I envision the School of Immersive Technologies becoming a global hub for innovation and education in immersive technologies. Our graduates will be at the forefront of technological advancements, leading the development of immersive experiences that transform industries and enhance human capabilities.
                </p>
                
                <p>
                  In the coming years, we will expand our research initiatives, focusing on areas such as spatial computing, immersive learning environments, accessibility in virtual reality, and the integration of artificial intelligence with immersive technologies. We will strengthen our industry partnerships, creating more opportunities for collaborative projects and internships that bridge the gap between academia and industry.
                </p>
                
                <p>
                  We will continue to evolve our curriculum, incorporating emerging technologies and methodologies while maintaining our commitment to hands-on, experiential learning. Our facilities will grow to include more specialized labs and workshops, providing students with access to the latest hardware and software.
                </p>
                
                <p>
                  Most importantly, we will foster a community of scholars, practitioners, and innovators who are passionate about using immersive technologies to address real-world challenges and create meaningful experiences. Together, we will push the boundaries of what's possible and shape the future of human-computer interaction.
                </p>
                
                <p>
                  I invite you to join us on this exciting journey. Whether as a student, faculty member, industry partner, or supporter, you have a role to play in this transformative field. Together, we can build a future where immersive technologies enhance human potential and create new possibilities for connection, communication, and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Key Initiatives
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Immersive Learning Research Lab",
                description: "A dedicated research facility exploring how immersive technologies can transform educational experiences across disciplines.",
                status: "Launched 2023",
              },
              {
                title: "Industry Mentorship Program",
                description: "Connecting students with experienced professionals who provide guidance, support, and industry insights throughout their academic journey.",
                status: "Ongoing",
              },
              {
                title: "Immersive Technologies for Social Impact",
                description: "A program focused on developing immersive solutions for healthcare, accessibility, and other social challenges.",
                status: "Launching 2025",
              },
              {
                title: "Global Immersive Technologies Summit",
                description: "An annual conference bringing together researchers, practitioners, and students to share innovations and insights in immersive technologies.",
                status: "First edition 2025",
              },
            ].map((initiative, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold">{initiative.title}</h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                  <div className="ml-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {initiative.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center shadow-xl">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Connect with Dr. Patel
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Dr. Patel welcomes discussions with prospective students, parents, industry partners, 
            and anyone interested in the future of immersive technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Schedule a Meeting
            </a>
            <a href="mailto:director@immersivetech.edu" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Email Dr. Patel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
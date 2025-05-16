import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | School of Immersive Technologies",
  description: "Understand the terms governing your use of the School of Immersive Technologies' website and educational services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Terms of Use
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Review the terms that govern your interaction with our website and educational courses at the School of Immersive Technologies.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px]">
            <Image
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Terms"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Our Commitment
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                These terms ensure a fair and transparent experience for all users of our educational services and website.
              </p>
            </div>
          </div>
        </div>

        {/* Terms of Use Content */}
        <div className="mb-24 space-y-12">
          {[
            {
              title: "Acceptance of Terms",
              description:
                "By accessing our website at soit.example.com or enrolling in courses such as the B.Voc. in Multimedia and Animation, diploma courses, or short-term courses (e.g., AR/VR, Game Design), you agree to these Terms and our Privacy Policy.",
              highlights: [
                "Applies to website and course enrollment",
                "Includes B.Voc. and short-term courses",
                "Contact us for concerns",
              ],
            },
            {
              title: "Course Enrollment & Eligibility",
              description:
                "Eligibility varies by program: B.Voc. requires 10+2, diplomas need 10+2 or equivalent, and short-term courses are open to all. Enrollment is confirmed after payment and document verification (e.g., 10th/12th mark sheets, identity proof).",
              highlights: [
                "B.Voc.: 10+2 required",
                "Short-term courses: No strict eligibility",
                "Document verification needed",
              ],
            },
            {
              title: "Payment & Refund Policy",
              description:
                "Course fees must be paid as per the schedule. B.Voc. fees total ₹1,61,000, while short-term courses range from ₹25,000 to ₹70,000. Fees are non-refundable after the course starts, except if SOIT cancels. Pre-course refund requests incur administrative charges.",
              highlights: [
                "B.Voc. fees: ₹1,61,000",
                "Short-term course fees: ₹25,000–₹70,000",
                "Non-refundable post-course start",
              ],
            },
            {
              title: "Student Code of Conduct",
              description:
                "Students must maintain discipline, adhere to SOIT policies, and meet attendance requirements. Misconduct, including harassment or plagiarism, may lead to suspension or expulsion.",
              highlights: [
                "Discipline and policy adherence",
                "Attendance for certifications",
                "Consequences for misconduct",
              ],
            },
            {
              title: "Intellectual Property",
              description:
                "Course materials for B.Voc., AR/VR, and other courses are copyrighted by SOIT and/or Lingaya’s Vidyapeeth. Materials may not be copied or distributed without permission and are for personal educational use only.",
              highlights: [
                "Copyrighted course materials",
                "Personal use only",
                "Permission required for distribution",
              ],
            },
            {
              title: "Certification & Placement",
              description:
                "Certifications require successful course completion and meeting evaluation criteria. SOIT offers placement assistance but does not guarantee jobs. Industry certifications (e.g., Adobe, Autodesk) may be provided.",
              highlights: [
                "Certifications upon completion",
                "Placement assistance, not guaranteed",
                "Industry-recognized certifications",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="mb-3 font-heading text-xl font-semibold">{section.title}</h3>
              <p className="mb-4 text-muted-foreground">{section.description}</p>
              <ul className="space-y-2">
                {section.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-center gap-2 text-sm">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mb-24 rounded-xl border border-border bg-card p-8 shadow-xl">
          <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Contact Us
          </h2>
          <p className="mb-6 text-muted-foreground">
            Have questions about our Terms of Use? Reach out to our team for clarification.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:admission@mbcie.org" className="text-primary hover:underline">
            admission@mbcie.org
              </a>
            </p>
            <p>
              <strong>Address:</strong> Munjal Birmingham City University, Centre of Innovation and
              Entrepreneurship, BCM Campus, Sector 32, Ludhiana, Punjab, India
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Start Your Journey
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Explore our Courses, from B.Voc. in Multimedia and Animation to short-term courses in immersive technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/courses/b-voc-in-multimedia-and-animation"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              View Courses
            </a>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
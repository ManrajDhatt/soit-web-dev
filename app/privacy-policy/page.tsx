import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | School of Immersive Technologies",
  description: "Learn how the School of Immersive Technologies protects your personal information and ensures your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            At the School of Immersive Technologies, your privacy is our priority. Discover how we collect, use, and protect your information.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative  mb-16 overflow-hidden rounded-2xl">
          <div className="relative h-[300px] w-full sm:h-[400px] bg-blue-300 ">
            <Image
            src="/privacy_policy.png"
            //   src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Privacy"
              fill
              className=" relative object-contain object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-background/1" />
            <div className="relative inset-0  flex flex-col items-start justify-center p-8 sm:p-12">
              <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Your Privacy Matters
              </h2>
              <p className="max-w-md text-lg text-foreground sm:text-xl">
                We are committed to safeguarding your personal information while providing exceptional education in immersive technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="mb-24 space-y-12">
          {[
            {
              title: "Scope",
              description:
                "This Privacy Policy applies to online activities on our website at soit.example.com, covering information shared or collected during interactions such as course registrations for B.Voc. in Multimedia and Animation, short-term courses, or inquiries. It does not apply to offline data collection.",
            },
            {
              title: "Information We Collect",
              description:
                "We collect personal information you voluntarily provide, including name, email, phone number, address, educational qualifications (e.g., 10th/12th mark sheets), and identity proof (e.g., Aadhar card). This occurs during course registrations, inquiries, or participation in webinars and virtual tours.",
              highlights: [
                "Course registrations (B.Voc., diploma, short-term courses)",
                "Contact form submissions",
                "Event participation (e.g., AR/VR workshops)",
              ],
            },
            {
              title: "How We Use Your Information",
              description:
                "Your information helps us deliver educational services, process admissions, improve user experience, and communicate updates about courses like Graphic Design, AR/VR, and Game Design. We also use it to analyze trends and prevent fraud.",
              highlights: [
                "Manage admissions for B.Voc. and short-term courses",
                "Personalize user experience",
                "Send course and event updates",
              ],
            },
            {
              title: "Cookies and Log Files",
              description:
                "We use cookies to enhance user experience and log files to track non-personal data like IP addresses, browser types, and page visits. These help us analyze trends and optimize our website without linking to personally identifiable information.",
              highlights: [
                "Cookies for user preferences",
                "Log files for site analytics",
                "No personally identifiable data linked",
              ],
            },
            {
              title: "GDPR Data Protection Rights",
              description:
                "For EU residents, you have rights to access, rectify, erase, restrict, or transfer your data, and object to its processing. Contact us to exercise these rights, and we will respond within one month.",
              highlights: [
                "Right to access and rectify data",
                "Right to erasure and data portability",
                "Contact us for requests",
              ],
            },
            {
              title: "Children’s Information",
              description:
                "We do not knowingly collect data from children under 13. If you believe your child has provided such information, contact us immediately, and we will promptly remove it.",
              highlights: [
                "No data collection from children under 13",
                "Immediate action on parental concerns",
                "Contact us for issues",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="mb-3 font-heading text-xl font-semibold">{section.title}</h3>
              <p className="mb-4 text-muted-foreground">{section.description}</p>
              {section.highlights && (
                <ul className="space-y-2">
                  {section.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mb-24 rounded-xl border border-border bg-card p-8 shadow-xl">
          <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Contact Us
          </h2>
          <p className="mb-6 text-muted-foreground">
            For questions or concerns about our Privacy Policy, reach out to us. We’re here to help.
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
            Explore Our Courses
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join our B.Voc. in Multimedia and Animation or short-term courses in AR/VR, Game Design, and more.
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
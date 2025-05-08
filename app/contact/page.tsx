import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | School of Immersive Technologies",
  description: "Get in touch with the School of Immersive Technologies for inquiries about programs, admissions, and more.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have questions about our programs or want to learn more about immersive technologies? 
            We're here to help you navigate the future of education.
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-lg">
              <h2 className="mb-6 font-heading text-2xl font-semibold">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-medium">Address</h3>
                  <address className="mt-2 not-italic text-muted-foreground">
                    School of Immersive Technologies<br />
                    Munjal BCU Centre of Innovation & Entrepreneurship<br />
                    Ludhiana,Punjab,India
                  </address>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-medium">Phone</h3>
                  <p className="mt-2 text-muted-foreground">
                    +91 1234567890
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-medium">Email</h3>
                  <p className="mt-2 text-muted-foreground">
                    info@immersivetech.edu
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-medium">Office Hours</h3>
                  <p className="mt-2 text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="mb-4 font-heading text-lg font-medium">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-lg">
              <h2 className="mb-4 font-heading text-2xl font-semibold">Admission Inquiries</h2>
              <p className="text-muted-foreground">
                For specific questions about admission requirements, program details, 
                or application status, please contact our admissions team directly.
              </p>
              <div className="mt-4">
                <div className="font-medium">Admissions Office</div>
                <div className="text-muted-foreground">admissions@immersivetech.edu</div>
                <div className="text-muted-foreground">+91 9876543210</div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="mb-6 text-center font-heading text-2xl font-semibold">Our Location</h2>
          <div className="relative h-[400px] overflow-hidden rounded-lg border border-border">
            {/* This would be replaced with an actual map component */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <p className="text-center text-muted-foreground">
                Interactive Map Would Be Embedded Here
              </p>
            

            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="mb-6 text-center font-heading text-2xl font-semibold">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What are the admission requirements for your programs?",
                answer: "Admission requirements vary by program. Generally, we look for a strong academic background, particular interest in technology, and creative problem-solving abilities. Specific requirements are listed on each program's page."
              },
              {
                question: "Do you offer scholarships or financial aid?",
                answer: "Yes, we offer various scholarships based on academic merit, innovation potential, and financial need. We also partner with several organizations to provide financial assistance to qualified students."
              },
              {
                question: "What career opportunities are available after completing your programs?",
                answer: "Graduates from our programs have pursued careers in VR/AR development, immersive experience design, game development, simulation specialists, and more across industries like entertainment, healthcare, education, and architecture."
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-medium">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
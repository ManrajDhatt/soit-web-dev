// components/EnquireButton.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, User, Book } from "lucide-react";
import { courses } from "@/lib/courses";

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  course: z.string().min(1, "Please select a course"),
});

export function EnquireButton() {
  const [open, setOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      course: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Replace with backend API call
    setSubmissionStatus("Thank you for your enquiry! We’ll contact you soon.");
    form.reset();
    setTimeout(() => {
      setSubmissionStatus(null);
      setOpen(false);
    }, 2000); // Close modal after 2 seconds
  }

  // Group courses by category for dropdown
  const courseCategories = [
    { category: "degree", label: "Degree Programs" },
    { category: "diploma", label: "Diploma Courses" },
    { category: "advanced-diploma", label: "Advanced Diploma Courses" },
    { category: "short-term", label: "Short-Term & Specialized Courses" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="ml-4 px-6 py-2 bg-gradient-to-r from-primary to-blue-900 text-white font-bold rounded-md shadow-md transition-transform duration-700 animate-pulseGrow"
          aria-label="Enquire Now"
        >
          Enquire Now
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl w-full p-0 bg-background rounded-xl overflow-hidden shadow-lg">
        {submissionStatus ? (
          <div className="flex flex-col items-center justify-center p-6">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <p className="text-lg text-green-800">{submissionStatus}</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row p-10">
            {/* Left: Form */}
            <div className="md:w-1/2 p-6 bg-muted/50">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading text-foreground">
                  Book a <span className="text-primary">Free Counselling</span>
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Course */}
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Interested In</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger aria-label="Select course">
                              <SelectValue placeholder="Choose a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[300px] overflow-y-auto">
                            {courseCategories.map((category) => (
                              <SelectGroup key={category.category}>
                                <SelectLabel className="px-2 py-1 text-sm font-semibold text-muted-foreground">
                                  {category.label}
                                </SelectLabel>
                                {courses
                                  .filter((course) => course.category === category.category)
                                  .map((course) => (
                                    <SelectItem
                                      key={course.slug}
                                      value={course.slug}
                                      className="text-foreground hover:bg-primary/10 focus:bg-primary/20 cursor-pointer"
                                    >
                                      {course.title}
                                    </SelectItem>
                                  ))}
                              </SelectGroup>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Privacy and Terms */}
                  <p className="text-xs text-muted-foreground">
                    Your personal information will be handled as per our{" "}
                    <a href="/privacy" className="text-primary underline">
                      Privacy Policy
                    </a>
                    . You can opt out anytime.
                  </p>
                  <p className="text-xs font-semibold">
                    By submitting this form, you accept and agree to our{" "}
                    <a href="/terms" className="text-primary underline">
                      Terms of Use
                    </a>
                    .
                  </p>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-md font-semibold"
                    disabled={form.formState.isSubmitting}
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </Form>
            </div>

            {/* Right: Why Choose + Testimonials */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-lg font-semibold mb-4">
                Why Choose School of Immersive Technologies?
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" /> Industry-Led Training
                </li>
                <li className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-primary" /> Real-World Projects
                </li>
                <li className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" /> Expert Faculty
                </li>
                <li className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-primary" /> Flexible Schedules
                </li>
                <li className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" /> Placement Support
                </li>
                <li className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-primary" /> Cutting-Edge Labs
                </li>
              </ul>
              <h3 className="mt-6 font-semibold">What Our Students Say</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 text-sm">
                <Card className="bg-muted/50 p-3">
                  <CardContent className="p-0">
                    <p className="text-foreground">
                      “This program gave me the skills to land a job at a top animation studio!”
                    </p>
                    <p className="mt-2 font-semibold">— Priya M., Alumna</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50 p-3">
                  <CardContent className="p-0">
                    <p className="text-foreground">
                      “The faculty’s guidance and industry projects were game-changers.”
                    </p>
                    <p className="mt-2 font-semibold">— Arjun S., Alumnus</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
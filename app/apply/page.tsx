
// app/apply/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { courses } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
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
import { ChevronRight, User, Book, Upload, CheckCircle } from "lucide-react";

// Form validation schema using Zod
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  alternativeMobile: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^\d{10}$/.test(value),
      "Alternative mobile number must be 10 digits if provided"
    ),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  course: z.string().min(1, "Please select a course"),
  tenthMarks: z
    .number()
    .min(0, "Marks cannot be negative")
    .max(100, "Marks cannot exceed 100"),
  twelfthMarks: z
    .number()
    .min(0, "Marks cannot be negative")
    .max(100, "Marks cannot exceed 100"),
  diplomaMarks: z
    .number()
    .min(0, "Marks cannot be negative")
    .max(100, "Marks cannot exceed 100")
    .optional(),
  tenthCertificate: z
    .any()
    .refine((file) => file instanceof File && file.type === "application/pdf", "Must be a PDF file")
    .refine((file) => file instanceof File && file.size <= MAX_FILE_SIZE, "File size must be under 5MB"),
  twelfthCertificate: z
    .any()
    .refine((file) => file instanceof File && file.type === "application/pdf", "Must be a PDF file")
    .refine((file) => file instanceof File && file.size <= MAX_FILE_SIZE, "File size must be under 5MB"),
  diplomaCertificate: z
    .any()
    .optional()
    .refine(
      (file) => !file || (file instanceof File && file.type === "application/pdf"),
      "Must be a PDF file"
    )
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      "File size must be under 5MB"
    ),
  profileImage: z
    .any()
    .refine(
      (file) => file instanceof File && ["image/jpeg", "image/png"].includes(file.type),
      "Must be a JPEG or PNG image"
    )
    .refine((file) => file instanceof File && file.size <= MAX_FILE_SIZE, "File size must be under 5MB"),
});

export default function ApplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      alternativeMobile: "",
      dateOfBirth: "",
      address: "",
      course: "",
      tenthMarks: 0,
      twelfthMarks: 0,
      diplomaMarks: undefined,
      tenthCertificate: undefined,
      twelfthCertificate: undefined,
      diplomaCertificate: undefined,
      profileImage: undefined,
    },
  });

  // Pre-select course from query parameter
  useEffect(() => {
    const courseSlug = searchParams.get("course");
    if (courseSlug && courses.some((c) => c.slug === courseSlug)) {
      form.setValue("course", courseSlug);
      const selectedCourse = courses.find((c) => c.slug === courseSlug);
      if (
        selectedCourse?.category === "degree" ||
        selectedCourse?.category === "advanced-diploma"
      ) {
        form.setValue("diplomaMarks", 0);
      }
    }
  }, [searchParams, form]);

  // File preview states
  const [tenthPreview, setTenthPreview] = useState<string | null>(null);
  const [twelfthPreview, setTwelfthPreview] = useState<string | null>(null);
  const [diplomaPreview, setDiplomaPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Progress stepper sections
  const steps = ["Personal Details", "Academic Details", "Course Selection", "Document Uploads"];

  // Update current step based on scroll position
  useEffect(() => {
    const sections = steps.map((_, index) => document.getElementById(`section-${index}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // const index = sections.indexOf(entry.target);
            const index = sections.indexOf(entry.target as HTMLElement);

            setCurrentStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Replace with backend API call
    setSubmissionStatus("Thank you for your application! We will contact you as soon as possible.");
    form.reset();
    setTenthPreview(null);
    setTwelfthPreview(null);
    setDiplomaPreview(null);
    setImagePreview(null);
    setTimeout(() => {
      setSubmissionStatus(null);
      router.push("/apply/success");
    }, 2000); // Redirect after 2 seconds
  }

  // Group courses by category for dropdown
  const courseCategories = [
    { category: "degree", label: "Degree Courses" },
    { category: "diploma", label: "Diploma Courses" },
    { category: "advanced-diploma", label: "Advanced Diploma Courses" },
    { category: "short-term", label: "Short-Term & Specialized Courses" },
  ];

  // Get related courses based on selected course
  const selectedCourse = courses.find((course) => course.slug === form.watch("course"));
  const relatedCourses = selectedCourse
    ? courses
        .filter((course) => course.category === selectedCourse.category && course.slug !== selectedCourse.slug)
        .slice(0, 3)
    : [];

  // Check if diploma fields are required
  const requiresDiploma = selectedCourse?.category === "degree" || selectedCourse?.category === "advanced-diploma";

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
      {/* Hero Section */}
      <section className="relative mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0">
          {/* <Image
            src="/images/apply-hero.jpg"
            alt="Apply to School of Immersive Technologies"
            fill
            className="object-cover opacity-30"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="relative z-10 px-6 py-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Apply Now
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Take the first step toward a career in multimedia, animation, VFX, and immersive technologies.
          </p>
        </div>
      </section>

      {/* Submission Feedback */}
      {submissionStatus && (
        <div className="mb-8 flex items-center justify-center gap-2 rounded-lg bg-green-100 p-4 text-green-800">
          <CheckCircle className="h-5 w-5" />
          <p>{submissionStatus}</p>
        </div>
      )}

        {/* Sticky Progress Stepper */}
        <div className="sticky top-10 bg-background pt-10 pb-2 shadow-sm z-30">
        <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto">
            {/* Step circles */}

            <div className="flex justify-between px-8">
                {/* Creating a container for the line with padding */}
                <div className="absolute top-4 w-full mb-9 ">
                {/* Background line - positioned with padding */}
                <div className="absolute h-1 bg-muted w-[80%] left-[5%]"></div>
                
                {/* Progress line - grows based on current step */}
                <div 
                    className="absolute h-1 bg-primary transition-all duration-300" 
                    style={{ 
                    width: `${(currentStep / (steps.length - 1)) * 80}%`,
                    left: '5%'
                    }}
                ></div>
                </div>
                
                {/* Step indicators */}
                {steps.map((step, index) => (
                <div key={index} className="z-10 flex flex-col items-center">
                    <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        index <= currentStep ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                    >
                    {index + 1}
                    </div>
                    <p className="mt-2 text-xs font-medium">
                    {step}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
      {/* Form Section */}
      <section className="mb-16">
        <Card className="mx-auto max-w-4xl mt-10">
          <CardHeader>
            <CardTitle className="text-3xl font-heading">Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Details */}
                <div id="section-0" className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Details
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Profile Image */}
                    <FormField
                      control={form.control}
                      name="profileImage"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-center">
                          <FormLabel>Profile Image</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                                {imagePreview ? (
                                  <Image
                                    src={imagePreview}
                                    alt="Profile preview"
                                    fill
                                    className="object-cover"
                                  />
                                ) : (
                                  <User className="h-12 w-12 text-muted-foreground" />
                                )}
                              </div>
                              <Input
                                type="file"
                                accept="image/jpeg,image/png"
                                className="mt-2"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    field.onChange(file);
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                      setImagePreview(reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>JPEG or PNG, max 5MB</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Mobile */}
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="1234567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Alternative Mobile */}
                    <FormField
                      control={form.control}
                      name="alternativeMobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alternative Mobile (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="0987654321" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Date of Birth */}
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Address */}
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="md:col-span-3">
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St, City, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Academic Details */}
                <div id="section-1" className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    Academic Details
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* 10th Marks */}
                    <FormField
                      control={form.control}
                      name="tenthMarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>10th Grade Marks (%)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="85"
                              {...field}
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* 12th Marks */}
                    <FormField
                      control={form.control}
                      name="twelfthMarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>12th Grade Marks (%)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="90"
                              {...field}
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Diploma Marks (Conditional) */}
                    {requiresDiploma && (
                      <FormField
                        control={form.control}
                        name="diplomaMarks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Diploma Marks (%)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="80"
                                {...field}
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>

                {/* Course Selection */}
                <div id="section-2" className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    Course Selection
                  </h3>
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Course</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            const selectedCourse = courses.find((c) => c.slug === value);
                            if (
                              selectedCourse?.category === "degree" ||
                              selectedCourse?.category === "advanced-diploma"
                            ) {
                              form.setValue("diplomaMarks", 0);
                            } else {
                              form.setValue("diplomaMarks", undefined);
                              form.setValue("diplomaCertificate", undefined);
                              setDiplomaPreview(null);
                            }
                          }}
                          value={field.value}
                        >
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
                  {/* Related Courses */}
                  {relatedCourses.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-medium mb-4">Explore Related Courses</h4>
                      <div className="grid gap-4 md:grid-cols-3">
                        {relatedCourses.map((course) => (
                          <Card key={course.slug} className="hover:shadow-md transition-shadow">
                            <CardContent className="pt-4">
                              <h5 className="text-md font-medium">{course.title}</h5>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {course.description}
                              </p>
                              <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="mt-2 w-full"
                              >
                                <Link href={`/courses/${course.slug}`}>Learn More</Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Document Uploads */}
                <div id="section-3" className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Upload className="h-5 w-5 text-primary" />
                    Document Uploads
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* 10th Certificate */}
                    <FormField
                      control={form.control}
                      name="tenthCertificate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>10th Certificate</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="application/pdf"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  const reader = new FileReader();
                                  reader.onload = () => {
                                    setTenthPreview(reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </FormControl>
                          {tenthPreview && (
                            <a
                              href={tenthPreview}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary underline"
                            >
                              Preview 10th Certificate
                            </a>
                          )}
                          <FormDescription>PDF, max 5MB</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* 12th Certificate */}
                    <FormField
                      control={form.control}
                      name="twelfthCertificate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>12th Certificate</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="application/pdf"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  const reader = new FileReader();
                                  reader.onload = () => {
                                    setTwelfthPreview(reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </FormControl>
                          {twelfthPreview && (
                            <a
                              href={twelfthPreview}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary underline"
                            >
                              Preview 12th Certificate
                            </a>
                          )}
                          <FormDescription>PDF, max 5MB</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Diploma Certificate (Conditional) */}
                    {requiresDiploma && (
                      <FormField
                        control={form.control}
                        name="diplomaCertificate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Diploma Certificate</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="application/pdf"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    field.onChange(file);
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                      setDiplomaPreview(reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </FormControl>
                            {diplomaPreview && (
                              <a
                                href={diplomaPreview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary underline"
                              >
                                Preview Diploma Certificate
                              </a>
                            )}
                            <FormDescription>PDF, max 5MB</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-accent text-lg"
                    disabled={form.formState.isSubmitting}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
          Ready to Join Us?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          Submit your application today and start your journey in immersive technologies.
        </p>
        <Button
          className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20"
          onClick={() => form.handleSubmit(onSubmit)()}
          disabled={form.formState.isSubmitting}
        >
          Submit Now
        </Button>
      </section>
    </div>
  );
}
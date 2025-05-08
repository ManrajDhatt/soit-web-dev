

// import Image from "next/image";
// import { Metadata } from "next";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Clock, Calendar, Award, Users, ChevronRight } from "lucide-react";
// // import { ProgramCards } from "@/components/program-cards";

// export const metadata: Metadata = {
//   title: "Programs | School of Immersive Technologies",
//   description: "Explore our cutting-edge programs in VR, AR, and immersive technologies at the School of Immersive Technologies.",
// };

// export default function ProgramsPage() {
//   return (
//     <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//             Our Programs
//           </h1>
//           <p className="mx-auto max-w-2xl text-muted-foreground">
//             Comprehensive education in immersive technologies to prepare you for the future of digital experiences
//           </p>
//         </div>

//         <Tabs defaultValue="diploma" className="mb-16">
//           <div className="flex justify-center">
//             <TabsList className="mb-8">
//               <TabsTrigger value="degree">Degree Programs</TabsTrigger>
//               <TabsTrigger value="diploma">Diploma Courses</TabsTrigger>
//               <TabsTrigger value="advanced-diploma">Advanced Diploma</TabsTrigger>
//               <TabsTrigger value="short-term">Short-Term & Specialized</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="degree">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[
//                 {
//                   title: "B.Voc. in Multimedia and Animation",
//                   description:
//                     "A 3-year undergraduate program offering multiple exit points in multimedia and animation, from diploma to full degree.",
//                   duration: "3 Years",
//                   intake: "60 Students",
//                   fees: "₹1,61,000 total",
//                   image: "https://subharti.bvocskill.com/img/courses/multimedia-animation.webp",
//                   highlights: [
//                     "Multiple exit options: Diploma, Advanced Diploma, Degree",
//                     "Hands-on training in multimedia and animation",
//                     "Industry partnership with Lingaya's Vidyapeeth",
//                     "State-of-the-art animation and VFX labs",
//                     "Industry-recognized certifications (Adobe, Autodesk)",
//                     "Located at BCM Campus, Ludhiana",
//                   ],
//                 },
//               ].map((program, index) => (
//                 <Card
//                   key={index}
//                   className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
//                 >
//                   <div className="relative h-[150px] w-full">
//                     <Image src={program.image} alt={program.title} fill className="object-cover" />
//                   </div>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-lg">{program.title}</CardTitle>
//                     <CardDescription className="text-sm">{program.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-grow pb-2">
//                     <div className="mb-3 flex items-center gap-4">
//                       <div className="flex items-center gap-1.5">
//                         <Clock className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Users className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.intake}</span>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <span className="text-xs font-medium">Fees: </span>
//                       <span className="text-xs text-muted-foreground">{program.fees}</span>
//                     </div>
//                     <div>
//                       <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
//                       <ul className="space-y-1">
//                         {program.highlights.map((highlight, hIndex) => (
//                           <li key={hIndex} className="flex items-start gap-1.5 text-xs">
//                             <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
//                             <span className="text-muted-foreground">{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="pt-2">
//                     <Button variant="default" className="w-full text-sm">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="diploma">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[
//                 {
//                   title: "Graphic Designing 2D and 3D",
//                   description: "A 1-year diploma covering comprehensive graphic design skills for 2D and 3D applications.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://rmskytech.com/wp-content/uploads/2024/08/graphic-designer-hd-image.jpg",
//                   highlights: [
//                     "2D and 3D design techniques",
//                     "Industry-standard tools (Adobe, Blender)",
//                     "Project-based learning",
//                     "Portfolio development",
//                     "Career support",
//                   ],
//                 },
//                 {
//                   title: "Graphic and Web Designing",
//                   description: "A 1-year diploma combining graphic design and web design skills for modern digital applications.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Graphic design fundamentals",
//                     "Web design and development",
//                     "Responsive design principles",
//                     "Project-based learning",
//                     "Industry certifications",
//                   ],
//                 },
//                 {
//                   title: "Motion Graphics and 2D Animation",
//                   description: "A 1-year diploma focusing on animation and motion graphics skills for media and entertainment.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "2D animation techniques",
//                     "Motion graphics design",
//                     "Industry-standard tools (After Effects, Animate)",
//                     "Portfolio development",
//                     "Hands-on projects",
//                   ],
//                 },
//                 {
//                   title: "Animation and VFX",
//                   description: "A 1-year diploma combining animation and visual effects for film, gaming, and media industries.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wUmoiOZzvdEH3UttbpYaZDOCo3y12219iA&s",
//                   highlights: [
//                     "Animation and VFX workflows",
//                     "3D modeling and compositing",
//                     "Industry-standard tools (Maya, Nuke)",
//                     "Capstone project",
//                     "Career support",
//                   ],
//                 },
//                 {
//                   title: "Game Design and Development",
//                   description: "A 1-year diploma covering the complete game creation process, from concept to deployment.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
//                   highlights: [
//                     "Game design fundamentals",
//                     "Game engine usage (Unity, Unreal)",
//                     "Level design and prototyping",
//                     "Portfolio development",
//                     "Industry exposure",
//                   ],
//                 },
//                 {
//                   title: "Build your Metaverse",
//                   description: "An 8-week intensive course on developing metaverse environments and applications.",
//                   duration: "8 Weeks",
//                   intake: "Open Enrollment",
//                   fees: "₹40,000",
//                   image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Metaverse platform development",
//                     "3D environment creation",
//                     "Integration with AR/VR",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Multimedia and Digital Marketing",
//                   description: "A 1-year diploma combining multimedia skills with digital marketing strategies.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/digital-marketing-skills.jpg&w=1200&h=630",
//                   highlights: [
//                     "Multimedia content creation",
//                     "Digital marketing strategies",
//                     "Social media management",
//                     "Project-based learning",
//                     "Industry certifications",
//                   ],
//                 },
//                 {
//                   title: "Complete Digital Marketing with AI",
//                   description: "A 1-year diploma focusing on AI-enhanced digital marketing techniques.",
//                   duration: "1 Year",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/digital-marketing-skills.jpg&w=1200&h=630",
//                   highlights: [
//                     "AI-driven marketing strategies",
//                     "SEO and SEM techniques",
//                     "Data analytics for marketing",
//                     "Hands-on campaigns",
//                     "Certification included",
//                   ],
//                 },
//               ].map((program, index) => (
//                 <Card
//                   key={index}
//                   className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
//                 >
//                   <div className="relative h-[150px] w-full">
//                     <Image src={program.image} alt={program.title} fill className="object-cover" />
//                   </div>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-lg">{program.title}</CardTitle>
//                     <CardDescription className="text-sm">{program.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-grow pb-2">
//                     <div className="mb-3 flex items-center gap-4">
//                       <div className="flex items-center gap-1.5">
//                         <Clock className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Users className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.intake}</span>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <span className="text-xs font-medium">Fees: </span>
//                       <span className="text-xs text-muted-foreground">{program.fees}</span>
//                     </div>
//                     <div>
//                       <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
//                       <ul className="space-y-1">
//                         {program.highlights.map((highlight, hIndex) => (
//                           <li key={hIndex} className="flex items-start gap-1.5 text-xs">
//                             <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
//                             <span className="text-muted-foreground">{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="pt-2">
//                     <Button variant="default" className="w-full text-sm">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="advanced-diploma">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[
//                 {
//                   title: "Advanced Animation and VFX",
//                   description: "A 2-year advanced diploma focusing on advanced techniques in animation and visual effects.",
//                   duration: "2 Years",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Advanced animation workflows",
//                     "VFX compositing and rendering",
//                     "Industry-standard tools (Houdini, Nuke)",
//                     "Portfolio development",
//                     "Industry internships",
//                   ],
//                 },
//                 {
//                   title: "Advance 3D Animation",
//                   description: "A 2-year advanced diploma specializing in 3D animation techniques for film and gaming.",
//                   duration: "2 Years",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "3D animation pipelines",
//                     "Character rigging and animation",
//                     "Motion capture techniques",
//                     "Capstone project",
//                     "Career support",
//                   ],
//                 },
//                 {
//                   title: "Advance Visual Effects",
//                   description: "A 2-year advanced diploma focusing on advanced visual effects techniques for media production.",
//                   duration: "2 Years",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Advanced VFX workflows",
//                     "Real-time rendering",
//                     "Compositing and simulation",
//                     "Portfolio development",
//                     "Industry exposure",
//                   ],
//                 },
//                 {
//                   title: "Advanced Game Design and Development",
//                   description: "A 2-year advanced diploma equipping students with specialized skills in game creation and immersive gameplay design.",
//                   duration: "2 Years",
//                   intake: "40 Students",
//                   fees: "Contact for details",
//                   image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
//                   highlights: [
//                     "End-to-end game development",
//                     "Advanced game engines (Unity, Unreal)",
//                     "Immersive UI/UX for gaming",
//                     "Portfolio development",
//                     "High-end gaming lab access",
//                   ],
//                 },
//               ].map((program, index) => (
//                 <Card
//                   key={index}
//                   className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
//                 >
//                   <div className="relative h-[150px] w-full">
//                     <Image src={program.image} alt={program.title} fill className="object-cover" />
//                   </div>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-lg">{program.title}</CardTitle>
//                     <CardDescription className="text-sm">{program.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-grow pb-2">
//                     <div className="mb-3 flex items-center gap-4">
//                       <div className="flex items-center gap-1.5">
//                         <Clock className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Users className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.intake}</span>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <span className="text-xs font-medium">Fees: </span>
//                       <span className="text-xs text-muted-foreground">{program.fees}</span>
//                     </div>
//                     <div>
//                       <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
//                       <ul className="space-y-1">
//                         {program.highlights.map((highlight, hIndex) => (
//                           <li key={hIndex} className="flex items-start gap-1.5 text-xs">
//                             <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
//                             <span className="text-muted-foreground">{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="pt-2">
//                     <Button variant="default" className="w-full text-sm">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="short-term">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[
//                 {
//                   title: "Graphic Design",
//                   description: "A 3-6 month course teaching basic design principles and tools for creating visual content.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8728130/pexels-photo-8728130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Design principles and typography",
//                     "Adobe Photoshop and Illustrator",
//                     "Project-based learning",
//                     "Portfolio creation",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "2D Animation",
//                   description: "A 3-6 month course providing a foundation in 2D animation techniques.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "2D animation fundamentals",
//                     "Storyboarding and animatics",
//                     "Adobe Animate and After Effects",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Game Design",
//                   description: "A 3-6 month course covering the fundamentals of game design and development.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/6941872/pexels-photo-6941872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Game design principles",
//                     "Prototyping and level design",
//                     "Unity and Unreal Engine basics",
//                     "Portfolio development",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "AI Garage for Professionals",
//                   description: "A 2-month course on AI applications tailored for working professionals.",
//                   duration: "2 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹25,000",
//                   image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "AI tools and applications",
//                     "Machine learning basics",
//                     "Industry case studies",
//                     "Hands-on AI projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Introduction to AR/VR",
//                   description: "A 3-6 month course introducing the basics of augmented and virtual reality development.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "AR/VR fundamentals",
//                     "Development tools (Unity, ARKit)",
//                     "Creating immersive experiences",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Digital Marketing",
//                   description: "A 3-6 month course covering digital marketing fundamentals and strategies.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8962433/pexels-photo-8962433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "SEO and SEM strategies",
//                     "Social media marketing",
//                     "Content marketing",
//                     "Analytics and reporting",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Web Development",
//                   description: "A 3-6 month course teaching the basics of web development and design.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "HTML, CSS, and JavaScript",
//                     "Responsive web design",
//                     "Frontend frameworks",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "UI/UX Design",
//                   description: "A 3-6 month course focusing on user interface and experience design principles.",
//                   duration: "3-6 Months",
//                   intake: "Open Enrollment",
//                   fees: "Contact for details",
//                   image: "https://images.pexels.com/photos/8728303/pexels-photo-8728303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "UI/UX design principles",
//                     "Wireframing and prototyping",
//                     "User research and testing",
//                     "Design tools (Figma, Adobe XD)",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Basics of Artificial Intelligence",
//                   description: "An 8-week course introducing AI fundamentals and applications.",
//                   duration: "8 Weeks",
//                   intake: "Open Enrollment",
//                   fees: "₹25,000",
//                   image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "AI concepts and algorithms",
//                     "Machine learning basics",
//                     "AI tools and frameworks",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Augmented Reality & Virtual Reality",
//                   description: "A 6-week course on AR/VR development skills for immersive applications.",
//                   duration: "6 Weeks",
//                   intake: "Open Enrollment",
//                   fees: "₹35,000",
//                   image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "AR/VR development tools",
//                     "Creating immersive experiences",
//                     "Unity and ARKit/ARCore",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "AI Animation & Digital Twin",
//                   description: "A 3-month course focusing on AI-powered animation and digital twin creation.",
//                   duration: "3 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹60,000",
//                   image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "AI integration in animation",
//                     "Digital twin modeling",
//                     "Emerging AI design tools",
//                     "Project-based delivery",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Introduction to Data Science",
//                   description: "A 4-week course introducing data science fundamentals and techniques.",
//                   duration: "4 Weeks",
//                   intake: "Open Enrollment",
//                   fees: "₹30,000",
//                   image: "https://images.pexels.com/photos/8728760/pexels-photo-8728760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Data analysis and visualization",
//                     "Python for data science",
//                     "Statistical methods",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Graphic Designing (Still, Motion & 3D)",
//                   description: "A 3-month course covering comprehensive graphic design skills.",
//                   duration: "3 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹50,000",
//                   image: "https://images.pexels.com/photos/8728130/pexels-photo-8728130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Still, motion, and 3D design",
//                     "Adobe Creative Suite",
//                     "Project-based learning",
//                     "Portfolio creation",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Visual Effects (VFX)",
//                   description: "A 4-month course on VFX creation techniques for film and media.",
//                   duration: "4 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹55,000",
//                   image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "VFX compositing and rendering",
//                     "Industry-standard tools (Nuke, Houdini)",
//                     "Motion tracking and rotoscoping",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Animation",
//                   description: "A 6-month course covering animation principles and techniques.",
//                   duration: "6 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹70,000",
//                   image: "https://images.pexels.com/photos/7915487/pexels-photo-7915487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "2D and 3D animation",
//                     "Character animation",
//                     "Storyboarding and animatics",
//                     "Portfolio development",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Game Design & Development",
//                   description: "A 6-month course on the game design and development process.",
//                   duration: "6 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹65,000",
//                   image: "https://images.pexels.com/photos/6941872/pexels-photo-6941872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Game design and mechanics",
//                     "Game engines (Unity, Unreal)",
//                     "Level design and prototyping",
//                     "Portfolio development",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Digital Marketing & Data Analytics",
//                   description: "A 3-month course on digital marketing with a focus on data analytics.",
//                   duration: "3 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹40,000",
//                   image: "https://images.pexels.com/photos/8962433/pexels-photo-8962433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "Digital marketing strategies",
//                     "Data analytics for marketing",
//                     "SEO and SEM techniques",
//                     "Hands-on campaigns",
//                     "Certification included",
//                   ],
//                 },
//                 {
//                   title: "Web Design & Development",
//                   description: "A 3-month course on web creation and development techniques.",
//                   duration: "3 Months",
//                   intake: "Open Enrollment",
//                   fees: "₹45,000",
//                   image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//                   highlights: [
//                     "HTML, CSS, and JavaScript",
//                     "Responsive web design",
//                     "Frontend frameworks",
//                     "Hands-on projects",
//                     "Certification included",
//                   ],
//                 },
//               ].map((program, index) => (
//                 <Card
//                   key={index}
//                   className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
//                 >
//                   <div className="relative h-[150px] w-full">
//                     <Image src={program.image} alt={program.title} fill className="object-cover" />
//                   </div>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-lg">{program.title}</CardTitle>
//                     <CardDescription className="text-sm">{program.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-grow pb-2">
//                     <div className="mb-3 flex items-center gap-4">
//                       <div className="flex items-center gap-1.5">
//                         <Clock className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-1.5">
//                         <Users className="h-3.5 w-3.5 text-primary" />
//                         <span className="text-xs text-muted-foreground">{program.intake}</span>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <span className="text-xs font-medium">Fees: </span>
//                       <span className="text-xs text-muted-foreground">{program.fees}</span>
//                     </div>
//                     <div>
//                       <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
//                       <ul className="space-y-1">
//                         {program.highlights.map((highlight, hIndex) => (
//                           <li key={hIndex} className="flex items-start gap-1.5 text-xs">
//                             <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
//                             <span className="text-muted-foreground">{highlight}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="pt-2">
//                     <Button variant="default" className="w-full text-sm">
//                       Apply Now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>

//         {/* Admission Process */}
//         <div className="mb-16">
//           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
//             Admission Process
//           </h2>
//           <div className="relative mx-auto max-w-3xl">
//             <div className="absolute left-6 top-9 bottom-5 w-1.5 -translate-x-1/4 bg-border" />
//             {[
//               {
//                 title: "Application Submission",
//                 description:
//                   "Complete the online application form and submit all required documents, including academic transcripts (10+2 for degree/diploma, open for short-term), statement of purpose, and portfolio (if applicable).",
//                 icon: <Calendar className="h-6 w-6 text-primary-foreground" />,
//               },
//               {
//                 title: "Entrance Examination",
//                 description:
//                   "Qualified applicants for degree and diploma programs will be invited to take a program-specific entrance examination assessing relevant knowledge and aptitude.",
//                 icon: <Award className="h-6 w-6 text-primary-foreground" />,
//               },
//               {
//                 title: "Interview",
//                 description:
//                   "Shortlisted candidates will participate in an interview with faculty members to discuss their background, goals, and fit for the program.",
//                 icon: <Users className="h-6 w-6 text-primary-foreground" />,
//               },
//               {
//                 title: "Admission Decision",
//                 description:
//                   "Final admission decisions are made based on a holistic review of the application, entrance exam performance (if applicable), and interview.",
//                 icon: <Award className="h-6 w-6 text-primary-foreground" />,
//               },
//             ].map((step, index) => (
//               <div key={index} className="relative z-10 mb-16 flex last:mb-0">
//                 <div className="flex items-center">
//                   <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
//                     {step.icon}
//                     <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card text-sm font-bold">
//                       {index + 1}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="ml-6">
//                   <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
//                   <p className="mt-2 text-muted-foreground">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Dates */}
//         <div className="mb-16">
//           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
//             Key Dates for 2025-26 Admissions
//           </h2>
//           <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8">
//             <div className="grid gap-6 md:grid-cols-2">
//               {[
//                 { event: "Applications Open", date: "November 1, 2024" },
//                 { event: "Early Application Deadline", date: "January 15, 2025" },
//                 { event: "Regular Application Deadline", date: "March 31, 2025" },
//                 { event: "Entrance Examinations", date: "April 15-30, 2025" },
//                 { event: "Interview Notifications", date: "May 10, 2025" },
//                 { event: "Interviews", date: "May 20-31, 2025" },
//                 { event: "Admission Decisions", date: "June 15, 2025" },
//                 { event: "Classes Begin", date: "August 1, 2025" },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center justify-between border-b border-border pb-4">
//                   <div className="font-medium">{item.event}</div>
//                   <div className="text-right text-primary">{item.date}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Faculty */}
//         <div className="mb-16">
//           <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
//             Meet Our Faculty
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {[
//               {
//                 name: "Dr. Rajiv Mehta",
//                 role: "Professor of Spatial Computing",
//                 image: "placeholder.jpg",
//               },
//               {
//                 name: "Dr. Sarah Williams",
//                 role: "Associate Professor of VR Design",
//                 image: "placeholder.jpg",
//               },
//               {
//                 name: "Prof. Anand Krishnan",
//                 role: "Assistant Professor of AR Applications",
//                 image: "placeholder.jpg",
//               },
//               {
//                 name: "Dr. Maya Patel",
//                 role: "Professor of Immersive Learning",
//                 image: "placeholder.jpg",
//               },
//             ].map((faculty, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-xl">
//                 <div className="relative h-[300px] w-full overflow-hidden">
//                   <Image
//                     src={faculty.image}
//                     alt={faculty.name}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
//                   <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
//                     <h3 className="text-center font-heading text-lg font-semibold">
//                       {faculty.name}
//                     </h3>
//                     <p className="text-center text-sm text-primary">{faculty.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <Button variant="outline">View All Faculty</Button>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center shadow-xl">
//           <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
//             Begin Your Journey in Immersive Technologies
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
//             Take the first step toward a career at the forefront of immersive technologies. Apply now or contact our
//             admissions team to learn more about our programs. Enjoy a 50% discount on all courses for our first batches!
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20">
//               Apply Now
//             </Button>
//             <Button variant="outline" className="text-lg">
//               Contact Admissions
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// pages/programs.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, Award, Users, ChevronRight } from "lucide-react";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Programs | School of Immersive Technologies",
  description: "Explore our cutting-edge programs in VR, AR, and immersive technologies at the School of Immersive Technologies.",
};

// Function to create a URL-friendly slug from the course title
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Programs
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive education in immersive technologies to prepare you for the future of digital experiences
          </p>
        </div>

        <Tabs defaultValue="diploma" className="mb-16">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="degree">Degree Programs</TabsTrigger>
              <TabsTrigger value="diploma">Diploma Courses</TabsTrigger>
              <TabsTrigger value="advanced-diploma">Advanced Diploma</TabsTrigger>
              <TabsTrigger value="short-term">Short-Term & Specialized</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="degree">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "degree")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/programs/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="diploma">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "diploma")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/programs/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced-diploma">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "advanced-diploma")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/programs/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="short-term">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.category === "short-term")
                .map((program, index) => (
                  <Card
                    key={index}
                    className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-md mx-auto"
                  >
                    <div className="relative h-[150px] w-full">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pb-2">
                      <div className="mb-3 flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{program.intake}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="text-xs font-medium">Fees: </span>
                        <span className="text-xs text-muted-foreground">{program.fees}</span>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-medium">Program Highlights:</h4>
                        <ul className="space-y-1">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-1.5 text-xs">
                              <ChevronRight className="h-3 w-3 text-primary mt-0.5" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Link href={`/programs/${program.slug}`}>
                        <Button variant="default" className="w-full text-sm">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Admission Process
          </h2>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-6 top-9 bottom-5 w-1.5 -translate-x-1/4 bg-border" />
            {[
              {
                title: "Application Submission",
                description:
                  "Complete the online application form and submit all required documents, including academic transcripts (10+2 for degree/diploma, open for short-term), statement of purpose, and portfolio (if applicable).",
                icon: <Calendar className="h-6 w-6 text-primary-foreground" />,
              },
              {
                title: "Entrance Examination",
                description:
                  "Qualified applicants for degree and diploma programs will be invited to take a program-specific entrance examination assessing relevant knowledge and aptitude.",
                icon: <Award className="h-6 w-6 text-primary-foreground" />,
              },
              {
                title: "Interview",
                description:
                  "Shortlisted candidates will participate in an interview with faculty members to discuss their background, goals, and fit for the program.",
                icon: <Users className="h-6 w-6 text-primary-foreground" />,
              },
              {
                title: "Admission Decision",
                description:
                  "Final admission decisions are made based on a holistic review of the application, entrance exam performance (if applicable), and interview.",
                icon: <Award className="h-6 w-6 text-primary-foreground" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative z-10 mb-16 flex last:mb-0">
                <div className="flex items-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    {step.icon}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-card text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Dates */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Key Dates for 2025-26 Admissions
          </h2>
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { event: "Applications Open", date: "November 1, 2024" },
                { event: "Early Application Deadline", date: "January 15, 2025" },
                { event: "Regular Application Deadline", date: "March 31, 2025" },
                { event: "Entrance Examinations", date: "April 15-30, 2025" },
                { event: "Interview Notifications", date: "May 10, 2025" },
                { event: "Interviews", date: "May 20-31, 2025" },
                { event: "Admission Decisions", date: "June 15, 2025" },
                { event: "Classes Begin", date: "August 1, 2025" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-border pb-4">
                  <div className="font-medium">{item.event}</div>
                  <div className="text-right text-primary">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold tracking-tight">
            Meet Our Faculty
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Dr. Rajiv Mehta",
                role: "Professor of Spatial Computing",
                image: "placeholder.jpg",
              },
              {
                name: "Dr. Sarah Williams",
                role: "Associate Professor of VR Design",
                image: "placeholder.jpg",
              },
              {
                name: "Prof. Anand Krishnan",
                role: "Assistant Professor of AR Applications",
                image: "placeholder.jpg",
              },
              {
                name: "Dr. Maya Patel",
                role: "Professor of Immersive Learning",
                image: "placeholder.jpg",
              },
            ].map((faculty, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                    <h3 className="text-center font-heading text-lg font-semibold">
                      {faculty.name}
                    </h3>
                    <p className="text-center text-sm text-primary">{faculty.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faculty">
              <Button variant="outline">View All Faculty</Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center shadow-xl">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight">
            Begin Your Journey in Immersive Technologies
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Take the first step toward a career at the forefront of immersive technologies. Apply now or contact our
            admissions team to learn more about our programs. Enjoy a 50% discount on all courses for our first batches!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Button className="bg-gradient-to-r from-primary to-accent text-lg hover:shadow-lg hover:shadow-accent/20">
              Apply Now
            </Button> */}
            <Link href="/admissions">
  <Button variant="outline" className="text-lg">
    Contact Admissions
  </Button>
</Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
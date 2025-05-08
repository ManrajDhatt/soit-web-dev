// // // lib/courses.ts
// // export interface Course {
// //     slug: string;
// //     title: string;
// //     description: string;
// //     duration: string;
// //     intake: string;
// //     fees: string;
// //     image: string;
// //     highlights: string[];
// //     category: "degree" | "diploma" | "advanced-diploma" | "short-term";
// //   }
  
// //   export const courses: Course[] = [
// //     {
// //       slug: "b-voc-in-multimedia-and-animation",
// //       title: "B.Voc. in Multimedia and Animation",
// //       description:
// //         "A 3-year undergraduate program offering multiple exit points in multimedia and animation, from diploma to full degree.",
// //       duration: "3 Years",
// //       intake: "60 Students",
// //       fees: "₹1,61,000 total",
// //       image: "https://subharti.bvocskill.com/img/courses/multimedia-animation.webp",
// //       highlights: [
// //         "Multiple exit options: Diploma, Advanced Diploma, Degree",
// //         "Hands-on training in multimedia and animation",
// //         "Industry partnership with Lingaya's Vidyapeeth",
// //         "State-of-the-art animation and VFX labs",
// //         "Industry-recognized certifications (Adobe, Autodesk)",
// //         "Located at BCM Campus, Ludhiana",
// //       ],
// //       category: "degree",
// //     },
// //     {
// //       slug: "graphic-designing-2d-and-3d",
// //       title: "Graphic Designing 2D and 3D",
// //       description: "A 1-year diploma covering comprehensive graphic design skills for 2D and 3D applications.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://rmskytech.com/wp-content/uploads/2024/08/graphic-designer-hd-image.jpg",
// //       highlights: [
// //         "2D and 3D design techniques",
// //         "Industry-standard tools (Adobe, Blender)",
// //         "Project-based learning",
// //         "Portfolio development",
// //         "Career support",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "graphic-and-web-designing",
// //       title: "Graphic and Web Designing",
// //       description: "A 1-year diploma combining graphic design and web design skills for modern digital applications.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Graphic design fundamentals",
// //         "Web design and development",
// //         "Responsive design principles",
// //         "Project-based learning",
// //         "Industry certifications",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "motion-graphics-and-2d-animation",
// //       title: "Motion Graphics and 2D Animation",
// //       description: "A 1-year diploma focusing on animation and motion graphics skills for media and entertainment.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "2D animation techniques",
// //         "Motion graphics design",
// //         "Industry-standard tools (After Effects, Animate)",
// //         "Portfolio development",
// //         "Hands-on projects",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "animation-and-vfx",
// //       title: "Animation and VFX",
// //       description: "A 1-year diploma combining animation and visual effects for film, gaming, and media industries.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wUmoiOZzvdEH3UttbpYaZDOCo3y12219iA&s",
// //       highlights: [
// //         "Animation and VFX workflows",
// //         "3D modeling and compositing",
// //         "Industry-standard tools (Maya, Nuke)",
// //         "Capstone project",
// //         "Career support",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "game-design-and-development",
// //       title: "Game Design and Development",
// //       description: "A 1-year diploma covering the complete game creation process, from concept to deployment.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
// //       highlights: [
// //         "Game design fundamentals",
// //         "Game engine usage (Unity, Unreal)",
// //         "Level design and prototyping",
// //         "Portfolio development",
// //         "Industry exposure",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "build-your-metaverse",
// //       title: "Build your Metaverse",
// //       description: "An 8-week intensive course on developing metaverse environments and applications.",
// //       duration: "8 Weeks",
// //       intake: "Open Enrollment",
// //       fees: "₹40,000",
// //       image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Metaverse platform development",
// //         "3D environment creation",
// //         "Integration with AR/VR",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "multimedia-and-digital-marketing",
// //       title: "Multimedia and Digital Marketing",
// //       description: "A 1-year diploma combining multimedia skills with digital marketing strategies.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/digital-marketing-skills.jpg&w=1200&h=630",
// //       highlights: [
// //         "Multimedia content creation",
// //         "Digital marketing strategies",
// //         "Social media management",
// //         "Project-based learning",
// //         "Industry certifications",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "complete-digital-marketing-with-ai",
// //       title: "Complete Digital Marketing with AI",
// //       description: "A 1-year diploma focusing on AI-enhanced digital marketing techniques.",
// //       duration: "1 Year",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/digital-marketing-skills.jpg&w=1200&h=630",
// //       highlights: [
// //         "AI-driven marketing strategies",
// //         "SEO and SEM techniques",
// //         "Data analytics for marketing",
// //         "Hands-on campaigns",
// //         "Certification included",
// //       ],
// //       category: "diploma",
// //     },
// //     {
// //       slug: "advanced-animation-and-vfx",
// //       title: "Advanced Animation and VFX",
// //       description: "A 2-year advanced diploma focusing on advanced techniques in animation and visual effects.",
// //       duration: "2 Years",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Advanced animation workflows",
// //         "VFX compositing and rendering",
// //         "Industry-standard tools (Houdini, Nuke)",
// //         "Portfolio development",
// //         "Industry internships",
// //       ],
// //       category: "advanced-diploma",
// //     },
// //     {
// //       slug: "advance-3d-animation",
// //       title: "Advance 3D Animation",
// //       description: "A 2-year advanced diploma specializing in 3D animation techniques for film and gaming.",
// //       duration: "2 Years",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "3D animation pipelines",
// //         "Character rigging and animation",
// //         "Motion capture techniques",
// //         "Capstone project",
// //         "Career support",
// //       ],
// //       category: "advanced-diploma",
// //     },
// //     {
// //       slug: "advance-visual-effects",
// //       title: "Advance Visual Effects",
// //       description: "A 2-year advanced diploma focusing on advanced visual effects techniques for media production.",
// //       duration: "2 Years",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Advanced VFX workflows",
// //         "Real-time rendering",
// //         "Compositing and simulation",
// //         "Portfolio development",
// //         "Industry exposure",
// //       ],
// //       category: "advanced-diploma",
// //     },
// //     {
// //       slug: "advanced-game-design-and-development",
// //       title: "Advanced Game Design and Development",
// //       description: "A 2-year advanced diploma equipping students with specialized skills in game creation and immersive gameplay design.",
// //       duration: "2 Years",
// //       intake: "40 Students",
// //       fees: "Contact for details",
// //       image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
// //       highlights: [
// //         "End-to-end game development",
// //         "Advanced game engines (Unity, Unreal)",
// //         "Immersive UI/UX for gaming",
// //         "Portfolio development",
// //         "High-end gaming lab access",
// //       ],
// //       category: "advanced-diploma",
// //     },
// //     {
// //       slug: "graphic-design",
// //       title: "Graphic Design",
// //       description: "A 3-6 month course teaching basic design principles and tools for creating visual content.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8728130/pexels-photo-8728130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Design principles and typography",
// //         "Adobe Photoshop and Illustrator",
// //         "Project-based learning",
// //         "Portfolio creation",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "2d-animation",
// //       title: "2D Animation",
// //       description: "A 3-6 month course providing a foundation in 2D animation techniques.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "2D animation fundamentals",
// //         "Storyboarding and animatics",
// //         "Adobe Animate and After Effects",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "game-design",
// //       title: "Game Design",
// //       description: "A 3-6 month course covering the fundamentals of game design and development.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/6941872/pexels-photo-6941872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Game design principles",
// //         "Prototyping and level design",
// //         "Unity and Unreal Engine basics",
// //         "Portfolio development",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "ai-garage-for-professionals",
// //       title: "AI Garage for Professionals",
// //       description: "A 2-month course on AI applications tailored for working professionals.",
// //       duration: "2 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹25,000",
// //       image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "AI tools and applications",
// //         "Machine learning basics",
// //         "Industry case studies",
// //         "Hands-on AI projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "introduction-to-ar-vr",
// //       title: "Introduction to AR/VR",
// //       description: "A 3-6 month course introducing the basics of augmented and virtual reality development.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "AR/VR fundamentals",
// //         "Development tools (Unity, ARKit)",
// //         "Creating immersive experiences",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "digital-marketing",
// //       title: "Digital Marketing",
// //       description: "A 3-6 month course covering digital marketing fundamentals and strategies.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8962433/pexels-photo-8962433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "SEO and SEM strategies",
// //         "Social media marketing",
// //         "Content marketing",
// //         "Analytics and reporting",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "web-development",
// //       title: "Web Development",
// //       description: "A 3-6 month course teaching the basics of web development and design.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "HTML, CSS, and JavaScript",
// //         "Responsive web design",
// //         "Frontend frameworks",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "ui-ux-design",
// //       title: "UI/UX Design",
// //       description: "A 3-6 month course focusing on user interface and experience design principles.",
// //       duration: "3-6 Months",
// //       intake: "Open Enrollment",
// //       fees: "Contact for details",
// //       image: "https://images.pexels.com/photos/8728303/pexels-photo-8728303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "UI/UX design principles",
// //         "Wireframing and prototyping",
// //         "User research and testing",
// //         "Design tools (Figma, Adobe XD)",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "basics-of-artificial-intelligence",
// //       title: "Basics of Artificial Intelligence",
// //       description: "An 8-week course introducing AI fundamentals and applications.",
// //       duration: "8 Weeks",
// //       intake: "Open Enrollment",
// //       fees: "₹25,000",
// //       image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "AI concepts and algorithms",
// //         "Machine learning basics",
// //         "AI tools and frameworks",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "augmented-reality-and-virtual-reality",
// //       title: "Augmented Reality & Virtual Reality",
// //       description: "A 6-week course on AR/VR development skills for immersive applications.",
// //       duration: "6 Weeks",
// //       intake: "Open Enrollment",
// //       fees: "₹35,000",
// //       image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "AR/VR development tools",
// //         "Creating immersive experiences",
// //         "Unity and ARKit/ARCore",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "ai-animation-and-digital-twin",
// //       title: "AI Animation & Digital Twin",
// //       description: "A 3-month course focusing on AI-powered animation and digital twin creation.",
// //       duration: "3 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹60,000",
// //       image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "AI integration in animation",
// //         "Digital twin modeling",
// //         "Emerging AI design tools",
// //         "Project-based delivery",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "introduction-to-data-science",
// //       title: "Introduction to Data Science",
// //       description: "A 4-week course introducing data science fundamentals and techniques.",
// //       duration: "4 Weeks",
// //       intake: "Open Enrollment",
// //       fees: "₹30,000",
// //       image: "https://images.pexels.com/photos/8728760/pexels-photo-8728760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Data analysis and visualization",
// //         "Python for data science",
// //         "Statistical methods",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "graphic-designing-still-motion-and-3d",
// //       title: "Graphic Designing (Still, Motion & 3D)",
// //       description: "A 3-month course covering comprehensive graphic design skills.",
// //       duration: "3 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹50,000",
// //       image: "https://images.pexels.com/photos/8728130/pexels-photo-8728130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Still, motion, and 3D design",
// //         "Adobe Creative Suite",
// //         "Project-based learning",
// //         "Portfolio creation",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "visual-effects-vfx",
// //       title: "Visual Effects (VFX)",
// //       description: "A 4-month course on VFX creation techniques for film and media.",
// //       duration: "4 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹55,000",
// //       image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "VFX compositing and rendering",
// //         "Industry-standard tools (Nuke, Houdini)",
// //         "Motion tracking and rotoscoping",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "animation",
// //       title: "Animation",
// //       description: "A 6-month course covering animation principles and techniques.",
// //       duration: "6 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹70,000",
// //       image: "https://images.pexels.com/photos/7915487/pexels-photo-7915487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "2D and 3D animation",
// //         "Character animation",
// //         "Storyboarding and animatics",
// //         "Portfolio development",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "game-design-and-development-short-term",
// //       title: "Game Design & Development",
// //       description: "A 6-month course on the game design and development process.",
// //       duration: "6 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹65,000",
// //       image: "https://images.pexels.com/photos/6941872/pexels-photo-6941872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Game design and mechanics",
// //         "Game engines (Unity, Unreal)",
// //         "Level design and prototyping",
// //         "Portfolio development",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "digital-marketing-and-data-analytics",
// //       title: "Digital Marketing & Data Analytics",
// //       description: "A 3-month course on digital marketing with a focus on data analytics.",
// //       duration: "3 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹40,000",
// //       image: "https://images.pexels.com/photos/8962433/pexels-photo-8962433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "Digital marketing strategies",
// //         "Data analytics for marketing",
// //         "SEO and SEM techniques",
// //         "Hands-on campaigns",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //     {
// //       slug: "web-design-and-development",
// //       title: "Web Design & Development",
// //       description: "A 3-month course on web creation and development techniques.",
// //       duration: "3 Months",
// //       intake: "Open Enrollment",
// //       fees: "₹45,000",
// //       image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //       highlights: [
// //         "HTML, CSS, and JavaScript",
// //         "Responsive web design",
// //         "Frontend frameworks",
// //         "Hands-on projects",
// //         "Certification included",
// //       ],
// //       category: "short-term",
// //     },
// //   ];


// // lib/courses.ts
// export interface Course {
//     slug: string;
//     title: string;
//     description: string;
//     duration: string;
//     intake: string;
//     fees: string;
//     image: string;
//     highlights: string[];
//     category: "degree" | "diploma" | "advanced-diploma" | "short-term";
//     curriculum: { module: string; title: string; duration: string }[];
//     faculty: { name: string; role: string; image: string }[];
//     testimonials: { quote: string; author: string }[];
//     futureScope: string;
//     alumniSupport: string;
//     industryInternships: string;
//   }
  
//   export const courses: Course[] = [
//     // Degree (1 course)
//     {
//       slug: "b-voc-in-multimedia-and-animation",
//       title: "B.Voc. in Multimedia and Animation",
//       description:
//         "A comprehensive degree program covering multimedia, animation, and VFX, designed to build industry-ready professionals.",
//       duration: "3 Years",
//       intake: "July",
//       fees: "₹1,61,000 (Total)",
//       image: "https://subharti.bvocskill.com/img/courses/multimedia-animation.webp",
//       highlights: [
//         "Industry-aligned curriculum",
//         "Hands-on training with Maya and Blender",
//         "Real-world project experience",
//         "Career placement support",
//       ],
//       category: "degree",
//       curriculum: [
//         { module: "Semester 1", title: "Fundamentals of Animation", duration: "16 weeks" },
//         { module: "Semester 2", title: "3D Modeling and Texturing", duration: "16 weeks" },
//         { module: "Semester 3", title: "VFX and Compositing", duration: "16 weeks" },
//         { module: "Semester 4", title: "Game Design Basics", duration: "16 weeks" },
//         { module: "Semester 5", title: "Advanced Animation Techniques", duration: "16 weeks" },
//         { module: "Semester 6", title: "Capstone Project and Portfolio", duration: "16 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Dr. Anita Sharma",
//           role: "Program Director",
//           image: "/images/faculty/anita-sharma.jpg",
//         },
//         {
//           name: "Mr. Rajesh Kumar",
//           role: "Animation Expert",
//           image: "/images/faculty/rajesh-kumar.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "This program gave me the skills to land a job at a top animation studio!",
//           author: "Priya M., Alumna",
//         },
//         {
//           quote: "The faculty's guidance and industry projects were game-changers.",
//           author: "Arjun S., Alumnus",
//         },
//       ],
//       futureScope:
//         "Graduates can pursue roles like 3D Animator, VFX Artist, Game Designer, or Multimedia Specialist in film, gaming, and advertising industries. The demand for skilled animators is growing with OTT platforms and VR/AR technologies.",
//       alumniSupport:
//         "Our alumni network offers mentorship, job referrals, and exclusive workshops. Graduates can join our annual alumni meet to connect with industry leaders.",
//       industryInternships:
//         "6-month internships with partners like Red Chillies Entertainment and Technicolor, working on live projects in animation and VFX.",
//     },
  
//     // Diploma (8 courses)
//     {
//       slug: "diploma-in-visual-effects",
//       title: "Diploma in Visual Effects",
//       description: "Master the art of creating stunning visual effects for films and media.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹80,000",
//       image: "/images/courses/diploma-vfx.jpg",
//       highlights: [
//         "Training in Nuke and After Effects",
//         "Industry-led workshops",
//         "Portfolio development",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "Introduction to VFX", duration: "12 weeks" },
//         { module: "Module 2", title: "Compositing Techniques", duration: "12 weeks" },
//         { module: "Module 3", title: "Final VFX Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Ms. Neha Gupta",
//           role: "VFX Supervisor",
//           image: "/images/faculty/neha-gupta.jpg",
//         },
//         {
//           name: "Mr. Sanjay Patel",
//           role: "Compositing Trainer",
//           image: "/images/faculty/sanjay-patel.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "The VFX diploma opened doors to the film industry for me.",
//           author: "Rohan K., Alumnus",
//         },
//         {
//           quote: "Hands-on training made all the difference.",
//           author: "Meera V., Alumna",
//         },
//       ],
//       futureScope:
//         "Opportunities include VFX Artist, Compositor, and Motion Graphics Designer in film, TV, and advertising. The global VFX market is expanding rapidly.",
//       alumniSupport:
//         "Alumni receive career guidance and access to VFX community events, connecting them with studios worldwide.",
//       industryInternships:
//         "3-month internships with VFX studios like MPC and Double Negative, focusing on real film projects.",
//     },
//     {
//       slug: "diploma-in-3d-animation",
//       title: "Diploma in 3D Animation",
//       description: "Learn advanced 3D animation techniques for films and games.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹85,000",
//       image: "/images/courses/3d-animation.jpg",
//       highlights: [
//         "Master Maya and ZBrush",
//         "Create animated short films",
//         "Industry mentorship",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "3D Animation Basics", duration: "12 weeks" },
//         { module: "Module 2", title: "Character Rigging", duration: "12 weeks" },
//         { module: "Module 3", title: "Animated Short Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Mr. Vikram Rao",
//           role: "Animation Lead",
//           image: "/images/faculty/vikram-rao.jpg",
//         },
//         {
//           name: "Ms. Shalini Nair",
//           role: "Rigging Specialist",
//           image: "/images/faculty/shalini-nair.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "I animated my first character thanks to this course!",
//           author: "Amit P., Alumnus",
//         },
//         {
//           quote: "The faculty's expertise was inspiring.",
//           author: "Sneha M., Alumna",
//         },
//       ],
//       futureScope:
//         "Careers as 3D Animator or Character Animator in animation studios and gaming companies, with growing demand in VR and AR.",
//       alumniSupport:
//         "Alumni can attend animation workshops and connect with studios for job opportunities.",
//       industryInternships:
//         "3-month internships with animation studios, working on character animation for films or games.",
//     },
//     {
//       slug: "diploma-in-game-design",
//       title: "Diploma in Game Design",
//       description: "Design engaging games with a focus on storytelling and mechanics.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹90,000",
//       image: "/images/courses/game-design.jpg",
//       highlights: [
//         "Learn Unity and Unreal Engine",
//         "Develop game prototypes",
//         "Collaborate with developers",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "Game Design Principles", duration: "12 weeks" },
//         { module: "Module 2", title: "Level Design", duration: "12 weeks" },
//         { module: "Module 3", title: "Game Prototype Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Mr. Arjun Desai",
//           role: "Game Designer",
//           image: "/images/faculty/arjun-desai.jpg",
//         },
//         {
//           name: "Ms. Priya Sharma",
//           role: "Level Design Instructor",
//           image: "/images/faculty/priya-sharma.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "I designed my first game level in this course!",
//           author: "Karan V., Alumnus",
//         },
//         {
//           quote: "The practical projects were fantastic.",
//           author: "Anjali R., Alumna",
//         },
//       ],
//       futureScope:
//         "Roles include Game Designer, Level Designer, and Narrative Designer in the booming gaming industry.",
//       alumniSupport:
//         "Alumni join our game design community for networking and career support.",
//       industryInternships:
//         "3-month internships with game studios, designing levels or mechanics for indie or AAA titles.",
//     },
//     {
//       slug: "diploma-in-graphic-design",
//       title: "Diploma in Graphic Design",
//       description: "Create visually compelling designs for print and digital media.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹75,000",
//       image: "/images/courses/graphic-design.jpg",
//       highlights: [
//         "Master Adobe Photoshop and Illustrator",
//         "Design branding materials",
//         "Portfolio development",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "Graphic Design Fundamentals", duration: "12 weeks" },
//         { module: "Module 2", title: "Branding and Typography", duration: "12 weeks" },
//         { module: "Module 3", title: "Portfolio Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Ms. Rhea Kapoor",
//           role: "Graphic Design Lead",
//           image: "/images/faculty/rhea-kapoor.jpg",
//         },
//         {
//           name: "Mr. Sameer Khan",
//           role: "Branding Expert",
//           image: "/images/faculty/sameer-khan.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "This course helped me launch my freelance design career.",
//           author: "Nikhil S., Alumnus",
//         },
//         {
//           quote: "The branding projects were a highlight.",
//           author: "Tara K., Alumna",
//         },
//       ],
//       futureScope:
//         "Careers as Graphic Designer, Brand Designer, or UI Designer in advertising, publishing, and digital media.",
//       alumniSupport:
//         "Alumni receive freelance project opportunities and design community access.",
//       industryInternships:
//         "3-month internships with design agencies, creating branding or marketing materials.",
//     },
//     {
//       slug: "diploma-in-motion-graphics",
//       title: "Diploma in Motion Graphics",
//       description: "Craft dynamic motion graphics for TV, film, and online platforms.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹82,000",
//       image: "/images/courses/motion-graphics.jpg",
//       highlights: [
//         "Training in After Effects and Cinema 4D",
//         "Create title sequences",
//         "Industry feedback",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "Motion Graphics Basics", duration: "12 weeks" },
//         { module: "Module 2", title: "Animation and Effects", duration: "12 weeks" },
//         { module: "Module 3", title: "Motion Graphics Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Mr. Rohan Mehta",
//           role: "Motion Graphics Expert",
//           image: "/images/faculty/rohan-mehta.jpg",
//         },
//         {
//           name: "Ms. Ananya Bose",
//           role: "Animation Instructor",
//           image: "/images/faculty/ananya-bose.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "I created a title sequence for a short film!",
//           author: "Vikram J., Alumnus",
//         },
//         {
//           quote: "The faculty's feedback was invaluable.",
//           author: "Shreya P., Alumna",
//         },
//       ],
//       futureScope:
//         "Roles include Motion Graphics Designer or Video Editor in media, advertising, and entertainment industries.",
//       alumniSupport:
//         "Alumni can attend motion graphics workshops and network with media professionals.",
//       industryInternships:
//         "3-month internships with studios, creating motion graphics for TV or online content.",
//     },
//     {
//       slug: "diploma-in-ar-vr-development",
//       title: "Diploma in AR/VR Development",
//       description: "Build immersive AR and VR experiences using Unity and Unreal Engine.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹95,000",
//       image: "/images/courses/ar-vr-dev.jpg",
//       highlights: [
//         "Develop AR/VR applications",
//         "Work with Oculus and HoloLens",
//         "Industry projects",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "AR/VR Fundamentals", duration: "12 weeks" },
//         { module: "Module 2", title: "Unity for AR/VR", duration: "12 weeks" },
//         { module: "Module 3", title: "VR Application Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Mr. Siddharth Roy",
//           role: "AR/VR Developer",
//           image: "/images/faculty/siddharth-roy.jpg",
//         },
//         {
//           name: "Ms. Kavita Singh",
//           role: "Unity Instructor",
//           image: "/images/faculty/kavita-singh.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "I built my first VR game in this course!",
//           author: "Rahul T., Alumnus",
//         },
//         {
//           quote: "The AR/VR projects were cutting-edge.",
//           author: "Pooja N., Alumna",
//         },
//       ],
//       futureScope:
//         "Careers as AR/VR Developer or Immersive Experience Designer in gaming, education, and healthcare.",
//       alumniSupport:
//         "Alumni join AR/VR meetups and receive project collaboration opportunities.",
//       industryInternships:
//         "3-month internships with AR/VR startups, developing immersive applications.",
//     },
//     {
//       slug: "diploma-in-video-editing",
//       title: "Diploma in Video Editing",
//       description: "Learn professional video editing for films, ads, and online content.",
//       duration: "1 Year",
//       intake: "January, July",
//       fees: "₹78,000",
//       image: "/images/courses/video-editing.jpg",
//       highlights: [
//         "Master Premiere Pro and DaVinci Resolve",
//         "Edit short films",
//         "Industry mentorship",
//       ],
//       category: "diploma",
//       curriculum: [
//         { module: "Module 1", title: "Video Editing Basics", duration: "12 weeks" },
//         { module: "Module 2", title: "Color Grading", duration: "12 weeks" },
//         { module: "Module 3", title: "Short Film Editing Project", duration: "12 weeks" },
//       ],
//       faculty: [
//         {
//           name: "Mr. Aditya Verma",
//           role: "Video Editing Lead",
//           image: "/images/faculty/aditya-verma.jpg",
//         },
//         {
//           name: "Ms. Nisha Patel",
//           role: "Color Grading Expert",
//           image: "/images/faculty/nisha-patel.jpg",
//         },
//       ],
//       testimonials: [
//         {
//           quote: "Editing a short film was a dream come true.",
//           author: "Suresh K., Alumnus",
//         },
//         {
//           quote: "The course was practical and industry-focused.",
//           author: "Riya S., Alumna",
//         },
//       ],
//       futureScope:
//         "Roles include Video Editor, Post-Production Artist, or Colorist in film, TV, and digital media.",
//       alumniSupport:
//         "Alumni receive editing project opportunities and access to post-production networks.",
//       industryInternships:
//         "3-month internships with production houses, editing content for films or ads.",
//     },
// lib/courses.ts
export interface Course {
    slug: string;
    title: string;
    description: string;
    duration: string;
    intake: string;
    fees: string;
    image: string;
    highlights: string[];
    category: "degree" | "diploma" | "advanced-diploma" | "short-term";
    curriculum: { module: string; title: string; duration: string }[];
    faculty: { name: string; role: string; image: string }[];
    testimonials: { quote: string; author: string }[];
    futureScope: string;
    alumniSupport: string;
    industryInternships: string;
  }
  
  export const courses: Course[] = [
    // Degree (1 course)
    {
      slug: "b-voc-in-multimedia-and-animation",
      title: "B.Voc. in Multimedia and Animation",
      description:
        "A comprehensive degree program covering multimedia, animation, and VFX, designed to build industry-ready professionals.",
      duration: "3 Years",
      intake: "July",
      fees: "₹1,61,000 (Total)",
      image: "https://subharti.bvocskill.com/img/courses/multimedia-animation.webp",
      highlights: [
        "Industry-aligned curriculum",
        "Hands-on training with Maya and Blender",
        "Real-world project experience",
        "Career placement support",
      ],
      category: "degree",
      curriculum: [
        { module: "Semester 1", title: "Fundamentals of Animation", duration: "16 weeks" },
        { module: "Semester 2", title: "3D Modeling and Texturing", duration: "16 weeks" },
        { module: "Semester 3", title: "VFX and Compositing", duration: "16 weeks" },
        { module: "Semester 4", title: "Game Design Basics", duration: "16 weeks" },
        { module: "Semester 5", title: "Advanced Animation Techniques", duration: "16 weeks" },
        { module: "Semester 6", title: "Capstone Project and Portfolio", duration: "16 weeks" },
      ],
      faculty: [
        {
          name: "Dr. Anita Sharma",
          role: "Program Director",
          image: "/images/faculty/anita-sharma.jpg",
        },
        {
          name: "Mr. Rajesh Kumar",
          role: "Animation Expert",
          image: "/images/faculty/rajesh-kumar.jpg",
        },
      ],
      testimonials: [
        {
          quote: "This program gave me the skills to land a job at a top animation studio!",
          author: "Priya M., Alumna",
        },
        {
          quote: "The faculty's guidance and industry projects were game-changers.",
          author: "Arjun S., Alumnus",
        },
      ],
      futureScope:
        "Graduates can pursue roles like 3D Animator, VFX Artist, Game Designer, or Multimedia Specialist in film, gaming, and advertising industries. The demand for skilled animators is growing with OTT platforms and VR/AR technologies.",
      alumniSupport:
        "Our alumni network offers mentorship, job referrals, and exclusive workshops. Graduates can join our annual alumni meet to connect with industry leaders.",
      industryInternships:
        "6-month internships with partners like Red Chillies Entertainment and Technicolor, working on live projects in animation and VFX.",
    },
  
    // Diploma (8 courses)
    {
      slug: "diploma-in-visual-effects",
      title: "Diploma in Visual Effects",
      description: "Master the art of creating stunning visual effects for films and media.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹80,000",
      image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Training in Nuke and After Effects",
        "Industry-led workshops",
        "Portfolio development",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "Introduction to VFX", duration: "12 weeks" },
        { module: "Module 2", title: "Compositing Techniques", duration: "12 weeks" },
        { module: "Module 3", title: "Final VFX Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Neha Gupta",
          role: "VFX Supervisor",
          image: "/images/faculty/neha-gupta.jpg",
        },
        {
          name: "Mr. Sanjay Patel",
          role: "Compositing Trainer",
          image: "/images/faculty/sanjay-patel.jpg",
        },
      ],
      testimonials: [
        {
          quote: "The VFX diploma opened doors to the film industry for me.",
          author: "Rohan K., Alumnus",
        },
        {
          quote: "Hands-on training made all the difference.",
          author: "Meera V., Alumna",
        },
      ],
      futureScope:
        "Opportunities include VFX Artist, Compositor, and Motion Graphics Designer in film, TV, and advertising. The global VFX market is expanding rapidly.",
      alumniSupport:
        "Alumni receive career guidance and access to VFX community events, connecting them with studios worldwide.",
      industryInternships:
        "3-month internships with VFX studios like MPC and Double Negative, focusing on real film projects.",
    },
    {
      slug: "diploma-in-3d-animation",
      title: "Diploma in 3D Animation",
      description: "Learn advanced 3D animation techniques for films and games.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹85,000",
      image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Master Maya and ZBrush",
        "Create animated short films",
        "Industry mentorship",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "3D Animation Basics", duration: "12 weeks" },
        { module: "Module 2", title: "Character Rigging", duration: "12 weeks" },
        { module: "Module 3", title: "Animated Short Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Vikram Rao",
          role: "Animation Lead",
          image: "/images/faculty/vikram-rao.jpg",
        },
        {
          name: "Ms. Shalini Nair",
          role: "Rigging Specialist",
          image: "/images/faculty/shalini-nair.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I animated my first character thanks to this course!",
          author: "Amit P., Alumnus",
        },
        {
          quote: "The faculty's expertise was inspiring.",
          author: "Sneha M., Alumna",
        },
      ],
      futureScope:
        "Careers as 3D Animator or Character Animator in animation studios and gaming companies, with growing demand in VR and AR.",
      alumniSupport:
        "Alumni can attend animation workshops and connect with studios for job opportunities.",
      industryInternships:
        "3-month internships with animation studios, working on character animation for films or games.",
    },
    {
      slug: "diploma-in-game-design",
      title: "Diploma in Game Design",
      description: "Design engaging games with a focus on storytelling and mechanics.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹90,000",
      image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
      highlights: [
        "Learn Unity and Unreal Engine",
        "Develop game prototypes",
        "Collaborate with developers",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "Game Design Principles", duration: "12 weeks" },
        { module: "Module 2", title: "Level Design", duration: "12 weeks" },
        { module: "Module 3", title: "Game Prototype Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Arjun Desai",
          role: "Game Designer",
          image: "/images/faculty/arjun-desai.jpg",
        },
        {
          name: "Ms. Priya Sharma",
          role: "Level Design Instructor",
          image: "/images/faculty/priya-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed my first game level in this course!",
          author: "Karan V., Alumnus",
        },
        {
          quote: "The practical projects were fantastic.",
          author: "Anjali R., Alumna",
        },
      ],
      futureScope:
        "Roles include Game Designer, Level Designer, and Narrative Designer in the booming gaming industry.",
      alumniSupport:
        "Alumni join our game design community for networking and career support.",
      industryInternships:
        "3-month internships with game studios, designing levels or mechanics for indie or AAA titles.",
    },
    {
      slug: "diploma-in-graphic-design",
      title: "Diploma in Graphic Design",
      description: "Create visually compelling designs for print and digital media.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹75,000",
      image: "https://rmskytech.com/wp-content/uploads/2024/08/graphic-designer-hd-image.jpg",
      highlights: [
        "Master Adobe Photoshop and Illustrator",
        "Design branding materials",
        "Portfolio development",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "Graphic Design Fundamentals", duration: "12 weeks" },
        { module: "Module 2", title: "Branding and Typography", duration: "12 weeks" },
        { module: "Module 3", title: "Portfolio Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Rhea Kapoor",
          role: "Graphic Design Lead",
          image: "/images/faculty/rhea-kapoor.jpg",
        },
        {
          name: "Mr. Sameer Khan",
          role: "Branding Expert",
          image: "/images/faculty/sameer-khan.jpg",
        },
      ],
      testimonials: [
        {
          quote: "This course helped me launch my freelance design career.",
          author: "Nikhil S., Alumnus",
        },
        {
          quote: "The branding projects were a highlight.",
          author: "Tara K., Alumna",
        },
      ],
      futureScope:
        "Careers as Graphic Designer, Brand Designer, or UI Designer in advertising, publishing, and digital media.",
      alumniSupport:
        "Alumni receive freelance project opportunities and design community access.",
      industryInternships:
        "3-month internships with design agencies, creating branding or marketing materials.",
    },
    {
      slug: "diploma-in-motion-graphics",
      title: "Diploma in Motion Graphics",
      description: "Craft dynamic motion graphics for TV, film, and online platforms.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹82,000",
      image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Training in After Effects and Cinema 4D",
        "Create title sequences",
        "Industry feedback",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "Motion Graphics Basics", duration: "12 weeks" },
        { module: "Module 2", title: "Animation and Effects", duration: "12 weeks" },
        { module: "Module 3", title: "Motion Graphics Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rohan Mehta",
          role: "Motion Graphics Expert",
          image: "/images/faculty/rohan-mehta.jpg",
        },
        {
          name: "Ms. Ananya Bose",
          role: "Animation Instructor",
          image: "/images/faculty/ananya-bose.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a title sequence for a short film!",
          author: "Vikram J., Alumnus",
        },
        {
          quote: "The faculty's feedback was invaluable.",
          author: "Shreya P., Alumna",
        },
      ],
      futureScope:
        "Roles include Motion Graphics Designer or Video Editor in media, advertising, and entertainment industries.",
      alumniSupport:
        "Alumni can attend motion graphics workshops and network with media professionals.",
      industryInternships:
        "3-month internships with studios, creating motion graphics for TV or online content.",
    },
    {
      slug: "diploma-in-ar-vr-development",
      title: "Diploma in AR/VR Development",
      description: "Build immersive AR and VR experiences using Unity and Unreal Engine.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹95,000",
      image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Develop AR/VR applications",
        "Work with Oculus and HoloLens",
        "Industry projects",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "AR/VR Fundamentals", duration: "12 weeks" },
        { module: "Module 2", title: "Unity for AR/VR", duration: "12 weeks" },
        { module: "Module 3", title: "VR Application Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Siddharth Roy",
          role: "AR/VR Developer",
          image: "/images/faculty/siddharth-roy.jpg",
        },
        {
          name: "Ms. Kavita Singh",
          role: "Unity Instructor",
          image: "/images/faculty/kavita-singh.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I built my first VR game in this course!",
          author: "Rahul T., Alumnus",
        },
        {
          quote: "The AR/VR projects were cutting-edge.",
          author: "Pooja N., Alumna",
        },
      ],
      futureScope:
        "Careers as AR/VR Developer or Immersive Experience Designer in gaming, education, and healthcare.",
      alumniSupport:
        "Alumni join AR/VR meetups and receive project collaboration opportunities.",
      industryInternships:
        "3-month internships with AR/VR startups, developing immersive applications.",
    },
    {
      slug: "diploma-in-video-editing",
      title: "Diploma in Video Editing",
      description: "Learn professional video editing for films, ads, and online content.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹78,000",
      image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Master Premiere Pro and DaVinci Resolve",
        "Edit short films",
        "Industry mentorship",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "Video Editing Basics", duration: "12 weeks" },
        { module: "Module 2", title: "Color Grading", duration: "12 weeks" },
        { module: "Module 3", title: "Short Film Editing Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Aditya Verma",
          role: "Video Editing Lead",
          image: "/images/faculty/aditya-verma.jpg",
        },
        {
          name: "Ms. Nisha Patel",
          role: "Color Grading Expert",
          image: "/images/faculty/nisha-patel.jpg",
        },
      ],
      testimonials: [
        {
          quote: "Editing a short film was a dream come true.",
          author: "Suresh K., Alumnus",
        },
        {
          quote: "The course was practical and industry-focused.",
          author: "Riya S., Alumna",
        },
      ],
      futureScope:
        "Roles include Video Editor, Post-Production Artist, or Colorist in film, TV, and digital media.",
      alumniSupport:
        "Alumni receive editing project opportunities and access to post-production networks.",
      industryInternships:
        "3-month internships with production houses, editing content for films or ads.",
    },
    {
      slug: "diploma-in-2d-animation",
      title: "Diploma in 2D Animation",
      description: "Create captivating 2D animations for cartoons and digital media.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹80,000",
      image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Training in Toon Boom and Animate",
        "Develop animated shorts",
        "Portfolio building",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "2D Animation Fundamentals", duration: "12 weeks" },
        { module: "Module 2", title: "Storyboarding", duration: "12 weeks" },
        { module: "Module 3", title: "2D Animation Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Lakshmi Nair",
          role: "2D Animation Expert",
          image: "/images/faculty/lakshmi-nair.jpg",
        },
        {
          name: "Mr. Manoj Gupta",
          role: "Storyboarding Instructor",
          image: "/images/faculty/manoj-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created my first 2D cartoon in this course!",
          author: "Anil R., Alumnus",
        },
        {
          quote: "The faculty's passion for animation was inspiring.",
          author: "Divya M., Alumna",
        },
      ],
      futureScope:
        "Careers as 2D Animator or Storyboard Artist in animation studios and advertising.",
      alumniSupport:
        "Alumni can join 2D animation workshops and connect with cartoon studios.",
      industryInternships:
        "3-month internships with animation studios, creating 2D content for TV or online platforms.",
    },
  
    // Advanced Diploma (4 courses)
    {
      slug: "advanced-diploma-in-game-development",
      title: "Advanced Diploma in Game Development",
      description: "Advanced training in game design and development using Unity and Unreal Engine.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,20,000",
      image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
      highlights: [
        "Expert-led game design workshops",
        "Build games from scratch",
        "Collaborate with industry professionals",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Game Design Fundamentals", duration: "14 weeks" },
        { module: "Module 2", title: "Unity Development", duration: "14 weeks" },
        { module: "Module 3", title: "Unreal Engine Projects", duration: "14 weeks" },
        { module: "Module 4", title: "Game Development Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Vikram Singh",
          role: "Game Design Lead",
          image: "/images/faculty/vikram-singh.jpg",
        },
        {
          name: "Ms. Aisha Khan",
          role: "Technical Instructor",
          image: "/images/faculty/aisha-khan.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I built my first game during this course!",
          author: "Karan J., Alumnus",
        },
        {
          quote: "The instructors are industry veterans with real insights.",
          author: "Sneha R., Alumna",
        },
      ],
      futureScope:
        "Careers include Game Developer, Level Designer, and VR/AR Developer. The gaming industry is booming with mobile and console gaming growth.",
      alumniSupport:
        "Alumni get access to game dev hackathons and networking with studios like Ubisoft and EA.",
      industryInternships:
        "6-month internships with game studios, contributing to AAA titles or indie games.",
    },
    {
      slug: "advanced-diploma-in-vfx-and-post-production",
      title: "Advanced Diploma in VFX and Post-Production",
      description: "Master advanced VFX and post-production techniques for blockbuster films.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,25,000",
      image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Advanced Nuke and Houdini training",
        "Work on film projects",
        "Industry mentorship",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Advanced VFX Techniques", duration: "14 weeks" },
        { module: "Module 2", title: "Post-Production Pipeline", duration: "14 weeks" },
        { module: "Module 3", title: "Film VFX Project", duration: "14 weeks" },
        { module: "Module 4", title: "VFX Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Sharma",
          role: "VFX Director",
          image: "/images/faculty/anil-sharma.jpg",
        },
        {
          name: "Ms. Deepika Rao",
          role: "Post-Production Expert",
          image: "/images/faculty/deepika-rao.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I worked on a film VFX project during the course!",
          author: "Ravi K., Alumnus",
        },
        {
          quote: "The faculty's industry experience was invaluable.",
          author: "Neha S., Alumna",
        },
      ],
      futureScope:
        "Roles include Senior VFX Artist, Post-Production Supervisor, or Compositor in film and TV industries.",
      alumniSupport:
        "Alumni receive film project opportunities and VFX community access.",
      industryInternships:
        "6-month internships with studios like ILM, working on high-profile film projects.",
    },
    {
      slug: "advanced-diploma-in-3d-animation-and-modeling",
      title: "Advanced Diploma in 3D Animation and Modeling",
      description: "Advanced skills in 3D animation and modeling for films and games.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,22,000",
      image: "https://images.pexels.com/photos/8728556/pexels-photo-8728556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Advanced Maya and ZBrush training",
        "Create cinematic animations",
        "Portfolio development",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Advanced 3D Modeling", duration: "14 weeks" },
        { module: "Module 2", title: "Character Animation", duration: "14 weeks" },
        { module: "Module 3", title: "Cinematic Animation Project", duration: "14 weeks" },
        { module: "Module 4", title: "Animation Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Sanjay Verma",
          role: "3D Animation Lead",
          image: "/images/faculty/sanjay-verma.jpg",
        },
        {
          name: "Ms. Ritu Jain",
          role: "Modeling Instructor",
          image: "/images/faculty/ritu-jain.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a cinematic animation for my portfolio!",
          author: "Ajay P., Alumnus",
        },
        {
          quote: "The course was a deep dive into 3D animation.",
          author: "Pooja K., Alumna",
        },
      ],
      futureScope:
        "Careers as Senior 3D Animator or Modeler in animation studios, gaming, and VR/AR industries.",
      alumniSupport:
        "Alumni join animation workshops and connect with studios for advanced projects.",
      industryInternships:
        "6-month internships with animation studios, creating assets for films or games.",
    },
    {
      slug: "advanced-diploma-in-ar-vr-design",
      title: "Advanced Diploma in AR/VR Design",
      description: "Design cutting-edge AR and VR experiences for diverse applications.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,30,000",
      image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Advanced Unity and Unreal training",
        "Design immersive experiences",
        "Industry collaboration",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Advanced AR/VR Design", duration: "14 weeks" },
        { module: "Module 2", title: "Immersive Storytelling", duration: "14 weeks" },
        { module: "Module 3", title: "AR/VR Project", duration: "14 weeks" },
        { module: "Module 4", title: "AR/VR Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rahul Kapoor",
          role: "AR/VR Design Lead",
          image: "/images/faculty/rahul-kapoor.jpg",
        },
        {
          name: "Ms. Shalini Desai",
          role: "Immersive Design Expert",
          image: "/images/faculty/shalini-desai.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed a VR experience for a client!",
          author: "Vikas S., Alumnus",
        },
        {
          quote: "The course was a game-changer for AR/VR skills.",
          author: "Ananya R., Alumna",
        },
      ],
      futureScope:
        "Roles include AR/VR Designer, Immersive Experience Creator, or XR Developer in gaming, education, and healthcare.",
      alumniSupport:
        "Alumni receive AR/VR project opportunities and access to immersive tech networks.",
      industryInternships:
        "6-month internships with AR/VR firms, designing experiences for innovative applications.",
    },
  
    // Short-Term (20 courses)
    {
      slug: "certificate-in-ui-ux-design-for-ar-vr",
      title: "Certificate in UI/UX Design for AR/VR",
      description: "Learn to design intuitive interfaces for augmented and virtual reality applications.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹25,000",
      image: "https://images.pexels.com/photos/8728303/pexels-photo-8728303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Figma and Adobe XD training",
        "AR/VR prototyping",
        "Industry mentorship",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "UI/UX Principles", duration: "4 weeks" },
        { module: "Module 2", title: "AR/VR Interface Design", duration: "4 weeks" },
        { module: "Module 3", title: "Prototyping and Testing", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Priyanka Desai",
          role: "UI/UX Specialist",
          image: "/images/faculty/priyanka-desai.jpg",
        },
        {
          name: "Mr. Amit Verma",
          role: "AR/VR Designer",
          image: "/images/faculty/amit-verma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "This course jumpstarted my career in AR/VR design.",
          author: "Nikhil P., Alumnus",
        },
        {
          quote: "The practical approach was perfect for quick learning.",
          author: "Ananya T., Alumna",
        },
      ],
      futureScope:
        "Roles include UI/UX Designer for AR/VR, Interaction Designer, or Product Designer in tech and gaming industries.",
      alumniSupport:
        "Alumni can attend design workshops and connect with AR/VR startups for freelance opportunities.",
      industryInternships:
        "1-month internships with AR/VR firms, designing interfaces for innovative applications.",
    },
    {
      slug: "certificate-in-3d-modeling",
      title: "Certificate in 3D Modeling",
      description: "Learn to create 3D models for games and animations using Blender.",
      duration: "4 Months",
      intake: "March, September",
      fees: "₹30,000",
      image: "https://images.pexels.com/photos/8728130/pexels-photo-8728130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Blender training",
        "Project-based learning",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "3D Modeling Basics", duration: "5 weeks" },
        { module: "Module 2", title: "Texturing and Rendering", duration: "5 weeks" },
        { module: "Module 3", title: "Final Model Project", duration: "6 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rahul Jain",
          role: "3D Artist",
          image: "/images/faculty/rahul-jain.jpg",
        },
        {
          name: "Ms. Shalini Roy",
          role: "Modeling Instructor",
          image: "/images/faculty/shalini-roy.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I modeled my first game asset!",
          author: "Vikas B., Alumnus",
        },
        {
          quote: "The faculty was incredibly supportive.",
          author: "Tara L., Alumna",
        },
      ],
      futureScope:
        "Work as a 3D Modeler or Asset Designer in gaming and animation studios.",
      alumniSupport:
        "Join our 3D modeling community for ongoing learning and job opportunities.",
      industryInternships:
        "2-month internships with studios creating assets for games and films.",
    },
    {
      slug: "certificate-in-motion-graphics",
      title: "Certificate in Motion Graphics",
      description: "Create dynamic motion graphics for videos and advertisements.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "After Effects training",
        "Create promo videos",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Motion Graphics Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Animation Techniques", duration: "4 weeks" },
        { module: "Module 3", title: "Promo Video Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Sameer Gupta",
          role: "Motion Graphics Specialist",
          image: "/images/faculty/sameer-gupta.jpg",
        },
        {
          name: "Ms. Neeta Sharma",
          role: "Animation Trainer",
          image: "/images/faculty/neeta-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a promo video in just 3 months!",
          author: "Rohan S., Alumnus",
        },
        {
          quote: "The course was fast-paced and practical.",
          author: "Meera K., Alumna",
        },
      ],
      futureScope:
        "Roles as Motion Graphics Designer or Video Editor in advertising and media.",
      alumniSupport:
        "Alumni receive project opportunities and access to motion graphics communities.",
      industryInternships:
        "1-month internships with agencies, creating motion graphics for ads.",
    },
    {
      slug: "certificate-in-video-editing",
      title: "Certificate in Video Editing",
      description: "Learn professional video editing for short films and ads.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹20,000",
      image: "https://images.pexels.com/photos/7749095/pexels-photo-7749095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Premiere Pro training",
        "Edit short films",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Video Editing Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Transitions and Effects", duration: "4 weeks" },
        { module: "Module 3", title: "Short Film Editing", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Patel",
          role: "Video Editor",
          image: "/images/faculty/anil-patel.jpg",
        },
        {
          name: "Ms. Riya Gupta",
          role: "Editing Instructor",
          image: "/images/faculty/riya-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I edited my first short film in this course!",
          author: "Suresh M., Alumnus",
        },
        {
          quote: "The editing tools were easy to learn.",
          author: "Pooja V., Alumna",
        },
      ],
      futureScope:
        "Work as a Video Editor or Post-Production Assistant in film and digital media.",
      alumniSupport:
        "Alumni can join editing workshops and connect with production houses.",
      industryInternships:
        "1-month internships with studios, editing content for films or ads.",
    },
  
    {
      slug: "diploma-in-2d-animation",
      title: "Diploma in 2D Animation",
      description: "Create captivating 2D animations for cartoons and digital media.",
      duration: "1 Year",
      intake: "January, July",
      fees: "₹80,000",
      image: "/images/courses/2d-animation.jpg",
      highlights: [
        "Training in Toon Boom and Animate",
        "Develop animated shorts",
        "Portfolio building",
      ],
      category: "diploma",
      curriculum: [
        { module: "Module 1", title: "2D Animation Fundamentals", duration: "12 weeks" },
        { module: "Module 2", title: "Storyboarding", duration: "12 weeks" },
        { module: "Module 3", title: "2D Animation Project", duration: "12 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Lakshmi Nair",
          role: "2D Animation Expert",
          image: "/images/faculty/lakshmi-nair.jpg",
        },
        {
          name: "Mr. Manoj Gupta",
          role: "Storyboarding Instructor",
          image: "/images/faculty/manoj-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created my first 2D cartoon in this course!",
          author: "Anil R., Alumnus",
        },
        {
          quote: "The faculty's passion for animation was inspiring.",
          author: "Divya M., Alumna",
        },
      ],
      futureScope:
        "Careers as 2D Animator or Storyboard Artist in animation studios and advertising.",
      alumniSupport:
        "Alumni can join 2D animation workshops and connect with cartoon studios.",
      industryInternships:
        "3-month internships with animation studios, creating 2D content for TV or online platforms.",
    },
  
    // Advanced Diploma (4 courses)
    {
      slug: "advanced-diploma-in-game-development",
      title: "Advanced Diploma in Game Development",
      description: "Advanced training in game design and development using Unity and Unreal Engine.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,20,000",
      image: "https://www.berlinsbi.com/uploads/sites/2/2024/01/Game-Design.jpg?w=1920&h=1080&crop=1",
      highlights: [
        "Expert-led game design workshops",
        "Build games from scratch",
        "Collaborate with industry professionals",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Game Design Fundamentals", duration: "14 weeks" },
        { module: "Module 2", title: "Unity Development", duration: "14 weeks" },
        { module: "Module 3", title: "Unreal Engine Projects", duration: "14 weeks" },
        { module: "Module 4", title: "Game Development Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Vikram Singh",
          role: "Game Design Lead",
          image: "/images/faculty/vikram-singh.jpg",
        },
        {
          name: "Ms. Aisha Khan",
          role: "Technical Instructor",
          image: "/images/faculty/aisha-khan.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I built my first game during this course!",
          author: "Karan J., Alumnus",
        },
        {
          quote: "The instructors are industry veterans with real insights.",
          author: "Sneha R., Alumna",
        },
      ],
      futureScope:
        "Careers include Game Developer, Level Designer, and VR/AR Developer. The gaming industry is booming with mobile and console gaming growth.",
      alumniSupport:
        "Alumni get access to game dev hackathons and networking with studios like Ubisoft and EA.",
      industryInternships:
        "6-month internships with game studios, contributing to AAA titles or indie games.",
    },
    {
      slug: "advanced-diploma-in-vfx-and-post-production",
      title: "Advanced Diploma in VFX and Post-Production",
      description: "Master advanced VFX and post-production techniques for blockbuster films.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,25,000",
      image: "https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Advanced Nuke and Houdini training",
        "Work on film projects",
        "Industry mentorship",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Advanced VFX Techniques", duration: "14 weeks" },
        { module: "Module 2", title: "Post-Production Pipeline", duration: "14 weeks" },
        { module: "Module 3", title: "Film VFX Project", duration: "14 weeks" },
        { module: "Module 4", title: "VFX Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Sharma",
          role: "VFX Director",
          image: "/images/faculty/anil-sharma.jpg",
        },
        {
          name: "Ms. Deepika Rao",
          role: "Post-Production Expert",
          image: "/images/faculty/deepika-rao.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I worked on a film VFX project during the course!",
          author: "Ravi K., Alumnus",
        },
        {
          quote: "The faculty's industry experience was invaluable.",
          author: "Neha S., Alumna",
        },
      ],
      futureScope:
        "Roles include Senior VFX Artist, Post-Production Supervisor, or Compositor in film and TV industries.",
      alumniSupport:
        "Alumni receive film project opportunities and VFX community access.",
      industryInternships:
        "6-month internships with studios like ILM, working on high-profile film projects.",
    },
    {
      slug: "advanced-diploma-in-3d-animation-and-modeling",
      title: "Advanced Diploma in 3D Animation and Modeling",
      description: "Advanced skills in 3D animation and modeling for films and games.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,22,000",
      image: "https://images.pexels.com/photos/6941872/pexels-photo-6941872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Advanced Maya and ZBrush training",
        "Create cinematic animations",
        "Portfolio development",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Advanced 3D Modeling", duration: "14 weeks" },
        { module: "Module 2", title: "Character Animation", duration: "14 weeks" },
        { module: "Module 3", title: "Cinematic Animation Project", duration: "14 weeks" },
        { module: "Module 4", title: "Animation Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Sanjay Verma",
          role: "3D Animation Lead",
          image: "/images/faculty/sanjay-verma.jpg",
        },
        {
          name: "Ms. Ritu Jain",
          role: "Modeling Instructor",
          image: "/images/faculty/ritu-jain.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a cinematic animation for my portfolio!",
          author: "Ajay P., Alumnus",
        },
        {
          quote: "The course was a deep dive into 3D animation.",
          author: "Pooja K., Alumna",
        },
      ],
      futureScope:
        "Careers as Senior 3D Animator or Modeler in animation studios, gaming, and VR/AR industries.",
      alumniSupport:
        "Alumni join animation workshops and connect with studios for advanced projects.",
      industryInternships:
        "6-month internships with animation studios, creating assets for films or games.",
    },
    {
      slug: "advanced-diploma-in-ar-vr-design",
      title: "Advanced Diploma in AR/VR Design",
      description: "Design cutting-edge AR and VR experiences for diverse applications.",
      duration: "18 Months",
      intake: "January",
      fees: "₹1,30,000",
      image: "https://images.pexels.com/photos/6941872/pexels-photo-6941872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Advanced Unity and Unreal training",
        "Design immersive experiences",
        "Industry collaboration",
      ],
      category: "advanced-diploma",
      curriculum: [
        { module: "Module 1", title: "Advanced AR/VR Design", duration: "14 weeks" },
        { module: "Module 2", title: "Immersive Storytelling", duration: "14 weeks" },
        { module: "Module 3", title: "AR/VR Project", duration: "14 weeks" },
        { module: "Module 4", title: "AR/VR Portfolio", duration: "14 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rahul Kapoor",
          role: "AR/VR Design Lead",
          image: "/images/faculty/rahul-kapoor.jpg",
        },
        {
          name: "Ms. Shalini Desai",
          role: "Immersive Design Expert",
          image: "/images/faculty/shalini-desai.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed a VR experience for a client!",
          author: "Vikas S., Alumnus",
        },
        {
          quote: "The course was a game-changer for AR/VR skills.",
          author: "Ananya R., Alumna",
        },
      ],
      futureScope:
        "Roles include AR/VR Designer, Immersive Experience Creator, or XR Developer in gaming, education, and healthcare.",
      alumniSupport:
        "Alumni receive AR/VR project opportunities and access to immersive tech networks.",
      industryInternships:
        "6-month internships with AR/VR firms, designing experiences for innovative applications.",
    },
  
    // Short-Term (20 courses)
    {
      slug: "certificate-in-ui-ux-design-for-ar-vr",
      title: "Certificate in UI/UX Design for AR/VR",
      description: "Learn to design intuitive interfaces for augmented and virtual reality applications.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹25,000",
      image: "/images/courses/ui-ux-ar-vr.jpg",
      highlights: [
        "Figma and Adobe XD training",
        "AR/VR prototyping",
        "Industry mentorship",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "UI/UX Principles", duration: "4 weeks" },
        { module: "Module 2", title: "AR/VR Interface Design", duration: "4 weeks" },
        { module: "Module 3", title: "Prototyping and Testing", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Priyanka Desai",
          role: "UI/UX Specialist",
          image: "/images/faculty/priyanka-desai.jpg",
        },
        {
          name: "Mr. Amit Verma",
          role: "AR/VR Designer",
          image: "/images/faculty/amit-verma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "This course jumpstarted my career in AR/VR design.",
          author: "Nikhil P., Alumnus",
        },
        {
          quote: "The practical approach was perfect for quick learning.",
          author: "Ananya T., Alumna",
        },
      ],
      futureScope:
        "Roles include UI/UX Designer for AR/VR, Interaction Designer, or Product Designer in tech and gaming industries.",
      alumniSupport:
        "Alumni can attend design workshops and connect with AR/VR startups for freelance opportunities.",
      industryInternships:
        "1-month internships with AR/VR firms, designing interfaces for innovative applications.",
    },
    {
      slug: "certificate-in-3d-modeling",
      title: "Certificate in 3D Modeling",
      description: "Learn to create 3D models for games and animations using Blender.",
      duration: "4 Months",
      intake: "March, September",
      fees: "₹30,000",
      image: "/images/courses/3d-modeling.jpg",
      highlights: [
        "Blender training",
        "Project-based learning",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "3D Modeling Basics", duration: "5 weeks" },
        { module: "Module 2", title: "Texturing and Rendering", duration: "5 weeks" },
        { module: "Module 3", title: "Final Model Project", duration: "6 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rahul Jain",
          role: "3D Artist",
          image: "/images/faculty/rahul-jain.jpg",
        },
        {
          name: "Ms. Shalini Roy",
          role: "Modeling Instructor",
          image: "/images/faculty/shalini-roy.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I modeled my first game asset!",
          author: "Vikas B., Alumnus",
        },
        {
          quote: "The faculty was incredibly supportive.",
          author: "Tara L., Alumna",
        },
      ],
      futureScope:
        "Work as a 3D Modeler or Asset Designer in gaming and animation studios.",
      alumniSupport:
        "Join our 3D modeling community for ongoing learning and job opportunities.",
      industryInternships:
        "2-month internships with studios creating assets for games and films.",
    },
    {
      slug: "certificate-in-motion-graphics",
      title: "Certificate in Motion Graphics",
      description: "Create dynamic motion graphics for videos and advertisements.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/motion-graphics-cert.jpg",
      highlights: [
        "After Effects training",
        "Create promo videos",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Motion Graphics Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Animation Techniques", duration: "4 weeks" },
        { module: "Module 3", title: "Promo Video Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Sameer Gupta",
          role: "Motion Graphics Specialist",
          image: "/images/faculty/sameer-gupta.jpg",
        },
        {
          name: "Ms. Neeta Sharma",
          role: "Animation Trainer",
          image: "/images/faculty/neeta-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a promo video in just 3 months!",
          author: "Rohan S., Alumnus",
        },
        {
          quote: "The course was fast-paced and practical.",
          author: "Meera K., Alumna",
        },
      ],
      futureScope:
        "Roles as Motion Graphics Designer or Video Editor in advertising and media.",
      alumniSupport:
        "Alumni receive project opportunities and access to motion graphics communities.",
      industryInternships:
        "1-month internships with agencies, creating motion graphics for ads.",
    },
    {
      slug: "certificate-in-video-editing",
      title: "Certificate in Video Editing",
      description: "Learn professional video editing for short films and ads.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹20,000",
      image: "/images/courses/video-editing-cert.jpg",
      highlights: [
        "Premiere Pro training",
        "Edit short films",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Video Editing Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Transitions and Effects", duration: "4 weeks" },
        { module: "Module 3", title: "Short Film Editing", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Patel",
          role: "Video Editor",
          image: "/images/faculty/anil-patel.jpg",
        },
        {
          name: "Ms. Riya Gupta",
          role: "Editing Instructor",
          image: "/images/faculty/riya-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I edited my first short film in this course!",
          author: "Suresh M., Alumnus",
        },
        {
          quote: "The editing tools were easy to learn.",
          author: "Pooja V., Alumna",
        },
      ],
      futureScope:
        "Work as a Video Editor or Post-Production Assistant in film and digital media.",
      alumniSupport:
        "Alumni can join editing workshops and connect with production houses.",
      industryInternships:
        "1-month internships with studios, editing content for films or ads.",
    },
    {
      slug: "certificate-in-2d-animation",
      title: "Certificate in 2D Animation",
      description: "Create 2D animations for cartoons and digital content.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/2d-animation-cert.jpg",
      highlights: [
        "Toon Boom training",
        "Create animated shorts",
        "Portfolio development",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "2D Animation Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Character Animation", duration: "4 weeks" },
        { module: "Module 3", title: "Animated Short Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Divya Nair",
          role: "2D Animator",
          image: "/images/faculty/divya-nair.jpg",
        },
        {
          name: "Mr. Manoj Sharma",
          role: "Animation Trainer",
          image: "/images/faculty/manoj-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a 2D animated short in just 3 months!",
          author: "Vikram R., Alumnus",
        },
        {
          quote: "The course was perfect for beginners.",
          author: "Anjali S., Alumna",
        },
      ],
      futureScope:
        "Roles as 2D Animator or Storyboard Artist in animation and advertising.",
      alumniSupport:
        "Alumni join 2D animation communities for ongoing learning and projects.",
      industryInternships:
        "1-month internships with studios, creating 2D animations for TV or online.",
    },
    {
      slug: "certificate-in-graphic-design",
      title: "Certificate in Graphic Design",
      description: "Design stunning graphics for branding and digital media.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹20,000",
      image: "/images/courses/graphic-design-cert.jpg",
      highlights: [
        "Photoshop and Illustrator training",
        "Design logos and posters",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Graphic Design Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Logo and Poster Design", duration: "4 weeks" },
        { module: "Module 3", title: "Portfolio Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Neha Kapoor",
          role: "Graphic Designer",
          image: "/images/faculty/neha-kapoor.jpg",
        },
        {
          name: "Mr. Rajesh Patel",
          role: "Design Instructor",
          image: "/images/faculty/rajesh-patel.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed my first logo in this course!",
          author: "Amit K., Alumnus",
        },
        {
          quote: "The faculty's feedback was spot-on.",
          author: "Riya M., Alumna",
        },
      ],
      futureScope:
        "Work as a Graphic Designer or Freelance Designer in advertising and media.",
      alumniSupport:
        "Alumni receive freelance design opportunities and community access.",
      industryInternships:
        "1-month internships with design agencies, creating branding materials.",
    },
    {
      slug: "certificate-in-ar-vr-prototyping",
      title: "Certificate in AR/VR Prototyping",
      description: "Build prototypes for AR and VR applications using Unity.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹25,000",
      image: "/images/courses/ar-vr-proto.jpg",
      highlights: [
        "Unity prototyping",
        "Create AR/VR demos",
        "Industry mentorship",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "AR/VR Prototyping Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Unity for Prototyping", duration: "4 weeks" },
        { module: "Module 3", title: "AR/VR Demo Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Siddharth Gupta",
          role: "AR/VR Specialist",
          image: "/images/faculty/siddharth-gupta.jpg",
        },
        {
          name: "Ms. Kavita Rao",
          role: "Unity Trainer",
          image: "/images/faculty/kavita-rao.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I built an AR prototype in just 3 months!",
          author: "Rahul P., Alumnus",
        },
        {
          quote: "The course was hands-on and practical.",
          author: "Pooja S., Alumna",
        },
      ],
      futureScope:
        "Roles as AR/VR Prototype Developer or Interaction Designer in tech and gaming.",
      alumniSupport:
        "Alumni join AR/VR prototyping workshops and startup networks.",
      industryInternships:
        "1-month internships with AR/VR firms, building prototypes for clients.",
    },
    {
      slug: "certificate-in-game-art",
      title: "Certificate in Game Art",
      description: "Create stunning game art for characters and environments.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/game-art.jpg",
      highlights: [
        "ZBrush and Photoshop training",
        "Design game assets",
        "Portfolio development",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Game Art Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Character Design", duration: "4 weeks" },
        { module: "Module 3", title: "Game Art Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Arjun Roy",
          role: "Game Artist",
          image: "/images/faculty/arjun-roy.jpg",
        },
        {
          name: "Ms. Priya Nair",
          role: "Art Instructor",
          image: "/images/faculty/priya-nair.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed a game character for my portfolio!",
          author: "Karan S., Alumnus",
        },
        {
          quote: "The course was perfect for game art beginners.",
          author: "Anjali P., Alumna",
        },
      ],
      futureScope:
        "Work as a Game Artist or Concept Artist in the gaming industry.",
      alumniSupport:
        "Alumni join game art communities for networking and projects.",
      industryInternships:
        "1-month internships with game studios, creating art for games.",
    },
    {
      slug: "certificate-in-vfx-for-films",
      title: "Certificate in VFX for Films",
      description: "Learn VFX techniques for blockbuster films using After Effects.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹24,000",
      image: "/images/courses/vfx-films.jpg",
      highlights: [
        "After Effects training",
        "Create VFX shots",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "VFX Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Compositing for Films", duration: "4 weeks" },
        { module: "Module 3", title: "VFX Shot Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rohan Kapoor",
          role: "VFX Artist",
          image: "/images/faculty/rohan-kapoor.jpg",
        },
        {
          name: "Ms. Ananya Sharma",
          role: "Compositing Trainer",
          image: "/images/faculty/ananya-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a VFX shot for a short film!",
          author: "Vikram K., Alumnus",
        },
        {
          quote: "The course was fast and effective.",
          author: "Shreya R., Alumna",
        },
      ],
      futureScope:
        "Work as a VFX Artist or Compositor in the film industry.",
      alumniSupport:
        "Alumni receive VFX project opportunities and studio connections.",
      industryInternships:
        "1-month internships with VFX studios, working on film shots.",
    },
    {
      slug: "certificate-in-digital-illustration",
      title: "Certificate in Digital Illustration",
      description: "Create stunning digital illustrations for books and media.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹20,000",
      image: "/images/courses/digital-illustration.jpg",
      highlights: [
        "Procreate and Photoshop training",
        "Illustrate book covers",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Digital Illustration Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Character Illustration", duration: "4 weeks" },
        { module: "Module 3", title: "Illustration Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Rhea Sharma",
          role: "Illustrator",
          image: "/images/faculty/rhea-sharma.jpg",
        },
        {
          name: "Mr. Sameer Roy",
          role: "Illustration Trainer",
          image: "/images/faculty/sameer-roy.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I illustrated a book cover in this course!",
          author: "Nikhil R., Alumnus",
        },
        {
          quote: "The faculty's feedback was amazing.",
          author: "Tara S., Alumna",
        },
      ],
      futureScope:
        "Work as a Digital Illustrator or Concept Artist in publishing and media.",
      alumniSupport:
        "Alumni join illustration communities for freelance opportunities.",
      industryInternships:
        "1-month internships with publishers, creating illustrations for books.",
    },
    {
      slug: "certificate-in-character-animation",
      title: "Certificate in Character Animation",
      description: "Learn to animate expressive characters for films and games.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/character-animation.jpg",
      highlights: [
        "Maya training",
        "Animate characters",
        "Portfolio development",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Character Animation Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Expressive Animation", duration: "4 weeks" },
        { module: "Module 3", title: "Character Animation Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Gupta",
          role: "Character Animator",
          image: "/images/faculty/anil-gupta.jpg",
        },
        {
          name: "Ms. Divya Patel",
          role: "Animation Trainer",
          image: "/images/faculty/divya-patel.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I animated a character with real emotions!",
          author: "Suresh P., Alumnus",
        },
        {
          quote: "The course was perfect for animation beginners.",
          author: "Riya K., Alumna",
        },
      ],
      futureScope:
        "Work as a Character Animator in animation studios and gaming companies.",
      alumniSupport:
        "Alumni join animation communities for networking and projects.",
      industryInternships:
        "1-month internships with studios, animating characters for films or games.",
    },
    {
      slug: "certificate-in-environment-design",
      title: "Certificate in Environment Design",
      description: "Design immersive environments for games and films.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/environment-design.jpg",
      highlights: [
        "Unreal Engine training",
        "Design game worlds",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Environment Design Basics", duration: "4 weeks" },
        { module: "Module 2", title: "World Building", duration: "4 weeks" },
        { module: "Module 3", title: "Environment Design Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rohan Sharma",
          role: "Environment Designer",
          image: "/images/faculty/rohan-sharma.jpg",
        },
        {
          name: "Ms. Ananya Gupta",
          role: "Design Trainer",
          image: "/images/faculty/ananya-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed a game world in this course!",
          author: "Vikram S., Alumnus",
        },
        {
          quote: "The faculty's guidance was top-notch.",
          author: "Shreya P., Alumna",
        },
      ],
      futureScope:
        "Work as an Environment Designer or Level Artist in gaming and film industries.",
      alumniSupport:
        "Alumni join environment design communities for projects and networking.",
      industryInternships:
        "1-month internships with studios, designing environments for games or films.",
    },
    {
      slug: "certificate-in-storyboarding",
      title: "Certificate in Storyboarding",
      description: "Learn to create storyboards for animations and films.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹20,000",
      image: "/images/courses/storyboarding.jpg",
      highlights: [
        "Storyboarding techniques",
        "Create film storyboards",
        "Portfolio development",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Storyboarding Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Visual Storytelling", duration: "4 weeks" },
        { module: "Module 3", title: "Storyboard Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Rhea Patel",
          role: "Storyboard Artist",
          image: "/images/faculty/rhea-patel.jpg",
        },
        {
          name: "Mr. Sameer Sharma",
          role: "Storyboarding Trainer",
          image: "/images/faculty/sameer-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a storyboard for a short film!",
          author: "Nikhil K., Alumnus",
        },
        {
          quote: "The course was perfect for visual storytelling.",
          author: "Tara R., Alumna",
        },
      ],
      futureScope:
        "Work as a Storyboard Artist or Visual Development Artist in animation and film.",
      alumniSupport:
        "Alumni join storyboarding workshops and connect with studios.",
      industryInternships:
        "1-month internships with studios, creating storyboards for films or animations.",
    },
    {
      slug: "certificate-in-color-grading",
      title: "Certificate in Color Grading",
      description: "Master color grading for films and videos using DaVinci Resolve.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/color-grading.jpg",
      highlights: [
        "DaVinci Resolve training",
        "Grade short films",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Color Grading Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Advanced Grading Techniques", duration: "4 weeks" },
        { module: "Module 3", title: "Color Grading Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Roy",
          role: "Colorist",
          image: "/images/faculty/anil-roy.jpg",
        },
        {
          name: "Ms. Divya Sharma",
          role: "Grading Trainer",
          image: "/images/faculty/divya-sharma.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I graded a short film in this course!",
          author: "Suresh R., Alumnus",
        },
        {
          quote: "The course was hands-on and practical.",
          author: "Riya P., Alumna",
        },
      ],
      futureScope:
        "Work as a Colorist or Post-Production Artist in film and video industries.",
      alumniSupport:
        "Alumni join color grading workshops and connect with post-production studios.",
      industryInternships:
        "1-month internships with studios, grading content for films or ads.",
    },
    {
      slug: "certificate-in-3d-printing-for-design",
      title: "Certificate in 3D Printing for Design",
      description: "Learn 3D printing techniques for prototyping and design.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹25,000",
      image: "/images/courses/3d-printing.jpg",
      highlights: [
        "3D printing tools",
        "Create prototypes",
        "Industry mentorship",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "3D Printing Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Prototyping Techniques", duration: "4 weeks" },
        { module: "Module 3", title: "3D Printing Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Rohan Gupta",
          role: "3D Printing Expert",
          image: "/images/faculty/rohan-gupta.jpg",
        },
        {
          name: "Ms. Ananya Patel",
          role: "Prototyping Trainer",
          image: "/images/faculty/ananya-patel.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a 3D printed prototype!",
          author: "Vikram P., Alumnus",
        },
        {
          quote: "The course was innovative and practical.",
          author: "Shreya S., Alumna",
        },
      ],
      futureScope:
        "Work as a 3D Printing Designer or Prototype Developer in design and manufacturing.",
      alumniSupport:
        "Alumni join 3D printing communities for networking and projects.",
      industryInternships:
        "1-month internships with design firms, creating 3D printed prototypes.",
    },
    {
      slug: "certificate-in-vr-game-design",
      title: "Certificate in VR Game Design",
      description: "Design immersive VR games using Unity.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹25,000",
      image: "/images/courses/vr-game-design.jpg",
      highlights: [
        "Unity VR training",
        "Create VR games",
        "Industry feedback",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "VR Game Design Basics", duration: "4 weeks" },
        { module: "Module 2", title: "VR Mechanics", duration: "4 weeks" },
        { module: "Module 3", title: "VR Game Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Siddharth Sharma",
          role: "VR Game Designer",
          image: "/images/faculty/siddharth-sharma.jpg",
        },
        {
          name: "Ms. Kavita Gupta",
          role: "VR Trainer",
          image: "/images/faculty/kavita-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I designed a VR game in this course!",
          author: "Rahul S., Alumnus",
        },
        {
          quote: "The course was cutting-edge and fun.",
          author: "Pooja R., Alumna",
        },
      ],
      futureScope:
        "Work as a VR Game Designer or Immersive Developer in the gaming industry.",
      alumniSupport:
        "Alumni join VR game design communities for networking and projects.",
      industryInternships:
        "1-month internships with VR studios, designing games or experiences.",
    },
    {
      slug: "certificate-in-augmented-reality",
      title: "Certificate in Augmented Reality",
      description: "Create AR applications for mobile and wearable devices.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹25,000",
      image: "/images/courses/augmented-reality.jpg",
      highlights: [
        "AR development tools",
        "Create AR apps",
        "Industry mentorship",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "AR Development Basics", duration: "4 weeks" },
        { module: "Module 2", title: "AR App Development", duration: "4 weeks" },
        { module: "Module 3", title: "AR App Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Arjun Gupta",
          role: "AR Developer",
          image: "/images/faculty/arjun-gupta.jpg",
        },
        {
          name: "Ms. Priya Sharma",
          role: "AR Trainer",
          image: "/images/faculty/priya-sharma-ar.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I built an AR app in just 3 months!",
          author: "Karan P., Alumnus",
        },
        {
          quote: "The course was practical and innovative.",
          author: "Anjali S., Alumna",
        },
      ],
      futureScope:
        "Work as an AR Developer or App Designer in tech, education, and retail industries.",
      alumniSupport:
        "Alumni join AR development communities for networking and projects.",
      industryInternships:
        "1-month internships with AR startups, creating mobile AR applications.",
    },
    {
      slug: "certificate-in-visual-storytelling",
      title: "Certificate in Visual Storytelling",
      description: "Learn to tell compelling stories through visuals for films and games.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹20,000",
      image: "/images/courses/visual-storytelling.jpg",
      highlights: [
        "Visual storytelling techniques",
        "Create narrative visuals",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Storytelling Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Visual Narrative Techniques", duration: "4 weeks" },
        { module: "Module 3", title: "Visual Storytelling Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Neha Sharma",
          role: "Storytelling Expert",
          image: "/images/faculty/neha-sharma-story.jpg",
        },
        {
          name: "Mr. Rajesh Gupta",
          role: "Narrative Trainer",
          image: "/images/faculty/rajesh-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created a visual story for a game!",
          author: "Amit S., Alumnus",
        },
        {
          quote: "The course was inspiring and creative.",
          author: "Riya P., Alumna",
        },
      ],
      futureScope:
        "Work as a Visual Storyteller or Narrative Designer in film and gaming industries.",
      alumniSupport:
        "Alumni join storytelling communities for networking and projects.",
      industryInternships:
        "1-month internships with studios, creating visuals for films or games.",
    },
    {
      slug: "certificate-in-digital-sculpting",
      title: "Certificate in Digital Sculpting",
      description: "Learn digital sculpting for characters and creatures using ZBrush.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/digital-sculpting.jpg",
      highlights: [
        "ZBrush training",
        "Sculpt characters",
        "Portfolio development",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Digital Sculpting Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Creature Sculpting", duration: "4 weeks" },
        { module: "Module 3", title: "Sculpting Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Mr. Anil Sharma",
          role: "Digital Sculptor",
          image: "/images/faculty/anil-sharma-sculpt.jpg",
        },
        {
          name: "Ms. Divya Gupta",
          role: "Sculpting Trainer",
          image: "/images/faculty/divya-gupta.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I sculpted a creature for my portfolio!",
          author: "Suresh S., Alumnus",
        },
        {
          quote: "The course was hands-on and creative.",
          author: "Riya R., Alumna",
        },
      ],
      futureScope:
        "Work as a Digital Sculptor or Character Artist in gaming and animation industries.",
      alumniSupport:
        "Alumni join sculpting communities for networking and projects.",
      industryInternships:
        "1-month internships with studios, sculpting characters for games or films.",
    },
    {
      slug: "certificate-in-concept-art",
      title: "Certificate in Concept Art",
      description: "Create concept art for films, games, and animations.",
      duration: "3 Months",
      intake: "April, October",
      fees: "₹22,000",
      image: "/images/courses/concept-art.jpg",
      highlights: [
        "Photoshop training",
        "Design concepts",
        "Portfolio building",
      ],
      category: "short-term",
      curriculum: [
        { module: "Module 1", title: "Concept Art Basics", duration: "4 weeks" },
        { module: "Module 2", title: "Environment Concepts", duration: "4 weeks" },
        { module: "Module 3", title: "Concept Art Project", duration: "4 weeks" },
      ],
      faculty: [
        {
          name: "Ms. Rhea Gupta",
          role: "Concept Artist",
          image: "/images/faculty/rhea-gupta.jpg",
        },
        {
          name: "Mr. Sameer Patel",
          role: "Art Trainer",
          image: "/images/faculty/sameer-patel.jpg",
        },
      ],
      testimonials: [
        {
          quote: "I created concept art for a game!",
          author: "Nikhil S., Alumnus",
        },
        {
          quote: "The course was perfect for aspiring artists.",
          author: "Tara P., Alumna",
        },
      ],
      futureScope:
        "Work as a Concept Artist or Visual Development Artist in gaming and film industries.",
      alumniSupport:
        "Alumni join concept art communities for networking and projects.",
      industryInternships:
        "1-month internships with studios, creating concept art for games or films.",
    },
  ];
  
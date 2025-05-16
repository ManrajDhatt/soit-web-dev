

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { cn } from "@/lib/utils";

// import { ThemeToggle } from "@/components/layout/theme-toggle";
// import { Button } from "@/components/ui/button";
// import { EnquireButton } from "../ui/enquireNow";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   {
//     name: "Admission",
//     dropdown: [
//       { name: "Eligibility Criteria", path: "/admission/eligibility-criteria" },
//       { name: "Admission Process", path: "/admission/admission-process" },
//     ],
//   },
//   { name: "Courses", path: "/courses" },
//   { name: "Contact", path: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme } = useTheme();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Prevent hydration mismatch
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle dropdown hover and click
//   const handleMouseEnter = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 300);
//   };

//   const handleClick = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // Use light logo as default during SSR and initial render
//   const logoSrc = mounted && theme === "dark" ? "/logo_whitetext.png" : "/logo.png";

//   return (
//     <header
//       className={cn(
//         "fixed top-2 z-50 w-full transition-all duration-300",
//         isScrolled
//           ? "bg-background/80 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       )}
//     >
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src={logoSrc}
//             alt="Company Logo"
//             width={300}
//             height={150}
//             priority
//             className="transition-opacity duration-300"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex lg:items-center lg:space-x-6">
//           <NavigationMenu>
//             <NavigationMenuList>
//               {navItems.map((item) =>
//                 item.dropdown ? (
//                   <NavigationMenuItem key={item.name}>
//                     <NavigationMenu>
//                       <NavigationMenuTrigger
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                         onClick={handleClick}
//                         className={cn(
//                           navigationMenuTriggerStyle(),
//                           "nav-link cursor-pointer",
//                           pathname.startsWith("/admission") && "active"
//                         )}
//                       >
//                         {item.name}
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                         className="w-[250px] p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg left-0"
//                       >
//                         <ul className="flex flex-col gap-3">
//                           {item.dropdown.map((dropdownItem) => (
//                             <li key={dropdownItem.path}>
//                               <NavigationMenuLink asChild>
//                                 <Link
//                                   href={dropdownItem.path}
//                                   className={cn(
//                                     "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
//                                     pathname === dropdownItem.path
//                                       ? "bg-accent text-accent-foreground"
//                                       : "text-foreground"
//                                   )}
//                                 >
//                                   {dropdownItem.name}
//                                 </Link>
//                               </NavigationMenuLink>
//                             </li>
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>
//                     </NavigationMenu>
//                   </NavigationMenuItem>
//                 ) : (
//                   <NavigationMenuItem key={item.path}>
//                     <Link href={item.path} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={cn(
//                           navigationMenuTriggerStyle(),
//                           "nav-link",
//                           pathname === item.path && "active"
//                         )}
//                       >
//                         {item.name}
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 )
//               )}
//             </NavigationMenuList>
//           </NavigationMenu>
//           <ThemeToggle />
//           <EnquireButton />
//         </nav>

//         {/* Mobile Navigation */}
//         <div className="flex items-center lg:hidden">
//           <ThemeToggle />
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="ml-2">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[250px] sm:w-[300px]">
//               <div className="flex flex-col gap-6 py-6">
//                 {navItems.map((item) => (
//                   <div key={item.name}>
//                     {item.dropdown ? (
//                       <>
//                         <span
//                           className={cn(
//                             "text-lg font-medium text-foreground cursor-default"
//                           )}
//                         >
//                           {item.name}
//                         </span>
//                         <div className="ml-4 mt-2 flex flex-col gap-2">
//                           {item.dropdown.map((dropdownItem) => (
//                             <Link
//                               key={dropdownItem.path}
//                               href={dropdownItem.path}
//                               className={cn(
//                                 "text-sm font-medium transition-colors hover:text-foreground",
//                                 pathname === dropdownItem.path
//                                   ? "text-foreground"
//                                   : "text-muted-foreground"
//                               )}
//                               onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                               {dropdownItem.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.path}
//                         className={cn(
//                           "text-lg font-medium transition-colors hover:text-foreground",
//                           pathname === item.path
//                             ? "text-foreground"
//                             : "text-muted-foreground"
//                         )}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//                 <Button className="mt-4 bg-gradient-to-r from-primary to-accent">
//                   Apply Now
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { cn } from "@/lib/utils";
// import { courses } from "@/lib/courses";

// import { ThemeToggle } from "@/components/layout/theme-toggle";
// import { Button } from "@/components/ui/button";
// import { EnquireButton } from "../ui/enquireNow";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, ChevronDown, ChevronRight } from "lucide-react";

// // Define course categories
// const categories = [
//   { name: "Degree", value: "degree" },
//   { name: "Diploma", value: "diploma" },
//   { name: "Advanced Diploma", value: "advanced-diploma" },
//   { name: "Short-Term", value: "short-term" },
// ];

// // Updated navItems
// const navItems = [
//   { name: "Home", path: "/" },
//   {
//     name: "About Us",
//     dropdown: [
//       { name: "BCM Foundation", path: "/about/bcm-foundation" },
//       { name: "Director's Message", path: "/about/directors-message" },
//       { name: "Hero Group", path: "/about/hero-group" },
//       { name: "Meet Our Team", path: "/about/meet-our-team" },
//       { name: "Our Patron", path: "/about/our-patron" },
//       { name: "Vision and Mission", path: "/about/vision-mission" },
//     ],
//   },
//   {
//     name: "Admission",
//     dropdown: [
//       { name: "Eligibility Criteria", path: "/admission/eligibility-criteria" },
//       { name: "Admission Process", path: "/admission/admission-process" },
//     ],
//   },
//   { name: "Courses" },
//   { name: "Contact", path: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme } = useTheme();
//   const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
//   const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Prevent hydration mismatch
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle desktop dropdown hover and click
//   const handleMouseEnter = (itemName: string) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsDropdownOpen(itemName);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsDropdownOpen(null);
//     }, 300);
//   };

//   const handleClick = (itemName: string) => {
//     setIsDropdownOpen(isDropdownOpen === itemName ? null : itemName);
//   };

//   // Handle mobile dropdown toggle
//   const handleMobileDropdownToggle = (itemName: string) => {
//     setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
//     // Reset category dropdown when closing the main dropdown
//     if (mobileDropdownOpen === itemName) {
//       setMobileCategoryOpen(null);
//     }
//   };

//   // Handle mobile category toggle for Courses
//   const handleMobileCategoryToggle = (categoryName: string) => {
//     setMobileCategoryOpen(mobileCategoryOpen === categoryName ? null : categoryName);
//   };

//   // Use light logo as default during SSR and initial render
//   const logoSrc = mounted && theme === "dark" ? "/logo_whitetext.png" : "/logo.png";

//   return (
//     <header
//       className={cn(
//         "fixed top-2 z-50 w-full transition-all duration-300",
//         isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
//       )}
//     >
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src={logoSrc}
//             alt="School of Immersive Technologies Logo"
//             width={300}
//             height={150}
//             priority
//             className="transition-opacity duration-300"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex lg:items-center lg:space-x-6">
//           <NavigationMenu>
//             <NavigationMenuList className="flex gap-4">
//               {navItems.map((item) =>
//                 item.dropdown ? (
//                   <NavigationMenuItem key={item.name}>
//                     <NavigationMenuTrigger
//                       onMouseEnter={() => handleMouseEnter(item.name)}
//                       onMouseLeave={handleMouseLeave}
//                       onClick={() => handleClick(item.name)}
//                       className={cn(
//                         navigationMenuTriggerStyle(),
//                         "nav-link cursor-pointer",
//                         pathname.startsWith(item.dropdown[0].path.split("/")[1]) && "active"
//                       )}
//                     >
//                       {item.name}
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent
//                       onMouseEnter={() => handleMouseEnter(item.name)}
//                       onMouseLeave={handleMouseLeave}
//                       className="min-w-[250px] p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg"
//                     >
//                       <ul className="flex flex-col gap-3">
//                         {item.dropdown.map((dropdownItem) => (
//                           <li key={dropdownItem.path}>
//                             <NavigationMenuLink asChild>
//                               <Link
//                                 href={dropdownItem.path}
//                                 className={cn(
//                                   "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
//                                   pathname === dropdownItem.path
//                                     ? "bg-accent text-accent-foreground"
//                                     : "text-foreground"
//                                 )}
//                               >
//                                 {dropdownItem.name}
//                               </Link>
//                             </NavigationMenuLink>
//                           </li>
//                         ))}
//                       </ul>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 ) : item.name === "Courses" ? (
//                   <NavigationMenuItem key={item.name}>
//                     <NavigationMenuTrigger
//                       onMouseEnter={() => handleMouseEnter(item.name)}
//                       onMouseLeave={handleMouseLeave}
//                       onClick={() => handleClick(item.name)}
//                       className={cn(
//                         navigationMenuTriggerStyle(),
//                         "nav-link cursor-pointer",
//                         pathname.startsWith("/courses") && "active"
//                       )}
//                     >
//                       Courses
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent
//                       onMouseEnter={() => handleMouseEnter(item.name)}
//                       onMouseLeave={handleMouseLeave}
//                       className="min-w-[300px] p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg"
//                     >
//                       <ul className="flex flex-col gap-3">
//                         {categories.map((category) => {
//                           const categoryCourses = courses.filter(
//                             (course) => course.category === category.value
//                           );
//                           if (categoryCourses.length === 0) return null;
//                           return (
//                             <li key={category.value} className="group relative">
//                               <span
//                                 className={cn(
//                                   "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer whitespace-nowrap"
//                                 )}
//                               >
//                                 {category.name}
//                                 <ChevronDown className="inline-block h-4 w-4 ml-1" />
//                               </span>
//                               <ul className="absolute left-full top-0 mt-0 min-w-[250px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-3 hidden group-hover:block z-50">
//                                 {categoryCourses.map((course) => (
//                                   <li key={course.slug}>
//                                     <Link
//                                       href={`/courses/${course.slug}`}
//                                       className={cn(
//                                         "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
//                                         pathname === `/courses/${course.slug}`
//                                           ? "bg-accent text-accent-foreground"
//                                           : "text-foreground"
//                                       )}
//                                     >
//                                       {course.title}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 ) : (
//                   <NavigationMenuItem key={item.path}>
//                     <Link href={item.path!} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={cn(
//                           navigationMenuTriggerStyle(),
//                           "nav-link",
//                           pathname === item.path && "active"
//                         )}
//                       >
//                         {item.name}
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 )
//               )}
//             </NavigationMenuList>
//           </NavigationMenu>
//           <ThemeToggle />
//           <EnquireButton />
//         </nav>

//         {/* Mobile Navigation */}
//         <div className="flex items-center lg:hidden">
//           <ThemeToggle />
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="ml-2">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[250px] sm:w-[300px] overflow-y-auto max-h-screen">
//               <div className="flex flex-col gap-4 py-6">
//                 {navItems.map((item) => (
//                   <div key={item.name}>
//                     {item.name === "Courses" ? (
//                       <>
//                         <button
//                           onClick={() => handleMobileDropdownToggle(item.name)}
//                           className={cn(
//                             "flex items-center text-lg font-medium text-foreground w-full text-left"
//                           )}
//                         >
//                           Courses
//                           <ChevronRight
//                             className={cn(
//                               "h-5 w-5 ml-2 transition-transform",
//                               mobileDropdownOpen === item.name && "rotate-90"
//                             )}
//                           />
//                         </button>
//                         {mobileDropdownOpen === item.name && (
//                           <div className="ml-4 mt-2 flex flex-col gap-2">
//                             {categories.map((category) => {
//                               const categoryCourses = courses.filter(
//                                 (course) => course.category === category.value
//                               );
//                               if (categoryCourses.length === 0) return null;
//                               return (
//                                 <div key={category.value}>
//                                   <button
//                                     onClick={() => handleMobileCategoryToggle(category.value)}
//                                     className={cn(
//                                       "flex items-center text-sm font-medium text-foreground w-full text-left"
//                                     )}
//                                   >
//                                     {category.name}
//                                     <ChevronRight
//                                       className={cn(
//                                         "h-4 w-4 ml-2 transition-transform",
//                                         mobileCategoryOpen === category.value && "rotate-90"
//                                       )}
//                                     />
//                                   </button>
//                                   {mobileCategoryOpen === category.value && (
//                                     <div className="ml-4 mt-1 flex flex-col gap-1">
//                                       {categoryCourses.map((course) => (
//                                         <Link
//                                           key={course.slug}
//                                           href={`/courses/${course.slug}`}
//                                           className={cn(
//                                             "text-sm font-medium transition-colors hover:text-foreground",
//                                             pathname === `/courses/${course.slug}`
//                                               ? "text-foreground"
//                                               : "text-muted-foreground"
//                                           )}
//                                           onClick={() => setIsMobileMenuOpen(false)}
//                                         >
//                                           {course.title}
//                                         </Link>
//                                       ))}
//                                     </div>
//                                   )}
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         )}
//                       </>
//                     ) : item.dropdown ? (
//                       <>
//                         <button
//                           onClick={() => handleMobileDropdownToggle(item.name)}
//                           className={cn(
//                             "flex items-center text-lg font-medium text-foreground w-full text-left"
//                           )}
//                         >
//                           {item.name}
//                           <ChevronRight
//                             className={cn(
//                               "h-5 w-5 ml-2 transition-transform",
//                               mobileDropdownOpen === item.name && "rotate-90"
//                             )}
//                           />
//                         </button>
//                         {mobileDropdownOpen === item.name && (
//                           <div className="ml-4 mt-2 flex flex-col gap-2">
//                             {item.dropdown.map((dropdownItem) => (
//                               <Link
//                                 key={dropdownItem.path}
//                                 href={dropdownItem.path}
//                                 className={cn(
//                                   "text-sm font-medium transition-colors hover:text-foreground",
//                                   pathname === dropdownItem.path
//                                     ? "text-foreground"
//                                     : "text-muted-foreground"
//                                 )}
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                               >
//                                 {dropdownItem.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </>
//                     ) : (
//                       <Link
//                         href={item.path!}
//                         className={cn(
//                           "text-lg font-medium transition-colors hover:text-foreground",
//                           pathname === item.path
//                             ? "text-foreground"
//                             : "text-muted-foreground"
//                         )}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//                 <Button className="mt-4 bg-gradient-to-r from-primary to-accent">
//                   Apply Now
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }






















"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { courses } from "@/lib/courses";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { EnquireButton } from "../ui/enquireNow";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";

// Define course categories
const categories = [
  { name: "Degree", value: "degree" },
  { name: "Diploma", value: "diploma" },
  { name: "Advanced Diploma", value: "advanced-diploma" },
  { name: "Short-Term", value: "short-term" },
];

// Updated navItems with "Courses" in the third position
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    dropdown: [
            { name: "Hero Group", path: "/about/Hero-Group" },

      { name: "BCM Foundation", path: "/about/BCM-foundation" },
     { name: "Vision and Mission", path: "/about/Vision-and-mission" },
      { name: "Our Patron", path: "/about/our-patron" },

      { name: " Exec. Director's Message", path: "/about/director-message" },
      { name: "Meet Our Team", path: "/about/meet-our-team" },
    ],
  },
  { name: "Courses" },
  {
    name: "Admission",
    dropdown: [
      { name: "Eligibility Criteria", path: "/admission/eligibility-criteria" },
      { name: "Admission Process", path: "/admission/admission-process" },
    ],
  },
    {name:"SOIT",
    dropdown: [
      { name: "Activities", path: "/SOIT/Activities" },
      { name: "Events", path: "/SOIT/Events"},
      {name:"Lectures",path:"/SOIT/Lectures"}
    ],
  },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nestedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle desktop dropdown hover
  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
      setIsNestedDropdownOpen(null);
    }, 500);
  };

  // Handle nested dropdown for Courses
  const handleNestedMouseEnter = (categoryValue: string) => {
    if (nestedTimeoutRef.current) {
      clearTimeout(nestedTimeoutRef.current);
    }
    setIsNestedDropdownOpen(categoryValue);
  };

  const handleNestedMouseLeave = () => {
    nestedTimeoutRef.current = setTimeout(() => {
      setIsNestedDropdownOpen(null);
    }, 500);
  };

  // Handle mobile dropdown toggle
  const handleMobileDropdownToggle = (itemName: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
    if (mobileDropdownOpen === itemName) {
      setMobileCategoryOpen(null);
    }
  };

  // Handle mobile category toggle for Courses
  const handleMobileCategoryToggle = (categoryName: string) => {
    setMobileCategoryOpen(mobileCategoryOpen === categoryName ? null : categoryName);
  };

  // Use light logo as default during SSR and initial render
  const logoSrc = mounted && theme === "dark" ? "/logo_whitetext.png" : "/logo.png";

  return (
    <header
      className={cn(
        "fixed top-2 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logoSrc}
            alt="School of Immersive Technologies Logo"
            width={300}
            height={150}
            priority
            className="transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex gap-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={cn(
                      "text-base font-medium cursor-pointer px-3 py-2 rounded-md transition-colors",
                      pathname.startsWith(item.dropdown[0].path.split("/")[1])
                        ? "text-primary bg-primary/20"
                        : "text-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    {item.name}
                  </span>
                  {/* Dropdown for About Us, Admission */}
                  <div
                    className={cn(
                      "absolute left-0 top-full mt-2 w-[250px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-4 z-50",
                      isDropdownOpen === item.name ? "block" : "hidden",
                      "transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    )}
                  >
                    <ul className="flex flex-col gap-3">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.path}>
                          <Link
                            href={dropdownItem.path}
                            className={cn(
                              "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary whitespace-nowrap",
                              pathname === dropdownItem.path
                                ? "bg-primary/20 text-primary"
                                : "text-foreground"
                            )}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : item.name === "Courses" ? (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={cn(
                      "text-base font-medium cursor-pointer px-3 py-2 rounded-md transition-colors",
                      pathname.startsWith("/courses")
                        ? "text-primary bg-primary/20"
                        : "text-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    Courses
                  </span>
                  {/* Main Courses Dropdown */}
                  <div
                    className={cn(
                      "absolute left-0 top-full mt-2 w-[300px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-4 z-50",
                      isDropdownOpen === item.name ? "block" : "hidden",
                      "transition-opacity duration-200 opacity-0 group-hover:opacity-100",
                      "before:content-[''] before:absolute before:-right-2 before:top-0 before:w-4 before:h-full before:bg-transparent"
                    )}
                  >
                    <ul className="flex flex-col gap-3">
                      {categories.map((category) => {
                        const categoryCourses = courses.filter(
                          (course) => course.category === category.value
                        );
                        if (categoryCourses.length === 0) return null;

                        return (
                          <li key={category.value}>
                            <div
                              className="relative group/nested"
                              onMouseEnter={() => handleNestedMouseEnter(category.value)}
                              onMouseLeave={handleNestedMouseLeave}
                            >
                              <div
                                className={cn(
                                  "flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors",
                                  isNestedDropdownOpen === category.value
                                    ? "bg-primary/20 text-primary"
                                    : "hover:bg-primary/10 hover:text-primary"
                                )}
                              >
                                <span className="text-sm font-medium">{category.name}</span>
                                <ChevronDown className="h-4 w-4" />
                              </div>
                              {/* Nested Dropdown for Courses */}
                              <ul
                                className={cn(
                                  "absolute top-0 w-[250px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-2 z-50",
                                  isNestedDropdownOpen === category.value ? "block" : "hidden",
                                  "transition-opacity duration-200 opacity-0 group-hover/nested:opacity-100",
                                  "left-full ml-2",
                                  "before:content-[''] before:absolute before:-left-4 before:top-0 before:w-4 before:h-full before:bg-transparent"
                                )}
                              >
                                {categoryCourses.map((course) => (
                                  <li key={course.slug}>
                                    <Link
                                      href={`/courses/${course.slug}`}
                                      className={cn(
                                        "block p-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                                        pathname === `/courses/${course.slug}`
                                          ? "bg-primary/20 text-primary"
                                          : "text-foreground"
                                      )}
                                    >
                                      {course.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.path}>
                  <Link
                    href={item.path!}
                    className={cn(
                      "text-base font-medium px-3 py-2 rounded-md transition-colors",
                      pathname === item.path
                        ? "text-primary bg-primary/20"
                        : "text-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ThemeToggle />
          <EnquireButton />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] overflow-y-auto max-h-screen">
              <div className="flex flex-col gap-4 py-6">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.name === "Courses" ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.name)}
                          className={cn(
                            "flex items-center text-lg font-medium text-foreground w-full text-left"
                          )}
                        >
                          Courses
                          <ChevronRight
                            className={cn(
                              "h-5 w-5 ml-2 transition-transform",
                              mobileDropdownOpen === item.name && "rotate-90"
                            )}
                          />
                        </button>
                        {mobileDropdownOpen === item.name && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {categories.map((category) => {
                              const categoryCourses = courses.filter(
                                (course) => course.category === category.value
                              );
                              if (categoryCourses.length === 0) return null;
                              return (
                                <div key={category.value}>
                                  <button
                                    onClick={() => handleMobileCategoryToggle(category.value)}
                                    className={cn(
                                      "flex items-center text-sm font-medium text-foreground w-full text-left"
                                    )}
                                  >
                                    {category.name}
                                    <ChevronRight
                                      className={cn(
                                        "h-4 w-4 ml-2 transition-transform",
                                        mobileCategoryOpen === category.value && "rotate-90"
                                      )}
                                    />
                                  </button>
                                  {mobileCategoryOpen === category.value && (
                                    <div className="ml-4 mt-1 flex flex-col gap-1">
                                      {categoryCourses.map((course) => (
                                        <Link
                                          key={course.slug}
                                          href={`/courses/${course.slug}`}
                                          className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            pathname === `/courses/${course.slug}`
                                              ? "text-primary"
                                              : "text-muted-foreground"
                                          )}
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {course.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.name)}
                          className={cn(
                            "flex items-center text-lg font-medium text-foreground w-full text-left"
                          )}
                        >
                          {item.name}
                          <ChevronRight
                            className={cn(
                              "h-5 w-5 ml-2 transition-transform",
                              mobileDropdownOpen === item.name && "rotate-90"
                            )}
                          />
                        </button>
                        {mobileDropdownOpen === item.name && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                href={dropdownItem.path}
                                className={cn(
                                  "text-sm font-medium transition-colors hover:text-primary",
                                  pathname === dropdownItem.path
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.path!}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.path ? "text-primary" : "text-muted-foreground"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button className="mt-4 bg-gradient-to-r from-primary to-accent">
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}




// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { cn } from "@/lib/utils";
// import { courses } from "@/lib/courses";

// import { ThemeToggle } from "@/components/layout/theme-toggle";
// import { Button } from "@/components/ui/button";
// import { EnquireButton } from "../ui/enquireNow";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, ChevronDown, ChevronRight } from "lucide-react";

// // Define course categories
// const categories = [
//   { name: "Degree", value: "degree" },
//   { name: "Diploma", value: "diploma" },
//   { name: "Advanced Diploma", value: "advanced-diploma" },
//   { name: "Short-Term", value: "short-term" },
// ];

// // Updated navItems with "Courses" moved to the third position
// const navItems = [
//   { name: "Home", path: "/" },
//   {
//     name: "About Us",
//     dropdown: [
//       { name: "BCM Foundation", path: "/about/BCM-foundation" },
//       { name: "Director's Message", path: "/about/director-message" },
//       { name: "Hero Group", path: "/about/Hero-Group" },
//       { name: "Meet Our Team", path: "/about/meet-our-team" },
//       { name: "Our Patron", path: "/about/our-patron" },
//       { name: "Vision and Mission", path: "/about/Vision-and-mission" },
//     ],
//   },
//   { name: "Courses" }, // Moved to third position
//   {
//     name: "Admission",
//     dropdown: [
//       { name: "Eligibility Criteria", path: "/admission/eligibility-criteria" },
//       { name: "Admission Process", path: "/admission/admission-process" },
//     ],
//   },
//   { name: "Contact", path: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme } = useTheme();
//   const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
//   const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState<string | null>(null);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
//   const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Prevent hydration mismatch
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle desktop dropdown hover
//   const handleMouseEnter = (itemName: string) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsDropdownOpen(itemName);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsDropdownOpen(null);
//       setIsNestedDropdownOpen(null);
//     }, 300);
//   };

//   // Handle nested dropdown for Courses
//   const handleNestedMouseEnter = (categoryValue: string) => {
//     setIsNestedDropdownOpen(categoryValue);
//   };

//   const handleNestedMouseLeave = () => {
//     setIsNestedDropdownOpen(null);
//   };

//   // Handle mobile dropdown toggle
//   const handleMobileDropdownToggle = (itemName: string) => {
//     setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
//     if (mobileDropdownOpen === itemName) {
//       setMobileCategoryOpen(null);
//     }
//   };

//   // Handle mobile category toggle for Courses
//   const handleMobileCategoryToggle = (categoryName: string) => {
//     setMobileCategoryOpen(mobileCategoryOpen === categoryName ? null : categoryName);
//   };

//   // Use light logo as default during SSR and initial render
//   const logoSrc = mounted && theme === "dark" ? "/logo_whitetext.png" : "/logo.png";

//   return (
//     <header
//       className={cn(
//         "fixed top-2 z-50 w-full transition-all duration-300",
//         isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
//       )}
//     >
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src={logoSrc}
//             alt="School of Immersive Technologies Logo"
//             width={300}
//             height={150}
//             priority
//             className="transition-opacity duration-300"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex lg:items-center lg:space-x-1">
//           <ul className="flex gap-1">
//             {navItems.map((item) =>
//               item.dropdown ? (
//                 <li
//                   key={item.name}
//                   className="relative group"
//                   onMouseEnter={() => handleMouseEnter(item.name)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <span
//                     className={cn(
//                       "text-lg font-medium cursor-pointer px-4 py-2 rounded-md transition-colors",
//                       pathname.startsWith(item.dropdown[0].path.split("/")[1])
//                         ? "text-primary font-semibold border-b-2 border-primary"
//                         : "text-foreground hover:text-primary hover:border-b-2 hover:border-primary/50"
//                     )}
//                   >
//                     {item.name}
//                   </span>
//                   {/* Dropdown for About Us, Admission */}
//                   <div
//                     className={cn(
//                       "absolute left-0 top-full mt-2 min-w-[250px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-4 z-50",
//                       isDropdownOpen === item.name ? "block" : "hidden",
//                       "transition-opacity duration-200 opacity-0 group-hover:opacity-100"
//                     )}
//                   >
//                     <ul className="flex flex-col gap-2">
//                       {item.dropdown.map((dropdownItem) => (
//                         <li key={dropdownItem.path}>
//                           <Link
//                             href={dropdownItem.path}
//                             className={cn(
//                               "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
//                               pathname === dropdownItem.path
//                                 ? "bg-accent text-accent-foreground"
//                                 : "text-foreground"
//                             )}
//                           >
//                             {dropdownItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               ) : item.name === "Courses" ? (
//                 <li
//                   key={item.name}
//                   className="relative group"
//                   onMouseEnter={() => handleMouseEnter(item.name)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <span
//                     className={cn(
//                       "text-lg font-medium cursor-pointer px-4 py-2 rounded-md transition-colors",
//                       pathname.startsWith("/courses")
//                         ? "text-primary font-semibold border-b-2 border-primary"
//                         : "text-foreground hover:text-primary hover:border-b-2 hover:border-primary/50"
//                     )}
//                   >
//                     Courses
//                   </span>
//                   {/* Main Courses Dropdown */}
//                   <div
//                     className={cn(
//                       "absolute left-0 top-full mt-2 min-w-[300px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-4 z-50",
//                       isDropdownOpen === item.name ? "block" : "hidden",
//                       "transition-opacity duration-200 opacity-0 group-hover:opacity-100"
//                     )}
//                   >
//                     <ul className="flex flex-col gap-2">
//                       {categories.map((category) => {
//                         const categoryCourses = courses.filter(
//                           (course) => course.category === category.value
//                         );
//                         if (categoryCourses.length === 0) return null;

//                         return (
//                           <li key={category.value}>
//                             <div
//                               className="relative group/nested"
//                               onMouseEnter={() => handleNestedMouseEnter(category.value)}
//                               onMouseLeave={handleNestedMouseLeave}
//                             >
//                               <div
//                                 className={cn(
//                                   "flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors",
//                                   isNestedDropdownOpen === category.value
//                                     ? "bg-accent text-accent-foreground"
//                                     : "hover:bg-accent hover:text-accent-foreground"
//                                 )}
//                               >
//                                 <span className="text-sm font-medium">{category.name}</span>
//                                 <ChevronDown className="h-4 w-4" />
//                               </div>
//                               {/* Nested Dropdown for Courses */}
//                               <ul
//                                 className={cn(
//                                   "absolute top-0 min-w-[250px] bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-2 z-50",
//                                   isNestedDropdownOpen === category.value ? "block" : "hidden",
//                                   "transition-opacity duration-200 opacity-0 group-hover/nested:opacity-100",
//                                   "left-full ml-2" // Always on the right with a small margin
//                                 )}
//                               >
//                                 {categoryCourses.map((course) => (
//                                   <li key={course.slug}>
//                                     <Link
//                                       href={`/courses/${course.slug}`}
//                                       className={cn(
//                                         "block p-2 rounded-md text-sm font-medium hover:bg-accent transition-colors",
//                                         pathname === `/courses/${course.slug}`
//                                           ? "bg-accent text-accent-foreground"
//                                           : "text-foreground"
//                                       )}
//                                     >
//                                       {course.title}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 </li>
//               ) : (
//                 <li key={item.path}>
//                   <Link
//                     href={item.path!}
//                     className={cn(
//                       "text-lg font-medium px-4 py-2 rounded-md transition-colors",
//                       pathname === item.path
//                         ? "text-primary font-semibold border-b-2 border-primary"
//                         : "text-foreground hover:text-primary hover:border-b-2 hover:border-primary/50"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//           <ThemeToggle />
//           <EnquireButton />
//         </nav>

//         {/* Mobile Navigation */}
//         <div className="flex items-center lg:hidden">
//           <ThemeToggle />
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="ml-2">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[250px] sm:w-[300px] overflow-y-auto max-h-screen">
//               <div className="flex flex-col gap-4 py-6">
//                 {navItems.map((item) => (
//                   <div key={item.name}>
//                     {item.name === "Courses" ? (
//                       <>
//                         <button
//                           onClick={() => handleMobileDropdownToggle(item.name)}
//                           className={cn(
//                             "flex items-center text-lg font-medium text-foreground w-full text-left"
//                           )}
//                         >
//                           Courses
//                           <ChevronRight
//                             className={cn(
//                               "h-5 w-5 ml-2 transition-transform",
//                               mobileDropdownOpen === item.name && "rotate-90"
//                             )}
//                           />
//                         </button>
//                         {mobileDropdownOpen === item.name && (
//                           <div className="ml-4 mt-2 flex flex-col gap-2">
//                             {categories.map((category) => {
//                               const categoryCourses = courses.filter(
//                                 (course) => course.category === category.value
//                               );
//                               if (categoryCourses.length === 0) return null;
//                               return (
//                                 <div key={category.value}>
//                                   <button
//                                     onClick={() => handleMobileCategoryToggle(category.value)}
//                                     className={cn(
//                                       "flex items-center text-sm font-medium text-foreground w-full text-left"
//                                     )}
//                                   >
//                                     {category.name}
//                                     <ChevronRight
//                                       className={cn(
//                                         "h-4 w-4 ml-2 transition-transform",
//                                         mobileCategoryOpen === category.value && "rotate-90"
//                                       )}
//                                     />
//                                   </button>
//                                   {mobileCategoryOpen === category.value && (
//                                     <div className="ml-4 mt-1 flex flex-col gap-1">
//                                       {categoryCourses.map((course) => (
//                                         <Link
//                                           key={course.slug}
//                                           href={`/courses/${course.slug}`}
//                                           className={cn(
//                                             "text-sm font-medium transition-colors hover:text-foreground",
//                                             pathname === `/courses/${course.slug}`
//                                               ? "text-foreground"
//                                               : "text-muted-foreground"
//                                           )}
//                                           onClick={() => setIsMobileMenuOpen(false)}
//                                         >
//                                           {course.title}
//                                         </Link>
//                                       ))}
//                                     </div>
//                                   )}
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         )}
//                       </>
//                     ) : item.dropdown ? (
//                       <>
//                         <button
//                           onClick={() => handleMobileDropdownToggle(item.name)}
//                           className={cn(
//                             "flex items-center text-lg font-medium text-foreground w-full text-left"
//                           )}
//                         >
//                           {item.name}
//                           <ChevronRight
//                             className={cn(
//                               "h-5 w-5 ml-2 transition-transform",
//                               mobileDropdownOpen === item.name && "rotate-90"
//                             )}
//                           />
//                         </button>
//                         {mobileDropdownOpen === item.name && (
//                           <div className="ml-4 mt-2 flex flex-col gap-2">
//                             {item.dropdown.map((dropdownItem) => (
//                               <Link
//                                 key={dropdownItem.path}
//                                 href={dropdownItem.path}
//                                 className={cn(
//                                   "text-sm font-medium transition-colors hover:text-foreground",
//                                   pathname === dropdownItem.path
//                                     ? "text-foreground"
//                                     : "text-muted-foreground"
//                                 )}
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                               >
//                                 {dropdownItem.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </>
//                     ) : (
//                       <Link
//                         href={item.path!}
//                         className={cn(
//                           "text-lg font-medium transition-colors hover:text-foreground",
//                           pathname === item.path
//                             ? "text-foreground"
//                             : "text-muted-foreground"
//                         )}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//                 <Button className="mt-4 bg-gradient-to-r from-primary to-accent">
//                   Apply Now
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }
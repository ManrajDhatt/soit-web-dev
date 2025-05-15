// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import Image from "next/image";
// // // import { useTheme } from "next-themes";
// // // import { cn } from "@/lib/utils";

// // // import { ThemeToggle } from "@/components/layout/theme-toggle";
// // // import { Button } from "@/components/ui/button";
// // // import { EnquireButton } from "../ui/enquireNow";

// // // import {
// // //   NavigationMenu,
// // //   NavigationMenuContent,
// // //   NavigationMenuItem,
// // //   NavigationMenuLink,
// // //   NavigationMenuList,
// // //   NavigationMenuTrigger,
// // //   navigationMenuTriggerStyle,
// // // } from "@/components/ui/navigation-menu";

// // // import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// // // import { Menu } from "lucide-react";

// // // const navItems = [
// // //   { name: "Home", path: "/" },
// // //   { name: "About Us", path: "/about" },
// // //   {name:"Admission",path:"/admission"},
// // //   { name: "Courses", path: "/courses" },
// // //   { name: "Contact", path: "/contact" },
// // // ];

// // // export function Navbar() {
// // //   const pathname = usePathname();
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const { theme } = useTheme();

// // //   // Prevent hydration mismatch
// // //   const [mounted, setMounted] = useState(false);
// // //   useEffect(() => {
// // //     setMounted(true);
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 20);
// // //     };
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const logoSrc = mounted
// // //     ? theme === "light"
// // //       ? "/logo.png"
// // //       : "/logo_whitetext.png"
// // //     : "/logo.png"; // Fallback to light during SSR

// // //   return (
// // //     <header
// // //       className={cn(
// // //         "fixed top-2 z-50 w-full transition-all duration-300",
// // //         isScrolled
// // //           ? "bg-background/80 backdrop-blur-md shadow-lg"
// // //           : "bg-transparent"
// // //       )}
// // //     >
// // //       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
// // //         {/* Logo */}
// // //         <Link href="/" className="flex items-center space-x-2">
// // //           {mounted && (
// // //             <Image
// // //               src={logoSrc}
// // //               alt="Company Logo"
// // //               width={300}
// // //               height={150}
// // //               priority
// // //             />
// // //           )}
// // //         </Link>

// // //         {/* Desktop Navigation */}
// // //         <nav className="hidden lg:flex lg:items-center lg:space-x-6">
// // //           <NavigationMenu>
// // //             <NavigationMenuList>
// // //               {navItems.map((item) => (
// // //                 <NavigationMenuItem key={item.path}>
// // //                   <Link href={item.path} legacyBehavior passHref>
// // //                     <NavigationMenuLink
// // //                       className={cn(
// // //                         navigationMenuTriggerStyle(),
// // //                         "nav-link",
// // //                         pathname === item.path && "active"
// // //                       )}
// // //                     >
// // //                       {item.name}
// // //                     </NavigationMenuLink>
// // //                   </Link>
// // //                 </NavigationMenuItem>
// // //               ))}
// // //             </NavigationMenuList>
// // //           </NavigationMenu>
// // //           <ThemeToggle />
// // //           <EnquireButton />
// // //         </nav>

// // //         {/* Mobile Navigation */}
// // //         <div className="flex items-center lg:hidden">
// // //           <ThemeToggle />
// // //           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
// // //             <SheetTrigger asChild>
// // //               <Button variant="ghost" size="icon" className="ml-2">
// // //                 <Menu className="h-5 w-5" />
// // //                 <span className="sr-only">Toggle menu</span>
// // //               </Button>
// // //             </SheetTrigger>
// // //             <SheetContent side="right" className="w-[250px] sm:w-[300px]">
// // //               <div className="flex flex-col gap-6 py-6">
// // //                 {navItems.map((item) => (
// // //                   <Link
// // //                     key={item.path}
// // //                     href={item.path}
// // //                     className={cn(
// // //                       "text-lg font-medium transition-colors hover:text-foreground",
// // //                       pathname === item.path
// // //                         ? "text-foreground"
// // //                         : "text-muted-foreground"
// // //                     )}
// // //                     onClick={() => setIsMobileMenuOpen(false)}
// // //                   >
// // //                     {item.name}
// // //                   </Link>
// // //                 ))}
// // //                 <Button className="mt-4 bg-gradient-to-r from-primary to-accent">
// // //                   Apply Now
// // //                 </Button>
// // //               </div>
// // //             </SheetContent>
// // //           </Sheet>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }


// // "use client";

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
//       // Add more dropdown items here, e.g.:
//       // { name: "Application Form Requirements", path: "/admissions/application-form" },
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

//   const logoSrc = mounted
//     ? theme === "light"
//       ? "/logo.png"
//       : "/logo_whitetext.png"
//     : "/logo.png"; // Fallback to light during SSR

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
//           {mounted && (
//             <Image
//               src={logoSrc}
//               alt="Company Logo"
//               width={300}
//               height={150}
//               priority
//             />
//           )}
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

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { EnquireButton } from "../ui/enquireNow";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Admission",
    dropdown: [
      { name: "Eligibility Criteria", path: "/admission/eligibility-criteria" },
      { name: "Admission Process", path: "/admission/admission-process" },
    ],
  },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Handle dropdown hover and click
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Use light logo as default during SSR and initial render
  const logoSrc = mounted && theme === "dark" ? "/logo_whitetext.png" : "/logo.png";

  return (
    <header
      className={cn(
        "fixed top-2 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logoSrc}
            alt="Company Logo"
            width={300}
            height={150}
            priority
            className="transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) =>
                item.dropdown ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenu>
                      <NavigationMenuTrigger
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "nav-link cursor-pointer",
                          pathname.startsWith("/admission") && "active"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-[250px] p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg left-0"
                      >
                        <ul className="flex flex-col gap-3">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={dropdownItem.path}
                                  className={cn(
                                    "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
                                    pathname === dropdownItem.path
                                      ? "bg-accent text-accent-foreground"
                                      : "text-foreground"
                                  )}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenu>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.path}>
                    <Link href={item.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "nav-link",
                          pathname === item.path && "active"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
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
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 py-6">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <span
                          className={cn(
                            "text-lg font-medium text-foreground cursor-default"
                          )}
                        >
                          {item.name}
                        </span>
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              href={dropdownItem.path}
                              className={cn(
                                "text-sm font-medium transition-colors hover:text-foreground",
                                pathname === dropdownItem.path
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-foreground",
                          pathname === item.path
                            ? "text-foreground"
                            : "text-muted-foreground"
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
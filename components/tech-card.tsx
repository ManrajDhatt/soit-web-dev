"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function TechnologyCard({ icon, title, description }: TechnologyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="tech-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 font-heading text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {isHovered && (
        <div className="absolute bottom-6 right-6 h-6 w-6">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
          <div className="absolute inset-0 rounded-full bg-primary/40" />
        </div>
      )}
    </div>
  );
}



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface TechnologyCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// export function TechnologyCard({ icon, title, description }: TechnologyCardProps) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Link href="/programs" passHref>
//       <div
//         className="tech-card group cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
//           {icon}
//         </div>
//         <h3 className="mb-2 font-heading text-xl font-semibold">{title}</h3>
//         <p className="text-muted-foreground">{description}</p>

//         {isHovered && (
//           <div className="absolute bottom-6 right-6 h-6 w-6">
//             <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
//             <div className="absolute inset-0 rounded-full bg-primary/40" />
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// }

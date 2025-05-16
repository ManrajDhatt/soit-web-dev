// export function PartnerLogos() {
//   // In a real implementation, these would be actual SVG logos
//   // We're using placeholders here for simplicity
//   const logos = [
//     { name: "Meta" },
//     { name: "Microsoft" },
//     { name: "Unity" },
//     { name: "Nvidia" },
//     { name: "HTC" },
//     { name: "Intel" },
//   ];
  
//   return (
//     <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
//       {logos.map((logo, index) => (
//         <div
//           key={index}
//           className="flex h-16 w-40 items-center justify-center rounded-md border border-border bg-card p-4"
//         >
//           <div className="text-lg font-semibold text-muted-foreground">
//             {logo.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import Image from "next/image";
export function PartnerLogos() {
  const logos = [
    { name: "Meta", logoUrl: "/logos/meta_logo.png",fit:"cover" },
    { name: "Microsoft", logoUrl: "/logos/microsoft_logo.png" ,fit:"cover"},
    { name: "Unity", logoUrl: "/logos/unity_logo.png" ,fit:"contain"},
    { name: "Nvidia", logoUrl: "/logos/nvidia_logo.png" ,fit:"cover"},
    { name: "HTC", logoUrl: "/logos/htc_logo.png" ,fit:"contain" },
    { name: "Intel", logoUrl: "/logos/intel-logo.png",fit:"contain" , scaleUp: true },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative h-16 w-40 rounded-md border border-border bg-card overflow-hidden"
        >
         <Image
  src={logo.logoUrl}
  alt={logo.name}
  fill
  className={`object-${logo.fit || "cover"} p-4 ${
    logo.scaleUp ? "scale-150" : ""
  } transition-transform`}
/>
        </div>
      ))}
    </div>
  );
}
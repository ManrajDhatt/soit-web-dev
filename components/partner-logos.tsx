export function PartnerLogos() {
  // In a real implementation, these would be actual SVG logos
  // We're using placeholders here for simplicity
  const logos = [
    { name: "Meta" },
    { name: "Microsoft" },
    { name: "Unity" },
    { name: "Nvidia" },
    { name: "HTC" },
    { name: "Intel" },
  ];
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex h-16 w-40 items-center justify-center rounded-md border border-border bg-card p-4"
        >
          <div className="text-lg font-semibold text-muted-foreground">
            {logo.name}
          </div>
        </div>
      ))}
    </div>
  );
}
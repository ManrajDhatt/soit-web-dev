// components/FacultyCard.tsx
import Image from "next/image";

interface Faculty {
  name: string;
  role: string;
  image: string;
}

export default function FacultyCard({ name, role, image }: Faculty) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
          <h3 className="text-center font-heading text-lg font-semibold">{name}</h3>
          <p className="text-center text-sm text-primary">{role}</p>
        </div>
      </div>
    </div>
  );
}

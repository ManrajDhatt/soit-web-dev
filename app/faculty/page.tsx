// app/faculty/page.tsx
import { facultyList } from "@/lib/faculty";
import FacultyCard from "@/components/FacultyCard";

export const metadata = {
    title: "Faculty | School of Immersive Technologies",
    description: "Meet the expert faculty members guiding our programs.",
  };
  
export default function FacultyPage() {
  return (
    <div className="container mx-auto py-24 px-4 sm:px-6">
      <h1 className="mb-12 text-center font-heading text-4xl font-bold tracking-tight">
        Meet Our Faculty
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facultyList.map((faculty, index) => (
          <FacultyCard
            key={index}
            name={faculty.name}
            role={faculty.role}
            image={faculty.image}
          />
        ))}
      </div>
    </div>
  );
}

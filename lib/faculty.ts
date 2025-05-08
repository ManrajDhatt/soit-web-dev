// lib/faculty.ts
export interface Faculty {
    name: string;
    role: string;
    image: string;
  }
  
  export const facultyList: Faculty[] = [
    {
      name: "Dr. Rajiv Mehta",
      role: "Professor of Spatial Computing",
      image:"placeholder.jpg"
    },
    {
      name: "Dr. Sarah Williams",
      role: "Associate Professor of VR Design",
      image:"placeholder.jpg"    },
    {
      name: "Prof. Anand Krishnan",
      role: "Assistant Professor of AR Applications",
      image:"placeholder.jpg"    },
    {
      name: "Dr. Maya Patel",
      role: "Professor of Immersive Learning",
      image:"placeholder.jpg"    },
    // Add more faculty here
  ];
  
// import { Glasses, AtomIcon, Smartphone, Lightbulb, GraduationCap, Users, Braces, Brain, Headset as VrHeadset } from "lucide-react";

// export const Icons = {
//   logo: VrHeadset,
//   vr: VrHeadset,
//   ar: Glasses,
//   innovation: Lightbulb,
//   tech: AtomIcon,
//   mobile: Smartphone,
//   education: GraduationCap,
//   community: Users,
//   code: Braces,
//   ai: Brain,
  

import { 
  Glasses, 
  AtomIcon, 
  Smartphone, 
  Lightbulb, 
  GraduationCap, 
  Users, 
  Braces, 
  Brain, 
  Headset as VrHeadset,
  Clapperboard, // for videoEditing
  Palette, // for graphicDesign
  Film, // for cellAnimation
  UserCog, // for characterAnimation
  Gamepad2, // for gameDevelopment
  Bot, // for robotics
  CuboidIcon,// for threeDModeling
  Video, // for threeDAnimation
  Brush, // for texturing
  Sparkles, // for vfx
  Lamp, // for lighting
  MonitorPlay, // for multimedia
  Cuboid
} from "lucide-react";

export const Icons = {
  logo: VrHeadset,
  vr: VrHeadset,
  ar: Glasses,
  innovation: Lightbulb,
  tech: AtomIcon,
  mobile: Smartphone,
  education: GraduationCap,
  community: Users,
  code: Braces,
  ai: Brain,
  multimedia: MonitorPlay, // Represents multimedia content
  videoEditing: Clapperboard, // Symbolizes video production
  graphicDesign: Palette, // Represents design and creativity
  cellAnimation: Film, // Evokes frame-by-frame animation
  characterAnimation: UserCog, // Suggests character rigging/animation
  gameDevelopment: Gamepad2, // Clearly tied to gaming
  robotics: Bot, // Represents robots and automation
  threeDModeling: CuboidIcon, // Symbolizes 3D geometry
  threeDAnimation: Video, // Suggests motion in 3D
  texturing: Brush, // Evokes applying textures
  vfx: Sparkles, // Represents visual effects
  lighting: Lamp, // Symbolizes lighting in scenes

  spinner: ({ className, ...props }: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`animate-spin ${className}`}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
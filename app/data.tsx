import MapIcon from "@/public/Icons/Map.svg";
import EmergencyIcon from "@/public/Icons/Emergency.svg";
import RouteIcon from "@/public/Icons/Route.svg";

import profileRam from "@/public/Team/ram.png";
import profileKent from "@/public/Team/kent.png";
import profileVic from "@/public/Team/vic.png";
import profileJm from "@/public/Team/jm.png";

export const navigationLinks = [
  { id: 1, title: "About", link: "#about" },
  { id: 2, title: "Contact", link: "#contact" },
  { id: 3, title: "Download", link: process.env.NEXT_PUBLIC_APP_LINK ?? "" },
];

export const footerLinks = [
  { id: 1, title: "About", link: "#about" },
  { id: 2, title: "Contact", link: "#contact" },
  {
    id: 3,
    title: "Download Mobile App",
    link: process.env.NEXT_PUBLIC_APP_LINK ?? "",
  },
];

export const AppFeatures = [
  {
    id: 1,
    title: "Pin Your Destination",
    description: "Set your destination with ease for guided navigation.",
    icon: MapIcon.src,
  },
  {
    id: 2,
    title: "Emergency",
    description: "Quickly alert for help when it matters most.",
    icon: EmergencyIcon.src,
  },
  {
    id: 3,
    title: "Route Assistance",
    description:
      "Easily locate routes, stops, and fares for more efficient commuting.",
    icon: RouteIcon.src,
  },
  // {
  //   id: 4,
  //   title: "Lorem Ipsum",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum",
  //   icon: MapIcon.src,
  // },
];

export const TeamProfile = [
  {
    id: 1,
    name: "Franco, Ram Christian",
    position: "Developer",
    img: profileRam,
  },
  { id: 2, name: "Wagai, Kentshin", position: "Developer", img: profileKent },
  {
    id: 3,
    name: "De Jesus, Juan Miguel",
    position: "Researcher",
    img: profileJm,
  },
  {
    id: 4,
    name: "Bayona, Victor Daniel",
    position: "Researcher",
    img: profileVic,
  },
];

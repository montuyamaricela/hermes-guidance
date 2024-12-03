import MapIcon from "@/public/Icons/Map.svg";
import EmergencyIcon from "@/public/Icons/Emergency.svg";

export const navigationLinks = [
  { id: 1, title: "About", link: "/" },
  { id: 2, title: "Contact", link: "/" },
  { id: 3, title: "Download", link: "/" },
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
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum",
    icon: MapIcon.src,
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum",
    icon: MapIcon.src,
  },
];

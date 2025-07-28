import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#Features" },
  { label: "Workflow", href: "#Workflow" },
  { label: "Pricing", href: "#Price" },
  { label: "About Me", href:"#About Me" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod. Quod voluptatem at eaque voluptatum, quisquam provident accusamus sint aliquam laudantium tenetur, ratione veniam?",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod. Quod voluptatem at eaque voluptatum, quisquam provident accusamus sint aliquam laudantium tenetur, ratione veniam?",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod. Quod voluptatem at eaque voluptatum, quisquam provident accusamus sint aliquam laudantium tenetur, ratione veniam?",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod. Quod voluptatem at eaque voluptatum, quisquam provident accusamus sint aliquam laudantium tenetur, ratione veniam?",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod. Quod voluptatem at eaque voluptatum, quisquam provident accusamus sint aliquam laudantium tenetur, ratione veniam?",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod. Quod voluptatem at eaque voluptatum, quisquam provident accusamus sint aliquam laudantium tenetur, ratione veniam?",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    title: "Review code without worry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
  {
    title: "Share work in minutes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vel debitis optio, dolorem veritatis quod.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private sessions",
      "",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private sessions",
      "",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private sessions",
      "",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

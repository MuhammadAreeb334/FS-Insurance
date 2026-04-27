// components/products/data.js
import {
  Building2,
  Shield,
  Wrench,
  Car,
  Umbrella,
  HardHat,
  Computer,
  Droplets,
  AlertTriangle,
  Wine,
  Users,
} from "lucide-react";

// Data arrays
export const convenienceFeatures = [
  "Full Service Repair",
  "Incidental Towing",
  "Kiosk",
  "Car Wash",
  "24 Hour Operation",
  "Liquor and Restaurant exposures",
  "Special Form, replacement cost with no coinsurance",
];

export const propertyFeatures = [
  "Money & Securities",
  "Employee Dishonesty",
  "Business Income",
];

export const liabilityFeatures = [
  "Medical Payments",
  "Fire Damage Legal Liability",
  "Limited Pollution exclusion",
  "Hired & Non-Owned Automobile",
];

export const optionalCoverages = [
  { icon: Computer, name: "Small Business Computer" },
  { icon: Wrench, name: "Energy Equipment Breakdown" },
  { icon: Users, name: "Employee Benefits Liability" },
  { icon: Droplets, name: "Food Spoilage" },
  { icon: Droplets, name: "Flood" },
  { icon: AlertTriangle, name: "Earthquake" },
  {
    icon: Wine,
    name: "Liquor Liability (when applicable; if alcoholic beverages are sold)",
  },
];

export const autoFeatures = [
  "Light and Medium Tow Trucks",
  "Light Commercial, Local Use Vehicles",
];

export const autoEndorsements = [
  "Hired Auto Physical Damage",
  "Non-Owned & Hired Liability",
  "Rental Reimbursement",
  "Towing",
];

export const umbrellaFeatures = [
  "Limits available from $1 – $10 million",
  "Excess Liability coverage over and above:",
  "Package premises and liability (liquor liability – if applicable)",
  "Hired & Non-Owned Liability",
  "Workers' Compensation Employers Liability",
];

// Animation Variants
export const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

export const headerItemVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export const leftToRightVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export const rightToLeftVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export const featureItemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.08, ease: "easeOut" },
  }),
};
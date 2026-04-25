// components/about/data.js
import {
  Building2,
  Clock,
  Phone,
  Shield,
  Award,
  Users,
  Briefcase,
  Wrench,
  Scale,
  Wine,
  CarFront,
  Truck,
  Umbrella,
  HardHat,
  Droplets,
  CheckCircle2,
  Globe,
  Star,
  Calendar,
} from "lucide-react";

// Industries Data
export const industries = [
  { name: "Gas Stations", icon: <Truck className="w-5 h-5" /> },
  { name: "Truck Stops", icon: <Truck className="w-5 h-5" /> },
  { name: "Convenience Stores", icon: <Building2 className="w-5 h-5" /> },
  { name: "Repair Shops", icon: <Wrench className="w-5 h-5" /> },
  { name: "Car Washes", icon: <CarFront className="w-5 h-5" /> },
  { name: "Hotels", icon: <Building2 className="w-5 h-5" /> },
  { name: "Motels", icon: <Building2 className="w-5 h-5" /> },
  { name: "Restaurants", icon: <Wine className="w-5 h-5" /> },
  { name: "Shopping Centers", icon: <Building2 className="w-5 h-5" /> },
  { name: "Dry Cleaners", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Laundry Mats", icon: <Briefcase className="w-5 h-5" /> },
];

// Products Data
export const products = [
  { name: "Commercial Property", icon: <Building2 className="w-6 h-6" /> },
  { name: "General Liability", icon: <Shield className="w-6 h-6" /> },
  { name: "Equipment Breakdown", icon: <Wrench className="w-6 h-6" /> },
  { name: "Crime & Fidelity", icon: <Shield className="w-6 h-6" /> },
  { name: "Liquor Liability", icon: <Wine className="w-6 h-6" /> },
  { name: "Hired & Non-Owned Auto", icon: <CarFront className="w-6 h-6" /> },
];

// Monoline Coverage Data
export const monolineCoverage = [
  { name: "Property and Liability", icon: <Shield className="w-5 h-5" /> },
  { name: "Worker's Compensation", icon: <HardHat className="w-5 h-5" /> },
  { name: "Umbrella", icon: <Umbrella className="w-5 h-5" /> },
  { name: "Commercial Auto", icon: <CarFront className="w-5 h-5" /> },
  { name: "EPLI", icon: <Scale className="w-5 h-5" /> },
  { name: "Storage Tank Pollution Liability", icon: <Droplets className="w-5 h-5" /> },
];

// Stats Data
export const stats = [
  { value: "1996", label: "Year Established", icon: <Calendar className="w-5 h-5" /> },
  { value: "1000+", label: "Businesses Protected", icon: <Building2 className="w-5 h-5" /> },
  { value: "50+", label: "Insurance Partners", icon: <Shield className="w-5 h-5" /> },
  { value: "28+", label: "Years of Experience", icon: <Award className="w-5 h-5" /> },
];

// Why Choose Us Data
export const whyChooseData = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Specialized Expertise",
    description: "Decades of experience serving niche industries with tailored coverage solutions."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Trusted Partners",
    description: "Working with industry's leading insurance companies and program administrators."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Claim Support",
    description: "Fast claims processing with dedicated support team available when you need us."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Nationwide Coverage",
    description: "Serving businesses across multiple states with comprehensive protection."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Industry Leadership",
    description: "Trusted provider since 1996 with proven track record of excellence."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Customized Solutions",
    description: "Flexible coverage options tailored to your specific business needs."
  }
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
      damping: 15
    },
  },
};

export const statsCardVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.2,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 15
    },
  }),
};

export const industryItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 1.1,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
      type: "spring",
      stiffness: 100,
      damping: 16
    },
  }),
};

export const productItemVariants = {
  hidden: { x: -60, opacity: 0, scale: 0.9 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.1,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
      type: "spring",
      stiffness: 100,
      damping: 16
    },
  }),
};

export const monolineItemVariants = {
  hidden: { x: 60, opacity: 0, scale: 0.9 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.1,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
      type: "spring",
      stiffness: 100,
      damping: 16
    },
  }),
};

export const whyChooseVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.9, rotateX: 15 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 1.1,
      delay: i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
      type: "spring",
      stiffness: 100,
      damping: 16
    },
  }),
};
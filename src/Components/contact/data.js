// components/contact/data.js

// Animation variants
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

export const formVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
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

export const inputVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      delay: i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  }),
};

// Office Locations Data
export const officeLocations = [
  {
    name: "Georgia Office",
    address: "1825 Locke way Drive, Suite # 205,",
    city: "Alpharetta, GA 30004",
    phones: ["770-242-9429", "770-242-9431"],
    icon: "Georgia",
  },
  {
    name: "Florida Office",
    address: "5373 N Nob Hill Road,",
    city: "Sunrise, FL 33351",
    phones: ["954-572-0299", "954-735-8889"],
    icon: "Florida",
  },
  {
    name: "Texas Office",
    address: "8610 N. Lamar Suite # 103,",
    city: "Austin, TX 78753",
    phones: ["954-572-0299", "770-242-9431"],
    icon: "Texas",
  },
];
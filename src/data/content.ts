export const profile = {
  name: "Daniel Wang",
  firstName: "Daniel",
  tagline: "Firmware & Software Engineering Student",
  email: "wangww1117@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-wang-9a4bb4248",
  github: "https://github.com/Daniel-Xiao-Wang",
  resumePath: "/resume.pdf",
  bio: [
    "I'm a Computer Systems Engineering student at Carleton University focused on embedded systems, firmware, and building practical software tools.",
    "Recently I've been writing and debugging firmware across vehicle control variants at Ford of Canada, and I enjoy pairing low-level systems work with clean, usable applications.",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "C", "HTML"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Jenkins",
      "Linux",
      "VS Code",
      "Docker",
      "Jira",
      "DaVinci Configurator",
    ],
  },
  {
    category: "Automation & Testing",
    items: ["pytest", "unittest", "logging", "Automated scripting"],
  },
  {
    category: "Embedded Concepts",
    items: [
      "Embedded Linux",
      "OS-level Debugging",
      "ECG/TCU Firmware",
      "DBC Integration",
      "Flashing & Debugging",
      "SRAM Optimization",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Flask",
      "React",
      "Scikit-learn",
      "OpenCV",
      "Tesseract OCR",
      "Tkinter",
      "Geolocation APIs",
    ],
  },
];

export const experience = [
  {
    title: "Firmware Development Student",
    company: "Ford of Canada",
    location: "Ottawa (Kanata), ON",
    period: "May – August 2026",
    description: [
      "Delivered functional code changes across 49 ECG variants and 6 TCU variants, including DaVinci Configurator updates such as DBC integration.",
      "Flashed and debugged firmware directly on hardware, monitoring SRAM usage and reducing consumption by 10–25% by removing unnecessary code.",
      "Tracked and managed development tasks in Jira within an Agile DevOps workflow.",
      "Maintained version control across all variant codebases using GitHub.",
    ],
  },
  {
    title: "Computer Programmer",
    company: "CoderSports",
    location: "",
    period: "June 2023 – August 2023",
    description: [
      "Designed and developed coding problems and instructional materials for elementary-aged students.",
      "Organized and maintained codebases using GitHub, ensuring version control and consistency across lessons.",
      "Led a team of 3 instructors, coordinating tasks and supporting lesson delivery.",
      "Communicated technical concepts clearly to non-technical learners, fostering problem-solving skills.",
    ],
  },
  {
    title: "Research and Data Analysis Intern",
    company: "miRonCol Diagnostics",
    location: "",
    period: "March 2020 – November 2022",
    description: [
      "Cleaned, tested, and analyzed large biological and clinical datasets to identify trends and anomalies.",
      "Applied statistical reasoning to generate actionable research insights that improved team efficiency.",
      "Prepared structured reports summarizing findings for cross-functional research teams.",
      "Improved data reliability by validating inputs and flagging inconsistencies.",
    ],
  },
];

export const projects = [
  {
    title: "PokerBud",
    subtitle: "AI Strategy Tool",
    period: "May 2025 – July 2025",
    description:
      "An AI-assisted poker strategy tool that uses Claude for hand strength and pot-odds guidance, OpenCV and Tesseract for OCR game-state extraction from screenshots, and a Tkinter GUI with hand-history tracking and dual input modes.",
    tech: ["Python", "Claude API", "OpenCV", "Tesseract", "Tkinter"],
    github: "https://github.com/Daniel-Xiao-Wang/PokerBud",
    demo: "/demos/pokerbud.mp4",
    video: "/demos/pokerbud.mp4" as string | null,
    image: null as string | null,
  },
  {
    title: "Smart Parking Marketplace",
    subtitle: "Mobile / Web App",
    period: "December 2025 – Present",
    description:
      "A React-based parking marketplace with real-time space booking via geolocation, backed by Flask REST APIs for login, listings, and booking logic. Built with modular components, accessibility, and future scalability in mind.",
    tech: ["JavaScript", "React", "Flask", "Geolocation"],
    github: null as string | null,
    demo: null as string | null,
    video: null as string | null,
    image: null as string | null,
  },
  {
    title: "Hopeful Ribbon",
    subtitle: "ML Health Risk Tool",
    period: "March 2023 – April 2023",
    description:
      "A machine learning web app that assesses breast cancer risk from fine-needle aspiration cell data. Reduced 30 features to the 3 most significant, trained a KNN model to 91% accuracy, and connected at-risk users to nearby specialized facilities with email and geolocation alerts.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Location APIs"],
    github: null as string | null,
    demo: null as string | null,
    video: null as string | null,
    image: null as string | null,
  },
];

export const education = {
  school: "Carleton University",
  degree: "Bachelor of Engineering, Computer Systems Engineering",
  period: "September 2024 – April 2029",
  focus:
    "Embedded Systems, Software Development, Automation, Python & C++ Programming",
  courses: [
    "Mechatronics",
    "Data Management",
    "Programming",
    "Data Structures & Algorithms",
    "OOP",
    "Digital Systems",
  ],
};

export const softSkills = [
  {
    title: "Fast learner",
    detail: "Pick up new tools and domains quickly when the work demands it.",
  },
  {
    title: "Debugging mindset",
    detail: "Comfortable tracing issues from source to hardware or data.",
  },
  {
    title: "Clear communicator",
    detail: "Collaborate effectively across multi-site and cross-functional teams.",
  },
  {
    title: "Self-driven",
    detail: "Stay motivated and accountable in agile, fast-moving environments.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

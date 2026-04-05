import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";

// ─────────────────────────── SVG ICONS (NO BACKGROUND RECTANGLES, PURE CUTOUTS) ────────────────────────────────────

const PythonIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <defs>
      <linearGradient id="pyTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5a9fd4" />
        <stop offset="100%" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="pyBot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd43b" />
        <stop offset="100%" stopColor="#ffe873" />
      </linearGradient>
    </defs>
    <path d="M25.5 4c-5.5 0-9.5 2.4-9.5 6v4h9.5v1.5H12c-3.5 0-6.5 2.1-7.5 6.5-1.1 5-.1 9 2.5 11.5 2 2 4.5 2.5 7 2.5h4v-5c0-4 3.5-7 7.5-7h9.5c3.5 0 6-2.5 6-6V10c0-3.5-2.8-6-6-6zm-5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="url(#pyTop)" />
    <path d="M43.5 17.5h-4v5c0 4-3.5 7-7.5 7H22.5c-3.5 0-6 2.5-6 6V42c0 3.5 3 6 6.5 6 5.5 0 9.5-2.4 9.5-6v-4H22.5V36.5H36c3.5 0 6.5-2.1 7.5-6.5 1.1-5 .1-9-2.5-11.5-1-1-2.5-1-2.5-1h5zm-11.5 21c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="url(#pyBot)" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect width="48" height="48" x="2" y="2" rx="10" fill="#f7df1e" />
    <text x="7" y="41" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="26" fill="#323330">JS</text>
  </svg>
);

const CIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M40 14 C33 6, 17 6, 10 14 C2 24, 2 37, 10 44 C18 52, 33 52, 40 44 L32 36 C28 40, 20 40, 16 35 C12 30, 12 25, 16 19 C20 14, 28 14, 32 19 Z" fill="#5c6bc0" />
    <text x="36" y="32" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="16" fill="#5c6bc0">+</text>
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M19 38s-2 1.2 1.4 1.6c4 .5 6 .4 10.4-.4 0 0 1.2.7 2.8 1.4-10 4.3-22.6-.2-14.6-2.6zM17.5 33s-2.2 1.6 1.2 2c4.4.4 7.8.5 13.8-.7 0 0 .8.8 2 1.3-12.2 3.6-25.8.3-17-2.6z" fill="#f89820" />
    <path d="M29 19.4c2.5 2.9-.7 5.5-.7 5.5s6.3-3.2 3.4-7.3c-2.7-3.8-4.8-5.7 6.5-12.1 0 0-17.8 4.4-9.2 13.9z" fill="#f89820" />
    <path d="M40.7 42.4s1.6 1.3-1.8 2.4c-6.4 1.9-26.7 2.5-32.3.1-2-.9.7-2.1 1.6-2.4.9-.2 1.4-.2 1.4-.2-1.6-1.1-10.6 2.3-4.6 3.3 16.6 2.7 30.2-1.2 35.7-3.2zM20.3 27.4s-7.4 1.8-2.6 2.4c2 .3 6 .2 9.7-.1 3-.3 6.1-.9 6.1-.9s-1.1.5-1.9.9c-7.5 2-22 1.1-17.9-.9 3.5-1.7 6.6-1.4 6.6-1.4zM36.9 36.9c7.6-4 4.1-7.8 1.6-7.3-.6.1-.9.2-.9.2s.2-.4.7-.5c5.1-1.8 9 5.3-1.5 8.1 0 0 .1-.1.1-.5z" fill="#f89820" />
    <path d="M31.5 4s4.2 4.2-4 10.7c-6.6 5.2-1.5 8.2 0 11.6-3.9-3.5-6.7-6.5-4.8-9.4 2.8-4.2 10.6-6.2 8.8-12.9z" fill="#f89820" />
    <path d="M21.3 47.6c7.3.5 18.5-.3 18.8-3.6 0 0-.5 1.3-6 2.3-6.3 1.2-14 1-18.5.3 0 0 .9.8 5.7 1z" fill="#f89820" />
  </svg>
);

const HTML5Icon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <polygon points="6,4 8.8,42 26,47 43.2,42 46,4" fill="#e44d26" />
    <polygon points="26,8 26,43 38.5,39.5 41,8" fill="#f16529" />
    <polygon points="15,15 16.3,27 26,27 26,15" fill="white" />
    <polygon points="26,15 26,27 36,27 35,32.5 26,35 17,32.5 16.5,28 13,28 14.2,36.5 26,40 37.8,36.5 39.5,15" fill="white" />
  </svg>
);

const CSS3Icon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <polygon points="6,4 8.8,42 26,47 43.2,42 46,4" fill="#1572b6" />
    <polygon points="26,8 26,43 38.5,39.5 41,8" fill="#33a9dc" />
    <polygon points="15,15 16.3,27 26,27 26,15" fill="white" />
    <polygon points="26,15 26,27 36,27 35,32.5 26,35 17,32.5 16.5,28 13,28 14.2,36.5 26,40 37.8,36.5 39.5,15" fill="white" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M26 13c-5.2 0-8.5 2.6-9.8 7.8 1.96-2.6 4.25-3.575 6.85-2.925 1.49-.372 2.555 1.454 3.73 2.643C28.6 22.375 31.2 25 36.2 25c5.2 0 8.5-2.6 9.8-7.8-1.96 2.6-4.25 3.575-6.85 2.925-1.49-.372-2.555-1.454-3.73-2.643C33.6 15.625 31 13 26 13zm-10.2 13c-5.2 0-8.5 2.6-9.8 7.8 1.96-2.6 4.25-3.575 6.85-2.925 1.49.372 2.555 1.454 3.73 2.643C18.4 35.375 21 38 26 38c5.2 0 8.5-2.6 9.8-7.8-1.96 2.6-4.25 3.575-6.85 2.925-1.49-.372-2.555-1.454-3.73-2.643C23.4 28.625 20.8 26 15.8 26z" fill="#0ea5e9" transform="scale(1.2) translate(-4, 2)" />
  </svg>
);

const DaisyUIIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <circle cx="26" cy="26" r="14" fill="#1fb2a6" />
    <circle cx="26" cy="12" r="6" fill="#ffec40" />
    <circle cx="26" cy="40" r="6" fill="#ff69b4" />
    <circle cx="12" cy="26" r="6" fill="#ff69b4" />
    <circle cx="40" cy="26" r="6" fill="#4ade80" />
    <circle cx="16" cy="16" r="5" fill="#4ade80" />
    <circle cx="36" cy="16" r="5" fill="#a855f7" />
    <circle cx="16" cy="36" r="5" fill="#a855f7" />
    <circle cx="36" cy="36" r="5" fill="#38bdf8" />
  </svg>
);

const NextJSIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <polygon points="26,2 48,15 48,39 26,51 4,39 4,15" fill="white" />
    <text x="26" y="24" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="11" fill="#000">NEXT</text>
    <text x="26" y="36" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="10" fill="#222" letterSpacing="1">.JS</text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <circle cx="26" cy="26" r="4" fill="#61dafb" />
    <ellipse cx="26" cy="26" rx="21" ry="8" fill="none" stroke="#61dafb" strokeWidth="2.5" />
    <ellipse cx="26" cy="26" rx="21" ry="8" fill="none" stroke="#61dafb" strokeWidth="2.5" transform="rotate(60 26 26)" />
    <ellipse cx="26" cy="26" rx="21" ry="8" fill="none" stroke="#61dafb" strokeWidth="2.5" transform="rotate(120 26 26)" />
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect width="48" height="48" x="2" y="2" rx="10" fill="#092e20" />
    <text x="26" y="24" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="11" fill="#44b78b" letterSpacing="0.5">DJANGO</text>
    <rect x="15" y="28" width="6" height="15" rx="2" fill="#44b78b" />
    <rect x="25" y="28" width="6" height="10" rx="2" fill="#44b78b" />
    <path d="M31 39c0 3-2 3.5-5 3.5" fill="none" stroke="#44b78b" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const UnityIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M26 6l20 11.5v23L26 52 6 40.5v-23z" fill="none" stroke="white" strokeWidth="3" />
    <line x1="26" y1="6" x2="26" y2="19" stroke="white" strokeWidth="2.5" />
    <line x1="46" y1="17.5" x2="35" y2="24" stroke="white" strokeWidth="2.5" />
    <line x1="46" y1="40.5" x2="35" y2="34" stroke="white" strokeWidth="2.5" />
    <line x1="26" y1="52" x2="26" y2="39" stroke="white" strokeWidth="2.5" />
    <line x1="6" y1="40.5" x2="17" y2="34" stroke="white" strokeWidth="2.5" />
    <line x1="6" y1="17.5" x2="17" y2="24" stroke="white" strokeWidth="2.5" />
    <circle cx="26" cy="26" r="4" fill="white" />
  </svg>
);

const CSharpIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <polygon points="26,2 48,15 48,39 26,51 4,39 4,15" fill="#9b4f96" />
    <text x="26" y="32" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="18" fill="white">C#</text>
  </svg>
);

const ARFoundationIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect x="5" y="5" width="13" height="13" rx="2" fill="none" stroke="#0ea5e9" strokeWidth="4" />
    <rect x="34" y="5" width="13" height="13" rx="2" fill="none" stroke="#0ea5e9" strokeWidth="4" />
    <rect x="5" y="34" width="13" height="13" rx="2" fill="none" stroke="#0ea5e9" strokeWidth="4" />
    <rect x="34" y="34" width="13" height="13" rx="2" fill="none" stroke="#0ea5e9" strokeWidth="4" />
    <circle cx="26" cy="26" r="6" fill="#0ea5e9" />
    <line x1="26" y1="16" x2="26" y2="36" stroke="#0ea5e9" strokeWidth="3" />
    <line x1="16" y1="26" x2="36" y2="26" stroke="#0ea5e9" strokeWidth="3" />
  </svg>
);

const VuforiaIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <circle cx="26" cy="22" r="14" fill="none" stroke="#a855f7" strokeWidth="3" />
    <circle cx="26" cy="22" r="6" fill="#a855f7" />
    <path d="M26 4v6M26 34v6M8 22h6M38 22h6" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
    <text x="26" y="47" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="9" fill="#a855f7">VUFORIA</text>
  </svg>
);

const MetaSDKIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M8 30c0-6 3.5-10 7.5-11 3.5-1 6.5.5 9 4.5l3.5 5.5 3.5-5.5c2.5-4 5.5-5.5 9-4.5 4 1 7.5 5 7.5 11s-3.5 11-8 12.5C34.5 44 29 40 24 33c-5 7-10.5 11-16 9.5C3.5 41 8 36 8 30z" fill="#0082fb" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <ellipse cx="26" cy="18" rx="20" ry="10" fill="#f29111" />
    <rect x="6" y="18" width="40" height="15" fill="#00758f" />
    <ellipse cx="26" cy="18" rx="20" ry="6" fill="#ffc107" opacity="0.8" />
    <ellipse cx="26" cy="33" rx="20" ry="10" fill="#005f73" />
    <text x="26" y="29" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="10" fill="white">MySQL</text>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M26 2c-10 13-14 22-14 30a14 14 0 0028 0c0-8-4-17-14-30z" fill="#47a248" />
    <path d="M26 2c4 7 7.5 13 9 19 2 5 2.5 10 1.5 14-1.5 7-6 12-10.5 14V2z" fill="#2e7d32" />
    <rect x="24" y="38" width="4" height="12" rx="2" fill="#47a248" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M47 24.6L27.4 5a3.2 3.2 0 00-4.5 0l-4.4 4.4 5.6 5.6a3.8 3.8 0 014.8 4.9L34 25a3.8 3.8 0 11-2.3 2.3L27 22.6V35a3.8 3.8 0 11-3.2 0V22.3a3.8 3.8 0 01-2.1-5L16 11.7 5 22.7a3.2 3.2 0 000 4.5l19.6 19.6a3.2 3.2 0 004.5 0L47 29.1a3.2 3.2 0 000-4.5z" fill="#f05032" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <path d="M38 4L12 26.5 4.5 20 2 23l8 6.5v1L2 37l2.5 3 7.5-6.5L38 56V4z" fill="#007acc" opacity="0.95" />
    <path d="M38 4L16 24l6 5L38 16V4z" fill="#007acc" opacity="0.55" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect x="14" y="2" width="12" height="12" rx="6" fill="#f24e1e" />
    <rect x="26" y="2" width="12" height="12" rx="6" fill="#ff7262" />
    <rect x="14" y="14" width="12" height="12" fill="#a259ff" />
    <circle cx="32" cy="20" r="6" fill="#1abcfe" />
    <rect x="14" y="26" width="12" height="12" rx="6" fill="#0acf83" />
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <circle cx="26" cy="26" r="20" fill="none" stroke="#00c4cc" strokeWidth="6" />
    <circle cx="26" cy="26" r="8" fill="#00c4cc" />
    <circle cx="26" cy="6" r="6" fill="#00c4cc" />
    <circle cx="26" cy="46" r="6" fill="#00c4cc" />
    <circle cx="6" cy="26" r="6" fill="#00c4cc" />
    <circle cx="46" cy="26" r="6" fill="#00c4cc" />
  </svg>
);

const MSOfficeIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect x="5" y="8" width="20" height="36" rx="3" fill="#d83b01" />
    <text x="15" y="32" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="18" fill="white">W</text>
    <rect x="27" y="8" width="20" height="17" rx="3" fill="#107c41" />
    <text x="37" y="21" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="10" fill="white">XL</text>
    <rect x="27" y="27" width="20" height="17" rx="3" fill="#0078d4" />
    <text x="37" y="40" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="10" fill="white">PP</text>
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <polygon points="10,4 42,4 42,18 26,18" fill="#0055ff" />
    <polygon points="10,18 26,18 42,32 10,32" fill="#0055ff" opacity="0.8" />
    <polygon points="10,32 26,32 26,48" fill="#0055ff" opacity="0.6" />
  </svg>
);

const AIToolsIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <circle cx="26" cy="14" r="8" fill="#f97316" />
    <circle cx="12" cy="38" r="7" fill="#a855f7" />
    <circle cx="40" cy="38" r="7" fill="#3b82f6" />
    <line x1="26" y1="22" x2="15" y2="33" stroke="#f97316" strokeWidth="3" />
    <line x1="26" y1="22" x2="37" y2="33" stroke="#3b82f6" strokeWidth="3" />
    <line x1="18" y1="38" x2="33" y2="38" stroke="#a855f7" strokeWidth="3" />
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect width="48" height="48" x="2" y="2" rx="10" fill="#7952b3" />
    <text x="26" y="38" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="34" fill="white">B</text>
  </svg>
);

const ResponsiveIcon = () => (
  <svg viewBox="0 0 52 52" width="100%" height="100%">
    <rect x="4" y="10" width="44" height="26" rx="4" fill="none" stroke="#38bdf8" strokeWidth="4" />
    <line x1="18" y1="44" x2="34" y2="44" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
    <line x1="26" y1="36" x2="26" y2="44" stroke="#38bdf8" strokeWidth="4" />
  </svg>
);

// ─────────────────────────── ALL SKILLS MAP ────────────────────────────────────

const ALL_SKILLS = [
  // Top Row: 9 items
  { name: "Python", icon: PythonIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "C", icon: CIcon },
  { name: "Java", icon: JavaIcon },
  { name: "HTML5", icon: HTML5Icon },
  { name: "CSS3", icon: CSS3Icon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "DaisyUI", icon: DaisyUIIcon },
  { name: "Bootstrap", icon: BootstrapIcon },

  // Row 2: 8 items
  { name: "JS Responsive Design", icon: ResponsiveIcon },
  { name: "Next.js", icon: NextJSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Django", icon: DjangoIcon },
  { name: "Unity", icon: UnityIcon },
  { name: "C#", icon: CSharpIcon },
  { name: "AR Foundation", icon: ARFoundationIcon },
  { name: "Vuforia", icon: VuforiaIcon },

  // Row 3: 6 items
  { name: "Meta SDK", icon: MetaSDKIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Git", icon: GitIcon },
  { name: "VS Code", icon: VSCodeIcon },
  { name: "Figma", icon: FigmaIcon },

  // Row 4: 4 items
  { name: "Canva", icon: CanvaIcon },
  { name: "MS Office Suite", icon: MSOfficeIcon },
  { name: "Framer", icon: FramerIcon },
  { name: "Advanced AI Tools", icon: AIToolsIcon },
];

const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const animationDelay = 0.1;

  const imageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={mainControls}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="flex items-center justify-center pointer-events-none select-none z-[10] m-[4px]"
    >
      {/* Made the size exactly match space portfolio which was 60px max width naturally */}
      <div className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] lg:w-[75px] lg:h-[75px]">
        <skill.icon />
      </div>
    </motion.div>
  );
};

export const Tech = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopRows = [
    ALL_SKILLS.slice(0, 9),
    ALL_SKILLS.slice(9, 17),
    ALL_SKILLS.slice(17, 23),
    ALL_SKILLS.slice(23, 27),
  ];

  // Mobile layout: structured beautifully into 6-5-6-5-5 for a natural fit
  const mobileRows = [
    ALL_SKILLS.slice(0, 6),
    ALL_SKILLS.slice(6, 11),
    ALL_SKILLS.slice(11, 17),
    ALL_SKILLS.slice(17, 22),
    ALL_SKILLS.slice(22, 27),
  ];

  const rows = isMobile ? mobileRows : desktopRows;

  let cumulativeIndex = 0;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-visible py-20 min-h-screen w-full"
      ref={ref}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center mb-10 z-[20]">
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 1.25 } }
          }}
          className="mb-8 w-full"
        >
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full z-[20] px-4 max-w-[1400px]">
        {rows.map((row, rowIndex) => {
          const currentRowIndex = cumulativeIndex;
          cumulativeIndex += row.length;
          
          return (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 items-center max-w-full"
            >
              {row.map((skill, i) => (
                <SkillItem key={skill.name} skill={skill} index={currentRowIndex + i} />
              ))}
            </div>
          );
        })}
      </div>

      {/* SPACE PORTFOLIO EXACT VIDEO BACKGROUND IMPLEMENTATION */}
      <div className="w-[100vw] h-full absolute top-0 left-1/2 -translate-x-1/2" style={{ pointerEvents: "none", zIndex: -10 }}>
        <div className="w-full h-full opacity-30 flex items-center justify-center overflow-hidden">
          <video
            className="w-full h-full object-cover pointer-events-none"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Tech;
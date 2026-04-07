import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  financialflowimage,
  databrandixWebsite,
  // enterpriseapitester,
  github,
  mongodb,
  microsoft,
  ibm,
  greenUniversity,
  cantonmentSchool,
  rudraBoira,
  databrandix,
  batteryLow,
  greenUniversityCcd,
  ictDivision,
  vanderbilt,
  wadhwani,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Science in Computer Science & Engineering (B.Sc.)",
    company_name: "Green University of Bangladesh, Dhaka, Bangladesh",
    icon: greenUniversity,
    iconBg: "#fff",
    date: "2022 – 2026 (Graduated)",
    points: [
      "Focused on Machine Learning, and AR/VR technologies.",
      "Strong foundation in core computer science and software engineering.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company_name: "Cantonment Public School and College, Momenshahi",
    icon: cantonmentSchool,
    iconBg: "#fff",
    date: "2017 – 2019",
    points: [
      "Developed a strong foundation in Mathematics and ICT.",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    company_name: "Rudra Boira High School",
    icon: rudraBoira,
    iconBg: "#fff",
    date: "2017",
    points: [
      "Built core analytical and problem-solving skills.",
    ],
  },
];


const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Databrandix",
    icon: databrandix,
    iconBg: "#fff",
    iconPadding: 15,
    date: "Jan 2026 – Present | Uttara, Dhaka",
    points: [
      "Develop and maintain responsive web applications using Next.js and React.",
      "Convert Figma/PSD designs into pixel-perfect frontend implementations.",
      "Optimize performance through code splitting, lazy loading, and refactoring.",
      "Collaborate with UI/UX designers and backend teams for scalable solutions.",
    ],
  },
  {
    title: "AR/VR Development Trainee",
    company_name: "Battery Low Interactive Ltd.",
    icon: batteryLow,
    iconBg: "#fff",
    iconPadding: 15,
    date: "Nov 2025 – Dec 2025 | Baridhara, Dhaka",
    points: [
      "Built immersive AR/VR applications using Unity and C#.",
      "Integrated AR Foundation, Vuforia, and Meta SDK for interactive prototypes.",
      "Developed functional demo experiences for client presentations.",
    ],
  },
  {
    title: "Career Development Intern",
    company_name: "Green University of Bangladesh – CCD",
    icon: greenUniversityCcd,
    iconBg: "#fff",
    date: "Sept 2025 – Dec 2025 | Rupganj, Narayanganj",
    points: [
      "Coordinated career programs and workshops for 100+ students.",
      "Managed departmental data entry and reporting systems.",
      "Supported communication between students and faculty members.",
    ],
  },
];


const extracurricular = [
  {
    title: "Python (Django) Web Development",
    type: "Digital Skills for Students (DS4S) – EDGE Project",
    icon: ictDivision,
    iconBg: "#ffffff",
    date: "Jul 2025 | IIT, Jahangirnagar University · ICT Division",
    points: [
      "Python Programming",
      "Django Web Framework",
      "Dynamic Web Application Development",
    ],
    credential: "https://training.edge.gov.bd/storage/certificate/student-training/certificate_6866330f820555.72975401.pdf",
  },
  {
    title: "Software Engineering with Generative AI Agents",
    type: "Vanderbilt University – Coursera",
    icon: vanderbilt,
    iconBg: "#ffffff",
    date: "Mar 2026",
    points: [
      "AI-Driven Software Architecture",
      "AI Agent Orchestration for Production Systems",
      "Prompt Engineering",
      "SDLC Automation with Generative AI",
      "Achievement: Completed with 100% grade",
    ],
    credential: "https://coursera.org/verify/OARXIKUHFHLI",
  },
  {
    title: "AI for App Building",
    type: "Google – Coursera",
    icon: google,
    iconBg: "#ffffff",
    iconHeight: 45,
    date: "Feb 2026",
    points: [
      "Specialized training on building applications by integrating AI technology.",
      "Using AI tools and generative models in app development workflows.",
      "Identity verified by Coursera.",
    ],
    credential: "https://coursera.org/verify/MOY923CL87VL",
  },
  {
    title: "AI for Data Analysis",
    type: "Google – Coursera",
    icon: google,
    iconBg: "#ffffff",
    iconHeight: 45,
    date: "Feb 2026",
    points: [
      "Applying Artificial Intelligence to make data analysis workflows more efficient.",
      "Using AI tools for data processing, pattern recognition, and generating actionable insights.",
      "Identity verified by Coursera.",
    ],
    credential: "https://coursera.org/verify/J83LZXZROYXR",
  },
  {
    title: "Job Ready: Employability Skills",
    type: "Wadhwani Foundation & Green University of Bangladesh",
    icon: wadhwani,
    iconBg: "#ffffff",
    iconHeight: 45,
    date: "Dec 2025",
    points: [
      "Communication & Professional Etiquette",
      "Teamwork, Collaboration & Problem Solving",
      "Workplace Readiness & Career Planning Fundamentals",
      "Training Duration: 79 Hours",
    ],
    credential: "https://web.certificate.wfglobal.org/en/certificate?certificateId=694e5d0be148b98d900977b2",
  },
  {
    title: "AI for Brainstorming and Planning",
    type: "Google – Coursera",
    icon: google,
    iconBg: "#ffffff",
    iconHeight: 45,
    date: "Feb 2026",
    points: [
      "Creative Ideation with Generative AI & Strategic Evaluation using Decision Frameworks.",
      "Risk Identification, Timeline Optimization & AI-Assisted Project Documentation.",
      "Knowledge Hub & Project Information Organization.",
      "Skills: Strategic Planning, Project Management, Gemini, Product Roadmaps, Operational Analysis.",
      "Achievement: Completed with 100% grade.",
    ],
    credential: "https://www.coursera.org/account/accomplishments/verify/U6O8IQ41NLGJ",
  },
];

const projects = [
  {
    name: "Databrandix Official Website",
    description:
      "A modern and conversion-focused website for Databrandix, built with Next.js and React, featuring service pages, portfolio sections, blog content, and a reusable component-based architecture tailored for a digital growth of the company.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "Swiper",
        color: "green-text-gradient",
      },
      {
        name: "ESLint",
        color: "blue-text-gradient",
      },
    ],
    image: databrandixWebsite,
    source_code_link: "https://github.com/shantoislam242/Databrandix-web-page",
    live_project_link: "https://databrandix-web-page.vercel.app/",
  },
  {
    name: "Netdash (Networking Toolbox) 🌐",
    description:
      "Netdash is a cross-platform Electron desktop app (macOS, Windows, Linux) with Homebrew distribution, featuring Firebase Auth with Google OAuth and real-time Firestore sync. It includes 15+ networking tools for subnetting, VLSM, IP conflict detection, and multi-vendor configuration generation. Built with RTT measurement via Performance API, TCP port scanning, DNS-over-HTTPS with TTL-aware caching, and RFC-compliant IPv4/IPv6 algorithms with WCAG2.2 accessibility compliance.",
    tags: [
      {
        name: "Electron",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "DNS-over-HTTPS",
        color: "pink-text-gradient",
      },
      {
        name: "WCAG2.2",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "https://github.com/sunnypatell/netdash-toolkit/",
    live_project_link: "https://netdash-toolkit.vercel.app/",
  },
  {
    name: "SecureBank 🏦",
    description:
      "SecureBank is a deliberately vulnerable banking simulation built for Capture The Flag (CTF) training, focused on SQL injection and privilege escalation. It features exploit paths including raw query interpolation, single/double URL encoding, and a hidden admin portal to teach secure coding by example. Core features include transaction search/filter, a feedback system, and an admin dashboard with live DB console and security logs. Backed by a normalized SQLite schema with session handling via cookie-signature, and dockerized with structured challenge documentation.",
    tags: [
      {
        name: "CTF",
        color: "blue-text-gradient",
      },
      {
        name: "SQLi/XSS",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: securebankdashboard,
    source_code_link: "https://github.com/sunnypatell/securebank-ctf",
    live_project_link: "https://github.com/sunnypatell/securebank-ctf",
  },
  {
    name: "Sunnify (Spotify Downloader) 🎵",
    description:
      "Sunnify is a Spotify downloader that reverse-engineers embed pages to extract track metadata by parsing protected JSON states without authentication. It features a cross-platform PyQt5 desktop client (macOS, Windows, Linux) with thread-safe UI updates and supports playlists with 1000+ tracks via Spotify's internal spclient API. Includes retry logic with exponential backoff for rate limiting, cross-platform FFmpeg detection, 43 pytest unit tests with GitHub Actions CI/CD, and ships as a Homebrew Cask.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyQt5",
        color: "green-text-gradient",
      },
      {
        name: "yt-dlp",
        color: "pink-text-gradient",
      },
      {
        name: "Homebrew",
        color: "blue-text-gradient",
      },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
    live_project_link: "https://sunnify-spotify-downloader.vercel.app/",
  },
  {
    name: "FinancialFlow 💸",
    description:
      "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
    ],
    image: financialflowimage,
    source_code_link: "https://github.com/sunnypatell/financialflow",
    live_project_link: "https://financial-flow.vercel.app/",
  },
 
  {
    name: "KnifeThrow 🎯",
    description:
      "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "arcadegame",
        color: "green-text-gradient",
      },
    ],
    image: knifethrowimage,
    source_code_link: "https://github.com/sunnypatell/KnifeThrow",
    live_project_link: "https://github.com/sunnypatell/KnifeThrow",
  },

];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};


export const contactConfig = {
  // Free Direct Email Integration (Web3Forms):
  // 1. Visit https://web3forms.com
  // 2. Enter your email (simhadrimukesh111@gmail.com) to get your free Access Key instantly
  // 3. Paste the key below:
  web3formsKey: "", 
};

export const personalInfo = {
  name: "Simhadri Mukesh",
  profileImage: "/profile.png", // Place your uploaded photo at public/profile.png (or .jpg)
  title: "Software Engineer & AI/ML Developer",
  taglines: [
    "Full-Stack Web & AI Developer",
    "LeetCode Knight (750+ Solved)",
    "AWS Academy Intern",
    "Three.js & GenAI Enthusiast"
  ],
  bio: "B.Tech Computer Science Engineering undergraduate at Gayatri Vidya Parishad College of Engineering (CGPA: 8.75) with hands-on exposure to cloud infrastructure (AWS) and AI/ML workflows. A consistent, disciplined problem solver with 750+ solved coding problems, LeetCode Knight badge, and 3-star competitive programming rating.",
  location: "Visakhapatnam, India",
  email: "simhadrimukesh111@gmail.com",
  phone: "+91 9398841355",
  socials: {
    github: "https://github.com/simhadrimukesh23",
    linkedin: "https://linkedin.com/in/simhadrimukesh",
    leetcode: "https://leetcode.com/u/Mukesh225",
    codechef: "https://codechef.com/users/simhadrimukesh"
  },
  stats: [
    { label: "Problems Solved", value: "750+", suffix: "DSA", description: "Across LeetCode & CodeChef" },
    { label: "LeetCode Badge", value: "Knight", suffix: "Top %", description: "650+ Problems Solved" },
    { label: "CodeChef Rating", value: "3-Star", suffix: "Rated", description: "Competitive Programmer" },
    { label: "B.Tech CGPA", value: "8.75", suffix: "/ 10", description: "GVPCE Visakhapatnam" }
  ]
};

export const educationData = [
  {
    institution: "Gayatri Vidya Parishad College of Engineering",
    degree: "B.Tech in Computer Science Engineering",
    location: "Visakhapatnam, India",
    duration: "2023 - Present",
    score: "CGPA: 8.75 / 10",
    description: "Core coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks."
  },
  {
    institution: "Amaravathi Junior College",
    degree: "Intermediate (MPC) – Mathematics, Physics, Chemistry",
    location: "Vijayawada, India",
    duration: "2021 - 2023",
    score: "Completed",
    description: "Strong foundation in higher secondary mathematics, analytical problem solving, and science fundamentals."
  }
];

export const experienceData = [
  {
    role: "AI-ML Virtual Intern",
    company: "AWS Academy",
    location: "Remote",
    period: "Apr 2025 - Jun 2025",
    type: "Internship",
    bullets: [
      "Completed a 10-week hands-on internship covering the full machine learning lifecycle – data preprocessing, feature engineering, model training, evaluation, and deployment.",
      "Trained and evaluated supervised learning models in Python, applying feature engineering and cross-validation techniques to improve model performance.",
      "Deployed and monitored AI/ML workflows on AWS, gaining hands-on exposure to cloud-based deployment and automation pipelines."
    ],
    tech: ["AWS", "Python", "Scikit-learn", "Machine Learning", "Cloud Pipelines", "Feature Engineering"]
  }
];

export const projectsData = [
  {
    id: "offline-llm",
    title: "Offline LLM with Customizable Avatar Interface",
    category: "AI/ML & 3D",
    subtitle: "Local low-resource AI assistant with speech, OCR & Three.js 3D avatar",
    description: "Built and troubleshot a fully offline AI assistant using FastAPI and PyTorch, enabling real-time operation on low-resource devices via lightweight LLMs.",
    bullets: [
      "Real-time local LLM inference on low-resource hardware without cloud dependency or latency.",
      "Integrated multimodal inputs: speech recognition via Whisper and OCR with EasyOCR supporting multilingual text.",
      "Engineered an interactive, customizable 3D avatar interface using Three.js and Babylon.js.",
      "Local SQLite persistence layer for context retention, conversation memory, and complete user privacy."
    ],
    tech: ["FastAPI", "PyTorch", "Whisper", "EasyOCR", "SQLite", "React", "Three.js", "Babylon.js"],
    github: "https://github.com/simhadrimukesh23",
    demo: "#",
    badge: "Featured AI Project"
  },
  {
    id: "scoutway",
    title: "ScoutWay – Travel Journaling & Story-Sharing Platform",
    category: "Full Stack",
    subtitle: "MERN travel platform with itinerary tracking, media uploads & calendar filtering",
    description: "A full-stack travel journaling platform enabling users to publish, search, and share trip stories with activity threads and cost tracking.",
    bullets: [
      "Full-stack MERN architecture enabling travelers to post stories, log activity expenses, and curate itineraries.",
      "Multi-mode authentication: secure JWT/email-password, Google OAuth 2.0, and frictionless guest exploration mode.",
      "Optimized media pipeline with Cloudinary for fast story cover photo uploads and responsive image delivery.",
      "Full-text search engine, interactive calendar date-range filtering, and secure author-scoped CRUD operations."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "JWT", "OAuth"],
    github: "https://github.com/simhadrimukesh23",
    demo: "#",
    badge: "Full-Stack MERN"
  },
  {
    id: "project-yuvata",
    title: "Project Yuvata – Digital Literacy & Misinformation Platform",
    category: "AI/ML & Extension",
    subtitle: "Real-time fake/real content classifier with Gemini API & Chrome Extension",
    description: "An AI-powered digital literacy platform to assess users' ability to detect misinformation using an OCR and Gemini API pipeline.",
    bullets: [
      "Automated OCR extraction pipeline paired with Google Gemini API for real-time deep content analysis and classification.",
      "Built and published a companion Chrome extension (React + TypeScript) providing live risk scoring for in-browser monitoring.",
      "Designed an interactive scoring dashboard to measure, educate, and elevate user media literacy scores."
    ],
    tech: ["Python", "FastAPI", "React", "TypeScript", "Google Gemini API", "OCR", "Chrome Extension"],
    github: "https://github.com/simhadrimukesh23",
    demo: "#",
    badge: "AI & Browser Extension"
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: "Advanced", icon: "code" },
    { name: "Java", level: "Advanced", icon: "coffee" },
    { name: "C", level: "Proficient", icon: "cpu" },
    { name: "JavaScript", level: "Proficient", icon: "file-code" },
    { name: "SQL", level: "Proficient", icon: "database" }
  ],
  aiml: [
    { name: "PyTorch", level: "Advanced" },
    { name: "TensorFlow", level: "Intermediate" },
    { name: "Scikit-learn", level: "Advanced" },
    { name: "NumPy & Pandas", level: "Advanced" },
    { name: "Prompt Engineering", level: "Advanced" },
    { name: "Whisper & EasyOCR", level: "Proficient" }
  ],
  webBackend: [
    { name: "FastAPI", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Proficient" },
    { name: "Express.js", level: "Proficient" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML5 & CSS3", level: "Expert" }
  ],
  cloudTools: [
    { name: "AWS (Cloud Practitioner)", level: "Certified" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Three.js / Babylon.js", level: "Intermediate" },
    { name: "MongoDB & SQLite", level: "Proficient" },
    { name: "VS Code & Kaggle", level: "Advanced" }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms", level: "Expert (750+ Solved)" },
    { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
    { name: "Database Management Systems (DBMS)", level: "Advanced" },
    { name: "Operating Systems", level: "Proficient" },
    { name: "Computer Networks", level: "CCNA In-Progress" }
  ]
};

export const achievementsData = [
  {
    title: "LeetCode Knight Badge",
    highlight: "650+ Problems Solved",
    description: "Ranked among top competitive coders globally with Knight badge status.",
    link: "https://leetcode.com/u/Mukesh225",
    type: "Competitive Programming",
    icon: "award"
  },
  {
    title: "CodeChef 3-Star Coder",
    highlight: "3-Star Rated",
    description: "Demonstrated consistent algorithm and algorithmic contest rating performance.",
    link: "https://codechef.com/users/simhadrimukesh",
    type: "Competitive Programming",
    icon: "zap"
  },
  {
    title: "Srujana Hackathon - 3rd Prize",
    highlight: "Podium Winner",
    description: "Secured 3rd prize for building an innovative technology solution under rapid prototyping.",
    type: "Hackathon",
    icon: "trophy"
  }
];

export const certificationsData = [
  {
    name: "Cisco CCNA (Jun 2026)",
    issuer: "Cisco",
    topics: "Introduction to Networks, Switching/Routing & Wireless Essentials, Enterprise Networking & Security",
    icon: "network"
  },
  {
    name: "AWS Cloud Quest – Cloud Practitioner",
    issuer: "Amazon Web Services",
    topics: "Applied core AWS services, cloud compute, storage, security, and cloud architecture",
    icon: "cloud"
  },
  {
    name: "Generative AI Certification",
    issuer: "CloudKarya",
    topics: "Neural Networks, TensorFlow, Scikit-learn, Modern AI & Data Science foundations",
    icon: "sparkles"
  },
  {
    name: "Python Essentials 1 & 2 & Modern AI",
    issuer: "Cisco Networking Academy / Partner",
    topics: "Advanced Python programming, object-oriented concepts, and AI fundamentals",
    icon: "check-circle"
  }
];

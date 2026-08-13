export const profile = {
  name: "Kocknet Emmanuella",
  role: "Machine Learning Engineer",
  tagline: "Building intelligent systems from data to deployment.",
  email: "kocknetemmanuella55@gmail.com",
  github: "https://github.com/Ellarh101",
  linkedin: "https://www.linkedin.com/in/kocknet-emmanuella-86aa69356",
};

export const linkedinDetails = {
  experience:
    "https://www.linkedin.com/in/kocknet-emmanuella-86aa69356/details/experience/",
  education:
    "https://www.linkedin.com/in/kocknet-emmanuella-86aa69356/details/education/",
  certifications:
    "https://www.linkedin.com/in/kocknet-emmanuella-86aa69356/details/certifications/",
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  accentLabel: string;
};

export const projects: Project[] = [
  {
    title: "Aircraft Engine Remaining Useful Life Prediction",
    description:
      "End-to-end machine learning system for predicting the remaining useful life of aircraft engines using NASA C-MAPSS turbofan degradation data.",
    tech: ["Python", "LSTM", "CatBoost", "SHAP", "FastAPI", "Flutter"],
    github: "https://github.com/Ellarh101/Predictive-maintenance-ml",
    accentLabel: "Predictive Maintenance",
  },
  {
    title: "Mechatronic Tutor",
    description:
      "Edge AI-powered educational assistant designed to run fully offline on a Raspberry Pi 5, with local speech and retrieval-augmented answering.",
    tech: ["Python", "BitNet", "RAG", "Vosk", "Piper TTS", "Raspberry Pi"],
    github:
      "https://github.com/abelbajeh/Mechatronics-tutor-with-edge-AI-capability",
    accentLabel: "Edge AI",
  },
  {
    title: "Document to Speech Converter",
    description:
      "Pipeline that parses documents and converts their contents into natural sounding speech for accessible, hands-free reading.",
    tech: ["Python", "NLP", "TTS", "Document Parsing"],
    github: "https://github.com/Ellarh101/Document-to-speech-converter",
    accentLabel: "Speech & NLP",
  },
  {
    title: "Fruit Classification Model",
    description:
      "Computer vision model that classifies fruit images, covering dataset preparation, augmentation, training and evaluation.",
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com/Ellarh101/Fruit-classifation-model",
    accentLabel: "Computer Vision",
  },
];

export const skillGroups = [
  { label: "Machine Learning", items: ["Python", "Scikit-learn", "TensorFlow", "PyTorch"] },
  { label: "Data", items: ["Pandas", "NumPy", "SQL"] },
  { label: "ML Engineering", items: ["FastAPI", "Docker", "Git", "APIs"] },
  { label: "AI", items: ["LLMs", "RAG", "NLP", "Computer Vision", "Edge AI"] },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  detail: string;
  link?: string;
};

export const experience: TimelineItem[] = [
  {
    period: "Present",
    title: "Machine Learning Engineer",
    org: "Independent / Project-based",
    detail:
      "Designing and shipping ML systems end to end — data pipelines, model training, evaluation and deployment behind APIs and on edge devices.",
    link: linkedinDetails.experience,
  },
  {
    period: "Selected work",
    title: "Applied AI & Embedded Systems",
    org: "Mechatronics projects",
    detail:
      "Bridging machine learning with hardware: predictive maintenance, offline edge assistants and vision systems on constrained devices.",
    link: linkedinDetails.experience,
  },
];

export const education: TimelineItem[] = [
  {
    period: "Degree",
    title: "Mechatronics Engineering",
    org: "University",
    detail:
      "Engineering foundation across control, electronics and embedded systems — the basis for building ML that runs in the real world.",
    link: linkedinDetails.education,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  verifyUrl: string;
};

export const certifications: Certification[] = [
  {
    title: "Verified certifications",
    issuer: "LinkedIn profile",
    verifyUrl: linkedinDetails.certifications,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

import ibmCert from "@/assets/ibm-data-science.pdf.asset.json";
import supervisedMlCert from "@/assets/supervised-ml.pdf.asset.json";
import sqlCert from "@/assets/intro-to-sql.png.asset.json";
import aiFluencyCert from "@/assets/ai-fluency-anthropic.pdf.asset.json";
import pythonAdvancedCert from "@/assets/python-advanced.pdf.asset.json";
import pythonBeginnerCert from "@/assets/python-beginners-nitda.pdf.asset.json";

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
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "Aircraft Engine Remaining Useful Life Prediction",
    description:
      "End-to-end machine learning system for predicting the remaining useful life of aircraft engines using NASA C-MAPSS turbofan degradation data.",
    tech: ["Python", "LSTM", "CatBoost", "SHAP", "FastAPI", "Flutter"],
    github: "https://github.com/Ellarh101/Predictive-maintenance-ml",
    accentLabel: "Predictive Maintenance",
    image: predictiveMaintenanceImg.url,
    imageAlt:
      "Predictive Maintenance mobile app listing monitored aircraft engines with health filters",
  },
  {
    title: "Mechatronic Tutor",
    description:
      "Edge AI-powered educational assistant designed to run fully offline on a Raspberry Pi 5, with local speech and retrieval-augmented answering.",
    tech: ["Python", "BitNet", "RAG", "Vosk", "Piper TTS", "Raspberry Pi"],
    github:
      "https://github.com/abelbajeh/Mechatronics-tutor-with-edge-AI-capability",
    accentLabel: "Edge AI",
    image: mechatronicTutorImg.url,
    imageAlt:
      "3D-printed blue enclosure housing the Mechatronic Tutor's Raspberry Pi and touchscreen",
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
  {
    label: "Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Cross-Validation",
      "Ensemble Learning",
      "Time-Series Modeling",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
    ],
  },
  {
    label: "Data",
    items: [
      "Data Preprocessing",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Visualization",
    ],
  },
  {
    label: "MLOps / Deployment",
    items: ["Model Deployment", "REST APIs", "FastAPI", "Docker", "CI/CD", "ML Pipelines"],
  },
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
    period: "Mar 2025 – Oct 2025",
    title: "Intern — SIWES II (Data, Machine Learning & Embedded Systems)",
    org: "National Centre for Artificial Intelligence and Robotics (NCAIR)",
    detail:
      "Built and evaluated ML models with Python, Scikit-learn, and TensorFlow for engineering datasets. Applied data preprocessing, feature engineering, and EDA to real-world AI solutions while integrating software with embedded hardware and microcontrollers.",
  },
  {
    period: "Earlier",
    title: "Intern — SIWES I (Artificial Intelligence & Data Science)",
    org: "National Centre for Artificial Intelligence and Robotics (NCAIR)",
    detail:
      "Completed hands-on training in AI, Data Science, and Python programming. Collaborated on team projects including an automatic spending tracker, a document-to-speech converter, and an emotion-based music player.",
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
  date?: string;
  fileUrl: string;
  kind: "pdf" | "image";
};

export const certifications: Certification[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University — Coursera",
    date: "Mar 2026",
    fileUrl: supervisedMlCert.url,
    kind: "pdf",
  },
  {
    title: "IBM Data Science",
    issuer: "IBM — Coursera",
    fileUrl: ibmCert.url,
    kind: "pdf",
  },
  {
    title: "AI Fluency",
    issuer: "Anthropic",
    fileUrl: aiFluencyCert.url,
    kind: "pdf",
  },
  {
    title: "Python (Advanced)",
    issuer: "NITDA",
    fileUrl: pythonAdvancedCert.url,
    kind: "pdf",
  },
  {
    title: "Python (Beginners)",
    issuer: "NITDA",
    fileUrl: pythonBeginnerCert.url,
    kind: "pdf",
  },
  {
    title: "Intro to SQL",
    issuer: "Kaggle",
    date: "Jul 2025",
    fileUrl: sqlCert.url,
    kind: "image",
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

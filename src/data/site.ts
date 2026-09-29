export const profile = {
  name: "Kocknet Emmanuella",
  role: "Machine Learning Engineer",
  tagline: "Building intelligent systems from data to deployment.",
  location: "Abuja, Nigeria",
  email: "kocknetemmanuella55@gmail.com",
  github: "https://github.com/Ellarh101",
  linkedin: "https://linkedin.com/in/kocknet-emmanuella/",
  headshot: "/kocknet-headshot.png",
  headshotAlt: "Portrait of Kocknet Emmanuella, Machine Learning Engineer",
  resume: "/Kocknet-Emmanuella-Resume.pdf",
};

export const summary =
  "Machine Learning Engineer experienced in building end-to-end AI systems across machine learning, deep learning, computer vision, NLP and Edge AI — from data preprocessing and model development through to deployed, production-oriented applications.";

export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Hello Kocknet — portfolio enquiry",
)}`;

export const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}`;

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
    image: "/predictive-maintenance-app.jpeg",
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
    image: "/Mechatronic Tutor device.png",
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
    image: "/document to speech coverter.png",
    imageAlt:
      "Doc2Speech Translator desktop app translating text and offering online or offline text-to-speech",
  },

  {
    title: "Fruit Classification Model",
    description:
      "Computer vision model that classifies fruit images, covering dataset preparation, augmentation, training and evaluation.",
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com/Ellarh101/Fruit-classifation-model",
    accentLabel: "Computer Vision",
    image: "/fruit_classification_output.png",
    imageAlt:
      "Grid of fruit images with the model's predicted versus true labels for kiwi, pineapple and cherry",
  },
];

export const skillGroups = [
  {
    label: "Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Decision Trees",
      "Random Forest",
      "Artificial Neural Networks",
      "PyTorch",
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
    items: [
      "Model Deployment",
      "REST APIs",
      "FastAPI",
      "Docker",
      "CI/CD",
      "ML Pipelines",
    ],
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
    title: "Intern — Machine Learning & Embedded Systems",
    org: "National Centre for Artificial Intelligence and Robotics (NCAIR)",
    detail:
      "Built and evaluated ML models with Python, Scikit-learn, and TensorFlow for engineering datasets. Applied data preprocessing, feature engineering, and EDA to real-world AI solutions while integrating software with embedded hardware and microcontrollers.",
  },

  {
    period: "Jul 2024 – Sep 2024",
    title: "Intern — Artificial Intelligence & Data Science",
    org: "National Centre for Artificial Intelligence and Robotics (NCAIR)",
    detail:
      "Completed hands-on training in AI, Data Science, and Python programming. Collaborated on team projects including an automatic spending tracker, a document-to-speech converter, and an emotion-based music player.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2026",
    title: "B.Eng. Mechatronics Engineering",
    org: "Air Force Institute of Technology (AFIT), Kaduna, Nigeria",
    detail:
      "Engineering foundation across control systems, electronics and embedded systems, supporting the development of machine learning solutions for real-world hardware.",
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
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford Online — Coursera",
    date: "Sep 2026",
    fileUrl: "/certificates/advanced-learning-algorithms.pdf",
    kind: "pdf",
  },

  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University — Coursera",
    date: "Mar 2026",
    fileUrl: "/certificates/Supervised ML course certificate.pdf",
    kind: "pdf",
  },

  {
    title: "IBM Data Science",
    issuer: "IBM — Coursera",
    fileUrl: "/certificates/IBM Data Science course certificate.pdf",
    kind: "pdf",
  },

  {
    title: "AI Fluency",
    issuer: "Anthropic",
    fileUrl: "/certificates/AI Fluency by Anthropic.pdf",
    kind: "pdf",
  },

  {
    title: "Python (Advanced)",
    issuer: "NITDA",
    fileUrl: "/certificates/Python Advanced certificate .pdf",
    kind: "pdf",
  },

  {
    title: "Python (Beginners)",
    issuer: "NITDA",
    fileUrl: "/certificates/Python Beginners NITDA Certificate1 .pdf",
    kind: "pdf",
  },

  {
    title: "Intro to SQL",
    issuer: "Kaggle",
    date: "Jul 2025",
    fileUrl: "/certificates/Kocknet Emmanuella - Intro to SQL.png",
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

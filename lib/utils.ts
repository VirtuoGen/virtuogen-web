import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { title: "Platform", href: "/" },
  { title: "Features", href: "/" },
  { title: "Contact Us", href: "/" },
];

export const FooterLinks = {
  Product: [
    { title: "Platform", href: "/" },
    { title: "Resources", href: "/" },
    { title: "Pricing", href: "/" },
  ],
  Resources: [
    { title: "Terms and Conditions", href: "/" },
    { title: "Privacy Policy", href: "/" },
    { title: "Cookie Policy", href: "/" },
  ],
};

type BentoType = {
  mainHeader: string;
  subHeader: string;
  description: string;
  imageUrl: string;
  icon: string;
  wordsToHighlight?: string[];
  additionalStyles?: React.CSSProperties;
};

export const bento: BentoType[] = [
  {
    mainHeader: "Candidate Anlytics Dashboard",
    subHeader: "Analytics",
    description:
      "Provide employers with comprehensive analytics and insights into candidates performance communication skills, and suitability for the role, aiding in informed hiring decisions.",
    imageUrl: "/assets/candidate.png",
    icon: "/assets/analytics_icon.svg",
    wordsToHighlight: ["analytics"],
  },
  {
    mainHeader: "Advanced Audio Recognition",
    subHeader: "Audio Analytics",
    description:
      "Incorporate transformer models for accurate detection and response to candidates' speech patterns in virtual interviews.",
    imageUrl: "/assets/audioRecog.svg",
    icon: "/assets/audio_lines.svg",
  },
  {
    mainHeader: "Scalable Cloud Deployment",
    subHeader: "Cloud Scalibility",
    description:
      "Utilise AWS EC2 & S3 for seamless, accessible, and reliable operation, ensuring uptime during peak recruitment periods.",
    imageUrl: "/assets/cloudScale.svg",
    icon: "/assets/cloud_icon.svg",
    wordsToHighlight: ["AWS", "EC2", "S3"],
  },
  {
    mainHeader: "Enhanced Functionality",
    subHeader: "OpenAI's API Integration",
    description:
      "Integrate with OpenAI's API for expanded features like background checks, skills assessments, and interview scheduling.",
    imageUrl: "/assets/openai.svg",
    icon: "/assets/openai_icon.svg",
    wordsToHighlight: ["OpenAI's", "API"],
    additionalStyles: { textDecoration: "underline" },
  },

  {
    mainHeader: "Candidate Anlytics Dashboard",
    subHeader: "XYZ",
    description:
      "ntegrate with OpenAI's API for expanded features like background checks, skills assessments, and interview scheduling.",
    imageUrl: "/assets/lock.svg",
    icon: "/assets/lock_icon.svg",
  },
  {
    mainHeader: "Integration with Applicant Tracking Systems (ATS)",
    subHeader: "ATS Integration Solution",
    description:
      "Seamlessly integrate with existing ATS platforms to streamline the hiring process, enabling automatic transfer of candidate data and interview feedback for efficient candidate management.",
    imageUrl: "/assets/lock.svg",
    icon: "/assets/ats_icon.svg",
    wordsToHighlight: ["ATS", "platforms"],
  },
  {
    mainHeader: "Data Encryption Security",
    subHeader: "Secure Data Encryption",
    description:
      "Protect candidate information with advanced encryption and security measures, ensuring compliance with GDPR and CCPA.",
    imageUrl: "/assets/lock.svg",
    icon: "/assets/lock_icon.svg",
    wordsToHighlight: ["GDPR", "CCPA"],
  },
];

export const content = [
  {
    title: "Job Seekers",
    titleIconUrl: "/assets/job_search.svg",
    description:
      "Empower job seekers with tailored interview practice, feedback, and insights for success.",
    points: [
      "Practice and Preparation: Gain confidence by practicing interview skills in a realistic setting.",
      "Instant Feedback: Receive immediate feedback to improve responses, body language and presentation.",
      "Personalized Guidance: Get tailored resources to enhance interview skills based on performance.",
      "Resume Reveiw: Receive feedback on resumes to effectively showcase skills and expriences.",
      "Interview Insights: Access valuable knowledge on common questions, job market trends, and success strategies.",
    ],
    icon1Header: "Employers and HR Professionals",
    icon2Header: "Organizations",
  },
  {
    title: "Job Seekers",
    titleIconUrl: "/assets/job_search.svg",
    description:
      "Empower job seekers with tailored interview practice, feedback, and insights for success.",
    points: [
      "Practice and Preparation: Gain confidence by practicing interview skills in a realistic setting.",
      "Instant Feedback: Receive immediate feedback to improve responses, body language and presentation.",
      "Personalized Guidance: Get tailored resources to enhance interview skills based on performance.",
      "Resume Reveiw: Receive feedback on resumes to effectively showcase skills and expriences.",
      "Interview Insights: Access valuable knowledge on common questions, job market trends, and success strategies.",
    ],
    icon1Header: "Employers and HR Professionals",
    icon2Header: "Organizations",
  },
  {
    title: "Job Seekers",
    titleIconUrl: "/assets/job_search.svg",
    description:
      "Empower job seekers with tailored interview practice, feedback, and insights for success.",
    points: [
      "Practice and Preparation: Gain confidence by practicing interview skills in a realistic setting.",
      "Instant Feedback: Receive immediate feedback to improve responses, body language and presentation.",
      "Personalized Guidance: Get tailored resources to enhance interview skills based on performance.",
      "Resume Reveiw: Receive feedback on resumes to effectively showcase skills and expriences.",
      "Interview Insights: Access valuable knowledge on common questions, job market trends, and success strategies.",
    ],
    icon1Header: "Employers and HR Professionals",
    icon2Header: "Organizations",
  },
  {
    title: "Job Seekers",
    titleIconUrl: "/assets/job_search.svg",
    description:
      "Empower job seekers with tailored interview practice, feedback, and insights for success.",
    points: [
      "Practice and Preparation: Gain confidence by practicing interview skills in a realistic setting.",
      "Instant Feedback: Receive immediate feedback to improve responses, body language and presentation.",
      "Personalized Guidance: Get tailored resources to enhance interview skills based on performance.",
      "Resume Reveiw: Receive feedback on resumes to effectively showcase skills and expriences.",
      "Interview Insights: Access valuable knowledge on common questions, job market trends, and success strategies.",
    ],
    icon1Header: "Employers and HR Professionals",
    icon2Header: "Organizations",
  },
];

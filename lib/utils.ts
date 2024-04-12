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

type CompanyDataType = {
  title: string;
  companyImageUrl: string;
  companyName: string;
  location: string;
  salary: string;
  level: string;
  roleType: string;
};

export const companyData: CompanyDataType[] = [
  {
    title: "Software Engineer",
    companyImageUrl: "/amazon.png",
    companyName: "Amazon",
    location: "California, USA",
    salary: "1.5 CR",
    level: "Senior-Level",
    roleType: "Full-time",
  },
  {
    title: "Software Engineer",
    companyImageUrl: "/uber.png",
    companyName: "Uber",
    location: "Bangalore, India",
    salary: "30 LPA",
    level: "Senior-Level",
    roleType: "Full-time",
  },
  {
    title: "Software Engineer",
    companyImageUrl: "/uber.png",
    companyName: "Uber",
    location: "Bangalore, India",
    salary: "30 LPA",
    level: "Senior-Level",
    roleType: "Full-time",
  },
];

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
    imageUrl: "/assets/backgrounds/candidate.png",
    icon: "/assets/icons/analytics_icon.svg",
    wordsToHighlight: ["analytics"],
  },
  {
    mainHeader: "Advanced Audio Recognition",
    subHeader: "Audio Analytics",
    description:
      "Incorporate transformer models for accurate detection and response to candidates' speech patterns in virtual interviews.",
    imageUrl: "/assets/backgrounds/audioRecog.svg",
    icon: "/assets/icons/audio_lines.svg",
  },
  {
    mainHeader: "Scalable Cloud Deployment",
    subHeader: "Cloud Scalibility",
    description:
      "Utilise AWS EC2 & S3 for seamless, accessible, and reliable operation, ensuring uptime during peak recruitment periods.",
    imageUrl: "/assets/backgrounds/cloudScale.svg",
    icon: "/assets/icons/cloud_icon.svg",
    wordsToHighlight: ["AWS", "EC2", "S3"],
  },
  {
    mainHeader: "Enhanced Functionality",
    subHeader: "OpenAI's API Integration",
    description:
      "Integrate with OpenAI's API for expanded features like background checks, skills assessments, and interview scheduling.",
    imageUrl: "/assets/backgrounds/openai1.svg",
    icon: "/assets/icons/openai_icon.svg",
    wordsToHighlight: ["OpenAI's", "API"],
    additionalStyles: { textDecoration: "underline" },
  },

  {
    mainHeader: "Realtime Candidate Feedback",
    subHeader: "Insights",
    description:
      "Offer instant feedback, insights, and improvement suggestions to enhance candidate performance and interview experience.",
    imageUrl: "/assets/backgrounds/cf.svg",
    icon: "/assets/icons/insights.svg",
  },
  {
    mainHeader: "Integration with Applicant Tracking Systems (ATS)",
    subHeader: "ATS Integration Solution",
    description:
      "Seamlessly integrate with existing ATS platforms to streamline the hiring process, enabling automatic transfer of candidate data and interview feedback for efficient candidate management.",
    imageUrl: "/assets/backgrounds/ats_sample.png",
    icon: "/assets/icons/ats_icon.svg",
    wordsToHighlight: ["ATS", "platforms"],
  },
  {
    mainHeader: "Data Encryption Security",
    subHeader: "Secure Data Encryption",
    description:
      "Protect candidate information with advanced encryption and security measures, ensuring compliance with GDPR and CCPA.",
    imageUrl: "/assets/backgrounds/lock.svg",
    icon: "/assets/icons/lock_icon.svg",
    wordsToHighlight: ["GDPR", "CCPA"],
  },
];

export const content = [
  {
    title: "Job Seekers",
    titleIconUrl: "/assets/icons/job_search.svg",
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
    titleIconUrl: "/assets/icons/job_search.svg",
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
    titleIconUrl: "/assets/icons/job_search.svg",
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
    titleIconUrl: "/assets/icons/job_search.svg",
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

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

export const dashboardData = [
  {
    icon: "dashboard_total",
    title: "Total Applicants",
    value: 80,
    label: "last week",
  },
  {
    icon: "dashboard_date",
    title: "Interview Schedule",
    value: 3,
    label: "last week",
  },
  {
    icon: "dashboard_visited",
    title: "Profile Visited",
    value: 20,
    label: "last week",
  },
  {
    icon: "dashboard_hired",
    title: "Hired",
    value: 8,
    label: "last week",
  },
];

export const candidateDashboardData = [
  {
    icon: "dashboard_total",
    title: "Total Applications",
    value: 80,
    label: "last week",
  },
  {
    icon: "dashboard_date",
    title: "Shortlisted",
    value: 8,
    label: "last week",
  },
  {
    icon: "dashboard_visited",
    title: "Profile Visited",
    value: 20,
    label: "last week",
  },
  {
    icon: "dashboard_hired",
    title: "Offers",
    value: 6,
    label: "last week",
  },
];

export const questionData = [
  {
      "question": "How do you approach the design of a Python application that needs to handle high levels of concurrency?",
      "response": "I use a lot of threads and processes to handle concurrency, but I don't really pay much attention to managing resources or avoiding race conditions. I hope it works fine without crashing.",
      "model_answer": "To design a Python application for high levels of concurrency, I use asynchronous programming with libraries like asyncio to manage multiple tasks simultaneously. I design the application architecture around event-driven patterns, using queues for task management and separating I/O-bound and CPU-bound tasks. This approach helps improve responsiveness and resource utilization. I also consider using thread pools or process pools for parallel execution if necessary, while ensuring thread safety and proper synchronization mechanisms are in place.",
      "scores": {
          "accuracy": 2,
          "clarity": 2,
          "relevance": 2,
          "creativity": 1,
          "technical_knowledge": 2,
          "problem_solving_skills": 1,
          "system_design_knowledge": 1,
          "code_efficiency": 1,
          "attention_to_detail": 1,
          "testing_skills": 1,
          "communication_skills": 1,
          "adaptability_and_learning": 1,
          "time_management": 1,
          "teamwork_and_collaboration": 1,
          "creativity_and_innovation": 1
      },
      "total_score": 20,
      "overall_grade": "Below Average"
  },
  {
      "question": "Describe a time when you encountered a performance bottleneck in a Python application and how did you address it?",
      "response": "I noticed the app was running slow, so I just restarted it and hoped that would help. I didn't use any profiling tools or optimize the code.",
      "model_answer": "I once worked on a Python application that experienced slow performance during data processing. I started by using profiling tools like cProfile to identify the bottleneck in the code. Upon analysis, I found that nested loops were causing excessive computations. I optimized the code by using efficient data structures such as sets and dictionaries, and I leveraged list comprehensions to streamline operations. This significantly improved the application's speed and reduced memory usage.",
      "scores": {
          "accuracy": 1,
          "clarity": 2,
          "relevance": 1,
          "creativity": 1,
          "technical_knowledge": 1,
          "problem_solving_skills": 1,
          "system_design_knowledge": 1,
          "code_efficiency": 1,
          "attention_to_detail": 1,
          "testing_skills": 1,
          "communication_skills": 1,
          "adaptability_and_learning": 1,
          "time_management": 1,
          "teamwork_and_collaboration": 1,
          "creativity_and_innovation": 1
      },
      "total_score": 16,
      "overall_grade": "Below Average"
  },
  {
      "question": "Moving forward, how do you ensure the quality and correctness of your code in a Python project?",
      "response": "I don't focus too much on testing or code quality. If it works, I just leave it as is and move on to the next task. Peer code reviews aren't something I prioritize.",
      "model_answer": "I ensure code quality and correctness by following best coding practices such as writing clear and concise code, adhering to PEP 8 style guidelines, and using meaningful variable names. I conduct comprehensive testing using unit tests, integration tests, and functional tests to validate the code's behavior. Additionally, I participate in peer code reviews to gain feedback and catch potential issues early. I also use static analysis tools like pylint or flake8 to identify code quality issues and enforce coding standards.",
      "scores": {
          "accuracy": 2,
          "clarity": 2,
          "relevance": 2,
          "creativity": 1,
          "technical_knowledge": 2,
          "problem_solving_skills": 1,
          "system_design_knowledge": 1,
          "code_efficiency": 1,
          "attention_to_detail": 1,
          "testing_skills": 1,
          "communication_skills": 1,
          "adaptability_and_learning": 1,
          "time_management": 1,
          "teamwork_and_collaboration": 1,
          "creativity_and_innovation": 1
      },
      "total_score": 20,
      "overall_grade": "Below Average"
  },
  {
      "question": "Can you discuss a time when you had to debug a complex issue in a MySQL database? What was your approach?",
      "response": "When I ran into an issue, I tried random changes to the queries until something seemed to work. I didn't bother analyzing the query plans or looking at indexes.",
      "model_answer": "In a past project, I encountered a complex issue where certain MySQL queries were causing slowdowns and timeouts. I approached the problem by first analyzing the queries using MySQL's EXPLAIN command to understand the query execution plans and identify potential bottlenecks. I optimized the queries by adding indexes and rewriting suboptimal parts of the queries. Additionally, I adjusted database configuration settings for better performance. These steps resolved the issue and significantly improved query execution times.",
      "scores": {
          "accuracy": 1,
          "clarity": 2,
          "relevance": 1,
          "creativity": 1,
          "technical_knowledge": 1,
          "problem_solving_skills": 1,
          "system_design_knowledge": 1,
          "code_efficiency": 1,
          "attention_to_detail": 1,
          "testing_skills": 1,
          "communication_skills": 1,
          "adaptability_and_learning": 1,
          "time_management": 1,
          "teamwork_and_collaboration": 1,
          "creativity_and_innovation": 1
      },
      "total_score": 16,
      "overall_grade": "Below Average"
  },
  {
      "question": "How do you collaborate with other team members during the development of a Python project?",
      "response": "I prefer working alone and don't communicate much with the team. If I need to share code, I just push it without reviewing it or asking for feedback.",
      "model_answer": "During the development of a Python project, I maintain open and clear communication with team members. I actively participate in discussions and planning meetings to share ideas and gather input from others. During code reviews, I provide constructive feedback and am open to suggestions for improving my own code. I also offer support and mentorship to junior developers and pair programming when appropriate. Collaboration tools like Git and project management software help facilitate coordination and keep everyone aligned.",
      "scores": {
          "accuracy": 1,
          "clarity": 2,
          "relevance": 1,
          "creativity": 1,
          "technical_knowledge": 1,
          "problem_solving_skills": 1,
          "system_design_knowledge": 1,
          "code_efficiency": 1,
          "attention_to_detail": 1,
          "testing_skills": 1,
          "communication_skills": 1,
          "adaptability_and_learning": 1,
          "time_management": 1,
          "teamwork_and_collaboration": 1,
          "creativity_and_innovation": 1
      },
      "total_score": 16,
      "overall_grade": "Below Average"
  }
]

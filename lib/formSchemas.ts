import { z } from "zod";

export const candidateJobFormSchema = z.object({
  // Resume Url
  resumeUrl: z.string().url().min(1, "Resume is required"),
  // Cover letter
  coverLetter: z.string().trim().min(1, "Cover letter is required"),
  // Phone Number
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
  // Alternate Phone Number
  alternatePhoneNumber: z
    .string()
    .trim()
    .min(1, "Enter a valid phone number")
    .optional(),
  // Email
  email: z.string().email("Email is required"),

  // Expected Salary
  expectedSalary: z.string().trim().min(1, "Company name is required"),
});

export const recruiterJobFormSchema = z.object({
  // Job Title
  jobTitle: z.string().trim().min(1, "Job title is required"),
  // Job Summary
  jobSummary: z.string().trim().min(1, "Job summary is required"),
  // Responsibilities & Duties
  responsibilities: z.string().trim().min(1, "Responsibilities are required"),
  // Qualifications & Requirements
  qualifications: z.string().trim().min(1, "Qualifications are required"),
  // Benefits & Perks
  benefits: z.string().trim().optional(),
  // Experience Level
  experienceLevel: z.string().trim().min(1, "Experience level is required"),
  // Company Information
  companyName: z.string().trim().min(1, "Company name is required"),
  companyLogo: z.string().trim().url("Invalid company logo URL").optional(), // Optional URL validation
  companyOverview: z.string().trim().min(1, "Company overview is required"),
  // Additional Information
  location: z
    .string()
    .trim()
    .min(1, "Job location is required")
    .or(z.literal("Remote").optional()), // Allow "Remote" as a valid location
  applicationDeadline: z.string().trim().optional(), // Optional application deadline
  opening: z.string().trim().min(1, "Number of openings is required"),
  // Additional details you might want to include (optional)
  department: z.string().trim().optional(),
  employmentType: z.string().trim().optional(), // Full-time, Part-time, Contract, etc.
  salaryRange: z.string().trim().optional(),
  additionalInfo: z.string().optional(),
});

export const recruiterSignUpFormSchema = z.object({
  // First Name
  firstName: z.string().trim().min(1, "First Name is required"),
  // Last Name
  lastName: z.string().trim().min(1, "Last Name is required"),
  // Email
  email: z.string().email("Email is required"),
  // Company Name
  companyName: z.string().trim().min(1, "Company name is required"),
});

export const candidateSignUpFormSchema = z.object({
  // First Name
  firstName: z.string().trim().min(1, "First Name is required"),
  // Last Name
  lastName: z.string().trim().min(1, "Last Name is required"),
  // Email
  email: z.string().email("Email is required"),
  // Phone Number
  phone: z.string().trim().min(1, "Phone number is required"),
  // Date of Birth
  dob: z.string().trim().min(1, "Date of birth is required"),
});

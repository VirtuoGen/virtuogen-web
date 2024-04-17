// submitForm.ts
"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { recruiterJobFormSchema } from "@/lib/formSchemas";

type FormValues = z.infer<typeof recruiterJobFormSchema>;

// Function to submit the form
export async function recruiterJobSubmitForm(values: FormValues) {
  try {
    // Upload the form values to the server
    const dateString = values.applicationDeadline as string;
    const date = new Date(dateString);
    const currentTimestamp = Date.now();
    date.setTime(currentTimestamp);
    const isoString = date.toISOString();

    await db.job.create({
      data: {
        jobTitle: values.jobTitle,
        jobSummary: values.jobSummary,
        responsibilites: values.responsibilities,
        qualifications: values.qualifications,
        benefits: values.benefits,
        companyName: values.companyName,
        companyOverview: values.companyOverview,
        location: values.location as string,
        applicationDeadline: isoString,
        openings: Number(values.opening),
        department: values.department,
        employmentType: values.employmentType,
        salaryRange: values.salaryRange,
        additionalInfo: values.additionalInfo,
        comapnyLogo: values.companyLogo as string,
        postedBy: { connect: { id: "clv3e0y7p000020ygjjjerlb6" } },
      },
    });
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

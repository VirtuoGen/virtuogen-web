// submitForm.ts
"use server";

import { db } from "@/lib/db";

// Function to submit the form
export async function fetchJobs(recruiterEmail: string) {
  try {
    console.log(recruiterEmail);
    const userId = await db.recruiter.findFirst({
      where: {
        email: recruiterEmail,
      },
    });

    const jobs = await db.job.findMany({
      where: {
        recruiterId: userId?.id,
      },
    });

    console.log(jobs);

    return jobs;
    console.log("Jobs fetched successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

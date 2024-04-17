// submitForm.ts
"use server";

import { db } from "@/lib/db";

// Function to submit the form
export async function fetchJobBoard() {
  try {
    const jobs = await db.job.findMany();

    console.log(jobs);

    console.log("Jobs fetched successfully!");
    return jobs;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

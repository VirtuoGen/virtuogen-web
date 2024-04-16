"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import type { FileUrlProps } from "@/types/candidateForm";
import { candidateJobFormSchema } from "@/lib/formSchemas";

type FormValues = z.infer<typeof candidateJobFormSchema>;

// Function to submit the form
export async function submitForm(values: FormValues, fileUrl: FileUrlProps) {
  try {
    // Upload the form values to the server
    await db.file.create({
      data: {
        resumeUrl: values.resumeUrl,
        coverLetterUrl: values.coverLetter,
        key: fileUrl?.[0]?.key,
        name: fileUrl?.[0]?.name,
        uploadStatus: "SUCCESS",
        expectedSalary: values.expectedSalary,
        email: values.email,
        phone: values.phoneNumber,
        alternatePhone: values.alternatePhoneNumber,
        Candidate: { connect: { id: "clv2qyb1k00012mszbrd07c9l" } },
        Job: { connect: { id: "clv2qyb1q00032mszfd4v8ib7" } },
      },
    });
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

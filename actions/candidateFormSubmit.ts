"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import type { FileUrlProps } from "@/types/candidateForm";
import { candidateJobFormSchema } from "@/lib/formSchemas";

type FormValues = z.infer<typeof candidateJobFormSchema>;

// Function to submit the form
export async function submitForm(
  values: FormValues,
  fileUrl: FileUrlProps,
  candidateEmail: string,
) {
  try {
    const userId = await db.candidate.findFirst({
      where: {
        email: candidateEmail,
      },
    });
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
        Candidate: { connect: { id: userId?.id } },
        Job: { connect: { id: "clv3cei360003s70wg37lgoqq" } },
      },
    });
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

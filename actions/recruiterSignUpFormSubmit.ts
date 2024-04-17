// submitForm.ts
"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { recruiterSignUpFormSchema } from "@/lib/formSchemas";

type FormValues = z.infer<typeof recruiterSignUpFormSchema>;

// Function to submit the form
export async function recruiterSignUpFormSubmit(values: FormValues) {
  try {
    await db.recruiter.create({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        companyName: values.companyName,
      },
    });
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

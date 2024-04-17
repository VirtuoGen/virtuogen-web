// submitForm.ts
"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { candidateSignUpFormSchema } from "@/lib/formSchemas";

type FormValues = z.infer<typeof candidateSignUpFormSchema>;

// Function to submit the form
export async function candidateSignUpFormSubmit(values: FormValues) {
  const dateString = values.dob as string;
  const date = new Date(dateString);
  const currentTimestamp = Date.now();
  date.setTime(currentTimestamp);
  const isoString = date.toISOString();
  try {
    await db.candidate.create({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        dateOfBirth: isoString,
        phone: values.phone,
      },
    });
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
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
  opening: z.number().int().positive(),
  // Additional details you might want to include (optional)
  department: z.string().trim().optional(),
  employmentType: z.string().trim().optional(), // Full-time, Part-time, Contract, etc.
  salaryRange: z.string().trim().optional(),
  additionalInfo: z.string().optional(),
});

const JobForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      jobSummary: "",
      responsibilities: "",
      qualifications: "",
      benefits: "",
      companyName: "",
      companyLogo: "",
      companyOverview: "",
      location: "",
      applicationDeadline: "",
      opening: 1,
      department: "",
      employmentType: "",
      salaryRange: "",
      additionalInfo: "",
    },
  });

  // Submit handler for form:
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-8 px-8 md:w-[80%] md:px-16 xl:w-[60%]"
      >
        <h2>Company Details</h2>
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Job Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobSummary"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Job Summary</FormLabel>
              <FormControl>
                <Textarea placeholder="Summary of the job" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="responsibilities"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Responsibilities</FormLabel>
              <FormControl>
                <Input placeholder="Responsibilities for this job" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Qualifications</FormLabel>
              <FormControl>
                <Input
                  placeholder="Qualifications required for this job"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="benefits"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Benefits & Perks</FormLabel>
              <FormControl>
                <Input placeholder="Perks of working" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Name of the Company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyLogo"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Company Logo Url</FormLabel>
              <FormControl>
                <Input placeholder="Company's Url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyOverview"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Company Overview</FormLabel>
              <FormControl>
                <Textarea placeholder="Overview of the company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Job Location</FormLabel>
              <FormControl>
                <Input placeholder="Physical or Remote" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-between space-x-6">
          <FormField
            control={form.control}
            name="applicationDeadline"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Application Deadline</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last date to apply"
                    type="date"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="opening"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Opening</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last date to apply"
                    type="number"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Department</FormLabel>
              <FormControl>
                <Input placeholder="Department" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employmentType"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Employment Type</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full-time, Part-time, Contract or Intern"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salaryRange"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Salary Range</FormLabel>
              <FormControl>
                <Input placeholder="Salary Range" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Additional Info</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Additional Info on the company"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full transition-all duration-500 hover:bg-accent-foreground hover:text-virtuo-white-origin dark:hover:bg-virtuo-orange-hover"
          variant="outline"
        >
          Done
        </Button>
      </form>
    </Form>
  );
};

export default JobForm;

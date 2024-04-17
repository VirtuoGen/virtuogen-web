"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { UserResource } from "@clerk/types";

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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Spinner } from "@/components/spinner";
import { recruiterJobFormSchema } from "@/lib/formSchemas";
import { recruiterJobSubmitForm } from "@/actions/recruiterJobSubmi";
import { useUser } from "@clerk/nextjs";

const JobForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { user } = useUser();
  // console.log(user);

  const form = useForm<z.infer<typeof recruiterJobFormSchema>>({
    resolver: zodResolver(recruiterJobFormSchema),
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
      opening: "1",
      department: "",
      employmentType: "",
      salaryRange: "",
      additionalInfo: "",
    },
  });

  // Submit handler for form:
  async function onSubmit(values: z.infer<typeof recruiterJobFormSchema>) {
    // ✅ This will be type-safe and validated.
    if (user !== null) {
      await recruiterJobSubmitForm(
        values,
        user?.emailAddresses[0].emailAddress as string,
      )
        .then(() => {
          toast({
            variant: "default",
            title: "Job submitted successfully!",
            description: "Redirecting you to Job Board...",
            action: (
              <ToastAction altText="Try again">
                <Spinner />
              </ToastAction>
            ),
          });
        })
        .then(() =>
          setTimeout(() => {
            router.push("/recruiter/jobs-posted");
          }, 2000),
        )
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Job submission failed!",
            description: `${error.message}`,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
    }
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
                <Input
                  placeholder="Job Title"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                <Textarea
                  placeholder="Summary of the job"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                <Input
                  placeholder="Responsibilities for this job"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                  className="dark:bg-virtuo-black-origin"
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
                <Input
                  placeholder="Perks of working"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                <Input
                  placeholder="Name of the Company"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                <Input
                  placeholder="Company's Url"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                <Textarea
                  placeholder="Overview of the company"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                <Input
                  placeholder="Physical or Remote"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                    className="w-full dark:bg-virtuo-black-origin"
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
                    className="w-full dark:bg-virtuo-black-origin"
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
                <Input
                  placeholder="Department"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                  className="dark:bg-virtuo-black-origin"
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
                <Input
                  placeholder="Salary Range"
                  {...field}
                  className="dark:bg-virtuo-black-origin"
                />
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
                  className="dark:bg-virtuo-black-origin"
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

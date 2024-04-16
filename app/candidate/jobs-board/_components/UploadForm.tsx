"use client";

import { useEffect, useState } from "react";

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
import { useToast } from "@/components/ui/use-toast";
import { submitForm } from "@/actions/candidateFormSubmit";
import { candidateJobFormSchema } from "@/lib/formSchemas";
import type { FileUrlProps } from "@/types/candidateForm";
import { UploadDropzone } from "./UploadButton";

const UploadForm = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [fileUrl, setFileUrl] = useState<FileUrlProps>([]);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof candidateJobFormSchema>>({
    resolver: zodResolver(candidateJobFormSchema),
    defaultValues: {
      resumeUrl: "",
      coverLetter: "",
      email: "",
      phoneNumber: "",
      alternatePhoneNumber: "",
      expectedSalary: "",
    },
  });

  useEffect(() => {
    // Update the form value for 'resumeUrl' when 'fileUrl' changes
    form.setValue("resumeUrl", fileUrl?.[0]?.url || "");
  }, [fileUrl, form]);

  // Submit handler for form:
  async function onSubmit(values: z.infer<typeof candidateJobFormSchema>) {
    submitForm(values, fileUrl);

    setIsOpen(false);

    toast({
      title: "Form Submitted",
      description: `${fileUrl?.[0]?.name} uploaded successfully`,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-2 text-start"
      >
        <FormField
          control={form.control}
          name="resumeUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Custom Resume</FormLabel>
              <FormControl>
                <UploadDropzone setFileUrl={setFileUrl} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cover Letter"
                  {...field}
                  className="min-h-[180px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jordan@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col justify-between">
          <h1>Contact Details</h1>
          <div className="flex w-full justify-between space-x-6">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[12px]">Phone Number:</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 912XXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alternatePhoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[12px]">
                    Alternate Number:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="+91 892XXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="expectedSalary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expected Salary</FormLabel>
              <FormControl>
                <Input placeholder="Name of the Company" {...field} />
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
          Confirm
        </Button>
      </form>
    </Form>
  );
};

export default UploadForm;

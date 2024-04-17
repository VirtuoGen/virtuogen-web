"use client";

import { useRouter } from "next/navigation";

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
import { recruiterSignUpFormSchema } from "@/lib/formSchemas";
import { recruiterSignUpFormSubmit } from "@/actions/recruiterSignUpFormSubmit";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Spinner } from "@/components/spinner";
import { useUserType } from "@/lib/store/use-user-type";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof recruiterSignUpFormSchema>>({
    resolver: zodResolver(recruiterSignUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
    },
  });

  const router = useRouter();
  const setUserType = useUserType((state) => state.setUserType);

  // Submit handler for form:
  async function onSubmit(values: z.infer<typeof recruiterSignUpFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await recruiterSignUpFormSubmit(values)
      .then(() => {
        toast({
          variant: "default",
          title: "Signed Up successfully!",
          description: "Redirecting you to Dashboard...",
          action: (
            <ToastAction altText="Dashboard">
              <Spinner />
            </ToastAction>
          ),
        });
      })
      .then(() => {
        setTimeout(() => {
          router.push("/recruiter/dashboard");
        }, 2000);
        setUserType("Recruiter");
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Sign-up failed!",
          description: `${error.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-2 text-start"
      >
        <div className="flex w-full justify-between space-x-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Michael" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jordan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
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
          Register
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;

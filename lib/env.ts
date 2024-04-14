import zod from "zod";

const envSchema = zod.object({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: zod.string().min(1),
  CLERK_SECRET_KEY: zod.string().min(1),
  NEXT_PUBLIC_ENVIRONMENT: zod.string().min(1),
});

export const env = envSchema.parse(process.env);

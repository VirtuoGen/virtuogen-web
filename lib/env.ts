import zod from "zod";

const envSchema = zod.object({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: zod.string().nonempty(),
  CLERK_SECRET_KEY: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);

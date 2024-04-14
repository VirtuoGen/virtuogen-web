import { PrismaClient } from "@prisma/client";
import { env } from "./env";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (env.NEXT_PUBLIC_ENVIRONMENT !== "production")
  globalForPrisma.prisma = prisma;

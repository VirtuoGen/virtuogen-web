import { createUploadthing, type FileRouter } from "uploadthing/next";

import { auth, currentUser } from "@clerk/nextjs";

const f = createUploadthing();

const middleware = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!user || !userId) throw new Error("Unauthorized");

  return { userId: user.id };
};

const onUploadComplete = async ({
  metadata,
  file,
}: {
  metadata: Awaited<ReturnType<typeof middleware>>;
  file: {
    key: string;
    name: string;
    url: string;
  };
}) => {
  return file.url;
};

export const dataUrl = async () => {
  return ourFileRouter;
};

export const ourFileRouter = {
  freePlanUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

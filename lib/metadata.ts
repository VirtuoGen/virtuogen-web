import { Metadata } from "next";

export function constructMetaData({
  title = "VirtuoG",
  description = "Your AI interview platform to ease your hiring process.",
  image = "/thumbnail.png", // put a thumbnail.png in public folder, resolution 1200x630
  authors = { name: "VirtuoGen team", url: "https://virtuogen.in/" },
  creator = "VirtuoGen team̉",
  generator = "Next.js",
  publisher = "Defcon",
  icons = "/favicon.ico",
  robots = "index, follow",
}: {
  title?: string;
  description?: string;
  image?: string;
  authors?: { name: string; url: string };
  creator?: string;
  generator?: string;
  publisher?: string;
  icons?: string;
  robots?: string;
} = {}): Metadata {
  return {
    title,
    description,
    authors,
    creator,
    generator,
    publisher,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [image],
    //   creator: "@",
    // },
    icons,
    metadataBase: new URL("https://virtuogen.in/"),
    robots,
  };
}

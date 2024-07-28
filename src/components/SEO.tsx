import { Metadata } from "next";
import config from "../../config/website";

export interface ISEOProps {
  title?: string;
  description?: string;
  imageRef?: string;
  tags?: string;
}

const SEO = ({
  title = "Killing Twins",
  description,
  imageRef = "/logo.svg",
  tags,
}: ISEOProps): Metadata => {
  const baseKeyWords = "killingtwins, killingtwinsband, band, metal, music";
  const baseURL = "https://killingtwinsband.com";

  return {
    title: title || "Killing Twins",
    description:
      description ||
      "Experience the raw energy of Killing Twins, a death thrash metal band from Metro Vancouver.",
    keywords: tags ? `${tags}, ${baseKeyWords}` : baseKeyWords,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
    openGraph: {
      url: config.siteUrl,
      type: "website",
      title: title,
      description: description,
      images: [imageRef],
    },
    twitter: {
      card: "summary_large_image",
      creator: config.userTwitter || "",
      title: title,
      description: description,
      images: [imageRef],
    },
    appLinks: {
      web: {
        url: `${baseURL}`,
        should_fallback: true,
      },
    },
    appleWebApp: {
      title: title,
      capable: false,
    },
  };
};

export default SEO;

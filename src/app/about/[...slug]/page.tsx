import { PageProps } from "@dev/utils/types";
import { FileIcon, defaultContent, infoData, skillsData } from "../data";
import CommentText from "@dev/components/CommentText";
import { Metadata } from "next";

interface Content {
  content: string[];
  title: string;
}

function getContent(slug?: string): Content {
  if (!slug) {
    return {
      content: defaultContent,
      title: "About",
    };
  }

  const list = [
    infoData.map((item) => item.children).flat(),
    skillsData.map((item) => item.children).flat(),
  ].flat() as FileIcon[];

  const item = list.find((item) => (item.path || item.name) === slug);

  if (!item || !item.content.length) {
    return {
      content: defaultContent,
      title: "About",
    };
  }

  return {
    content: item.content,
    title: item.title || item.name,
  };
}

export function generateMetadata({
  params,
}: PageProps<{ slug: string[] }>): Metadata {
  const slug = params.slug.at(-1);
  const { content, title } = getContent(slug);
  return {
    title,
    description: content.join(" "),
    openGraph: {
      title,
      description: content.join(" "),
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@Imran_S_haikh",
      site: "@Imran_S_haikh",
      title,
      description: content.join(" "),
    },
  };
}

function Page({ params }: PageProps<{ slug: string[] }>) {
  const slug = params.slug.at(-1);
  const { content } = getContent(slug);
  return (
    <div className="">
      <CommentText
        className="text-gray-light text-lg leading-7"
        withNumber
        text={content}
      />
    </div>
  );
}

export default Page;

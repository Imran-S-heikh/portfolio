import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import reactSpecialist from "./react-specialist/preview";

function BlogPreviewCard({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
}) {
  return (
    <div className="rounded overflow-clip border border-danube-dark bg-blue-dark border-gray-base">
      <Link href={url} className="block h-full">
        {image && (
          <div className="relative w-full h-48">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
        <div className={`p-4 pt-4`}>
          <h3 className="font-semibold text-base line-clamp-2 mb-1">{title}</h3>

          <p className="text-sm mt-3 text-gray-light line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

function BlogPage() {
  const posts = [reactSpecialist];
  return (
    <main className="flex-1">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
        {posts.map((post, index) => (
          <BlogPreviewCard key={index} {...post} />
        ))}
      </div>
    </main>
  );
}

export default BlogPage;

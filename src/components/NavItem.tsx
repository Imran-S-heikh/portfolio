"use client";

import classUtil from "@dev/utils/class-util";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

interface NavitemProps {
  title: string;
  path: string;
  className?: string;
}

function Navitem({ title, path, className }: NavitemProps) {
  const pathname = useSelectedLayoutSegment();
  const match = (pathname || '/') === path;

  return (
    <Link href={`/${path}`} className="block h-full">
      <li
        className={classUtil(
          className,
          match
            ? "text-white-base lg:border-b-2 lg:border-b-orange-light"
            : "active:opacity-75 text-gray-light lg:border-b-0",
          "hover:text-white-base cursor-pointer border-gray-base border-b lg:border-r transition duration-300 lg:px-10 px-4 lg:h-full h-14 flex items-center"
        )}
      >
        {title}
      </li>
    </Link>
  );
}

export default Navitem;

"use client";

import { IconsId } from "@dev/assets/font-icons/icons";
import Icon from "@dev/components/Icon";
import classUtil from "@dev/utils/class-util";
import Link from "next/link";
import {
  useParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

function LinkItem({
  path,
  name,
  icon,
}: {
  path: string;
  name: string;
  icon: IconsId;
}) {
  const { slug } = useParams();
  const active = (slug || []).includes(path);

  return (
    <Link href={`/about/${path}`}>
      <div
        className={classUtil(
          "ml-6 my-1 flex items-center gap-2",
          active && "text-white-base"
        )}
      >
        <Icon className="w-4 object-fit" icon={icon} />
        <h1 className="text-white-muted text-md">{name}</h1>
      </div>
    </Link>
  );
}

export default LinkItem;

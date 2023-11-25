"use client";

import { IconsId } from "@dev/assets/font-icons/icons";
import Hide from "@dev/components/Hide";
import Icon from "@dev/components/Icon";
import classUtil from "@dev/utils/class-util";
import Image, { StaticImageData } from "next/image";
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
  image,
}: {
  path: string;
  name: string;
  icon?: IconsId;
  image?: StaticImageData;
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
        <Hide
          open={!!image}
          fallback={<Icon className="w-4 object-fit" icon={icon!} />}
        >
          <Image
            width={10}
            height={10}
            className="w-4 object-fit"
            src={image!}
            alt={name}
          />
        </Hide>
        <h1 className="text-white-muted text-md">{name}</h1>
      </div>
    </Link>
  );
}

export default LinkItem;

import classUtil from "@dev/utils/class-util";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function LinkItemImage({
  image,
  path,
  name,
}: {
  image: StaticImageData;
  path: string;
  name: string;
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
        <Image
          width={10}
          height={10}
          className="w-4 object-fit"
          src={image}
          alt={name}
        />
        <h1 className="text-white-muted text-md">{name}</h1>
      </div>
    </Link>
  );
}

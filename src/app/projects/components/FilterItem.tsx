import Checkbox from "@dev/components/Checkbox";
import Link from "next/link";


function FilterItem({
  name,
  type,
  slug,
  params,
}: {
  name: string;
  slug: string;
  type: "language" | "topic";
  params: { language: string[]; topic: string[] };
}) {

  const filters = params[type];
  const active = filters.includes(slug);
 
  const current = active
    ? filters.filter((item) => item !== slug)
    : [...filters, slug];

  return (
    <Link
      href={{
        pathname: "/projects",
        query: { ...params, [type]: current },
      }}
    >
      <div className="flex items-center space-x-4">
        <Checkbox checked={active} />
        <p> {name} </p>
      </div>
    </Link>
  );
}

export default FilterItem;

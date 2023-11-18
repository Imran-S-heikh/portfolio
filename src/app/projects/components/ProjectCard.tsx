import Button from "@dev/components/Buttons";
import { Repository } from "@dev/utils/types";
import Link from "next/link";

function ProjectCard({ project }: { project: Repository }) {
  return (
    <div className="border bg-blue-dark border-gray-base flex flex-col p-4 rounded shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-iris-base font-semibold">{project.name}</p>
        <div className="flex gap-1">
          <p className="text-sm text-gray-deep font-semibold">
            {project.defaultBranchRef.target.history.totalCount} commits
          </p>
          <p
            style={{ backgroundColor: `${project.primaryLanguage.color}30` }}
            className="bg-orange-base/30 text-sm w-max rounded px-1 text-white-light/60 font-semibold "
          >
            {project.primaryLanguage.name}
          </p>
        </div>
      </div>
      <div className="bg-black-base p-3 mt-3 text-sm rounded">
        {"/**"} <br />
        {"*"} hello <br />
        {"*"} world <br />
        {"*/"}
      </div>
      <div className="flex flex-wrap gap-1 mt-2 justify-center">
        {/* {project.languages.nodes.map((item) => (
          <p
            key={item.id}
            style={{ backgroundColor: `${item.color}30` }}
            className="bg-orange-base/30 text-sm w-max rounded px-1 text-white-light/60 font-semibold "
          >
            {item.name}
          </p>
        ))} */}
      </div>
      <p className="mt-4 flex-1">
        {project?.description || "No description provided."}
      </p>
      <div className="mt-3 grid grid-flow-col gap-3">
        <Link href={project.homepageUrl || "#"} className="block w-full">
          <Button.Default className="w-full" label="view-project" />
        </Link>
        <Link href={project.url} className="block w-full">
          <Button.Default className="w-full" label="check-in-github" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

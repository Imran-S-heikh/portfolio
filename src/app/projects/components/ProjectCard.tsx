import Button from "@dev/components/Buttons";
import { Repository } from "@dev/utils/types";
import Link from "next/link";

function ProjectCard({ project }: { project: Repository }) {
  return (
    <div className="border @container bg-blue-dark border-gray-base flex flex-col p-4 rounded shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-iris-base font-semibold">{project.name}</p>
        <div className="flex gap-1">
          <p className="text-sm text-gray-deep font-semibold @[0px]:hidden @[280px]:block">
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
      <div className="">
        <img
          src={project.openGraphImageUrl}
          alt={project.name}
          className="w-full h-48 object-cover rounded-lg mt-2"
        />
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
      <div className="mt-3 gap-3 flex flex-wrap ">
        <Link
          href={project.homepageUrl || "#"}
          target="_blank"
          className="block flex-1 min-w-max"
        >
          <Button.Default className="w-full" label="view-project" />
        </Link>
        <Link href={project.url} target="_blank" className="block flex-1 min-w-max">
          <Button.Default className="w-full" label="check-in-github" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

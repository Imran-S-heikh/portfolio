import Accordion, {
  AccordionBody,
  AccordionHeader,
} from "@dev/components/Accordion";
import Button from "@dev/components/Buttons";
import { catagories } from "./data";
import Checkbox from "@dev/components/Checkbox";
import Icon from "@dev/components/Icon";
import ProjectCard from "./components/ProjectCard";
import { getGithubProjects } from "@dev/utils/projects";

async function getData() {
  const projects = await getGithubProjects();
  return projects;
}

async function Projects() {
  const projects = await getData();
  return (
    <main className="flex-1 h-full">
      <div className="flex-1 flex text-gray-light md:flex-row flex-col h-full">
        <div className="w-full md:w-80 border-gray-base border-r md:pb-0 pb-6">
          <Accordion defaultOpen>
            <AccordionHeader
              label="projects"
              className="h-10 border-b pl-5 border-gray-base"
              icon="arrow-right"
            />
            <AccordionBody className="pl-5 grid gap-5 mt-5">
              {catagories.map((item) => (
                <div key={item.name} className="flex items-center space-x-4">
                  <Checkbox />
                  <p> {item.name} </p>
                </div>
              ))}
            </AccordionBody>
          </Accordion>
        </div>

        <div className="flex-1">
          <div className="border-gray-base ">
            <div className="md:border-b h-10 border-gray-base md:block hidden ">
              <div className=" border-r w-max px-3  flex items-center h-full border-gray-base ">
                <p className="mr-10">React; Vue</p>
                <Icon icon="close" />
              </div>
            </div>

            <div
              className="md:w-5/6 w-full px-4 md:mx-auto md:py-14 grid 2xl:grid-cols-3 gap-8 overflow-y-auto grid-cols-1 lg:grid-cols-2"
              style={{ maxHeight: "calc( 100vh - 230px )" }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;

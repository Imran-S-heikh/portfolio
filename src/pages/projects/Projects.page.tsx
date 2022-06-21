import Accordion from "../../components/accordion/Accordion.component";
import Button from "../../molecules/Buttons.mole";
import Checkbox from "../../molecules/Checkbox.mole";
import Icon from "../../molecules/Icon.mole";
import Tooltip from "../../molecules/Tooltip.mole";
import { catagories } from "./projects.data";

function ProjectCard() {
    return (
        <div className="border bg-blue-dark border-gray-base p-4 rounded shadow-lg" >
            <div className="flex items-center justify-between">
                <p className="text-iris-base font-semibold">Project 1</p>
                <p className="text-sm text-gray-deep font-semibold">134 commits</p>
            </div>
            <div className="bg-black-base p-3 mt-3 text-sm rounded">
                /** <br />
                * hello <br />
                * world <br />
                */
            </div>
            <div className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus.
            </div>
            <div className="mt-3 space-x-2">
                <Button.Default className="" label="view-project" />
                <Button.Default className="" label="check-in-github" />
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="flex-1 flex text-gray-light">

            <div className="w-80 border-gray-base border-r">

                <Accordion defaultOpen>
                    <Accordion.Header label="projects" className="h-10 border-b pl-5 border-gray-base" icon="arrow-right" />
                    <Accordion.Body className="pl-5 grid gap-5 mt-5">
                        {catagories.map(item => (
                            <div key={item.name} className="flex items-center space-x-4">
                                <Checkbox />
                                <p> {item.name} </p>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion>

            </div>

            <div className="flex-1">
                <div className="border-gray-base border-b h-10">

                    <div className="flex items-center border-gray-base border-r w-max h-full px-3">
                        <p className="mr-10">React; Vue</p>
                        <Icon icon="close" />
                    </div>

                    <div className="w-5/6 mx-auto py-14 grid grid-cols-3 gap-8 overflow-y-auto " style={{maxHeight: "calc( 100vh - 230px )"}}>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
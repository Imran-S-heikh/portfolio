import clsx from "clsx"
import { Link, Route, Routes, useMatch, useNavigate } from "react-router-dom"
import Accordion from "../../components/accordion/Accordion.component"
import Icon from "../../molecules/Icon.mole"
import { aboutNavData, File, infoData, NavItemProps, skillsData } from "../../pages/about/about.data"
import { useEffect } from "react"
import Tooltip from "../../molecules/Tooltip.mole"
import CurriculumVitae from "../../components/curriculum-vitae/CurriculumVitae.component"

function TerminalSection() {
    return (
        <div className="">
            <h1>Terminal Section</h1>
        </div>
    )
}

function GamesSection() {
    return (
        <div className="">
            <h1>Games Section</h1>
        </div>
    )
}

function PersonalInfo() {
    return (
        <div className="w-full lg:w-60 border-gray-base lg:border-r flex h-full" >
            <div className="text-gray-light flex-1 overflow-y-auto" style={{ maxHeight: "calc( 100vh - 190px)" }}>
                <div className="">
                    <div className="">
                        <Accordion defaultOpen>
                            <Accordion.Header
                                label="persoanl-info"
                                // icon="arrow-right"
                                className="h-10 border-b border-gray-base"
                            />
                            <Accordion.Body className="my-3">
                                {infoData.map((item, i) => (
                                    <Accordion key={i} defaultOpen={item.open}>
                                        <Accordion.Header
                                            folder
                                            label={item.name}
                                            folderClass={item.color}
                                        />
                                        <Accordion.Body >
                                            {item.children.map((citem, index) => (
                                                <div key={`${i}-${index}`} className="ml-6 my-1 flex items-center gap-2">
                                                    <Icon className="w-4 object-fit" icon={citem.icon} />
                                                    <h1 className="text-white-muted text-md">{citem.name.split(' ')[0]}</h1>
                                                </div>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion>
                                ))}
                            </Accordion.Body>
                        </Accordion>

                        <Accordion defaultOpen>
                            <Accordion.Header
                                label="skills"
                                icon="arrow-right"
                                className="h-10 border-y border-gray-base -mt-px"
                            />
                            <Accordion.Body className="my-3">


                                {skillsData.map((item, i) => (
                                    <Accordion key={i} defaultOpen={item.open}>
                                        <Accordion.Header
                                            folder
                                            label={item.name}
                                            folderClass={item.color}
                                        />
                                        <Accordion.Body>
                                            {item.children.map((citem, index) => (
                                                <div key={`${i}-${index}`} className="ml-6 my-1 flex items-center gap-2">
                                                    <img className="w-4 object-fit" src={(citem as File).image} alt={citem.name} />
                                                    <h1 className="text-white-muted text-md">{citem.name.split(' ')[0]}</h1>
                                                </div>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion>
                                ))}
                            </Accordion.Body>
                        </Accordion>

                        <Accordion defaultOpen>
                            <Accordion.Header
                                label="contacts "
                                icon="arrow-right"
                                className="h-10 border-y border-gray-base -mt-px"
                            />
                            <Accordion.Body className="my-3">

                                <div className="ml-6 my-1 flex items-center gap-2">
                                    <Icon className="w-4 object-fit" icon="mail" />
                                    <h1 className="text-white-muted text-md">
                                        <a href="mailto:imran.shaikh.contact@gmail.com">contac@gmail.com</a>
                                    </h1>
                                </div>

                                <div className="ml-6 my-1 flex items-center gap-2">
                                    <Icon className="w-4 object-fit" icon="phone" />
                                    <h1 className="text-white-muted text-md">+8801824182**</h1>
                                </div>

                            </Accordion.Body>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

function NavItem({ path, icon, label }: NavItemProps) {

    const match = useMatch(`/about/${path}`);


    return (
        <Tooltip label={label}>
            <Link to={path} className="block py-5 active:opacity-50">
                <Icon icon={icon} className={clsx("text-2xl text-gray-deep hover:text-gray-light cursor-pointer", match && "!text-gray-light")} />
            </Link>
        </Tooltip>
    )
}

function About() {

    const match = useMatch('/about/');
    const isRoot = Boolean(match);
    const navigate = useNavigate();

    useEffect(() => {
        if (isRoot) {
            navigate("info");
        }
    }, [isRoot, navigate])

    return (
        <div className="flex-1 flex">

            <div className="w-20 border-r border-gray-base text-center hidden lg:block" >
                {aboutNavData.map(item => (
                    <NavItem
                        path={item.path}
                        icon={item.icon}
                        label={item.label}
                        key={item.path}
                    />
                ))}
            </div>

            <div className="flex-1">
                <Routes>
                    <Route path="/info" element={<PersonalInfo />} />
                    <Route path="/terminal" element={<TerminalSection />} />
                    <Route path="/games" element={<GamesSection />} />
                    <Route path="/cv" element={<CurriculumVitae />} />
                </Routes>
            </div>
        </div>
    )
}

export default About
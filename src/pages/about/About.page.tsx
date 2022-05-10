import clsx from "clsx"
import { Link, Route, Routes, useMatch } from "react-router-dom"
import Accordion from "../../components/accordion/Accordion.component"
import CommentText from "../../molecules/CommentText.mole"
import Hide from "../../molecules/Hide.mole"
import Icon from "../../molecules/Icon.mole"
import { aboutNavData, File, NavItemProps } from "../../pages/about/about.data"
import { data } from "./about.data"
import docker from "../../assets/icons/docker.png";
import firebase from "../../assets/icons/firebase.png";
import bash from "../../assets/icons/gnu-bash.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/js.png";

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
        <div className="">
            <div className="">
                <Accordion>
                    <Accordion.Header
                        label="persoanl-info"
                        icon="arrow-right"
                        className="h-10 border-b border-gray-base"
                    />
                    <Accordion.Body className="my-3">
                        <Accordion >
                            <Accordion.Header
                                folder
                                label="bio"
                                className=""
                                folderClass="text-orange-base"
                            />
                            <Accordion.Body>
                                <div className="ml-6 my-1 flex items-center gap-2">
                                    <img className="w-4 object-fit" src={docker} alt="docker" />
                                    <h1 className="text-white-muted text-md">Docker</h1>
                                </div>
                                {data[0].children.map((item, i) => (
                                    <div key={`${i}-${i}`} className="ml-6 my-1 flex items-center gap-2">
                                        <img className="w-4 object-fit" src={(item as File).image} alt={item.name} />
                                        <h1 className="text-white-muted text-md">{item.name.split(' ')[0]}</h1>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion>
                        <Accordion className="mt-2">
                            <Accordion.Header
                                folder
                                label="interests"
                                className=""
                                folderClass="text-green-base"
                            />
                            <Accordion.Body>
                                <div className="ml-6 my-1 flex items-center gap-2">
                                    <img className="w-4 object-fit" src={docker} alt="docker" />
                                    <h1 className="text-white-muted text-md">Docker</h1>
                                </div>
                                {data[0].children.map((item, i) => (
                                    <div key={`${i}-${i}`} className="ml-6 my-1 flex items-center gap-2">
                                        <img className="w-4 object-fit" src={(item as File).image} alt={item.name} />
                                        <h1 className="text-white-muted text-md">{item.name.split(' ')[0]}</h1>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion>
                        <Accordion className="mt-2">
                            <Accordion.Header
                                folder
                                label="education"
                                className=""
                                folderClass="text-iris-base"
                            />
                            <Accordion.Body>
                                <div className="ml-6 my-1 flex items-center gap-2">
                                    <img className="w-4 object-fit" src={docker} alt="docker" />
                                    <h1 className="text-white-muted text-md">Docker</h1>
                                </div>
                                {data[0].children.map((item, i) => (
                                    <div key={`${i}-${i}`} className="ml-6 my-1 flex items-center gap-2">
                                        <img className="w-4 object-fit" src={(item as File).image} alt={item.name} />
                                        <h1 className="text-white-muted text-md">{item.name.split(' ')[0]}</h1>
                                    </div>
                                ))}
                            </Accordion.Body>
                        </Accordion>
                    </Accordion.Body>
                </Accordion>


                <Accordion>
                    <Accordion.Header
                        label="skills"
                        icon="arrow-right"
                        className="h-10 border-y border-gray-base -mt-px"
                    />
                    <Accordion.Body>
                        <h1>Hello</h1>
                    </Accordion.Body>
                </Accordion>
            </div>
        </div>
    )
}

function NavItem({ path, icon }: NavItemProps) {

    const match = useMatch(`/about/${path}`);

    console.log({ match })

    return (
        <Link to={path} className="block py-5 active:opacity-50">
            <Icon icon={icon} className={clsx("text-2xl text-gray-deep hover:text-gray-light cursor-pointer", match && "!text-gray-light")} />
        </Link>
    )
}

function AboutNav() {
    return (
        <div className="w-20 border-r border-gray-base text-center" >
            <Link to="terminal" className="block py-5 active:opacity-50">
                <Icon icon="terminal" className="text-2xl text-gray-deep hover:text-gray-light cursor-pointer" />
            </Link>

            <Link to="personal" className="block py-5 active:opacity-50">
                <Icon icon="info" className="text-2xl text-gray-deep hover:text-gray-light cursor-pointer" />
            </Link>

            <Link to="games" className="block py-5 active:opacity-50">
                <Icon icon="game" className="text-2xl text-gray-deep hover:text-gray-light cursor-pointer" />
            </Link>

        </div>
    )
}

function About() {
    return (
        <div className="flex-1 flex">

            <div className="w-80 border-gray-base border-r flex">

                <div className="w-20 border-r border-gray-base text-center" >
                    {aboutNavData.map(item => (
                        <NavItem
                            path={item.path}
                            icon={item.icon}
                            key={item.path}
                        />
                    ))}
                </div>

                <div className="text-gray-light flex-1">
                    <Routes>
                        <Route path="/info" element={<PersonalInfo />} />
                        <Route path="/terminal" element={<TerminalSection />} />
                        <Route path="/games" element={<GamesSection />} />
                    </Routes>
                </div>
            </div>
            {/* <div className="flex-1 flex items-center justify-center">
                <CommentText
                    className="text-white-muted text-xl font-semibold"
                    text={[
                        "About me",
                        "I have 3 years of exprience in web",
                        "development lorem this sit init let",
                        "go happen the is not a good meaning word,",
                        "so if there is nothing to do then do nothing.",
                        "If you feel bad this was not my intension. ",
                        "",
                        "So, tif tiem is nowthing when its wasted,",
                        "but it can be a huge thing when there is dead",
                        "line and you have warning. Man that sucks."
                    ]}
                />
            </div> */}
            {/* <div className="w-[30rem] ml-[-1px] bg-black-dark border-l border-gray-base">
                <h3 className="text-white-muted font-medium py-2 pl-5">EXPLORER</h3>

                <div className="ml-2 ">
                    {data.map((item, i) => (
                        <Hide
                            key={i}
                            open={item.type === "folder"}
                        >
                            <Accordion  defaultOpen={item.open} label={item.name} >
                                {item.children.map((citem,i) => (
                                    <div key={`${i}-${i}`} className="ml-6 my-1 flex items-center gap-2">
                                        <img className="w-4 object-fit" src={(citem as File).image} alt={item.name} /> 
                                        <h1 className="text-white-muted text-md">{citem.name}</h1>
                                    </div>
                                ))}
                            </Accordion>
                        </Hide>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default About
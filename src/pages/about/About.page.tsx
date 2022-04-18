import Accordion from "../../components/accordion/Accordion.component"
import Navigation from "../../components/navigation/Navigation.component"
import CommentText from "../../molecules/CommentText.mole"
import Hide from "../../molecules/Hide.mole"
import { File } from "../../pages/about/about.data"
import { data } from "./about.data"

function About() {
    return (
        <div className="flex-1 flex">
            <div className="flex flex-col flex-1">
                <Navigation className="mt-6" />
                <div className="flex-1 flex items-center justify-center">
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
                </div>
            </div>
            <div className="w-[30rem] ml-[-1px] bg-black-dark border border-gray-base mt-6 border-b-0">
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
                                        <img className="w-4 object-fit" src={(citem as File).image} /> 
                                        <h1 className="text-white-muted text-md">{citem.name}</h1>
                                    </div>
                                ))}
                            </Accordion>
                        </Hide>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
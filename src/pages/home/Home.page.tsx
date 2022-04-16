import Tarminal from "../../components/terminal/Tarminal.component"
import Icon from "../../molecules/Icon.mole"
import ProjectCard from "../../components/project-card/ProjectCard.component"

function Home() {
    return (

        <div className="grid gap-[100px] grid-cols-2 min-h-[50vh]">
            <div className="flex flex-col justify-around">
                <div className="">
                    <h3 className="text-white-base mb-2">Hello! I am</h3>
                    <h1 className="text-5xl text-white-base">Imran Shaikh</h1>
                    <h2 className="text-danube-base text-2xl mt-2">Junior full-stack developer</h2>
                </div>
                <div className="">
                    <h4 className="text-white-base font-semibold">{'//'} write the code below to continue:</h4>
                    <div className="flex mt-5 items-center">
                        <Icon icon="chevron-right" className="text-perfume text-2xl" />
                        <Tarminal />
                    </div>
                </div>
            </div>

            <div className="relative h-max mt-[8rem]">
                <ProjectCard
                    name="Project 3"
                    commits={342}
                    link="http://github.com/Imran-s-heikh"
                    overviews={[
                        'Integrated 4 different APIS',
                        'Over 200 different components',
                        'React, Mobx, Firebase',
                        'Full storybook setup'
                    ]}
                    className="bottom-[6rem] scale-75 absolute"
                />
                <ProjectCard
                    name="Project 2"
                    commits={342}
                    link="http://github.com/Imran-s-heikh"
                    overviews={[
                        'Integrated 4 different APIS',
                        'Over 200 different components',
                        'React, Mobx, Firebase',
                        'Full storybook setup'
                    ]}
                    className="bottom-[3rem] scale-90 absolute"
                />
                <ProjectCard
                    className="drop-shadow-card"
                    name="Project 1"
                    commits={342}
                    link="http://github.com/Imran-s-heikh"
                    overviews={[
                        'Integrated 4 different APIS',
                        'Over 200 different components',
                        'React, Mobx, Firebase',
                        'Full storybook setup'
                    ]}
                />
            </div>
        </div>

    )
}

export default Home
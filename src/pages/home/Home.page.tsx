import clsx from "clsx";
import { IconsId } from "../../assets/font-icons/icons";
import Icon from "../../molecules/Icon.mole"
import { ReactComponent as SnakeFood } from '../../assets/svg/snake-food.svg';
import './home.style.scss';
import Button from "../../molecules/Buttons.mole";

function CloseBtn({ className }: { className?: string }) {

    return (
        <button className={clsx("close-btn rounded-full", className)}>
            <Icon className="text-black-base opacity-50" icon="close" />
        </button>
    )
}

function ControlBtn({ icon, className }: { icon: IconsId, className?: string }) {
    return (
        <button className={clsx("bg-black-base rounded-lg", className)}>
            <Icon className="text-white-light text-3xl" icon={icon} />
        </button>
    )
}

function Home() {
    return (
        <div className="flex flex-col flex-1">
            <div className="justify-center items-center flex-1 flex my-10">

                <div className="grid gap-[100px] grid-cols-2 min-h-[50vh]">
                    <div className="flex flex-col justify-around">
                        <div className="">
                            <h3 className="text-white-base mb-2">Hello! I am</h3>
                            <h1 className="text-6xl text-white-base">Imran Shaikh</h1>
                            <div className="flex mt-5 items-center">
                                <Icon icon="chevron-right" className="text-iris-base text-3xl" />
                                <p className="text-iris-base text-3xl font-medium">Junior Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-gray-light font-medium">{'//'} complete the game to continue</p>
                            <p className="text-gray-light font-medium">{'//'} you can also see it on my Github page</p>

                            <div className="flex text gap-3 items-center mt-2 font-medium">
                                <span className="text-iris-base">const</span>
                                <a className="text-green-light" href="https://github/Imran-S-heikh">
                                    githubLink
                                </a>
                                <span className="text-white-base">=</span>
                                <a className="text-orange-base" href="https://github/Imran-S-heikh">
                                    "https://github/Imran-S-heikh"
                                    <span className="text-iris-base">;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-green-light opacity-40 blur-[174px] rotate-[13.51deg] -z-0"></div>
                        <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-iris-base opacity-40 blur-[174px] rotate-[13.51deg]  -z-0"></div>

                        <div className="w-[510px] h-[475px] game-container relative z-10 p-8 grid grid-cols-7 gap-6" >
                            <CloseBtn className="absolute top-2 left-2" />
                            <CloseBtn className="absolute bottom-2 left-2" />
                            <CloseBtn className="absolute top-2 right-2" />
                            <CloseBtn className="absolute bottom-2 right-2" />

                            <div className="bg-blue-base/80 col-span-4 rounded-lg shadow-inset-sm relative">
                                <Button.Primary label="start-game" className="absolute bottom-10 left-1/2 transform -translate-x-1/2" />
                            </div>

                            <div className="flex flex-col col-span-3">
                                <div className="flex-1">
                                    <div className="bg-blue-base/30 p-3 rounded-lg">
                                        <p className="text-white-base text-sm">{'//'} use keyboard</p>
                                        <p className="text-white-base text-sm">{'//'} arrows to play</p>

                                        <div className="grid grid-cols-3 gap-2 mt-4">
                                            <ControlBtn icon="arrow-up" className="col-start-2" />
                                            <ControlBtn icon="arrow-left" className="col-start-1" />
                                            <ControlBtn icon="arrow-down" />
                                            <ControlBtn icon="arrow-right" />
                                        </div>
                                    </div>

                                    <div className="mt-5 ml-3">
                                        <p className="text-white-base text-sm">{'//'} food left</p>
                                        <div className="grid grid-cols-5 gap-1 w-max mt-2">
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood />
                                            <SnakeFood className="opacity-50" />
                                            <SnakeFood className="opacity-50" />
                                            <SnakeFood className="opacity-50" />
                                        </div>
                                    </div>

                                </div>

                                <div className="text-right">
                                    <Button.Ghost label="skip" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
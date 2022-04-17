import Navigation from "../../components/navigation/Navigation.component"
import Icon from "../../molecules/Icon.mole"

type Props = {}

function About({ }: Props) {
    return (
        <div className="flex-1 flex">
            <div className="flex flex-col flex-1">
                <Navigation className="mt-6" />
                <div className="flex-1">
                    hello
                </div>
            </div>
            <div className="w-[30rem] ml-[-1px] bg-black-dark border border-gray-base mt-6 border-b-0">
                <h3 className="text-white-muted font-medium py-2 pl-5">EXPLORER</h3>

                <div className="ml-2 ">
                    {['Front-End','Back-End'].map(i => (
                        <div key={i} className="flex items-center mt-2 cursor-pointer group active:opacity-50">
                            <Icon icon="chevron-right-ii" className="text-white-muted text-2xl" />
                            <Icon icon="folder" className="text-yellow-base text-lg" />
                            <p className="text-white-muted ml-2 font-medium group-hover:text-yellow-base select-none">{i}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
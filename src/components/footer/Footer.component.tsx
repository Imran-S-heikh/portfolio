import { IconsId } from "../../assets/font-icons/icons"
import Icon from "../../molecules/Icon.mole"



interface SocialLinkProps {
    icon: IconsId,
    link: string
}

function SocialLink({icon,link}: SocialLinkProps) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="border-r border-gray-base flex items-center px-4 group">
            <Icon className="text-lg text-[#273849] group-hover:text-gray-light transition duration-100" icon={icon} />
        </a>
    )
}


function Footer() {
    return (
        <footer className="border-gray-base border-t flex justify-between items-center">
            <div className="flex w-80">
                <p className="border-r border-gray-base text-gray-light font-medium py-3 pr-2 flex-1 pl-5">find me in:</p>
               <SocialLink icon="github" link="https://github.com/Imran-S-heikh" /> 
               <SocialLink icon="linkedin" link="https://www.linkedin.com/in/imran-shaikh-7b567b1b7/" /> 
               <SocialLink icon="twitter" link="https://twitter.com/Imran_S_haikh" /> 
            </div>

            <a href="https://github.com/Imran-S-heikh" target="_blank" rel="noreferrer" className="flex items-center border-l border-gray-base h-full px-6">
                <span className="text-gray-light font-medium mr-2">@imran-s-heikh</span>
                <Icon icon="github" className="text-gray-light text-lg" /> 
            </a>
        </footer>
    )
}

export default Footer
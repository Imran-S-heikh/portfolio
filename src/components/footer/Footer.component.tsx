import { IconsId } from "../../assets/font-icons/icons"
import Icon from "../../molecules/Icon.mole"



interface SocialLinkProps {
    icon: IconsId,
    link: string
}

function SocialLink({icon,link}: SocialLinkProps) {
    return (
        <a href={link} className="border-r border-gray-base flex items-center px-3">
            <Icon className="text-xl text-white-muted hover:text-yellow-base transition duration-300" icon={icon} />
        </a>
    )
}


function Footer() {
    return (
        <footer className="border-gray-base border-t flex justify-between px-4 items-center">
            <div className="flex">
                <p className="border-r border-gray-base text-white-muted font-medium py-3 pr-2">find me in:</p>
               <SocialLink icon="github" link="https://github.com/Imran-S-heikh" /> 
               <SocialLink icon="linkedin" link="https://www.linkedin.com/in/imran-shaikh-7b567b1b7/" /> 
               <SocialLink icon="twitter" link="https://twitter.com/Imran_S_haikh" /> 
            </div>

            <p className="text-white-muted font-medium">15:56 24/11/2021</p>
        </footer>
    )
}

export default Footer